import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-weather-nav-button',
    templateUrl: './weather-nav-button.component.html',
    styleUrls: ['./weather-nav-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class WeatherNavButtonComponent implements OnInit {

  @Input() text:string = '';
  @Input() icon:string = '';
  @Input() url:string = '';
  @Input() isHidden:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
