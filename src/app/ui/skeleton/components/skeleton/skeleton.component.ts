import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'pw-skeleton',
    templateUrl: './skeleton.component.html',
    styleUrls: ['./skeleton.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class SkeletonComponent {

  @Input() width:string = '';
  @Input() height:string = '';
  @Input() padding:string = '12px';

}
