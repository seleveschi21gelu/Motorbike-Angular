import { CallbackComponent } from './components/callback/callback.component';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
  path:'admin/view/:id',
  component: ViewRegistrationComponent

  },
  
  {
    path: 'admin',
    component: AdminComponent,
    
  },
  {
    path:'callback',
    component: CallbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
