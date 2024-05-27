import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { CategoriesComponent } from './categories/categories.component';
import { ItemComponent } from './item/item.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:"main-content", component: MainContentComponent},
    {path:"categories", component: CategoriesComponent},
    {path:"login", component: LoginComponent},
    {path:"", redirectTo:"/main-content", pathMatch:'full'},
    {path:"products/:id", component: ItemComponent}
];
