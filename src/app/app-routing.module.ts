import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalleryComponent }   from './gallery/gallery.component';
import { FiltercompComponent }   from './filtercomp/filtercomp.component';
import { PagenotfoundComponent }   from './pagenotfound/pagenotfound.component';


const appRoutes: Routes = [
  { path: 'gallery', component: GalleryComponent },
  { path: 'filter', component: FiltercompComponent },
  { path: 'pageNotFound', component: PagenotfoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
