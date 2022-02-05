import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addattachment',
  templateUrl: './addattachment.component.html',
  styleUrls: ['./addattachment.component.scss'],
})
export class AddattachmentComponent implements OnInit {
  uploadedFiles: any[] = [];

  constructor() {}

  onUpload(event: any) {
    console.log('on upload : ',event)
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }
  onBeforeUpload(event: any){
    console.log('onBeforeUpload : ',event)
  }
  onSelect(event: any){
    console.log('onSelect : ',event)
  }

  ngOnInit(): void {}
}
