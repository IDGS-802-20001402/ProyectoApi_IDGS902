import { Injectable } from '@angular/core';
import { AlumnosUtl } from './interface/utl';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectoApiService {

  private _alumnosUtl:AlumnosUtl[]=[
    {
      id:1234,
      nombre:'pedro',
      edad:23,
      email: 'pedro@gmail.com',
 
    },
    {
      id:772,
      nombre:'Paulina',
      edad:23,
      email: 'paulina@gmail.com',
    },
 
    {
      id:22,
      nombre:'Dario',
      edad:23,
      email: 'dario@gmail.com',
 
    },
  ]
 
  constructor(private http:HttpClient) { }
 
get alumnos():AlumnosUtl[]{
  return[...this._alumnosUtl]
}
 
public getAlumnos():Observable<AlumnosUtl[]>{
  return this.http.get<AlumnosUtl[]>('http://localhost:5174/api/Alumno')
}
 
agregarNuevoAlumno(datos:AlumnosUtl){
  console.log(datos);
  
  return this.http.post('http://localhost:5174/api/Alumno',datos)
}
}
