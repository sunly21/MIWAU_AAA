import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products = [
    { name: 'Naxpet', price: 6990, image: 'assets/images/naxpet.png' },
    { name: 'Doximicin', price: 8500, image: 'assets/images/doximicin.png' },
    { name: 'Royal Canin', price: 40990, image: 'assets/images/royalcanin.png' },
    { name: 'Plato', price: 60, image: 'assets/images/plato.png' },
    { name: 'Simparica', price: 6490, image: 'assets/images/simparica.png' }
  ];

  getProducts() {
    return this.products;
  }
}

