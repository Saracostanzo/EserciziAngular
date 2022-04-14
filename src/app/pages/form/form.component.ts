import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Gender } from 'src/app/models/interfaccia';
import { DashboardService } from '../service/dashboard.service';

@Component({
  selector: 'esercizi-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
val!:string;
val1!:string;
iters!:Gender;
array:Gender[]=[];
  constructor(private dashboardService: DashboardService,) { }

  ngOnInit(): void {
  }
addNewValue(form:NgForm){
  this.val=form.value.filter;
  console.log(this.val)
  this.dashboardService.get(this.val).subscribe((res)=>{
    this.iters= res;
    (console.log(this.iters))
  this.array.push(this.iters)
  console.log(this.array)
})
}
removeAll(){
  this.array=[]
}
remove(){
  //metodo pop non implementato

}
}
