import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioCrudComponent } from './components/usuario-crud/usuario-crud.component';
import { SolicitudCreditoCrudComponent } from './components/solicitud-credito-crud/solicitud-credito-crud.component';
import { HistorialCrediticioCrudComponent } from './components/historial-crediticio-crud/historial-crediticio-crud.component';
import { TransaccionInternaCrudComponent } from './components/transaccion-interna-crud/transaccion-interna-crud.component';
import { AnalistaCreditoCrudComponent } from './components/analista-credito-crud/analista-credito-crud.component';
import { LogActividadCrudComponent } from './components/log-actividad-crud/log-actividad-crud.component';
import { DocumentoCrudComponent } from './components/documento-crud/documento-crud.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'usuarios', component: UsuarioCrudComponent, canActivate: [AuthGuard] },
  { path: 'solicitudes', component: SolicitudCreditoCrudComponent, canActivate: [AuthGuard] },
  { path: 'historiales', component: HistorialCrediticioCrudComponent, canActivate: [AuthGuard] },
  { path: 'transacciones', component: TransaccionInternaCrudComponent, canActivate: [AuthGuard] },
  { path: 'analistas', component: AnalistaCreditoCrudComponent, canActivate: [AuthGuard] },
  { path: 'logs', component: LogActividadCrudComponent, canActivate: [AuthGuard] },
  { path: 'documentos', component: DocumentoCrudComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
