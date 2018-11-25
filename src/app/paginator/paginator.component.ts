import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input() numberOfPages: number;
  pages: Array<number>;           // For looping purpose

  @Output() pageChangedEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.pages = new Array(this.numberOfPages);  // For looping purpose
  }

  onPageChanged(index: number) {
    this.pageChangedEvent.emit(index);
  }
}
