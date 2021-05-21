import { MotorbikeService } from './../../services/motorbike.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public motorbikes: any;

  constructor(private motorbikeService : MotorbikeService) { }

  ngOnInit(): void {
    this.getMotorbikes();
  }
  getMotorbikes(){
    this.motorbikeService.getMotorbikes().subscribe(
      data=>{this.motorbikes=data},
      err=>console.error(err),
      ()=>console.log('motorbikes loaded')
    );
  }

}
