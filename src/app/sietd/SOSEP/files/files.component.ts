import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {
uploader = [
    {name: "Archivo 1", size: 15220, progress: 100},{name: "Archivo 1", size: 15220, progress: 100}];

  constructor() { }

  ngOnInit() {
  }

}
