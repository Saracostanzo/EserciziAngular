import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from './app.service.module';
import { CountriesRoute } from './model/countriesRoute';

@Component({
  selector: 'esercizi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  keysName!:any;
  keysNum!:number;
  endPoints!:Array<any>;
  constructor(private appService: AppService) { }

  ngOnInit() {
     this.appService.getAll().subscribe((data)=>{
      this.keysName=Object.keys(data)
      this.keysNum=this.keysName.length
      this.endPoints=(Object.values(data))
     });


  }

}
