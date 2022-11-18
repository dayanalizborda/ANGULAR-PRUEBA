import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { NgxSpinnerModule } from "ngx-spinner";
import { ErrorsInterceptor } from './interceptors/errors.interceptor';
import { InterceptorInterceptor } from './interceptors/interceptor.interceptor';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { TableModule } from 'primeng/table';
import { PartiesComponent } from './components/partidos/partidos.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HomeComponent,
    PartiesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    TableModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorsInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
