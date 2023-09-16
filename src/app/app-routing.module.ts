import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCardComponent } from './my-card/my-card.component';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AppComponent
  },
  { path: 'home', component: UsersComponent },
  { path: 'my-card', component: MyCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
