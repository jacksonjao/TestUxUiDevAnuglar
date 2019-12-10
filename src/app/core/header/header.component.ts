import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {PageScrollService} from 'ngx-page-scroll-core';
import {DOCUMENT} from '@angular/common';
import {Router} from '@angular/router';
import {HeaderModel} from '../../shared/model/header';
import {SetThemeAction, UnsetThemeAction} from '../../store/theme/theme.actions';
import {AppState} from '../../store/app.reducer';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isOpen: boolean;
  isMobile: boolean;
  section: string;
  scrollPosY: number;
  isHiddenMenu: boolean;
  urlsNavigation: HeaderModel[];
  isDarkMode = false;
  constructor(private pageScrollService: PageScrollService,
              @Inject(DOCUMENT) private document: any,
              private router: Router,
              private store: Store<AppState>) {
    this.isOpen = false;
    this.section = '#presentation';
    this.scrollPosY = 0;
    this.isHiddenMenu = false;
    this.isMobile = this.document.documentElement.clientWidth <= 992;
    this.urlsNavigation = [
      {
        title: 'Home',
        url: '#presentation'
      },
      {
        title: 'Our causes',
        url: '#causes'
      },
      {
        title: 'Events',
        url: '#events'
      },
      {
        title: 'News',
        url: '#news'
      },
      {
        title: 'Directors',
        url: '#directors'
      },
      {
        title: 'Features',
        url: '#Features'
      },
      {
        title: 'Donate!',
        url: ''
      }

    ];
  }

  ngOnInit() {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '.theEnd',
    });
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.disableScroll();
    } else {
      this.enableScroll();
    }
  }

  goToPage(pageId) {
    this.router.navigate(['home']).then(() => {
      this.section = pageId;
      this.enableScroll();
      if (this.isMobile) {
        this.isOpen = false;
      }
      this.pageScrollService.scroll({
        document: this.document,
        scrollTarget: pageId,
        duration: 500,
      });
    });

  }

  disableScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    window.onscroll = () => {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }

  enableScroll() {
    window.onscroll = () => {
    };
  }

  changeTheme(isDarkMode: boolean) {
    if (isDarkMode) {
      this.store.dispatch(new SetThemeAction('dark-mode'));
    } else{
      this.store.dispatch(new UnsetThemeAction());

    }

  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const pos = this.document.documentElement.scrollTop;
    if (!this.isMobile) {
      const currentPos = pos;
      if (this.scrollPosY > currentPos) {
        this.isHiddenMenu = false;
      } else if (pos > 445) {
        this.isHiddenMenu = true;
      }
      this.scrollPosY = currentPos;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth <= 992) {
      this.isMobile = true;
      this.isHiddenMenu = false;
    } else {
      this.isOpen = false;
      this.isMobile = false;
      this.enableScroll();
    }
  }
}
