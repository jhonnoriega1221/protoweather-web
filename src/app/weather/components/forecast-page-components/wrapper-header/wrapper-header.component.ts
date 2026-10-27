import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-wrapper-header',
    templateUrl: './wrapper-header.component.html',
    styleUrls: ['./wrapper-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class WrapperHeaderComponent implements OnInit {

  @Input() text:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
