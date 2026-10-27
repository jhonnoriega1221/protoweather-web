import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
@Component({
    selector: 'app-confirm-dialog-pw',
    templateUrl: './confirm-dialog-pw.component.html',
    styleUrls: ['./confirm-dialog-pw.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ConfirmDialogPwComponent {

  @Input() data:any;
  @Output() closeDialogViaComponent = new EventEmitter();

  public closeDialog(result?:any){
    if(!result){
      this.closeDialogViaComponent.emit(undefined);
      return;
    }
    this.closeDialogViaComponent.emit(result);
  }
}
