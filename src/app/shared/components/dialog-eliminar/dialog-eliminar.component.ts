import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-dialog-eliminar',
    templateUrl: './dialog-eliminar.component.html',
    styleUrls: ['./dialog-eliminar.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DialogEliminarComponent {
    @Input() data:any;
  @Output() destroyDialog = new EventEmitter();

  public closeDialog(){
    this.destroyDialog.emit('ola2');
  }

}
