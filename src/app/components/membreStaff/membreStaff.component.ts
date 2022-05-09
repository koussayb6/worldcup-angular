import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TokenStorageService} from "../../services/token-storage.service";
import {MembreStaffService} from "../../services/membreStaff.service";
import {MembreStaff} from "../../models/MembreStaff";

@Component({
  selector: 'app-membreStaff',
  templateUrl: './membreStaff.component.html',
  styleUrls: ['./membreStaff.component.css']
})
export class MembreStaffComponent implements OnInit {
  idMembreStaff:any;
  idEquipe:any;
  membreStaff:MembreStaff;
  loggedIn=false;

  constructor(private router:Router,private route:ActivatedRoute, private membreStaffService:MembreStaffService, private tokenStorage: TokenStorageService ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.idMembreStaff= params.get('id');
      this.idEquipe= params.get('idequipe');
    });

    this.membreStaffService.getOneById(this.idMembreStaff).subscribe(
      (result) => {
        this.membreStaff = result;
        console.log(this.membreStaff);
      }
    );
    if(this.tokenStorage.getToken()){
      this.loggedIn=true;
    }
  }

  updateMembreStaff(membreStaff:any){

    let close=document.getElementById("close");
    close?.click();
    membreStaff.membrestaffid=this.membreStaff.membrestaffid;
    this.membreStaffService.updateMembreStaff(membreStaff,this.idEquipe).subscribe((result)=>
    { this.membreStaff=result.object;
    });

  }

  delete(membrestaffid:any){
    var result=confirm("Do you really want to delete this player ?");
    if(result){
      this.membreStaffService.deleteMembreStaff(membrestaffid).subscribe();
      this.router.navigate(["equipe/"+this.idEquipe]);}
  }


}
