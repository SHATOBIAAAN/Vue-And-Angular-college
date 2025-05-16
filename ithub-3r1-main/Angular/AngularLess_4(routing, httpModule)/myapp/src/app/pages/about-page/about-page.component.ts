import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { ProductItemResponse } from '../../service/types/product.types';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-page',
  imports: [RouterLink],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent implements OnInit {
  public productService = inject(ProductsService)

  ngOnInit(): void {
    this.productService.getProducts()
  }

}
