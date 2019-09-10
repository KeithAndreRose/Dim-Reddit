import { Component, OnInit, Input, ElementRef, AfterViewInit } from '@angular/core';
import { RedditComment } from 'src/app/models/reddit-comment.model';

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit, AfterViewInit {

  // ! DATA NEEDS TO LOOK LIKE {kind: "t1", data: {...}} or {kind: "more", data: {}}
  @Input() comment : RedditComment;
  constructor(private elRef:ElementRef) { }

  ngOnInit() {
 
  }

  ngAfterViewInit(): void {
    const comment = this.comment.data;
    const elem = this.elRef.nativeElement as HTMLElement;
    elem.firstElementChild.classList.add(`d${comment.depth}`);
  }

  toggleCollapsed = (event:Event) => {
    this.elRef.nativeElement.firstElementChild.classList.toggle(`collapsed`)
  }

}
