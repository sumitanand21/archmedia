import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './components/gallery/gallery.component';
import { UserSpecsComponent } from './user-specs.component';

const routes: Routes = [
  { path : '', component: UserSpecsComponent,
  children: [
    { path: '', redirectTo: 'gallery', pathMatch: 'full' },
    { path: 'gallery', component: GalleryComponent },
  ]
},
{ path: '**', redirectTo: 'userview', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserSpecsRoutingModule { }
