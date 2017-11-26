import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

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
		this.nuevaNoticia = new Noticia();
		this.usuario = data.usuario;
		this.categorias = [];
		this.actualizarCategorias();

		console.log(this.usuario);
		console.log(this.nuevaNoticia);
	}

	onNoClick()
	{
		this.dialogRef.close();
	}

	agregarNoticia()
	{
		this.nuevaNoticia.fecha = "2017-09-09";
		this.nuevaNoticia.usuario_id = this.usuario;
		//this.nuevaNoticia.categoria_id = 1;
		console.log(this.nuevaNoticia);
		this.servicioNoticia.registerNoticia(this.nuevaNoticia).subscribe(data => {
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
