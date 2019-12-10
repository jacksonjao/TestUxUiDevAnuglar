import { Component, OnInit } from '@angular/core';
import {EventModel} from '../../../../shared/model/event';
import {CauseModel} from '../../../../shared/model/cause';
import {GalleryModel} from '../../../../shared/model/gallery';
import {NewsModel} from '../../../../shared/model/news';
import {HomeService} from '../../home.service';
import {PresentationModel} from '../../../../shared/model/presentation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  presentation: PresentationModel;
  causes: CauseModel;
  gallery: GalleryModel;
  events: EventModel;
  news: NewsModel;
  constructor(private homeService: HomeService) {
    this.homeService.getPresentation().subscribe(result => this.presentation = result );
    this.homeService.getCauses().subscribe(result => this.causes = result );
    this.homeService.getGallery().subscribe(result => this.gallery = result );
    this.homeService.getEvents().subscribe(result => this.events = result );
    this.homeService.getNews().subscribe(result => this.news = result );

  }
  ngOnInit() {
  }

}
