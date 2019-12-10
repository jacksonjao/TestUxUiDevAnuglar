import {Component, Input, OnInit} from '@angular/core';
import {SponsorModel} from '../../../../shared/model/sponsor';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {
  @Input() sponsors: SponsorModel[];
  counter = 0;
  sponsorsBackup: SponsorModel[];
  constructor() {
    this.sponsors = [
      {
        img: 'https://www.cocacolaespana.es/content/dam/journey/es/es/private/historia/love-coca-cola/2015/logo-coca-cola-lead.png',
      },
      {
        img: 'https://www.criptonoticias.com/wp-content/uploads/2016/06/Microsoft_Consensys_Identidad_Blockchain_Aplicaciones.png',
      },
      {
        img: 'https://www.dataversity.net/wp-content/uploads/2012/04/ap1.jpg',
      },
      {
        img: 'https://www.phonegatealert.org/wp-content/uploads/2019/07/Nokia-Logo-1080x675.jpg',
      },
      {
        img: 'https://www.gitex.com/__resource/companyProfiles/82940FE-D4F2-4162-98B6-166104446A1B-logo.png',
      }
    ];
  }

  ngOnInit() {
  }

  nextItem() {
    this.sponsorsBackup = [];
    let j = 0;
    for (let i = 0; i < this.sponsors.length; i++) {
      j++;
      if (j >= this.sponsors.length) {
        j = 0;
      }
      this.sponsorsBackup.push(this.sponsors[j]);
    }
    this.sponsors = this.sponsorsBackup;
  }

  previousItem() {
    this.sponsorsBackup = [];
    let j = this.sponsors.length-1;
    for (let i = 0; i < this.sponsors.length; i++) {
      if (j >= this.sponsors.length) {
        j = 0;
      }
      this.sponsorsBackup.push(this.sponsors[j]);
      j++;
    }
    this.sponsors = this.sponsorsBackup;
  }

}
