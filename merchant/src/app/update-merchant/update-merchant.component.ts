import { Component, OnInit } from '@angular/core';
import { TMerchant } from '../t-merchant'; 
import { ActivatedRoute, Router } from '@angular/router';
import { TMerchantService } from '../t-merchant.service'; 

@Component({
  selector: 'app-update-merchant',
  templateUrl: './update-merchant.component.html',
  styleUrls: ['./update-merchant.component.css']
})
export class UpdateMerchantComponent implements OnInit {
  mid: any;
  merchant: TMerchant = new TMerchant();

  constructor(
    private tmerchantService: TMerchantService, // Adjust the service name
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    //get pariculate the merchant mid
    this.mid = this.route.snapshot.params['mid'];
    this.tmerchantService.get(this.mid).subscribe(
      data => {
        this.merchant = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  updateMerchant() {
    this.tmerchantService.updateMerchant(this.mid, this.merchant).subscribe(
      data => {
        this.gotoMerchant();
      },
      error => {
        console.log(error);
      }
    );
  }

  gotoMerchant() {
    this.router.navigate(['/merchant-list']); 
  }
}

  
  



