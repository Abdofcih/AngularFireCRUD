import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

import { UserServiceService } from '../services/user-service.service';
import { Employee } from '../model/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  list: Employee[];
  constructor(private service: UserServiceService,
    private firestore: AngularFirestore) { }

    ngOnInit() {
      this.service.getEmployees().subscribe(actionArray => {
        this.list = actionArray.map(item => {
          return {
            id: item.payload.doc.id,
            ...item.payload.doc.data()
          } as Employee;
        })
      });
    }
    onDelete(id: string) {
      if (confirm("Are you sure to delete this record?")) {
        this.service.deleteEmp(id);
      }
    }

}
