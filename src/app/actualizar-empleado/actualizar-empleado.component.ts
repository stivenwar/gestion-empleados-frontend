import { Component, OnInit } from '@angular/core';
import {Empleado} from "../empleado";
import {EmpleadoService} from "../empleado.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-actualizar-empleado',
  templateUrl: './actualizar-empleado.component.html',
  styleUrls: ['./actualizar-empleado.component.css']
})
export class ActualizarEmpleadoComponent implements OnInit {

  empleados: Empleado[];
  empleado: Empleado;
  ruta: any;
  constructor(private empleadoServicio: EmpleadoService, private activaterouter: ActivatedRoute, private router :Router) { }

  ngOnInit(): void {

    this.obtenerEmpleado();
  }
   obtenerEmpleado(){
    this.empleadoServicio.obtenerListaDeEmpleados().subscribe(data =>{
      console.log(data);
      this.empleados = data;
      this.ruta = this.activaterouter.snapshot.params["id"];
      this.empleados.forEach((value,index) => {
        if (this.ruta == value.id){
          this.empleado = value;
        }
      })

    })
  }
    actualizarEmpleado(empleado:Empleado){
    this.empleadoServicio.actualizarEmpleado(this.empleado.id,empleado).subscribe(data =>{
      console.log(data);
    })
    }
  irAlaListaDeEmpleados(){
    this.router.navigate(['/empleados']);
  }
  onSubmit() {
    this.actualizarEmpleado(this.empleado);
    this.irAlaListaDeEmpleados();
  }
}
