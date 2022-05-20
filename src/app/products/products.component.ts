import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  productid:number = 0

  constructor(private activate:ActivatedRoute) {
    this.activate.params.subscribe((params)=>{
      this.productid = params.id
    })
  }

  ngOnInit(): void {
  }

}
