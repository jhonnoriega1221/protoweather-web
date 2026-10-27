import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { WeatherCode } from 'src/app/weather/models/weatherCode';

@Component({
    selector: 'app-actual-weather-background',
    templateUrl: './actual-weather-background.component.html',
    styleUrls: ['./actual-weather-background.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ActualWeatherBackgroundComponent{

  @Input() actualDate:string = '';
  @Input() weatherCodeData!:WeatherCode;

  setHour():number {
    return Number.parseInt(this.actualDate.split(', ', 2)[1].split(':', 2)[0]);
  }
}
