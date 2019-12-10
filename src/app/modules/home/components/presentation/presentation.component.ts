import {Component, Input, OnInit} from '@angular/core';
import {PresentationModel} from '../../../../shared/model/presentation';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {
  @Input() presentation: PresentationModel;
  constructor() {
    this.presentation = {
     title: 'Creative Clean Charity Design',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan pretium leo ut consectetur. Vestibulum a mattis ipsum. Nunc turpis velit, consequat quis ipsum eu, fermentum adipiscing ligula.',
     img: 'https://cdn.pixabay.com/photo/2015/08/05/13/55/children-876543_1280.jpg'
    };
  }
  ngOnInit() {
  }

}
