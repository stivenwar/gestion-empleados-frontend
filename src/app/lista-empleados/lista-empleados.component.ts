import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  empleados:Empleado[];
  constructor(private empleadoServicio: EmpleadoService,private router:Router) { }

  ngOnInit(): void {
   this.obtenerEmpleados();
  }

  private obtenerEmpleados(){
    this.empleadoServicio.obtenerListaDeEmpleados().subscribe(dato => {
      this.empleados = dato;
    })
  }

  actualizarEmpleado(id: number) {
    this.router.navigate(['actualizar-empleado',id])
  }
  eliminarEmpleado(id:number){
    this.empleadoServicio.eliminarEmpleado(id).subscribe(data => {
      console.log(data);
      this.obtenerEmpleados();
    })
  }
  verEmpleadoDetalles(id:number){
    this.router.navigate(['empleado-detalles',id])
  }
}
