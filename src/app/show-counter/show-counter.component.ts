import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from '../app.service.module';

@Component({
  selector: 'esercizi-show-counter',
  templateUrl: './show-counter.component.html',
  styleUrls: ['./show-counter.component.css']
})
export class ShowCounterComponent implements OnInit {
 count$!: Observable<number>;

  constructor(public appservice:AppService) { }

  ngOnInit(): void {
this.count$=this.appservice.getAll()
  }

}
