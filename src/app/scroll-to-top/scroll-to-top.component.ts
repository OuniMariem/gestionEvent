import { DOCUMENT } from '@angular/common';
import { Inject, OnInit } from '@angular/core';
import { Component, VERSION } from '@angular/core';


@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.css']
})
export class ScrollToTopComponent implements OnInit {

  name = 'Angular ' + VERSION.major;
  constructor(@Inject(DOCUMENT) private document: Document) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  scrollToTop(): void {
    // scroll to the top of the body
    return this.document.body.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start'
    });
  }
}
