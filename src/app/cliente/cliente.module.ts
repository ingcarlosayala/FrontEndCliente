import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ListadoComponent } from './components/listado/listado.component';
import { CrearComponent } from './components/crear/crear.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListadoComponent,
    CrearComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule
  ],exports:[
    ListadoComponent,
    CrearComponent
  ]
})
export class ClienteModule { }
