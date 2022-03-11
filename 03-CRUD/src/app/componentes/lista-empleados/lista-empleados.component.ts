import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import {EmpleadoService} from "../../services/empleado.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.scss']
})
export class ListaEmpleadosComponent implements OnInit {
  empleados: any[] = [];

  constructor(private _empleadoService: EmpleadoService, private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.getEmpleados()
  }

  getEmpleados(){
    this._empleadoService.getEmpleados().subscribe(data =>{
      this.empleados = [];
      data.forEach((element:any) =>{
        this.empleados.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.empleados);
    });
  }

  eliminarEmpleados(id: String){
    this._empleadoService.eliminarEmpleado(id).then(() =>{
      console.log('Empleado eliminado con éxito!');
      this.toastr.error('El empleado fue eliminado con éxito!', 'Registro eliminado', {
        positionClass: 'toast-bottom-right'
      })
    }).catch(error =>{
      console.log(error);
    })
  }
}
