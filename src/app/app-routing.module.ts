import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListEquipeComponent} from "./components/list-equipe/list-equipe.component";
import {EquipeComponent} from "./components/equipe/equipe.component";
import {LoginComponent} from "./components/login/login.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {JoueurComponent} from "./components/joueur/joueur.component";

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home', component:ListEquipeComponent},
  {path:'equipe/:id', component:EquipeComponent},
  {path:'login', component:LoginComponent},
  {path: 'profile', component: ProfileComponent},
  { path: 'joueur/:id/:idequipe', component: JoueurComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
