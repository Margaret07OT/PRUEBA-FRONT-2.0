import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { VisitanteComponent } from './component/visitante/visitante.component';

import { AgregarambienteComponent } from './component/agregarambiente/agregarambiente.component';

import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';




@NgModule({
  declarations: [
    AppComponent,
    VisitanteComponent,
    IniciosesionComponent,
    AgregarambienteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
