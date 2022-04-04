import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from '../app.service.module';
import { Beer } from '../model/beer';

@Component({
  selector: 'esercizi-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  @Input() beers: Beer[] = [];
  @Output() selectedBeer = new EventEmitter<Beer>();

  constructor() { }

  ngOnInit() {
  }

  select(beer: Beer) {
    this.selectedBeer.emit(beer);
  }
}
