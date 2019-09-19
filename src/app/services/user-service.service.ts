import { Injectable } from '@angular/core';
import { Employee } from '../model/user';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  formData: Employee;
  constructor(private firestore: AngularFirestore) { }

  addUser(userData:Employee) {
      this.firestore.collection('employees').add(userData);
  }
  editUser(id,data){
    this.firestore.doc('employees/' + id).update(data);
  }
  getEmp(id){
  return this.firestore.doc('employees/' + id).valueChanges();
  }
  deleteEmp(id){
    this.firestore.doc('employees/' + id).delete();
  }
  getEmployees() {
    return this.firestore.collection('employees').snapshotChanges();
  }

  
 

 
}

