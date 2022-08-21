import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './cliente/components/crear/crear.component';
import { ListadoComponent } from './cliente/components/listado/listado.component';

const routes: Routes = [
  {
    path: '', component: ListadoComponent, pathMatch: 'full'
  },
  {
    path: 'crear', component: CrearComponent
  },
  {
    path: '**', redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
