import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { AppService } from '../app.service.module';
import { Beer } from '../model/beer';

@Component({
  selector: 'esercizi-detail-beer',
  templateUrl: './detail-beer.component.html',
  styleUrls: ['./detail-beer.component.css']
})
export class DetailBeerComponent implements OnInit {

  beer$!: Observable<Beer>;

  constructor(private route: ActivatedRoute, private appService: AppService) { }

  ngOnInit() {
    // this.beer$ = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) => this.appService.get(+params.get('id')!))
    // );
  }

  submit(project: Beer) {
    console.log(project);
    // this.projectService.update(project)
  }
}
