import { Component } from '@angular/core';
import { TMerchantService } from '../t-merchant.service';
import { TMerchant } from '../t-merchant';

@Component({
  selector: 'app-merchant-list',
  templateUrl: './merchant-list.component.html',
  styleUrls: ['./merchant-list.component.css']
})
export class MerchantListComponent {

  merchants?: TMerchant[];

  constructor(private tMerchantService: TMerchantService) { }

  ngOnInit(): void {
    this.getMerchants();
  }

  getMerchants(): void {
    this.tMerchantService.getAll().subscribe({
      next:(data)=>{this.merchants = data; 
        console.log(data);
    },error:(e)=>console.error(e)});
  }

  

  
}
