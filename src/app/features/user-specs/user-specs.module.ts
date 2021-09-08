import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { UserSpecsRoutingModule } from './user-specs-routing.module';
import { UserSpecsComponent } from './user-specs.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GalleryDialogComponent } from './components/gallery/dialogs/gallery-dialog/gallery-dialog.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [UserSpecsComponent, GalleryComponent, GalleryDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    UserSpecsRoutingModule
  ],
  entryComponents: [GalleryDialogComponent]
})
export class UserSpecsModule { }
