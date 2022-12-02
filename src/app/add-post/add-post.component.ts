import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DBService } from '../db.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  constructor(private router:Router, private db:DBService) { }

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
    this.router.navigate(['/home'])
  }
  ngOnInit(): void {

  }

}
