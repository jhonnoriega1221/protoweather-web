import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'pw-sky-gradient',
    templateUrl: './sky-gradient.component.html',
    styleUrls: ['./sky-gradient.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class SkyGradientComponent {

  @Input() actualHour:number = 0;
  @Input() isCloudy:boolean = false;

}
