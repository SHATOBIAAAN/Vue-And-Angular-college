import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AboutDetailPageComponent } from './pages/about-detail-page/about-detail-page.component';

export const routes: Routes = [
    {redirectTo: 'home', path: '', pathMatch: 'full'}, // редирект с '/' на '/home'
    {component: HomePageComponent, path: 'home'},
    {component: AboutPageComponent, path: 'about'},
    {component: AboutDetailPageComponent, path: 'about/:id'},
    {component: ContactsPageComponent, path: 'contacts'},
    {component: NotFoundComponent, path: '**'},
];
