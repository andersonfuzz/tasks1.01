import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/template/header/header.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Do you remember what you ate yesterday?',
      icon: 'sports_esports',
      routeUrl: '/game',
    };
  }

  value = '';
  checked = {
    slideOne: true,
    slideTwo: false,
  };
  changeToggle(identifier: string) {
    if (identifier == 'one') {
      this.checked.slideOne = true;
      this.checked.slideTwo = false;
    } else {
      this.checked.slideOne = false;
      this.checked.slideTwo = true;
    }
  }
  navigate(path: string) {
    this.router.navigate([`${path}`]);
  }
}
