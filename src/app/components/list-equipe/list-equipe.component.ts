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
  index:any;

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

      },
      (error)=>{
        console.log(error.status)
      }
    );

  }



  delete(equipeId:any){
    var result=confirm("Do you really want to delete this team ?");
    if(result){
      //this.invoices.splice(index);
      this.equipeService.deleteEquipek(equipeId).subscribe(
        () => this.equipes = this.equipes.filter(e => e.equipeid != equipeId),
      );}
  }


  update(equipe:any, i:any){
    this.showEdit=true;
    this.equipe=equipe;
    this.index=i;
  }

  updateEquipe(equipe:any){
    let close=document.getElementById("close");
    close?.click();
    equipe.equipeid=this.equipe.equipeid;
    this.equipeService.updateEquipe(equipe).subscribe((result)=>
    { this.equipes[this.index]=result.object;

    });

    this.showEdit=false;
  }


}
