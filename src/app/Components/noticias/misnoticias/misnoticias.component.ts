// Se importan los componentes de angular a utilizar
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

// Se importan modelos y servicios
import { Noticia } from '../../../Models/noticia.model';
import { NoticiasService } from '../../../Services/noticias.service';

import { Categoria } from '../../../Models/categoria.model';
import { CategoriasService } from '../../../Services/categorias.service';

import { Usuario } from '../../../Models/usuario.model';
import { UsuariosService } from '../../../Services/usuarios.service';

// Se importan los componentes creado a utilizar
import { AgregarnoticiaComponent } from './agregarnoticia/agregarnoticia.component';
import { EditarnoticiaComponent } from './editarnoticia/editarnoticia.component';


@Component({
  selector: 'app-misnoticias',
  templateUrl: './misnoticias.component.html',
  styleUrls: ['./misnoticias.component.css']
})
export class MisnoticiasComponent implements OnInit {

	// Se inicializan las variables, en donde se almacenarán los arreglos con noticias y usuarios
	public totalNoticias: Noticia[];
	public totalUsuarios: Usuario[];

	// Variables inicializadas para obtener los datos del usuario
	public userActual: any;
	public userInfo: Usuario;

  constructor (
    public servicioNoticia: NoticiasService,
    public dialog: MatDialog,
    public router: Router,
    public usuarioService: UsuariosService
    )
  {

  	// Validación de usuario logueado
    if( !(localStorage.getItem('currentUser')) )
    {
      // Si no está logueado, lo envía a la página del login
      this.router.navigate(['login'])
    }

    	// Se obtiene el usuario logueado
		this.userActual = JSON.parse(localStorage.getItem('currentUser'));
		this.totalNoticias = [];
		
		// Se actualizan los datos del usuario y de sus noticias
		this.usuarioActual();
	}

	// Este método obtiene las noticias del usuario actual
	usuarioActual() {
		this.usuarioService.getUsuarios().subscribe(datos => {
          
          // Se obtienen todos los usuarios
          this.totalUsuarios = datos;

          // Se filtra el usuario, utilizando el email (para obtener el id)
          var usuario = this.totalUsuarios.filter(user => user.email === this.userActual.email);
          
          // El resultado se guarda en un arreglo de tamaño uno y se asigna a userInfo
          this.userInfo = usuario[0];

          this.servicioNoticia.getNoticias().subscribe(data => {
			// Se obtienen todas las noticias
			this.totalNoticias = data;

			// Se filtran las noticias que son del usuario, usando su id y se guardan en totalNoticias
			this.totalNoticias = this.totalNoticias.filter( noticia => noticia.usuario_id === this.userInfo.id);
			});
  		});

	}

	// Recibiendo el parámetro id de la noticia, se elimina usando el servicio
	eliminarNoticia(noticia)
	{
		this.servicioNoticia.deleteNoticia(noticia).subscribe( data => {
			// Se actualizan las noticias del usuario
			this.usuarioActual();
		});
	}

	// Se abre un nuevo dialogo, para editar una noticia, se recibe como parámetro la noticia
	edicionNoticia(noticia)
	{	
		// Se indica que componente se abrirá
		let dialogRef = this.dialog.open(EditarnoticiaComponent, {
			
			// Se especifíca la medida del dialogo
			width: '700px',
			// Se envían los siguientes datos al componente
			data:
			{
			 noticia: noticia
			}
		});

		// Al cerrar se actualizan las noticias del usuario
		dialogRef.afterClosed().subscribe(result => {
			this.usuarioActual();
		});
	}

	// Se abre un nuevo dialogo para crear una nueva noticia
	nuevaNoticia()
	{	
		// Se indica que componente se abrirá
		let dialogRef = this.dialog.open(AgregarnoticiaComponent, {
			// Se especifíca la medida del dialogo
			width: '700px',
			// Se envían los siguientes datos al componente
			data: {
				usuario: this.userInfo.id
			}
		});

		// Al cerrar se actualizan las noticias del usuario
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
