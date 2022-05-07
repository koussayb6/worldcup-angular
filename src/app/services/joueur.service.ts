import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Joueur} from "../models/Joueur";

@Injectable({
  providedIn: 'root'
})
export class JoueurService {
  baseurl=environment.api_uri+'joueur/';

  constructor(private http:HttpClient) { }

  getAll():Observable<Joueur[]>{
    return this.http.get<Joueur[]>(this.baseurl);
  }

  getOneById(id:any):Observable<any>{
    return this.http.get<any>(this.baseurl+id);
  }
  addJoueur(joueur:any,equipeid:any):Observable<any>{
    return this.http.post<any>(this.baseurl+equipeid, joueur, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })

  }
  deleteJoueurk(id:any):Observable<Joueur>{
    return this.http.delete<Joueur>(this.baseurl+id)
  }

  updateJoueur(joueur:any,idEquipe:any){
    return this.http.put<any>(this.baseurl+idEquipe, joueur)
  }
}
