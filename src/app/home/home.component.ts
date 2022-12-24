import { Component,OnInit } from '@angular/core';
import { ServicenameService } from 'src/app/servicename.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  allusers:any [] = []
  searchKey: string = '';
  
  constructor(private apiservice:ServicenameService){ }

  ngOnInit(): void {
    this.getdata();
  }
  getdata(){
  this.apiservice.getdata()
  .subscribe((res:any)=>{
    console.log(res); 
    this.allusers = res.users
  })
}
  //search
  search(event: any) {
    this.searchKey = event.target.value;
  }
}
