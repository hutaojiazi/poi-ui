import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public pageContent = {
    header : {
      title : 'About Wonder Lands',
      strapline : ''
    },
    content : 'Wonder Lands was created to help people find places to sit down and get a bit of work done.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit.'
  };

}
