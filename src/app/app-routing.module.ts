import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { MenuFrontComponent } from './menu-front/menu-front.component';
import { AddComponent } from './Food/add/add.component';
import { ListComponent } from './Food/list/list.component';
import { UpdateComponent } from './Food/update/update.component';
import { UserlistComponent } from './Food/userlist/userlist.component';


const routes: Routes = [


  { path :'front',component: MenuFrontComponent, children : [
    { path: 'user', component: UserlistComponent },





   
   ]},

  {path : '', component:MenuComponent, children : [
    { path: 'add', component: AddComponent },
    { path: 'list', component: ListComponent },
    { path: 'details/:id', component: UserlistComponent },

    { path: 'update/:id', component: UpdateComponent },


]},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
