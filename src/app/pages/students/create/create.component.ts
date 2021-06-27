import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  createForm: FormGroup;
  submitted = false;
  titulo = 'Student Application';
  loading = false;
  listStudents:any = [];
  constructor(private formBuilder: FormBuilder) { 
    this.createForm = this.formBuilder.group({
      name: ['', Validators.required], 
      patronus: ['', [Validators.required]],
      age : ['', Validators.required],
      image: ['', Validators.required],
  });
  }

  ngOnInit(): void {
    var storedstudents:any = localStorage.getItem("students");
    this.listStudents = JSON.parse(storedstudents);
  }
  get f() { return this.createForm.controls; }
 
    onSubmit() {
      this.submitted = true;
      if (this.createForm.invalid) {
          return;
      }
      this.listStudents.push(this.createForm.value);
      localStorage.setItem('students', JSON.stringify(this.listStudents));
      this.createForm.reset();
      alert('Created application, we will be in contact.');
    }
}
