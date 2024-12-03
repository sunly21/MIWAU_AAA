import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-product-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products = [
    { name: 'Collar para perro', price: 7990, image: '/product1.png' },
    { name: 'Comida para gato - 1kg', price: 5500, image: '/product2.png' },
    { name: 'Comida para perro cachorro - 15kg', price: 21790, image: '/product3.png' }
];

}

