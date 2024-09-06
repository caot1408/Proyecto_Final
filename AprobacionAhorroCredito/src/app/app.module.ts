import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioCrudComponent } from './components/usuario-crud/usuario-crud.component';
import { HttpClientModule } from '@angular/common/http'; // Asegúrate de que esto esté importado
import { FormsModule } from '@angular/forms';
import { SolicitudCreditoCrudComponent } from './components/solicitud-credito-crud/solicitud-credito-crud.component';
import { HistorialCrediticioCrudComponent } from './components/historial-crediticio-crud/historial-crediticio-crud.component';
import { TransaccionInternaCrudComponent } from './components/transaccion-interna-crud/transaccion-interna-crud.component';
import { AnalistaCreditoCrudComponent } from './components/analista-credito-crud/analista-credito-crud.component';
import { LogActividadCrudComponent } from './components/log-actividad-crud/log-actividad-crud.component';
import { DocumentoCrudComponent } from './components/documento-crud/documento-crud.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioCrudComponent,
    SolicitudCreditoCrudComponent,
    HistorialCrediticioCrudComponent,
    TransaccionInternaCrudComponent,
    AnalistaCreditoCrudComponent,
    LogActividadCrudComponent,
    DocumentoCrudComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Asegúrate de que esté aquí
    FormsModule // Añade FormsModule aquí para usar ngModel
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
