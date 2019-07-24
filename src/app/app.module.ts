import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule,
         ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
    LocationStrategy,
    HashLocationStrategy,
    // PathLocationStrategy
} from '@angular/common';
import {APP_BASE_HREF} from '@angular/common';

// App Modules
import { AppRoutingModule } from './routes/routing.module';
import { AppMaterialModule } from './modules/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

// Pipes
import { SafePipe } from './pipes/safe.pipe';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
// import { AboutUsComponent } from './components/about-us/about-us.component';
// import { ContactUsComponent } from './components/contact-us/contact-us.component';
// import { ApplyComponent } from './components/apply/apply.component';
import { CoursesComponent } from './components/courses/courses.component';
import { DashSliderComponent } from './components/courses/dashslider/dashslider.component';
import { CourseCardComponent,
         NgbdModalContent} from './components/courses/course-card/course-card.component';
import { NgbdModalTerms } from './modal-terms-conditions/modal-terms-conditions.component';

@NgModule({
  declarations: [
    AppComponent,
    NgbdModalTerms,
    HomeComponent,
    CoursesComponent,
  // AboutUsComponent,
  // ContactUsComponent,
  // ApplyComponent,
    DashSliderComponent,
    CourseCardComponent,
    NgbdModalContent,
    SafePipe
  ],
  entryComponents: [NgbdModalContent, NgbdModalTerms],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppMaterialModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
      { provide: APP_BASE_HREF, useValue: '/' },
      { provide: LocationStrategy, useClass: /*PathLocationStrategy*/ HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
