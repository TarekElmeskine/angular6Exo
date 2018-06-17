import {Component} from '@angular/core';

@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.component.html'
})
export class Ex2Component {
  username = '';

  resetUsername() {
    this.username = '';
  }
  isUsernameEmpty(){
    return this.username === ''
  }
}
