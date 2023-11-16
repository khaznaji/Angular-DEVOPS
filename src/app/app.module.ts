import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MenuFrontComponent } from './menu-front/menu-front.component';
import { AddComponent } from './Food/add/add.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ListComponent } from './Food/list/list.component';
import { UserlistComponent } from './Food/userlist/userlist.component';

 // Importez correctement votre service

@NgModule({
  declarations: [
    AppComponent,
   MenuComponent,
   MenuFrontComponent,
   AddComponent, ListComponent ,UserlistComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    BrowserModule,
    FormsModule,CommonModule,
    ReactiveFormsModule,
    AppRoutingModule, HttpClientModule // Assurez-vous que cette ligne est placée ici
  ],
  providers: [], // Ajoutez votre service dans le tableau providers
  bootstrap: [AppComponent],
})
export class AppModule { }
