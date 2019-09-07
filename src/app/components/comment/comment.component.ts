import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment;
  replies = []
  constructor(private elRef:ElementRef) { }

  ngOnInit() {
    // console.log(this.comment)
    const elem = this.elRef.nativeElement as HTMLElement;
    elem.firstElementChild.classList.add(`d${this.comment.depth}`);
    if(!this.comment.replies) return
    if(this.comment.replies === '') return
    // if(this.comment.replies.kind === "Listing") return
    const replies : Array<any> = this.comment.replies.data.children;
    console.log(replies)
    if(replies[0]) replies.forEach(i => this.replies.push(i.data))
    
  }

  toggleCollapsed = (event:Event) => {
    this.elRef.nativeElement.firstElementChild.classList.add(`collapsed`)
  }

}
