import { Component, OnInit } from '@angular/core';
import { Result } from '../../interfaces/IClientes.interfaces';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  dataSource:Result[] = [];
  displayedColumns:string[] = ['nombre','apellido','direccion','telefono'];

  constructor(private ClienteService:ClienteService) { }

  ngOnInit(): void {
    this.ClienteService.GetClientes()
        .subscribe( data => {
          console.log(data.result);
          this.dataSource = data.result;
        })
  }

}
