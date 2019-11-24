import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { UserRegistration } from '../user-registration';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private registerUserService : RegistrationService) { }

  ngOnInit() {
  }

  UserRegistration = [];
 
registerUser(emailId,mobNo){
  console.log("register user"+emailId , mobNo);
  var newUserRegistrationObj = {
    emailId : emailId,
    mobNo : mobNo
  }

  var res = this.registerUserService.registerUser(newUserRegistrationObj).subscribe(res => this.UserRegistration = res);

  console.log("registration comp register User"+res);
}

}
