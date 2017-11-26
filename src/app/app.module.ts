// Se importan los servicios creados
import { AuthenticationService } from './Services/authentication.service';
import { EventosService } from './Services/eventos.service';
import { CategoriasService } from './Services/categorias.service';
import { NoticiasService } from './Services/noticias.service';
import { UsuariosService } from './Services/usuarios.service';

// Se importan los modulos que se usarán
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


// Se importan los componentes a usar
// Componentes generales
import { AppComponent } from './app.component';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';

// Componente login
import { LoginComponent } from './Components/login/login.component';

// Componentes realizar el CRUD de noticias
import { NoticiasComponent } from './Components/noticias/noticias.component';
import { VernoticiaComponent } from './Components/noticias/vernoticia/vernoticia.component';
import { MisnoticiasComponent } from './Components/noticias/misnoticias/misnoticias.component';
import { AgregarnoticiaComponent } from './Components/noticias/misnoticias/agregarnoticia/agregarnoticia.component';
import { EditarnoticiaComponent } from './Components/noticias/misnoticias/editarnoticia/editarnoticia.component';

@NgModule({
  declarations:
  [
    //Componentes generales
    AppComponent,
    ToolbarComponent,

    // Componente login
    LoginComponent,

    // Componente para noticias
    NoticiasComponent,
    VernoticiaComponent,
    MisnoticiasComponent,
    AgregarnoticiaComponent,
    EditarnoticiaComponent
  ],

  entryComponents:
  [
    //Componentes de entrada para Modales en Materialize
    AgregarnoticiaComponent,
    EditarnoticiaComponent
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
    
    //SERVICIOS
    AuthenticationService,
    EventosService,
    NoticiasService,
    UsuariosService,
    CategoriasService
  ],

  bootstrap:
  [
    AppComponent
  ]

})

export class AppModule { }
