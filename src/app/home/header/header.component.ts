import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  ProjectName = "boltzmann"
  user = {
    "userName":"Admin",
    "Loation":"Chennai"
  }
  constructor() { }

  ngOnInit() {
  }

}
