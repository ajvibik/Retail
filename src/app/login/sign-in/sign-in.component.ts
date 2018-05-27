import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HeroService } from '../../service/common.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  isLoginError: boolean = false;
  constructor(private userService: UserService, private router: Router, private toastr: ToastrService, private http: HttpClient, private employee: HeroService) { }

  ngOnInit() {
  }

  OnSubmit(userName, password) {
    this.employee.userAuthentication(userName, password).subscribe((data: any) => {
      localStorage.setItem('userToken', data.token);
      this.router.navigate(['/home']);
    },
      (err: HttpErrorResponse) => {
        this.isLoginError = true;
        this.toastr.error("Please login again");
      });
  }

  getToken() {
    this.http.get('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe(data => {
        console.log(data)
      })
  };

        // Login Function
        getLogindetails(userName, password) {
          this.employee.userAuthentication(userName, password)
            .subscribe(
              restItems => {
                localStorage.setItem('userToken', restItems['token']);
                this.router.navigate(['/home']);
              },
              (err: HttpErrorResponse) => {
                this.isLoginError = true;
                this.toastr.error("Please login again");
              });
            }

}
