//SERVICIOS
import { AuthenticationService } from './Services/authentication.service';
import { EventosService } from './Services/eventos.service';
import { CategoriasService } from './Services/categorias.service';
import { NoticiasService } from './Services/noticias.service';
import { UsuariosService } from './Services/usuarios.service';


//MODULOS
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './Routes/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';

// COMPONENTES

//Componentes Raices
import { AppComponent } from './app.component';
//LOGIN
//OTROS
import { LoginComponent } from './Components/login/login.component';
import { NoticiasComponent } from './Components/noticias/noticias.component';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import { HomeComponent } from './Components/home/home.component';

@NgModule({
  declarations:
  [
    //Componentes Raiz
    AppComponent,
    //MensajeErrorComponent,
    LoginComponent,
    NoticiasComponent,
    ToolbarComponent,
    HomeComponent
  ],

  entryComponents:
  [
    //Componentes de entrada para Modales en Materialize
   
    //MensajeErrorComponent
  ],


  imports:
  [
    ReactiveFormsModule,
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatFormFieldModule,
  ],

  providers:
  [
    appRoutingProviders,
    AuthenticationService,
    EventosService,
    NoticiasService,
    UsuariosService,
    CategoriasService

    //SERVICIOS
  ],

  bootstrap:
  [
    AppComponent
  ]

})

export class AppModule { }
