export class Noticia {
  id: number;
  titular: string;
  entrada: string;
  cuerpo: string;
  imagen: string;
  fecha: string;
  categoria_id: string;
  usuario_id: string;

  constructor()
  {
  	this.id = 0;
  	this.titular = "";
  	this.entrada = "";
  	this.cuerpo ="";
  	this.imagen = "";
    this.fecha = "";
    this.categoria_id = "";
    this.usuario_id = "";
  }
}
