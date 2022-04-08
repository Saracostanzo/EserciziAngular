import { Component, OnInit } from '@angular/core';
import { JokeServiceService } from '../joke-service&model/joke-service.service';
import { Comic } from '../joke-service&model/model';

@Component({
  selector: 'esercizi-joke-attuale',
  templateUrl: './joke-attuale.component.html',
  styleUrls: ['./joke-attuale.component.css']
})
export class JokeAttualeComponent implements OnInit {
  data!: Comic;

  like: Comic[] = [];
  dislike: Comic[] = [];

  saveLike(data: Comic) {
    return this.like?.push(data);
  }

  moveToDislike() {
    let elem = this.like.pop();
    this.dislike.push(elem as unknown as Comic);
  }

  moveToLike() {
    let elem = this.dislike.pop();
    this.like.push(elem as Comic);
  }

  saveDisLike(data: Comic) {
    return this.dislike?.push(data);
  }

  constructor(private jokeService: JokeServiceService) {}

  ngOnInit(): void {
    setInterval(() => {
        this.jokeService.getAll().subscribe((res) => {
          console.log(res)
          if(res.setup!==undefined){
            this.data = {
              set: res.setup ,
              dev: res.delivery,
            };
          }else{
            this.data = {
              set: res.joke ,
              dev: res.delivery,
            };
          }
        });
    }, 5000);
  }
}
