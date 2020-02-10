import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavabrComponent } from './navabr/navabr.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentareaComponent } from './contentarea/contentarea.component';
import { FiltercompComponent } from './filtercomp/filtercomp.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';


import { from } from 'rxjs';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { GalleryModule } from './gallery/gallery.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavabrComponent,
    SidebarComponent,
    ContentareaComponent,
    FiltercompComponent,
    FilterPipe,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GalleryModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
