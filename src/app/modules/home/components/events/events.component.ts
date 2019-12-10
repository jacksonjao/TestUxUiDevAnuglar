import {Component, Input, OnInit} from '@angular/core';
import {EventModel} from '../../../../shared/model/event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  @Input() events: EventModel[];
  constructor() {
    this.events = [
      {
        img: 'https://cdn.pixabay.com/photo/2014/04/02/14/48/children-306607_1280.jpg',
        title: 'Contrary to popular belief, Lorem Ipsum is not simply random',
        paragraph: 'Aliquam erat volutpat. Aenean sagittis dui vestibulum quam\n' +
          '            accumsan viverra. Mauris velit dolor, posuere non tempor eu.',
        month: 'Jun',
        day: 20,
      },
      {
        img: 'https://cdn.pixabay.com/photo/2016/01/03/10/11/indian-1119255_1280.jpg',
        title: 'Contrary to popular belief, Lorem Ipsum is not simply random',
        paragraph: 'Aliquam erat volutpat. Aenean sagittis dui vestibulum quam\n' +
          '            accumsan viverra. Mauris velit dolor, posuere non tempor eu.',
        month: 'Jun',
        day: 17,
      },
      {
        img: 'https://cdn.pixabay.com/photo/2016/10/05/17/26/indian-1717192_1280.jpg',
        title: 'Contrary to popular belief, Lorem Ipsum is not simply random',
        paragraph: 'Aliquam erat volutpat. Aenean sagittis dui vestibulum quam\n' +
          '            accumsan viverra. Mauris velit dolor, posuere non tempor eu.',
        month: 'Jun',
        day: 14,
      }
    ];

  }

  ngOnInit() {
  }

}
