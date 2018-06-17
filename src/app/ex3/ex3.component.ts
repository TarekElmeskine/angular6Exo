import {Component} from '@angular/core';

@Component({
  selector: 'app-ex3',
  templateUrl: './ex3.component.html',
  styles:
    [`
      .atFifth {
      color: white;
    }
    `]
})
export class Ex3Component {
  showDetail = false;
  clickEvents = [];

  OnClickShowDetail() {
    this.clickEvents.push('The button has been clicked on ' + Date.now());
    return this.showDetail = !this.showDetail;
  }
}
