import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavBarComponent } from './navigation/nav-bar/nav-bar.component';
// import { FormDataComponent } from './form-data/form-data.component';
import { FormSectionComponent } from './form-section/form-section.component';
import { ResumePreviewComponent } from './resume-preview/resume-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    // FormDataComponent,
    FormSectionComponent,
    ResumePreviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
