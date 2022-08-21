import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';
import { Clientes, Result } from '../../interfaces/IClientes.interfaces';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  constructor(private ClienteService:ClienteService,
              private router:Router) { }

  ngOnInit(): void {
  }

  clienteForm = new FormGroup({
    nombre: new FormControl('',Validators.required),
    apellido: new FormControl('',Validators.required),
    direccion: new FormControl('',Validators.required),
    telefono: new FormControl('',Validators.required)
  });

  OnSubmit(){
    console.log(this.clienteForm.value);

    this.ClienteService.PostCliente(this.clienteForm.value)
        .subscribe(data => {
      alert("Cliente Creado");
      this.router.navigate(['/']);
   })
  }

}
