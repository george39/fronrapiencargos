import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


// Modulos

import { HomeComponent } from './components/home/home.component';


// Rutas
import { APP_ROUTES } from './app.routes';
import { NopagefoundComponent } from './components/nopagefound/nopagefound.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { BreadcrumbsComponent } from './components/shared/breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { PagesComponent } from './components/pages/pages.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SectionComponent } from './components/shared/section/section.component';


// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NopagefoundComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    SidebarComponent,
    PagesComponent,
    FooterComponent,
    SectionComponent,
    
    
  ],
  imports: [
    BrowserModule,
    APP_ROUTES
    // FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
