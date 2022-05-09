import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Joueur} from "../../models/Joueur";
import {MembreStaff} from "../../models/MembreStaff";

@Component({
  selector: 'app-edit-membreStaff',
  templateUrl: './edit-membreStaff.component.html',
  styleUrls: ['./edit-membreStaff.component.css']
})
export class EditMembreStaffComponent implements OnInit {
  @Input() membreStaff:MembreStaff=new MembreStaff();
  @Output() notif= new EventEmitter<Joueur>();
  categories=["SELECTIONNEUR",
    "STAFF_TECHNIQUE",
    "STAFF_MEDICAL",
    "FONCTION_SUPPORT",
    "RESPONSABLE_ADMINISTRATIF",
    "MEDIAS"]

  constructor() { }

  ngOnInit(): void {
  }
  sendDataToParent(f:Joueur){
    this.notif.emit(f);
  }

}
