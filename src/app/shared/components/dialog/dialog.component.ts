import { Component, Input, OnInit } from '@angular/core';
import { DialogService } from '../../services/dialog/dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @Input() display!:boolean;
  @Input() dialogHeader!: string;
  @Input() width:string = '50vw';
  constructor(private dialogService:DialogService) { }

  ngOnInit(): void {
    this.dialogService.currentDisplayValue.subscribe((result:any)=>{
      this.display = result
    })

  }
  hideModal(){
    this.dialogService.toggleDisplayDialog(false)
  }
}
