import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Equipe} from "../../models/Equipe";

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {

  @Input() equipe:Equipe=new Equipe();
  @Output() notif= new EventEmitter<Equipe>();

  constructor() { }

  ngOnInit(): void {
  }
  sendDataToParent(f:Equipe){
    this.notif.emit(f);
  }

}
