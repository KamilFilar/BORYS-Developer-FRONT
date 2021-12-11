import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import components
import { PageNotFoundComponent } from './modules/views/page-not-found/page-not-found.component';
import { HomeComponent } from './modules/views/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
