import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TMerchant } from '../t-merchant';
import { ActivatedRoute, Router } from '@angular/router';
import { TMerchantService } from '../t-merchant.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  merchant!: TMerchant;

  rePassword?: string;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private tmerchantSevices: TMerchantService) {
    this.merchant = new TMerchant();
  }

  onSubmit() {
    this.tmerchantSevices.save(this.merchant).subscribe(result => this.gotoUserList());
  }


  gotoUserList(){
    this.router.navigate(['/login']);
  } 

}
 