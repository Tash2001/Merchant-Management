import { Component } from '@angular/core';
import { TMerchant } from '../t-merchant';
import { TMerchantService } from '../t-merchant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  merchants?: TMerchant[];

  constructor(private tMerchantService: TMerchantService,
    private router:Router) { }

  ngOnInit(): void {
    this.getMerchants();
  }

  getMerchants(): void {
    this.tMerchantService.getAll().subscribe({
      next:(data)=>{this.merchants = data; 
        console.log(data);
    },error:(e)=>console.error(e)});
  }

  deleteMerchant(mid: any) {

    this.tMerchantService.deleteMerchant(mid).subscribe(data=>{
      console.log(data);
      this.getMerchants();
    });
}


updateMerchant(mid: any) {
  this.router.navigate(['update-merchant', mid]);
  // this.tMerchantService.updateMerchant(data,mid).subscribe(result => "merchat updated");


}

}