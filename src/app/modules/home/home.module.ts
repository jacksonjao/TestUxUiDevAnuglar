import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import {HOME_ROUTING} from './home.routes';
import { CausesComponent } from './components/causes/causes.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { EventsComponent } from './components/events/events.component';
import { NewsComponent } from './components/news/news.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import {HomeService} from './home.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [HomeComponent, PresentationComponent, CausesComponent, GalleryComponent, EventsComponent, NewsComponent, SponsorsComponent],
  imports: [
    CommonModule,
    HOME_ROUTING,
    HttpClientModule
  ],
  providers: [HomeService]
})
export class HomeModule { }
