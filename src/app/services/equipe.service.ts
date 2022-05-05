import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Equipe} from "../models/Equipe";

@Injectable({
  providedIn: 'root'
})
export class EquipeService {
   httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrb3Vzc2F5IiwiaWF0IjoxNjUxNTczMjM3LCJleHAiOjE2NTI4NjkyMzd9.oCEmAefi4Hn_AYZBFLbRPbSHz1CgrqlAOR6eLctsVtZhjuSWJu8F5k02oQTtolXT_eAoyD75M9Z9HEPNG2zMDQ'
    })
  };
  baseurl=environment.api_uri+'equipe/';
  constructor(private http:HttpClient) { }

  getAll():Observable<Equipe[]>{
    return this.http.get<Equipe[]>(this.baseurl, this.httpOptions);
  }

  getOneById(id:any):Observable<Equipe>{
    return this.http.get<Equipe>(this.baseurl+id);
  }
  addEquipe(equipe:any):Observable<any>{
    return this.http.post<any>(this.baseurl, equipe, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })

  }
  deleteEquipek( id:any):Observable<Equipe>{
    return this.http.delete<Equipe>(this.baseurl+id)
  }

  updateEquipe(equipe:any){
    return this.http.put(this.baseurl, equipe )
  }
}
