import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotComponent } from './forgot/forgot.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    FlexLayoutModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
