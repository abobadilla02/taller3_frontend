// Se importan los componentes de angular a utilizar
import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

// Se importan servicios y modelos a utilizar
import { Noticia } from '../../../../Models/noticia.model';
import { NoticiasService } from '../../../../Services/noticias.service';

import { Categoria } from '../../../../Models/categoria.model';
import { CategoriasService } from '../../../../Services/categorias.service';

@Component({
  selector: 'app-editarnoticia',
  templateUrl: './editarnoticia.component.html',
  styleUrls: ['./editarnoticia.component.css']
})
export class EditarnoticiaComponent {
	// Se declaran las variables a utilizar (noticia y categorias (arreglo))
	public noticia: Noticia;
	public categorias: Categoria[];

	constructor(
		public dialogRef: MatDialogRef<EditarnoticiaComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
		public servicioNoticia: NoticiasService,
		public servicioCategoria: CategoriasService
		)
	{	
		// Se "obtienen" los datos enviados desde el componente misnoticias y se asigna a noticia
		this.noticia = data.noticia;

		// Se inicializa y se actualizan las categorías
		this.categorias = [];
		this.actualizarCategorias();
	}

	// Método para cerrar el dialogo
	onNoClick()
	{
		this.dialogRef.close();
	}

	// Método para editar una noticia
	editarNoticia()
	{
		// Al servicio se le ingresa como parámetros, la noticia con los datos seteados y
		// la id de la noticia
		this.servicioNoticia.editNoticia(this.noticia, this.noticia.id).subscribe( data => {
			// Se cierra el dialogo
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
