import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Equipe} from "../../models/Equipe";

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {

  @Input() equipe:Equipe=new Equipe();
  @Output() notif= new EventEmitter<any>();
  file!: any;
  file1!: any;
  imgUrl!:any;
  imgUrl1!:any;
  emmision: any[]=[];

  constructor() { }

  ngOnInit(): void {
   }
  onfile(event:any, filenum:any){
    if(filenum==1) {
      this.file = event.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onload = (_event) => this.imgUrl = reader.result;
    }else{
      console.log(event)
      this.file1 = event.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(this.file1);
      reader.onload = (_event) => this.imgUrl1 = reader.result;
    }
  }
  sendDataToParent(f:any){
    this.emmision.push(f.value);
    this.emmision.push(this.file);
    this.emmision.push(this.file1);
    this.notif.emit(this.emmision);

    f.resetForm()
  }

}
