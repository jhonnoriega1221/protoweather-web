import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-nolocation-warning',
    templateUrl: './nolocation-warning.component.html',
    styleUrls: ['./nolocation-warning.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class NolocationWarningComponent implements OnInit {

  @Input() imageURL:string = '';
  @Input() title:string = '';
  @Input() message:string = '';

  constructor() { }

  ngOnInit(): void {
  }



}
