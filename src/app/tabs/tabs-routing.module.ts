import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'results-list',
        loadChildren: () => import('../results-list/results-list.module').then( m => m.ResultsListPageModule)
      },
      {
        path: 'browse',
        loadChildren: () => import('../browse/browse.module').then( m => m.BrowsePageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'shopping-cart',
        loadChildren: () => import('../shopping-cart/shopping-cart.module').then( m => m.ShoppingCartPageModule)
      },
      {
        path: 'shopping-cart-modal',
        loadChildren: () => import('../shopping-cart-modal/shopping-cart-modal.module').then( m => m.ShoppingCartModalPageModule)
      },
      {
        path: 'pay-payment',
        loadChildren: () => import('../pay-payment/pay-payment.module').then( m => m.PayPaymentPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
