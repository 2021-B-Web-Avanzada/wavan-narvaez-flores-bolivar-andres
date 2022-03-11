import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EmpleadoService} from "../../services/empleado.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.scss']
})
export class CrearEmpleadoComponent implements OnInit {
  createEmpleado: FormGroup;
  submitted = false;
  id: String | null;
  titulo = 'Agregar empleado';

  constructor(private fb: FormBuilder,
              private _empleadoService: EmpleadoService,
              private router: Router,
              private toastr: ToastrService,
              private aRoute: ActivatedRoute
  ) {
    this.createEmpleado = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      cedula: ['', Validators.required],
      cargo: ['', Validators.required],
      salario: ['', Validators.required]
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarEditarEmpleado(){
    this.submitted = true;

    if(this.createEmpleado.invalid){
      return;
    }

    if (this.id === null){
      this.agregarEmpleado();
    }else {
      this.editarEmpleado(this.id);
    }
  }

  agregarEmpleado(){
    const empleado: any = {
      nombre: this.createEmpleado.value.nombre,
      apellido: this.createEmpleado.value.apellido,
      cedula: this.createEmpleado.value.cedula,
      cargo: this.createEmpleado.value.cargo,
      salario: this.createEmpleado.value.salario,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()
    }
    this._empleadoService.agregarEmpleado(empleado).then(() =>{
      this.toastr.success('El empleado fue registrado con éxito!', 'Empleado registrado');
      this.router.navigate(['/list-empleados'])
    }).catch(error =>{
      console.log(error);
    })
  }

  editarEmpleado(id: String){
    const empleado: any = {
      nombre: this.createEmpleado.value.nombre,
      apellido: this.createEmpleado.value.apellido,
      cedula: this.createEmpleado.value.cedula,
      cargo: this.createEmpleado.value.cargo,
      salario: this.createEmpleado.value.salario,
      fechaActualizacion: new Date()
    }

    this._empleadoService.actualizarEmpleado(id, empleado).then(() => {
      this.toastr.info('El empleado fue modificado con éxito!', 'Empleado modificado', {
        positionClass: 'toast-bottom-right'
      })
      this.router.navigate(['/list-empleados']);
    })
  }

  esEditar(){
    this.titulo = 'Editar empleado';
    if (this.id !== null){
      this._empleadoService.getEmpleado(this.id).subscribe(data =>{
        console.log(data.payload.data()['nombre']);
        this.createEmpleado.setValue({
          nombre: data.payload.data()['nombre'],
          apellido: data.payload.data()['apellido'],
          cedula: data.payload.data()['cedula'],
          cargo: data.payload.data()['cargo'],
          salario: data.payload.data()['salario']
        })
      })
    }
  }
}
