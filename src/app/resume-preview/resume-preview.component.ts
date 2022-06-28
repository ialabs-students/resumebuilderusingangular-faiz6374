import { Component, OnInit } from '@angular/core';
import { ResumeFormData } from '../Model/ResumeFormData';

@Component({
  selector: 'app-resume-preview',
  templateUrl: './resume-preview.component.html',
  styleUrls: ['./resume-preview.component.css']
})
export class ResumePreviewComponent implements OnInit {

  formData: ResumeFormData;
  constructor() {
    let data = (localStorage.getItem("formData") ? localStorage.getItem("formData") : "{}") as string;
    this.formData = JSON.parse(data);
   }

  ngOnInit(): void {
  }

}
