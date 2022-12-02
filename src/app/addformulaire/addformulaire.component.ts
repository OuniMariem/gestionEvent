import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DBService } from '../db.service';

@Component({
  selector: 'app-addformulaire',
  templateUrl: './addformulaire.component.html',
  styleUrls: ['./addformulaire.component.css']
})
export class AddformulaireComponent implements OnInit {

  constructor( private db:DBService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    this.db.addPost(form.value)
    .then((data)=>{
      console.log(data);
    })
    .catch((err)=>{
      console.log(err);

    });
  }
  onCancel(){
    //this.router.navigate(['/home'])
  }

}
