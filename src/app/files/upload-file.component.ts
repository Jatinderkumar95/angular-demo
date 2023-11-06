import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent {
  progress!: number;

  @Output() public onUploadFinished = new EventEmitter();


  upload(files: any) {
    if(files.length == 0)
    return;
  let file  : File= <File>files[0];
let formData = new FormData();
formData.append('file',file,file.name);
    
  }
}
