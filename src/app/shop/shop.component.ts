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
  beers$!: Observable<Beer[]>
  @Input() beers: Beer[] = [];
  selectedBeer!:number;
  selectedType!:any;
  input!:Beer;
  constructor(private appService: AppService) { }

  ngOnInit() {
      this.beers$ = this.appService.getAll();
  }
  submit(form: NgForm) {
    this.selectedBeer=form.value.Id
    this.selectedType=form.value.Type
    console.log(this.selectedBeer, this.selectedType)
    this.input= this.appService.get(this.selectedBeer, this.selectedType)
    console.log(this.input)
}

}
