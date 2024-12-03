import { Component } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent, NavbarComponent, FooterComponent, RouterModule],
  template: `
    <app-navbar></app-navbar>
    <div class="featured-image">
      <img src="/featured-image.jpg" alt="Imagen destacada" />
    </div>
    <div class="main-container">
      <app-product-list></app-product-list>
    </div>
    <router-outlet></router-outlet> <!-- Este es el problema resuelto -->
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MIWAU';
}
