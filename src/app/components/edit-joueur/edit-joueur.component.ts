import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Joueur} from "../../models/Joueur";
import {Equipe} from "../../models/Equipe";

@Component({
  selector: 'app-edit-joueur',
  templateUrl: './edit-joueur.component.html',
  styleUrls: ['./edit-joueur.component.css']
})
export class EditJoueurComponent implements OnInit {
  @Input() joueur:Joueur=new Joueur();
  @Output() notif= new EventEmitter<Joueur>();
  posts=["LS","ST","RS",
    "LW","LF","CF","RF","RW",
    "LAM","CAM","RAM",
    "LM","LCM","CM","RCM","RM"]

  constructor() { }

  ngOnInit(): void {
  }
  sendDataToParent(f:Joueur){
    this.notif.emit(f);
  }

}
