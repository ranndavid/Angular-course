import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
export interface Book {
  id: number;
  title: string;
  author: string;
  language: string;
  publicationDate: string;
  publisher: string;
  status: string;
}

const BOOK_DATA: Book[] = [
  { id: 1, title: 'Book One', author: 'Author One', language: 'English', publicationDate: '1998', publisher: 'Angkor', status: 'Available' },
  { id: 2, title: 'Book Two', author: 'Author Two', language: 'English', publicationDate: '2000', publisher: 'Angkor', status: 'Not For Loan' },
  { id: 3, title: 'Book Three', author: 'Author Three', language: 'Khmer', publicationDate: '2002', publisher: 'Angkor', status: 'Lost' },
  { id: 4, title: 'Book Four', author: 'Author Four', language: 'Khmer', publicationDate: '2005', publisher: 'Angkor', status: 'Available' },
];

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
         CommonModule,
         MatTableModule,
         MatPaginatorModule,
         MatSortModule,
         MatButtonModule
          
  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  
})
export class MenuComponent {
  displayedColumns: string[] = ['id', 'title', 'author', 'language', 'publicationDate', 'publisher', 'status'];
  dataSource = new MatTableDataSource<Book>(BOOK_DATA);
  selectedItem: Book | null = null;

  onRowClick(row: Book) {
    this.selectedItem = row;
  }

  closeDetail() {
    this.selectedItem = null;
  }
}
