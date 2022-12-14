import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
      this.auth.autoLogin();
      //this.spinner.show();
      this.auth.autoLogin();
  }
  
}
