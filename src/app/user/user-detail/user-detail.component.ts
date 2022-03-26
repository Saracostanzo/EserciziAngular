import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'esercizi-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  users$!: Observable<User>;

  constructor(private route: ActivatedRoute, private userService: DataService) { }

  ngOnInit() {
    this.users$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.userService.getUrser(+params.get('order')!))
    );
  }
}
