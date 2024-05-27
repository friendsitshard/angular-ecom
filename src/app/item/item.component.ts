import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../services/items.service';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ProductSectionComponent } from "../product-section/product-section.component";
import { FeatureComponent } from "../feature/feature.component";

@Component({
    selector: 'app-item',
    standalone: true,
    templateUrl: './item.component.html',
    styleUrl: './item.component.css',
    imports: [NgIf, NgFor, NgClass, ProductSectionComponent, FeatureComponent]
})
export class ItemComponent {
  id:string|null = null;
  item:any = null;
  selectedColor: string|null = null;
  selectedSize: string|null = null;
  quantity: number = 1;

  constructor(private route:ActivatedRoute, private service: ItemsService){}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    if(this.id){
      this.item = this.service.getItem(Number(this.id))
    }
  }


  selectColor(color: string) {
    this.selectedColor = color;
  }

  selectSize(size: string) {
    this.selectedSize = size;
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart(){
    alert("added to cart")
  }
}
