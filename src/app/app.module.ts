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

@NgModule({
  declarations: [
    AppComponent,
    ListJoueursComponent,
    ListEquipeComponent,
    EquipeComponent,
    LoginComponent,
    EditTeamComponent,
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
