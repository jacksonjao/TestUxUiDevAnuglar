import {Component, Input, OnInit} from '@angular/core';
import {GalleryModel} from '../../../../shared/model/gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input() gallery: GalleryModel[];

  constructor() {
    this.gallery = [
      {
        img: 'https://cdn.pixabay.com/photo/2013/02/16/16/00/children-82272_1280.jpg',
      },
      {
        img: 'https://cdn.pixabay.com/photo/2016/01/03/09/33/indian-1119222_1280.jpg',
      },
      {
        img: 'https://cdn.pixabay.com/photo/2017/06/16/10/25/lady-2408609_1280.jpg',
      }
    ];
  }

  ngOnInit() {
  }

}
