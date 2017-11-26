export class Noticia {
  id: number;
  titular: string;
  entrada: string;
  cuerpo: string;
  imagen: string;
  fecha: string;
  categoria_id: number;
  usuario_id: number;

  constructor()
  {
  	this.id = 0;
  	this.titular = "";
  	this.entrada = "";
  	this.cuerpo ="";
  	this.imagen = "";
    this.fecha = "";
    this.categoria_id = 0;
    this.usuario_id = 0;
  }
}
