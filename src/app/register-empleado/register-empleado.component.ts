import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-register-empleado',
  templateUrl: './register-empleado.component.html',
  styleUrls: ['./register-empleado.component.css']
})
export class RegisterEmpleadoComponent implements OnInit {

  empleado : Empleado = new Empleado();
  constructor(private empleadoServicio:EmpleadoService,private router:Router) { }

  ngOnInit(): void {
   
  }
  guardarEmpleado(){
    this.empleadoServicio.registrarEmpleado(this.empleado).subscribe(dato =>{
      console.log(dato);
      this.irAlaListaDeEmpleados();
    });
    
    
  }

  irAlaListaDeEmpleados(){
    this.router.navigate(['/empleados']);
  }

  onSubmit(){
    console.log(this.empleado);
    this.guardarEmpleado();
  }
}
