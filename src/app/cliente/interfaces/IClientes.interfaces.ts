export interface Clientes {
  isExitoso: boolean;
  result:    Result[];
  mensaje:   string;
  error:     null;
}

export interface Result {
  id:        number;
  nombre:    string;
  apellido:  string;
  direccion: string;
  telefono:  string;
}
