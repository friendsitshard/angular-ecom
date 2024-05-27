import { Component } from '@angular/core';
import { CollectionComponent } from "../collection/collection.component";
import { ProductSectionComponent } from "../product-section/product-section.component";
import { FashionComponent } from "../fashion/fashion.component";
import { FeatureComponent } from "../feature/feature.component";

@Component({
    selector: 'app-main-content',
    standalone: true,
    templateUrl: './main-content.component.html',
    styleUrl: './main-content.component.css',
    imports: [CollectionComponent, ProductSectionComponent, FashionComponent, FeatureComponent]
})
export class MainContentComponent {

}
