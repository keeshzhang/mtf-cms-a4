import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//
// import * as $ from 'jquery';
// window['$'] = $;
// window['jQuery'] = $;

// angular html editer:
// https://github.com/froala/angular-froala-wysiwyg
// https://www.froala.com/wysiwyg-editor/docs/overview
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

// https://material.angular.io/components/checkbox/overview
import { MatIconModule, MatToolbarModule, MatMenuModule, MatCardModule,
  MatButtonModule, MatCheckboxModule, MatChipInputEvent, MatSelectModule,
  MatChipsModule} from '@angular/material';

// services
import { AuthGuard, AuthenticationService, UserService,
         BillService, ArticleService } from './_services/_index';
// import { AuthenticationService, UserService } from './_services/_index';

// directives
import { ArticleTagDirective } from './_directives/_index';

// components
import { AppComponent } from './app.component';
import { EmptyComponent, LoginComponent, SignupComponent,
         LoginEmailComponent, MembersComponent,
         BillsComponent, IndexComponent, ArticlePageComponent, ArticleListComponent } from './_components/_index';


import { routers } from './routers/app.router';

import { DateFormatPipe } from './_pipelines/_index';

@NgModule({
  declarations: [

    ArticleTagDirective,
    EmptyComponent,
    AppComponent,
    LoginComponent,
    SignupComponent,
    LoginEmailComponent,
    MembersComponent,
    IndexComponent,
    BillsComponent, ArticlePageComponent, ArticleListComponent,

    DateFormatPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
    MatIconModule, MatToolbarModule, MatMenuModule, MatCardModule, MatButtonModule,
    MatCheckboxModule, MatSelectModule,  MatChipsModule,
    routers
  ],
  providers: [
    AuthGuard,
    AuthenticationService, UserService, BillService, ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
