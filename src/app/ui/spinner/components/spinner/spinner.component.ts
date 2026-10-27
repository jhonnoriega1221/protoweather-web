import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'pw-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class SpinnerComponent {
  @Input() size:'small'|'normal'|'large' = 'normal';
  @Input() color!:'primary'|'error';
}
