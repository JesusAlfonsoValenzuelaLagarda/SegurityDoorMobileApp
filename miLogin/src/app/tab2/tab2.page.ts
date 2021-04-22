import { Component } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { producto } from './producto'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  url="http://localhost:5000/User/AddAccessControl"; //URL localhost que usemos
  clave:string;
  nombre:string;
  fecha:string;
  tipo:string;
  productos:producto[];
  pro:producto;

  constructor(private http:HttpClient) {
    this.llenarGrid();
  }

  buscar(){
    this.http.get<producto>(this.url+"/"+this.clave).subscribe(resp=>{
      this.pro=resp;
    })

  }
  llenarGrid(){
    this.http.get<producto[]>(this.url).subscribe(resp=>{
      this.productos=resp;
    })
  }
  guardar(){
    let miProducto={
      Pro_Cve:this.clave,
      Pro_Nombre:this.nombre,
      Pro_Precio:this.precio
    }
    this.http.post(this.url, miProducto).subscribe(
      data=>{
        console.log(data['_body']);
      }, error=> {
        console.log(error);
      }
    );
    this.llenarGrid();
    this.llenarGrid();
  }
  limpiar(){
    this.clave="";
    this.nombre="";
    this.precio=0;
    this.llenarGrid();
  }
  borrar(){
    this.http.delete(this.url+"/"+this.clave).subscribe(data=>{
      console.log
    })
  }

}
