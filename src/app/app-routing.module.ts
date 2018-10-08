import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleComponent } from './people/people.component';

const routes: Routes = [
  { path: 'people/:gender', component: PeopleComponent },
  { path: 'people', redirectTo: '/people/male', pathMatch: 'full' },
  { path: '', redirectTo: '/people/male', pathMatch: 'full' },
  { path: '**', component: PeopleComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
