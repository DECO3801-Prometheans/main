import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./cover/cover.module').then( m => m.CoverPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'results-list',
    loadChildren: () => import('./results-list/results-list.module').then( m => m.ResultsListPageModule)
  },
  {
    path: 'forget',
    loadChildren: () => import('./forget/forget.module').then( m => m.ForgetPageModule)
  },
  {
    path: 'cover',
    loadChildren: () => import('./cover/cover.module').then( m => m.CoverPageModule)
  },
  {
    path: 'front',
    loadChildren: () => import('./front/front.module').then( m => m.FrontPageModule)
  },
  {
    path: 'register-farmer',
    loadChildren: () => import('./register-farmer/register-farmer.module').then( m => m.RegisterFarmerPageModule)
  },
  {
    path: 'register-user',
    loadChildren: () => import('./register-user/register-user.module').then( m => m.RegisterUserPageModule)
  },
  {
    path: 'verification',
    loadChildren: () => import('./verification/verification.module').then( m => m.VerificationPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'recently-viewed-products',
    loadChildren: () => import('./recently-viewed-products/recently-viewed-products.module').then( m => m.RecentlyViewedProductsPageModule)
  },
  {
    path: 'upload-products',
    loadChildren: () => import('./upload-products/upload-products.module').then( m => m.UploadProductsPageModule)
  },
  {
    path: 'product-detail',
    loadChildren: () => import('./product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },
  {
    path: 'shopping-cart',
    loadChildren: () => import('./shopping-cart/shopping-cart.module').then( m => m.ShoppingCartPageModule)
  },
  {
    path: 'shopping-cart-modal',
    loadChildren: () => import('./shopping-cart-modal/shopping-cart-modal.module').then( m => m.ShoppingCartModalPageModule)
  },
  {
    path: 'add-payment',
    loadChildren: () => import('./add-payment/add-payment.module').then( m => m.AddPaymentPageModule)
  },
  {
    path: 'exp-date',
    loadChildren: () => import('./exp-date/exp-date.module').then( m => m.ExpDatePageModule)
  },
  {
    path: 'cvv',
    loadChildren: () => import('./cvv/cvv.module').then( m => m.CvvPageModule)
  },
  {
    path: 'pay-payment',
    loadChildren: () => import('./pay-payment/pay-payment.module').then( m => m.PayPaymentPageModule)
  },
  {
    path: 'group-purchase',
    loadChildren: () => import('./group-purchase/group-purchase.module').then( m => m.GroupPurchasePageModule)
  },
  {
    path: 'group-purchase-timeout',
    loadChildren: () => import('./group-purchase-timeout/group-purchase-timeout.module').then( m => m.GroupPurchaseTimeoutPageModule)
  },
  {
    path: 'group-purchase-sold',
    loadChildren: () => import('./group-purchase-sold/group-purchase-sold.module').then( m => m.GroupPurchaseSoldPageModule)
  },
  {
    path: 'group-purchase-product-details',
    loadChildren: () => import('./group-purchase-product-details/group-purchase-product-details.module').then( m => m.GroupPurchaseProductDetailsPageModule)
  },
  {
    path: 'group-purchase-amount',
    loadChildren: () => import('./group-purchase-amount/group-purchase-amount.module').then( m => m.GroupPurchaseAmountPageModule)
  },
  {
    path: 'confirmation',
    loadChildren: () => import('./confirmation/confirmation.module').then( m => m.ConfirmationPageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
