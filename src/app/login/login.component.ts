import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public showTable: boolean;
  public user: any;
  public agents:Array<any> = [{
    "code": "GVM",
    "value": "Gowrivakkam"
  }]

  loginVerify(user){
    if(user.username == "admin" && user.password =="admin" && user.agentDetail){
      this.showTable = true;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
