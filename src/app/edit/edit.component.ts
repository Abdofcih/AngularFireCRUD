import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { UserServiceService } from '../services/user-service.service';
import { Employee } from '../model/user';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
 id:string;
 formData: Employee;
  constructor(private service:UserServiceService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    
    this.service.getEmp(this.id).subscribe(res => {
      this.formData = res as Employee;
    })
  }
  onSubmit(form: NgForm){
    this.service.editUser(this.id,form.value);
    this.router.navigate(['/home'])
  }
}
