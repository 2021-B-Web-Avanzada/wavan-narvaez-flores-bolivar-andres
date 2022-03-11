import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListaEmpleadosComponent} from "./componentes/lista-empleados/lista-empleados.component";
import {CrearEmpleadoComponent} from "./componentes/crear-empleado/crear-empleado.component";

const routes: Routes = [
  {path:'', redirectTo: 'list-empleados', pathMatch: 'full'},
  {path: 'list-empleados', component: ListaEmpleadosComponent},
  {path: 'crearEmpleado', component: CrearEmpleadoComponent},
  {path: 'editEmpleado/:id', component: CrearEmpleadoComponent},
  {path:'**', redirectTo: 'list-empleados', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
