// Importe de componentes
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Importe de servicios
import { AuthenticationService }  from '../../Services/authentication.service';
import { EventosService } from '../../Services/eventos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Inicialización de variables 
	public password:string;
	public email:string;

  constructor(
    public router:Router,
    public authService:AuthenticationService, 
    public eventosService:EventosService) { 

	}

  ngOnInit() {
  }

  login()
  {

  	if( this.password != "" && this.email != "" ) {

  		this.authService.login(this.email,this.password).subscribe((data) => {
        
          this.eventosService.SignIn();
          this.router.navigate(['']);
        });
  	}
  }
}
