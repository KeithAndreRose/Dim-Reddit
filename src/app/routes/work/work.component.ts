import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  resData = []

  constructor() {
  }
  
  ngOnInit() {
    fetch('https://www.reddit.com/r/EroticArt.json')
    .then(response => response.json())
    .then(myJson => this.handleResData(myJson));
  }

  handleResData(data){
    const items = data.data.children
    items.forEach(element => {
      this.resData.push(element.data);
    });
  }

}
