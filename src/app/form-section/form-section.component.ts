import { Component, OnInit } from '@angular/core';
import { ResumeFormData } from '../Model/ResumeFormData';

@Component({
  selector: 'app-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.css']
})
export class FormSectionComponent implements OnInit {

  formData: ResumeFormData;
  showResume: boolean = false;

  constructor() {
    this.formData = {
      firstName: "",
      middleName: "",
      lastName: ""
   }
  }
  ngOnInit(): void {
  }

  saveFormData() {
    console.log(this.formData);
    localStorage.setItem("formData", JSON.stringify(this.formData));
    this.showResume = true;
  }

}
