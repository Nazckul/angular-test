import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any[] = [];


  constructor( private http: HttpClient ) {

    this.cargarInfo();
    this.cargarEquipo();

  }

  private cargarInfo(){
    //Leer el archivo JSON

    this.http.get('assets/data/data-pagina.json')
      .subscribe( resp => {
        this.cargada = true;
        this.info = resp;
        console.log(resp);
      })
  }

  private cargarEquipo(){
  //Leer el archivo JSON

  this.http.get('https://angular-html-c4be3-default-rtdb.firebaseio.com/equipo.json')
  .subscribe( (resp: any) => {
    this.equipo= resp;

  })
  }



}
