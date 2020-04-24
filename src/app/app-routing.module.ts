import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { PageNotFoundComponent } from './shared/components';
import { AuthGuard } from './shared'
import { HomeRoutingModule } from './home/home-routing.module';
import { DetailRoutingModule } from './detail/detail-routing.module';

const routes: Routes = [
//  {
//    path: '',
//    redirectTo: 'home',
//    pathMatch: 'full'
//  },
//  {
//    path: '**',
//    component: PageNotFoundComponent
//  }
  {
    path: '',
    loadChildren: () => import('./layout/layout.module').then((m) => m.LayoutModule),
    canActivate: [AuthGuard]
  },
  { path: 'login', loadChildren: () => import('./login/login.module').then((m) => m.LoginModule) },
  { path: 'signup', loadChildren: () => import('./signup/signup.module').then((m) => m.SignupModule) },
  {
    path: 'error',
    loadChildren: () => import('./server-error/server-error.module').then((m) => m.ServerErrorModule)
  },
  {
    path: 'access-denied',
    loadChildren: () => import('./access-denied/access-denied.module').then((m) => m.AccessDeniedModule)
  },
  { path: 'not-found', loadChildren: () => import('./not-found/not-found.module').then((m) => m.NotFoundModule) },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomeRoutingModule,
    DetailRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
