import { Regla } from './../core/model/regla.model';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  palabraClave: string = '';
  mensajeUsuario: string = '';
  reglaInicial: Regla[] = [];
  busquedaActual: Regla[] = [];
  usuarios: Regla[] = [];
  tickets: Regla[] = [];
  contactos: Regla[] = [];


  ngOnInit(): void {
    this.tickets = [
      {
        key: "1",
        mensaje: 'Descripcion: No puedo acceder a ciertos recursos en la intranet\nusuario: juan.perez\nEstado: Pendiente',
        valor: null,
      },
      {
        key: "2",
        mensaje: 'Descripcion: La página principal no se carga correctamente \nusuario: maria.lopez\n estado: Cerrado',
        valor: null,
      },
      {
        key: "3",
        mensaje: 'Descripcion: Solicitud de nueva funcionalidad en facturas\nusuario: wilmer.moreno\nestado: Abierto',
        valor: null
      },
    ];

    this.usuarios = [
      {
        key: "juan.perez",
        mensaje: 'Nombre: Juan Perez\nDepartamento: Ventas\nExt: 1234',
        valor: null,
      },
      {
        key: "maria.lopez",
        mensaje: 'Nombre: Maria Lopez\nDepartamento: Marketing\nExt: 5678',
        valor: null,
      },
      {
        key: "wilmer.moreno",
        mensaje: 'Nombre: Wilmer Moreno\nDepartamento: IT\nExt: 9101',
        valor: null,
      }
    ];

    this.contactos = [
      {
        key: "juan.perez",
        mensaje: 'Correo: juan.perez@tudesarrollo.com\nDepartamento: Ventas\nExt: 1234',
        valor: null,
      },
      {
        key: "maria.lopez",
        mensaje: 'Correo: maria.lopez@tudesarrollo.com\nDepartamento: Marketing\nExt: 5678',
        valor: null,
      },
      {
        key: "wilmer.moreno",
        mensaje: 'Correo: wilmer.moreno@tudesarrollo.com\nDepartamento: IT\nExt: 9101',
        valor: null,
      }
    ];

    this.reglaInicial = [
      {
        key: "ticket",
        mensaje: 'Ingresa "id ticket" para buscar el ticket.',
        valor: this.tickets,
      },
      {
        key: "usuario",
        mensaje: 'Ingresa el usuario a buscar.',
        valor: this.usuarios,
      },
      {
        key: "contacto",
        mensaje: 'Ingresa el contacto a buscar.',
        valor: this.contactos,
      }
    ];

    this.busquedaActual = this.reglaInicial;
  }

  agenteAplicar() {
    console.log('Campo Buscado:', this.palabraClave);
    const ticketEncontradoDinamico = this.busquedaActual.find(busqueda => {
        var reglaEncontrada = busqueda.key.toLowerCase() === this.palabraClave.toLowerCase();
        this.mensajeUsuario = reglaEncontrada ? busqueda.mensaje : 'No se encontró el elemento solicitado.';
        return reglaEncontrada;
    });

    this.busquedaActual = ticketEncontradoDinamico ? ticketEncontradoDinamico.valor : [];
    this.palabraClave = '';
  }

  limpiar(): void {
    this.mensajeUsuario = '';
    this.busquedaActual = this.reglaInicial;
  }
}
