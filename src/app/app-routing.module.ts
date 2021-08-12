import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwapComponent } from '../app/swap/swap.component';
import {HeaderComponent} from '../app/header/header.component';
import { PageNotFoundComponent } from '../app/page-not-found/page-not-found.component';
import { SwapV1V2Component } from './swapv1v2/swapv1v2.component';

const routes: Routes = [
  {
    path : '',
    component : SwapComponent
  },
  // {
  //   path : 'swap',
  //   component : SwapComponent
  // },
  {
    path : 'swap',
    component : SwapV1V2Component
  },
  {
    path : 'header',
    component : HeaderComponent
  },
  {
    path : '**',
    component : PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
