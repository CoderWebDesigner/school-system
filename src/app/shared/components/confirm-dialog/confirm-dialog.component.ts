import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
})
export class ConfirmDialogComponent implements OnInit {
  @Input() dialogHeader!: string;
  @Input() width:string = '50vw';
  @Output() fireAccept = new EventEmitter()
  constructor(private confirmationService: ConfirmationService) {}

  ngOnInit(): void {}
  openConfirmDialog() {
    this.confirmationService.confirm({
      accept: () => {
        this.fireAccept.emit()
        //Actual logic to perform a confirmation
      },
    });
  }
}
