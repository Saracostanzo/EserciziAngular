import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from './app.service.module';
import { Beer } from './model/beer';

@Component({
  selector: 'esercizi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  beers$!: Observable<Beer[]>;

  selectedBeer!: Beer;

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit() {
      this.beers$ = this.appService.getAll();
  }

  selectBeer(project: Beer) {
    this.router.navigate(['/shop', 'detail', project.id]);
  }
}
