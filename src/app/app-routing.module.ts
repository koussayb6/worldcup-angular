import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListEquipeComponent} from "./components/list-equipe/list-equipe.component";
import {EquipeComponent} from "./components/equipe/equipe.component";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home', component:ListEquipeComponent},
  {path:'equipe/:id', component:EquipeComponent},
  {path:'login', component:LoginComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
