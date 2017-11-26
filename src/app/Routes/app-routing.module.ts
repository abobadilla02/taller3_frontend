import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../Components/login/login.component';

import { NoticiasComponent } from '../Components/noticias/noticias.component';

import { VernoticiaComponent } from '../Components/noticias/vernoticia/vernoticia.component';

import { MisnoticiasComponent } from '../Components/noticias/misnoticias/misnoticias.component';

const routes: Routes =
[

  { path: 'login',  component: LoginComponent },
  
  { path: '',  component: NoticiasComponent },

  { path: 'noticia/:id', component: VernoticiaComponent },

  { path: 'misNoticias', component: MisnoticiasComponent }

];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);

