import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {MembreStaff} from "../models/MembreStaff";

@Injectable({
  providedIn: 'root'
})
export class MembreStaffService {
  baseurl=environment.api_uri+'membrestaff/';
  constructor(private http:HttpClient) { }

  getAll():Observable<MembreStaff[]>{
    return this.http.get<MembreStaff[]>(this.baseurl);
  }

  getOneById(id:any):Observable<any>{
    return this.http.get<any>(this.baseurl+id);
  }
  addMembreStaff(MembreStaff:any,membreStaffid:any):Observable<any>{
    return this.http.post<any>(this.baseurl+membreStaffid, MembreStaff, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })

  }
  deleteMembreStaff(id:any):Observable<MembreStaff>{
    return this.http.delete<MembreStaff>(this.baseurl+id)
  }

  updateMembreStaff(MembreStaff:any,idEquipe:any){
    return this.http.put<any>(this.baseurl+idEquipe, MembreStaff)
  }
}
