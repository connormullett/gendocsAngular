import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { 
  MatToolbarModule ,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';

import { AuthService } from './services/auth.service';
import { ProfileComponent } from './components/profile/profile.component';
import { DocIndexComponent } from './components/docs/doc-index/doc-index.component';
import { DocsService } from './services/docs.service';

const routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'me', component: ProfileComponent },
  { path: '**', component: RegistrationComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HeaderComponent,
    ProfileComponent,
    DocIndexComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [
    AuthService,
    DocsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
