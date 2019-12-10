import {Component, Input, OnInit} from '@angular/core';
import {CauseModel} from '../../../../shared/model/cause';

@Component({
  selector: 'app-causes',
  templateUrl: './causes.component.html',
  styleUrls: ['./causes.component.scss']
})
export class CausesComponent implements OnInit {
  @Input() causes: CauseModel[];
  constructor() {
    this.causes = [
      {
        img: 'https://cdn.pixabay.com/photo/2015/08/05/13/55/children-876543_1280.jpg',
        title: 'Main Causes',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec\n' +
          '            tincidunt eleifend dapibus. Vestibulum\n' +
          '            adipiscing ut nibh et fermentum.',
      },
      {
        img: 'https://cdn.pixabay.com/photo/2015/03/04/13/43/old-man-658798_1280.jpg',
        title: 'Main Causes',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec\n' +
          '            tincidunt eleifend dapibus. Vestibulum\n' +
          '            adipiscing ut nibh et fermentum.',
      },
      {
        img: 'https://cdn.pixabay.com/photo/2017/11/06/15/30/elephant-2923917__480.jpg',
        title: 'Main Causes',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec\n' +
          '            tincidunt eleifend dapibus. Vestibulum\n' +
          '            adipiscing ut nibh et fermentum.',
      }
    ];
  }

  ngOnInit() {
  }

}
