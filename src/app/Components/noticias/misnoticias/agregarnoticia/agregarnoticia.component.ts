// Se importan los componentes de angular a utilizar
import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

// Se importan servicios y modelos a utilizar
import { Noticia } from '../../../../Models/noticia.model';
import { NoticiasService } from '../../../../Services/noticias.service';

import { Categoria } from '../../../../Models/categoria.model';
import { CategoriasService } from '../../../../Services/categorias.service';

@Component({
  selector: 'app-agregarnoticia',
  templateUrl: './agregarnoticia.component.html',
  styleUrls: ['./agregarnoticia.component.css']
})

export class AgregarnoticiaComponent {
	// Se declaran las variables a utilizar (Noticia, usuario y categorias)
	public nuevaNoticia: Noticia;
	public usuario: any;
	public categorias: Categoria[];

	constructor(
		public dialogRef: MatDialogRef<AgregarnoticiaComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
		public servicioNoticia: NoticiasService,
		public servicioCategoria: CategoriasService
		)
	{
		// Se crea un nuevo objeto noticia
		this.nuevaNoticia = new Noticia();

		// Se obtienen los datos "enviados" desde el componente misnoticias y se asigna
		this.usuario = data.usuario;
		this.categorias = [];

		// Se actualizan las categorías para mostrarlas en el select
		this.actualizarCategorias();
	}

	// Método para cerrar el dialogo
	onNoClick()
	{
		this.dialogRef.close();
	}

	// Método que utiliza el servicio para agregar una nueva noticia
	agregarNoticia()
	{
		// Se agregan los datos que no se seleccionan en el modal
		this.nuevaNoticia.fecha = new Date().toISOString().slice(0, 19).replace('T', ' ');
		this.nuevaNoticia.usuario_id = this.usuario;

		this.servicioNoticia.registerNoticia(this.nuevaNoticia).subscribe(data => {
			// Al agregar se cierra el modal
			this.dialogRef.close();
		});
	}

	// Se obtienen todas las categorias desde la base de datos
	actualizarCategorias() {
		this.servicioCategoria.getCategorias().subscribe( data => {
			this.categorias = data;	
		});
	}
}
