import {Component, Renderer2} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from './store/app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TestUXUIDev-angular';
constructor(private renderer: Renderer2,  private store: Store<AppState>) {
  this.store.select('theme').subscribe( (theme) => {
    this.changeTheme(theme.name);
  });
}

  changeTheme(theme) {
    if (theme === 'dark-mode') {
      this.renderer.addClass(document.body, 'dark-mode');
    } else {
      this.renderer.removeClass(document.body, 'dark-mode');
    }
  }

}
