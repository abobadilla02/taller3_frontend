import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../Components/login/login.component';

import { NoticiasComponent } from '../Components/noticias/noticias.component';

import { HomeComponent } from '../Components/home/home.component';


const routes: Routes =
[

  { path: 'login',  component: LoginComponent },
  
  { path: 'noticias',  component: NoticiasComponent },

  { path: '',  component: HomeComponent }

  /*
  //MODULO PACIENTES
  { path: 'ts',  component: TiposangreComponent },
  { path: 'pac',  component: PacientesComponent },
  { path: 'per',  component: PersonaComponent },
  { path: 'usu',  component: UsuariosComponent },
  { path: 'rol',  component: RolesComponent },
  { path: 'reg',  component: RegionesComponent },
  { path: 'pro',  component: ProvinciasComponent },
  { path: 'pre',  component: PrevisionesComponent },
  { path: 'com',  component: ComunasComponent },
  { path: 'gen',  component: GenerosComponent },
  { path: 'ec',  component: EstadocivilComponent },
  { path: 'fm',  component: FichaMedicaComponent },

  //MODULO CITAS

  { path: 'cit',  component: CitaComponent },
  { path: 'med',  component: MedicoComponent },
  { path: 'esp',  component: EspecialidadComponent },
  { path: 'es',  component: EstadocitaComponent },
  { path: 'bc',  component: BoxconsultaComponent }

*/





];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);

