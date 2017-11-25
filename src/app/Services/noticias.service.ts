import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


//Servicios utilizados
import { AuthenticationService } from './authentication.service';

//Se importan los modelos a utilizar
import { Noticia } from '../Models/noticia.model';

@Injectable()
export class NoticiasService {

    public base: string = "http://localhost:8000/api/v1/";
	public options: RequestOptions;
	public headers: Headers;

	constructor(private http: Http, private authenticationService: AuthenticationService)
	{
		this.headers = new Headers(
		{
			'Authorization': 'Bearer ' + this.authenticationService.token,
			'Content-Type': 'application/json'
		});

		this.options = new RequestOptions({ headers: this.headers });


	}
	//GET
	getNoticias(): Observable<Noticia[]>
	{
		return this.http.get(this.base+'noticias', this.options).map((res: Response) => res.json());
	}

	//POST
	registerNoticia(noticia: Noticia)
	{
		return this.http.post( this.base+'noticias', JSON.stringify(noticia), this.options).map((res: Response) => res.json());

	}

	//GET
	getNoticia(id) : Observable<Noticia>
	{
		return this.http.get(this.base+'noticias/'+id, this.options).map((res: Response) => res.json());
	}

	//PUT
	editNoticia(noticia: Noticia, id: number)
	{
		return this.http.put(this.base+'noticias/'+id, JSON.stringify(noticia), this.options).map((res: Response) => res.json());
	}

	//DELETE
	deleteNoticia(id) {
		return this.http.delete(this.base+'noticias/'+id, this.options).map((res: Response) => res.json());
	}


}