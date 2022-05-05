import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Equipe} from "../../models/Equipe";
import {EquipeService} from "../../services/equipe.service";

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {
  idEquipe:any;
  equipe:Equipe;

  constructor(private router:ActivatedRoute, private equipeService:EquipeService) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(params => {
      this.idEquipe= params.get('id');
    });

    this.equipeService.getOneById(this.idEquipe).subscribe(
      (result) => {
        this.equipe = result;
      }
    );
  }

}
