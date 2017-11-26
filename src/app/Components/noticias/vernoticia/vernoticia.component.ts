// Se importan los componentes a utilizar
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Se importan los servicios y los modelos a utilizar
import { Noticia } from '../../../Models/noticia.model';
import { NoticiasService } from '../../../Services/noticias.service';

import { CategoriasService } from '../../../Services/categorias.service';

import { UsuariosService } from '../../../Services/usuarios.service';

@Component({
  selector: 'app-vernoticia',
  templateUrl: './vernoticia.component.html',
  styleUrls: ['./vernoticia.component.css']
})
export class VernoticiaComponent implements OnInit {

  // Se inicializan las variables, solo noticia precisa de importar su modelo
	public noticia: Noticia;
	public categoria: any;
	public usuario: any;

  constructor(public router: Router, public servicioCategoria: CategoriasService, public servicioUsuario: UsuariosService) { 
  	// Se obtiene la noticia desde el localstorage 
    this.noticia = JSON.parse(localStorage.getItem('currentNotice'));
  	
    // Se obtienen tanto los usuarios como las categorias de las noticias
    this.getUsuario();
  	this.getCategoria();

  }

  // El servicio obtiene la categoria específica de la noticia y se guarda en this.categoria
  getCategoria() {
  	this.servicioCategoria.getCategoria(this.noticia.categoria_id).subscribe(data => {
  		this.categoria = data.descripcion;
  	});
  }

  // El servicio obtiene el usuario exacto de la noticia y se guarda en this.usuario
  getUsuario() {
  	this.servicioUsuario.getUsuario(this.noticia.usuario_id).subscribe(data => {
  		this.usuario = data.nombre;
  	});
  }

  ngOnInit() {
  }
}
