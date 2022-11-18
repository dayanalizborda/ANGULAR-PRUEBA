import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.css']
})
export class PartidosComponent implements OnInit {

  constructor(
    private shared: SharedService
  ) { }

  partidos: any[];

  ngOnInit(): void {
    this.shared.getAll('partidos').subscribe({
      next: ((response: any) => {
        this.partidos = response.parties;
        console.log(this.partidos);
      })
    })
  }

  delete(id: string) {
    Swal.fire({
      title: '¿Está seguro de que desea borrar el partido político?',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Borrar',
    }).then((result) => {
      if (result.isConfirmed) {
        // Borrar partido
        console.log(id);
      }
    })
  }

}
