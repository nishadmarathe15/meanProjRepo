import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myMeanApp';

  register(email,mobno){
    console.log(email,mobno);
  }
    
  }

