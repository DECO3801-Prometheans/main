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


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
