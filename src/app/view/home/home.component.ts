import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/template/header/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Start here',
      icon: 'cottage',
      routeUrl: '',
    };
  }
  navigate(path: string) {
    this.router.navigate([`${path}`]);
  }
}
