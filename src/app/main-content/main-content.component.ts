import { Component } from '@angular/core';
import { CollectionComponent } from "../collection/collection.component";

@Component({
    selector: 'app-main-content',
    standalone: true,
    templateUrl: './main-content.component.html',
    styleUrl: './main-content.component.css',
    imports: [CollectionComponent]
})
export class MainContentComponent {

}
