import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
@Component({
    selector: 'app-weather-layout',
    templateUrl: './weather-layout.component.html',
    styleUrls: ['./weather-layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class WeatherLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
