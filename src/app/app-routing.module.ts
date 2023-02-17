import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { DetailsComponent } from './details/details.component';
import { NewComponent } from './new/new.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path: '',
    component: BodyComponent,
  },
  {
    path: 'users',
    component: BodyComponent,
  },
  {
    path: 'newuser',
    component: NewComponent,
  },
  {
    path: 'users/:id/edit',
    component: UpdateComponent,
  },
  {
    path: 'users/:id',
    component: DetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
