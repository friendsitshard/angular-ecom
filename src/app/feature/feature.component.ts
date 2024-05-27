import { Component } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [NgFor, NgIf,RouterLink],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.css'
})
export class FeatureComponent {

  constructor(public service: ItemsService){}

  items = this.service.getData()
}
