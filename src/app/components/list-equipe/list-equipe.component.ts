import {Component, OnInit} from '@angular/core';
import {EquipeService} from "../../services/equipe.service";
import {Equipe} from "../../models/Equipe";
import {TokenStorageService} from "../../services/token-storage.service";

@Component({
  selector: 'app-list-equipe',
  templateUrl: './list-equipe.component.html',
  styleUrls: ['./list-equipe.component.css']
})
export class ListEquipeComponent implements OnInit {

  equipes: Equipe[];
  loggedIn:boolean=false;
  showEdit:boolean=false;
  equipe:Equipe;

  constructor(private equipeService: EquipeService, private tokenStorage: TokenStorageService) {
  }

  ngOnInit(): void {
    this.equipeService.getAll().subscribe(
      (result) => {
        this.equipes = result;
      }
    )
    if(this.tokenStorage.getToken()){
      this.loggedIn=true;
    }
  }



  addEquipe(equipe:any){
    let close=document.getElementById("close");
    close?.click();
    this.equipeService.addEquipe(equipe).subscribe((resultat)=>{
        console.log(resultat);
        this.equipes.unshift(resultat.object);

        //this.equipes=resultat;
      },
      (error)=>{
        console.log(error.status)
      }
    );

  }



  delete(equipe:Equipe){
    var result=confirm("sure?");
    if(result){
      //this.invoices.splice(index);
      this.equipeService.deleteEquipek(equipe).subscribe(
        () => this.equipes = this.equipes.filter(e => e.equipeid != equipe.equipeid),
      );}
  }


  update(equipe:any){
    this.showEdit=true;
    this.equipe=equipe;

  }
  updateEquipe(equipe:any){
    let close=document.getElementById("close");
    close?.click();
    equipe.equipeid=this.equipe.equipeid;
    this.equipeService.updateEquipe(equipe).subscribe();

    this.showEdit=false;
  }


}
