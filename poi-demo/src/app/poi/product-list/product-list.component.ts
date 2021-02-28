import { Component, OnInit } from '@angular/core';
import { ProductService } from "../services/ProductService";
import { Product, Products } from "../models/product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService) { }

  public products: Product[];

  public message: string;

  public pageContent = {
    header: {
      title: 'Wonder Lands',
      strapline: 'Check our great products designed just for you!'
    },
    sidebar: 'Any Questions? We are here to help!'
  }

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts(): void {
    this.message = 'Searching for products';
    this.productService.getAll()
        .then(
            (data: Products) => {
              this.message = data.value.length > 0 ? '' : 'No product found';
              this.products = data.value;
            },
            (error) => console.log(error)
        );
  }

}
