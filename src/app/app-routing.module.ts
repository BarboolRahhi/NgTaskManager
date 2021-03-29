import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'intro', component: IntroComponent },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
