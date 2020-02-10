import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { ImagesComponent } from './images/images.component';
import { VideosComponent } from './videos/videos.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GalleryComponent,
    ImagesComponent,
    VideosComponent
  ]
})
export class GalleryModule { }
