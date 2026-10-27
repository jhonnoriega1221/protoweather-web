import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls: ['./confirm-dialog.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ConfirmDialogComponent {

  //TODO: set data "any" type
  @Input() data:any;
  @Output() closeDialogViaComponent = new EventEmitter();

  public closeDialog(result?:boolean){
    if(result){
      this.closeDialogViaComponent.emit(result);
      return;
    }
    this.closeDialogViaComponent.emit(undefined);
  }

}
