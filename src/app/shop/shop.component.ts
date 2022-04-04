import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
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
   type!:any
   beerCard!:Beer;
  constructor( private appService:AppService) { }

  ngOnInit() {
  }
  addSmall(form: NgForm) {
    this.type=form.value.small;
  }
  addMedium(form:NgForm){
    this.type=form.value.medium;
  }
selectCard(beer:Beer){
this.beerCard=beer;
}
  select(beers:any) {
    beers=this.beerCard;
    beers.type= this.type;
    this.selectedBeer.emit(beers);
  }

}
