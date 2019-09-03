import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  constructor(private elRef:ElementRef<HTMLElement>) { }

  ngOnInit() {
  }

  toggle = (openState?)=> {
    const elem = (this.elRef.nativeElement.firstChild as HTMLElement);
    if(openState !== undefined){
      if(openState) return elem.classList.add('open')
      else return elem.classList.remove('open')
    }
      
    elem.classList.toggle('open');
  }

}
