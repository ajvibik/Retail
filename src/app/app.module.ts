import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ROUTING } from './app.routing';
import { FooterComponent } from './home/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './login//sign-in/sign-in.component';
import { ToastrModule } from 'ngx-toastr';
//import { AuthInterceptor } from './auth/auth.interceptor';
//import { AuthGuard } from './auth/auth.guard';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from './login//shared/user.service';
import { SalesComponent } from './home/contentPages/pos/sales/sales.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    HomeComponent,
    SignInComponent,
    SalesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    ROUTING,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    HttpClientModule
  ],
  // providers: [UserService,AuthGuard,
  //   ,
  //   {
  //     provide : HTTP_INTERCEPTORS,
  //     useClass : AuthInterceptor,
  //     multi : true
  //   }],
  bootstrap: [AppComponent]
})
export class AppModule { }
