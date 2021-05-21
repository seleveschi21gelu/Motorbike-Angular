import { MotorbikeService } from './../../services/motorbike.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.scss']
})
export class ViewRegistrationComponent implements OnInit {

  public motorbikeRegistration: any;

  constructor(private motorbikeService:MotorbikeService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getMotorbikeRegistration(this.route.snapshot.params.id);
  }

getMotorbikeRegistration(id:number){
  this.motorbikeService.getMotorbike(id).subscribe(
    data=>{this.motorbikeRegistration = data;
    },
    err=>console.error(err),
    ()=>console.log('motorbikes loaded')
  );
}

}
