import {Component, Input, OnInit} from '@angular/core';
import {ContactModel} from '../../../../shared/model/contact';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
 @Input() urlMap: any;
  constructor(private sanitizer: DomSanitizer) {
    window.scrollTo(0, 0);
    this.urlMap = sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24190.724615111267!2d-74.01299937951332!3d40.72152590246128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259885419838b%3A0x2d39c2f6ed6db3c!2sLower%20Manhattan%2C%20Nueva%20York%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sco!4v1575849479934!5m2!1ses-419!2sco')
  }

  ngOnInit() {
  }

}
