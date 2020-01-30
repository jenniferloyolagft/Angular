import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreedsComponent } from './breeds/breeds.component';
import { BreedDetailComponent } from './breed-detail/breed-detail.component';

const routes: Routes = [
  { path: 'breeds', component: BreedsComponent },
  { path: '', redirectTo: '/breeds', pathMatch: 'full' },
  // { path: 'breed-detail', component: BreedDetailComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
