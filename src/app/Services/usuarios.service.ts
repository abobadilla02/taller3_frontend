import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


//Servicios utilizados
import { AuthenticationService } from './authentication.service';

//Se importan los modelos a utilizar
import { Usuario } from '../Models/usuario.model';

@Injectable()
export class UsuariosService {

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
	getUsuarios(): Observable<Usuario[]>
	{
		return this.http.get(this.base+'usuarios', this.options).map((res: Response) => res.json());
	}

	//POST
	registerUsuario(usuario: Usuario)
	{
		return this.http.post( this.base+'usuarios', JSON.stringify(usuario), this.options).map((res: Response) => res.json());

	}

	//GET
	getUsuario(id) : Observable<Usuario>
	{
		return this.http.get(this.base+'usuarios/'+id, this.options).map((res: Response) => res.json());
	}

	//PUT
	editUsuario(usuario: Usuario, id: number)
	{
		return this.http.put(this.base+'usuarios/'+id, JSON.stringify(usuario), this.options).map((res: Response) => res.json());
	}

	//DELETE
	deleteUsuario(id) {
		return this.http.delete(this.base+'usuarios/'+id, this.options).map((res: Response) => res.json());
	}


}