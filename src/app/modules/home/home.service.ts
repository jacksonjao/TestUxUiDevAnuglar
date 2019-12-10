import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {PresentationModel} from '../../shared/model/presentation';
import {CauseModel} from '../../shared/model/cause';
import {GalleryModel} from '../../shared/model/gallery';
import {EventModel} from '../../shared/model/event';
import {NewsModel} from '../../shared/model/news';
import {SponsorModel} from '../../shared/model/sponsor';

@Injectable()
export class HomeService {
  endpoint: string;
  constructor(private httpClient: HttpClient) {
  this.endpoint = environment.API;
  }

  getPresentation(): Observable<PresentationModel> {
  return this.httpClient.get<PresentationModel>(`${this.endpoint}/presentation.json`);
  }

  getCauses(): Observable<CauseModel> {
    return this.httpClient.get<CauseModel>(`${this.endpoint}/causes.json`);
  }

  getGallery(): Observable<GalleryModel> {
    return this.httpClient.get<GalleryModel>(`${this.endpoint}/gallery.json`);
  }

  getEvents(): Observable<EventModel> {
    return this.httpClient.get<EventModel>(`${this.endpoint}/events.json`);
  }

  getNews(): Observable<NewsModel> {
    return this.httpClient.get<NewsModel>(`${this.endpoint}/news.json`);
  }
  getSponsors(): Observable<SponsorModel> {
    return this.httpClient.get<SponsorModel>(`${this.endpoint}/sponsors.json`);
  }
}

