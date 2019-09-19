import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Employee } from '../model/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(private service:UserServiceService){}
  formData: Employee;
  resetForm(form?: NgForm) {
    if (form != null)
    form.resetForm();
    this.formData={
      id:null,
      fullName: '',
      userName: '',
      position: '',
      age: null,
      mobile: ''
      
     }
    }
    ngOnInit() {
      this.resetForm();
    } 
    onSubmit(form: NgForm){
      delete form.value.id;
      this.service.addUser(form.value);
      this.resetForm(form);
    }
  }
 
 

