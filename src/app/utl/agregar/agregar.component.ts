import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlumnosUtl } from 'src/app/interface/utl';
import { ProyectoApiService } from 'src/app/proyecto-api.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  regAlumno:AlumnosUtl={
    id:0,
    nombre:'',
    edad:0,
    email:''
  }
 
  constructor(private alumnosutl:ProyectoApiService, private router:Router){}
 
  agregar(){
    this.alumnosutl.agregarNuevoAlumno(this.regAlumno).subscribe({
      next:()=>console.log(),
      error:(e)=> console.error(e),
      complete:()=>console.info()})
 
      this.regAlumno={
        id:0,
        nombre:'',
        edad:0,
        email:''
      }
 
      this.router.navigate(['verAlumnos'])
 
  }
}
