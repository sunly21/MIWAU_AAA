import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  getProducts(): never[] {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
