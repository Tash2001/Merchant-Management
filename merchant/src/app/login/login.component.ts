import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TMerchant } from '../t-merchant';
import { TMerchantService } from '../t-merchant.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  temp_password ?: string ;
  merchant!: TMerchant;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tmerchantSevices: TMerchantService
  ) {
    this.merchant = new TMerchant();
  }

  



  Login(mid: any, password: any) {
    //get pariculate the merchant mid
    // mid = this.route.snapshot.params['mid'];
    //console.log(mid);

    
    this.temp_password=password;
    this.tmerchantSevices.get(mid).subscribe(
      (data) => {
        console.log("inside data");
        console.log(data);
        console.log(mid)

        
        password = this.route.snapshot.params['password'];
       
        console.log("inside password assing : " + data.password);

        if (data.password === this.temp_password) {
          console.log('inside password true');
          this.router.navigate(['/home']);
        }else{
          console.log(data.password  , this.temp_password)
          console.log(' invalid password ')
        }
        
  
      
      
      
      },
      


      (error) => {
        console.log("inside error");
      }


    

    );


  

    
    //get pariculate the merchant mid

    // console.log(password);

    // console.log(this.pw);

    
  }

  Signup() {
    this.router.navigate(['/register']);
  }
}
