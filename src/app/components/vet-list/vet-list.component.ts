import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Importa RouterModule

@Component({
  selector: 'app-vet-list',
  standalone: true,
  imports: [CommonModule, RouterModule], // Agrega RouterModule aquí
  templateUrl: './vet-list.component.html',
  styleUrls: ['./vet-list.component.scss'],
})
export class VetListComponent {
  veterinarias = [
    {
      name: 'Clínica VetCan',
      image: '/vet1.jpg',
      contact: '/contact-vet1',
    },
    {
      name: 'Centro Animalia',
      image: '/vet2.jpg',
      contact: '/contact-vet2',
    },
    {
      name: 'PetCare',
      image: '/vet3.jpg',
      contact: '/contact-vet3',
    },
  ];
}


