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
        path: 'cvv',
        loadChildren: () => import('../cvv/cvv.module').then( m => m.CvvPageModule)
      },
      {
        path: 'group-purchase',
        loadChildren: () => import('../group-purchase/group-purchase.module').then( m => m.GroupPurchasePageModule)
      },
      {
        path: 'group-purchase-timeout',
        loadChildren: () => import('../group-purchase-timeout/group-purchase-timeout.module').then( m => m.GroupPurchaseTimeoutPageModule)
      },
      {
        path: 'group-purchase-sold',
        loadChildren: () => import('../group-purchase-sold/group-purchase-sold.module').then( m => m.GroupPurchaseSoldPageModule)
      },
      {
        path: 'group-purchase-product-details',
        loadChildren: () => import('../group-purchase-product-details/group-purchase-product-details.module').then( m => m.GroupPurchaseProductDetailsPageModule)
      },
      {
        path: 'group-purchase-amount',
        loadChildren: () => import('../group-purchase-amount/group-purchase-amount.module').then( m => m.GroupPurchaseAmountPageModule)
      },
      {
        path: 'confirmation',
        loadChildren: () => import('../confirmation/confirmation.module').then( m => m.ConfirmationPageModule)
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
