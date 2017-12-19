import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

// components
import { IndexComponent } from '../_components/index/index.component';
import { LoginComponent } from '../_components/login/login.component';
import { LoginEmailComponent } from '../_components/login-email/login-email.component';
import { SignupComponent } from '../_components/signup/signup.component';
import { MembersComponent } from '../_components/members/members.component';
import { BillsComponent } from '../_components/bills/bills.component';

// services
import { AuthGuard } from '../_services/auth.guard.service';

export const router: Routes = [

  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: '_c/login', component: LoginComponent },
  { path: '_c/signup', component: SignupComponent },
  { path: '_c/login-email', component: LoginEmailComponent },
  // { path: 'members', component: MembersComponent, canActivate: [AuthGuard] },
  { path: '_c/members', component: MembersComponent },
  { path: '_c/bills', component: BillsComponent },



  { path: '404', component: IndexComponent },
  { path: 'index', component: IndexComponent },
  { path: 'login', component: IndexComponent },
  { path: 'registry', component: SignupComponent },
  { path: 'login-email', component: LoginEmailComponent },    // angular router
  { path: 'members', component: MembersComponent },
  { path: 'bills', component: BillsComponent },

]

export const routers: ModuleWithProviders = RouterModule.forRoot(router);
