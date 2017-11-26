// Se importan componentes
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Se importa el servicio y el modelo para noticias
import { NoticiasService } from '../../Services/noticias.service';
import { Noticia } from '../../Models/noticia.model'; 

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  // Se inicializa el arreglo donde se guardarán todas las noticias
  public totalNoticias: Noticia[];

  constructor(
    // Se inicializan los servicios
  	public servicioNoticias: NoticiasService,
  	public router:Router) { 

    // Se inicializan arreglos, y se llaman a los métodos
  	this.totalNoticias=[];
  	this.obtenerNoticias();
  }

  // Usando el servicio de noticias, se obtienen todas las noticias
  obtenerNoticias() {
  	this.servicioNoticias.getNoticias().subscribe(data => {
  		this.totalNoticias = data;
  	});
  }

  // Se busca una noticia en particular a través de us ID
  verNoticia(id) {
  	this.servicioNoticias.getNoticia(id).subscribe(data => {

      // La noticia se almacena en localstorage
  		localStorage.setItem('currentNotice', JSON.stringify(data))
  		
      // Se cambia a la ruta donde irá la noticia
      this.router.navigate(['noticia/' + id]);
  	})	
  }
  
  ngOnInit() {
  }

}
