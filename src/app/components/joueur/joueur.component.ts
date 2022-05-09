import { Component, OnInit } from '@angular/core';
import {Joueur} from "../../models/Joueur";
import {ActivatedRoute, Router} from "@angular/router";
import {JoueurService} from "../../services/joueur.service";
import {TokenStorageService} from "../../services/token-storage.service";

@Component({
  selector: 'app-joueur',
  templateUrl: './joueur.component.html',
  styleUrls: ['./joueur.component.css']
})
export class JoueurComponent implements OnInit {
  idJoueur:any;
  idEquipe:any;
  joueur:Joueur;
  loggedIn=false;


  constructor(private router:Router,private route:ActivatedRoute, private joueurService:JoueurService, private tokenStorage: TokenStorageService ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.idJoueur= params.get('id');
      this.idEquipe= params.get('idequipe');
    });

    this.joueurService.getOneById(this.idJoueur).subscribe(
      (result) => {
        this.joueur = result;
        console.log(this.joueur);
      }
    );
    if(this.tokenStorage.getToken()){
      this.loggedIn=true;
    }
  }

  updateJoueur(joueur:any){

    let close=document.getElementById("close");
    close?.click();
    joueur.joueurid=this.joueur.joueurid;
    this.joueurService.updateJoueur(joueur,this.idEquipe).subscribe((result)=>
    { this.joueur=result.object;
    });

  }

  delete(joueurid:any){
    var result=confirm("Do you really want to delete this player ?");
    if(result){
      this.joueurService.deleteJoueur(joueurid).subscribe();
    this.router.navigate(["equipe/"+this.idEquipe]);}
  }


}
