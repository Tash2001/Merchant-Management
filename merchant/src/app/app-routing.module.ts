import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MerchantListComponent } from './merchant-list/merchant-list.component';
 import { UpdateMerchantComponent } from './update-merchant/update-merchant.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [

  {path:'', redirectTo: 'login',pathMatch: 'full'},
  {path:'home', component: HomeComponent,},

  {path: 'register', component: RegisterComponent,},


  {path: 'merchant-list', component: MerchantListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'update-merchant/:mid', component: UpdateMerchantComponent},
  {path: 'welcome-page', component: WelcomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
