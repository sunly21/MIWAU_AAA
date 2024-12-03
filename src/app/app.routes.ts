import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  { path: '', component: HomepageComponent }, // Página principal
  { path: 'shop', component: ProductListComponent } // Ruta para la tienda
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Importación de las rutas
  exports: [RouterModule]  // Exportar RouterModule para usar las rutas en otros módulos
})
export class AppRoutingModule { }
