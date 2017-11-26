import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
	public noticia: Noticia;
	public categoria: any;
	public usuario: any;

  constructor(public router: Router, public servicioCategoria: CategoriasService, public servicioUsuario: UsuariosService) { 
  	this.noticia = JSON.parse(localStorage.getItem('currentNotice'));
  	this.getUsuario();
  	this.getCategoria();

  }

  getCategoria() {
  	this.servicioCategoria.getCategoria(this.noticia.categoria_id).subscribe(data => {
  		this.categoria = data.descripcion;
  		
  	});
  }

  getUsuario() {
  	this.servicioUsuario.getUsuario(this.noticia.usuario_id).subscribe(data => {
  		this.usuario = data.nombre;
  	});
  }
  ngOnInit() {
  }

}
