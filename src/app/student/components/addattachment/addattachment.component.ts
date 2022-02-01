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
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }

  ngOnInit(): void {}
}
