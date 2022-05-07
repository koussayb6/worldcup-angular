import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Equipe} from "../../models/Equipe";
import {EquipeService} from "../../services/equipe.service";
import {TokenStorageService} from "../../services/token-storage.service";
import {Joueur} from "../../models/Joueur";
import {JoueurService} from "../../services/joueur.service";


@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {
  idEquipe:any;
  equipe:Equipe;
  loggedIn:boolean=false;



  constructor(private router:ActivatedRoute, private equipeService:EquipeService,private joueurService:JoueurService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(params => {
      this.idEquipe= params.get('id');
    });

    this.equipeService.getOneById(this.idEquipe).subscribe(
      (result) => {
        this.equipe = result;
      }
    );

    if(this.tokenStorage.getToken()){
      this.loggedIn=true;
    }

  }
  addJoueur(joueur:any){
    let close=document.getElementById("close");
    close?.click();
    this.joueurService.addJoueur(joueur,this.idEquipe).subscribe((resultat)=>{
        console.log(resultat);
        this.equipe.joueurs.unshift(resultat.object);
      },
      (error)=>{
        console.log(error.status)
      }
    );

  }



}
