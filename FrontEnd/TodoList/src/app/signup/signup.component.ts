import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private service: ServiceService , private router: Router) {}
  errmsg: any;
  errmsgshow = false;
  signupForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),

  });
  ngOnInit(): void {}
  signupSubmit() {
    if (this.signupForm.valid) {
      //console.log(this.signupForm.value,'signupForm##');
      this.errmsgshow = false;
      //callapisignupHttpResponse<any>
      this.service
        .signup(this.signupForm.value)
        .subscribe((res: HttpResponse<any>) => {
          console.log(res.status, 'responsestatu##');
          console.log(res, 'resilt');
          if (res.status == 201) {
            this.router.navigate(['signIn']);
          } else {
            this.errmsgshow = true;
          }
        });
    } else {
      this.errmsgshow = true;
      this.errmsg = 'All field required!!';
    }
  }

}
