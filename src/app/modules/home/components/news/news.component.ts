import {Component, Input, OnInit} from '@angular/core';
import {EventModel} from '../../../../shared/model/event';
import {NewsModel} from '../../../../shared/model/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  @Input() news: NewsModel[];
  constructor() {
    this.news = [
      {
        img: 'https://cdn.pixabay.com/photo/2016/01/24/12/53/indian-1158803_1280.jpg',
        title: 'Contrary to popular belief, Lorem Ipsum is not simply random',
        paragraph: 'Aliquam erat volutpat. Aenean sagittis dui vestibulum quam\n' +
          '            accumsan viverra. Mauris velit dolor, posuere non tempor eu.',
        date: '31 Nov , 2020',
        numberOfComments: 3
      },
      {
        img: 'https://cdn.pixabay.com/photo/2016/10/08/14/51/travel-1723863_1280.jpg',
        title: 'Contrary to popular belief, Lorem Ipsum is not simply random',
        paragraph: 'Aliquam erat volutpat. Aenean sagittis dui vestibulum quam\n' +
          '            accumsan viverra. Mauris velit dolor, posuere non tempor eu.',
        date: '31 Nov , 2020',
        numberOfComments: 3
      },
      {
        img: 'https://cdn.pixabay.com/photo/2015/10/12/15/26/woman-984537_1280.jpg',
        title: 'Contrary to popular belief, Lorem Ipsum is not simply random',
        paragraph: 'Aliquam erat volutpat. Aenean sagittis dui vestibulum quam\n' +
          '            accumsan viverra. Mauris velit dolor, posuere non tempor eu.',
        date: '31 Nov , 2020',
        numberOfComments: 3
      }
    ];
  }

  ngOnInit() {
  }

}
