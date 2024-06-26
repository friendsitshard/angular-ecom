import { Component } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-section',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './product-section.component.html',
  styleUrl: './product-section.component.css'
})
export class ProductSectionComponent {

  constructor (public service: ItemsService){}

  items = this.service.getData()
}
