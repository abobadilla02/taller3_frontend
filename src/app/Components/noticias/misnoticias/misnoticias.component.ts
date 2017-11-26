import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Noticia } from '../../../Models/noticia.model';
import { NoticiasService } from '../../../Services/noticias.service';

import { Categoria } from '../../../Models/categoria.model';
import { CategoriasService } from '../../../Services/categorias.service';

import { Usuario } from '../../../Models/usuario.model';
import { UsuariosService } from '../../../Services/usuarios.service';

import { AgregarnoticiaComponent } from './agregarnoticia/agregarnoticia.component';
import { EditarnoticiaComponent } from './editarnoticia/editarnoticia.component';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-misnoticias',
  templateUrl: './misnoticias.component.html',
  styleUrls: ['./misnoticias.component.css']
})
export class MisnoticiasComponent implements OnInit {
	public totalNoticias: Noticia[];
	public totalUsuarios: Usuario[];
	public userActual: any;
	public userInfo: Usuario;

	displayedColumns = ['Acciones', 'Titular', 'Categoría'];


  constructor (
    public servicioNoticia: NoticiasService,
    public dialog: MatDialog,
    public router: Router,
    public usuarioService: UsuariosService
    )
  {
    if( !(localStorage.getItem('currentUser')) )
    {
      this.router.navigate(['login'])
    }

		//this.usuarioActual = JSON.parse(localStorage.getItem('currentUser'));
		this.userActual = JSON.parse(localStorage.getItem('currentUser'));
		this.totalNoticias = [];
		this.usuarioActual();
	}


	usuarioActual() {
		this.usuarioService.getUsuarios().subscribe(datos => {
          this.totalUsuarios = datos;
          var usuario = this.totalUsuarios.filter(user => user.email === this.userActual.email);
          this.userInfo = usuario[0];

          this.servicioNoticia.getNoticias().subscribe(data => {
			this.totalNoticias = data;
			this.totalNoticias = this.totalNoticias.filter( noticia => noticia.usuario_id === this.userInfo.id);
			});
  		});

	}

	
	eliminarNoticia(noticia)
	{
		this.servicioNoticia.deleteNoticia(noticia).subscribe( data => {
			this.usuarioActual();
		});
	}

	edicionNoticia(noticia)
	{

		let dialogRef = this.dialog.open(EditarnoticiaComponent, {
			width: '700px',
			data:
			{
			 noticia: noticia
			}
		});

		dialogRef.afterClosed().subscribe(result => {

			this.usuarioActual();
		});
	}

	nuevaNoticia()
	{	

		let dialogRef = this.dialog.open(AgregarnoticiaComponent, {
			width: '700px',
			data: {
				usuario: this.userInfo.id
			}
		});

		dialogRef.afterClosed().subscribe(result => {
			this.usuarioActual();
		});
	}

	// Se busca una noticia en particular a través de us ID
  	verNoticia(id) {
	  	this.servicioNoticia.getNoticia(id).subscribe(data => {

	      // La noticia se almacena en localstorage
	  		localStorage.setItem('currentNotice', JSON.stringify(data))
	  		
	      // Se cambia a la ruta donde irá la noticia
	      this.router.navigate(['noticia/' + id]);
	  	})	
  	}


  ngOnInit() {
  }

}
