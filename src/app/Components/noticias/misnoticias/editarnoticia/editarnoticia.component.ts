import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

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
	public noticia: Noticia;
	public categorias: Categoria[];

	constructor(
		public dialogRef: MatDialogRef<EditarnoticiaComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
		public servicioNoticia: NoticiasService,
		public servicioCategoria: CategoriasService
		)
	{
		this.noticia = data.noticia;
		this.categorias = [];
		this.actualizarCategorias();
	}

	onNoClick()
	{
		this.dialogRef.close();
	}

	editarNoticia()
	{
		this.servicioNoticia.editNoticia(this.noticia, this.noticia.id).subscribe( data => {
			console.log(data);
			this.dialogRef.close();

		});
	}

	actualizarCategorias() {
		this.servicioCategoria.getCategorias().subscribe( data => {
			this.categorias = data;	
		});
	}
}
