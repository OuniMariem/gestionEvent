import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-ico',
  templateUrl: './contact-ico.component.html',
  styleUrls: ['./contact-ico.component.css']
})
export class ContactIcoComponent implements OnInit {

  constructor() {}
  
  ngOnInit() {}
  
  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
}
