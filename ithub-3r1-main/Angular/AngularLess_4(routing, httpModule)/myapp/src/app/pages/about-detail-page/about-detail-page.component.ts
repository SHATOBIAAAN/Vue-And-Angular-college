import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductItemResponse } from '../../service/types/product.types';
import { ProductsService } from '../../service/products.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-about-detail-page',
  imports: [],
  templateUrl: './about-detail-page.component.html',
  styleUrl: './about-detail-page.component.css'
})
export class AboutDetailPageComponent implements OnInit {
  public productItem: ProductItemResponse;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    public productService: ProductsService
  ) { }

  public goBack(): void{
    this.location.back()
  }

  ngOnInit(): void {
    const productId = this.route.snapshot.params['id']
    this.productService.getProductById(productId)
      .subscribe({
        // случай если запрос успеншо выполнится
        next: (data) => {
          this.productItem = data
        },
        // случай если запрос вернет ошибку
        error: (error) => {
          // что делать если будет ошибка .....
          // Навигация до домашней страницы
          this.router.navigate([''])

          // Методы для вперед/назад
          // this.location.forward()
          // this.location.back()
        }
      })

}

}
