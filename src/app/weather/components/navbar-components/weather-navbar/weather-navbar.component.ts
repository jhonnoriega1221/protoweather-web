import { Component, Input, OnInit, HostListener, ChangeDetectionStrategy } from '@angular/core';

interface NavbarItem {
  text:string;
  icon:string;
  url:string;
}

@Component({
    selector: 'app-weather-navbar',
    templateUrl: './weather-navbar.component.html',
    styleUrls: ['./weather-navbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class WeatherNavbarComponent implements OnInit {

  public navbarItems:NavbarItem[] = [
    { text: 'Inicio', icon: 'home', url: '/' },
    { text: 'Buscar', icon: 'search', url: '/search'},
    { text: 'Favoritos', icon: 'star', url: '/favorites' },
    { text: 'Ajustes', icon: 'cog', url: '/settings' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
