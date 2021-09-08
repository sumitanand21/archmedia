import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GalleryDialogComponent } from './dialogs/gallery-dialog/gallery-dialog.component';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  imageUrl = [
  {url: './assets/images/wedding.jpg' , tags: '#wedding #love #weddinginspo'},
  {url: './assets/images/rocks.jpg', tags: '#rocks #hard #bold'},
  {url: './assets/images/mist.jpg', tags: '#moist #heaven'},
  {url: './assets/images/mountainskies.jpg', tags: '#peak #inspiration'},
  {url: './assets/images/nature.jpg', tags: '#nature #life #uplift'},
  {url: './assets/images/paris.jpg', tags: '#love #effil'},

  {url: './assets/images/269530.jpg' , tags: '#wedding #love #weddinginspo'},
  {url: './assets/images/269548.jpg', tags: '#rocks #hard #bold'},
  {url: './assets/images/2204712.jpg', tags: '#moist #heaven'},
  {url: './assets/images/3200191.jpg', tags: '#peak #inspiration'},
  {url: './assets/images/amazing-universe-facebook-cover.jpg', tags: '#nature #life #uplift'},
  {url: './assets/images/coffee.jpg', tags: '#love #effil'},

  {url: './assets/images/colored-smoke.jpg' , tags: '#wedding #love #weddinginspo'},
  {url: './assets/images/conjucton.jpg', tags: '#rocks #hard #bold'},
  {url: './assets/images/ocean.jpg', tags: '#moist #heaven'},
  {url: './assets/images/redcc.jpg', tags: '#peak #inspiration'},
  {url: './assets/images/winter.jpg', tags: '#nature #life #uplift'},
  {url: './assets/images/world.jpg', tags: '#love #effil'},
  {url: './assets/images/wp1833197.jpg' , tags: '#wedding #love #weddinginspo'},
];
  ngOnInit(): void {
  }

  openGalleryModal(url) {

    const dialogRef = this.dialog.open(GalleryDialogComponent, {
      maxWidth: '80vw',
      maxHeight: '80vh',
      panelClass: 'display-model',
      data: { url }
    });
  }

}
