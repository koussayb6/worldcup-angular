import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListJoueursComponent } from './components/list-joueurs/list-joueurs.component';
import { ListEquipeComponent } from './components/list-equipe/list-equipe.component';
import {HttpClientModule} from "@angular/common/http";
import { EquipeComponent } from './components/equipe/equipe.component';
import {FormsModule} from "@angular/forms";
import {authInterceptorProviders} from "./_helpers/auth.interceptor";
import { LoginComponent } from './components/login/login.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditJoueurComponent } from './components/edit-joueur/edit-joueur.component';
import { JoueurComponent } from './components/joueur/joueur.component';
import { MembreStaffComponent } from './components/membreStaff/membreStaff.component';
import { EditMembreStaffComponent } from './components/edit-membreStaff/edit-membreStaff.component';

@NgModule({
  declarations: [
    AppComponent,
    ListJoueursComponent,
    ListEquipeComponent,
    EquipeComponent,
    LoginComponent,
    EditTeamComponent,
    ProfileComponent,
    EditJoueurComponent,
    JoueurComponent,
    MembreStaffComponent,
    EditMembreStaffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
