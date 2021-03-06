import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private _toaster: ToastrService){}                 

  showSuccess() {
    this._toaster.success('Hello world!', 'Toastr fun!');
  }
}
