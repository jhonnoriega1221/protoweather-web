import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-back-title',
    templateUrl: './back-title.component.html',
    styleUrls: ['./back-title.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class BackTitleComponent {

  constructor( private _locationService:Location ){}

  @Input() includeBack:boolean = false;
  @Input() includeTitle:boolean = true;

  public goBack(){
    this._locationService.back();
  }

}
