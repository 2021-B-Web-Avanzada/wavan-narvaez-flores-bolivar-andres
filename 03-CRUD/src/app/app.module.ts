import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import {ReactiveFormsModule} from "@angular/forms";
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ListaEmpleadosComponent } from './componentes/lista-empleados/lista-empleados.component';
import { CrearEmpleadoComponent } from './componentes/crear-empleado/crear-empleado.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import {environment} from "../environments/environment";



@NgModule({
  declarations: [
    AppComponent,
    ListaEmpleadosComponent,
    CrearEmpleadoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
