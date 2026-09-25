import { Component } from '@angular/core';
import { Products } from './products';

@Component({
  imports: [],
  selector: 'app-products-section',
  styleUrl: './products-section.css',
  templateUrl: './products-section.html',
})
export class ProductsSection {
    products: Products[] = [
    {
      title: 'Polymers',
      imageUrl: 'img/polymers.png' // Modifica por la ruta real de tu proyecto
    },
    {
      title: 'Chemicals',
      imageUrl: 'img/chemicals.png' // Modifica por la ruta real de tu proyecto
    }
  ];
}
