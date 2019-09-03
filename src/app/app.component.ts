import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavComponent } from './shared/sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // Side Navigation Component
  @ViewChild(SidenavComponent, {static: false})
  private sidnav: SidenavComponent;

  constructor(){
  }
  
  ngOnInit(): void {}

  toggleSideNav = () => this.sidnav.toggle()

}
