import { Component, effect, inject, signal, ViewChild } from '@angular/core';
import { ProductsData } from '../../core/services/products-data';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCard, MatCardContent } from '@angular/material/card';
import { CurrencyPipe, NgOptimizedImage, TitleCasePipe } from '@angular/common';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { Product } from '../../core/models/product-model';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-admin-view-product-list',
    imports: [
        MatProgressSpinnerModule,
        MatTableModule,
        MatCard,
        MatCardContent,
        TitleCasePipe,
        CurrencyPipe,
        NgOptimizedImage,
        MatSortModule,
        MatPaginatorModule
    ],
  templateUrl: './admin-view-product-list.html',
  styleUrl: './admin-view-product-list.scss'
})
export class AdminViewProductList {
    private productsData = inject(ProductsData)

    protected isLoadingProductList = this.productsData.productList.loading;
    protected displayedColumns = ['id', 'category', 'title', 'price', 'image' ];
    protected productList = signal<MatTableDataSource<Product>>(new MatTableDataSource<Product>([]));

    @ViewChild(MatSort) set matSort(sort: MatSort) {
        const currentDataSource = this.productList();
        if (currentDataSource && sort) {
            currentDataSource.sort = sort;
        }
    }
    @ViewChild(MatPaginator) set matPaginator(paginator: MatPaginator) {
        const currentDataSource = this.productList();
        if (currentDataSource && paginator) {
            currentDataSource.paginator = paginator;
        }
    }

    constructor() {
        effect(() => {
            const products = this.productsData.productList.data();
            if (products) {
                const newDataSource = new MatTableDataSource(products);
                this.productList.set(newDataSource);
            }
        });
    }
}
