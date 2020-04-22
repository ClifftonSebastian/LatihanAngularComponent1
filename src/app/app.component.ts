import { Component } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Cliffton';

  constructor(private router : Router){};

  Input(){
    this.router.navigate(['/input']);
  }
  Edit(){
    this.router.navigate(['/edit']);
  }
  List(){
    this.router.navigate(['/list']);
  }
}