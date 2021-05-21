import { MotorbikeService } from './../../services/motorbike.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  models:string[] = [
    'Globo MTB 29 Full Suspension',
    'Globo Carbon Fiber Race Series',
    'Globo Time Trial Blade'
  ];

  motorbikeform!:FormGroup ;
  validMessage: string ="";
  constructor(private motorbikeService:MotorbikeService) { }

  ngOnInit(): void {
    this.motorbikeform =new FormGroup({
    
      name: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      phone: new FormControl('',Validators.required),
      model:new FormControl('',Validators.required),
      serialNumber:new FormControl('',Validators.required),
      purchasePrice:new FormControl('',Validators.required),
      purchaseDate:new FormControl('',Validators.required),
      contact: new FormControl()


  });


}

submitRegistration(){
  if(this.motorbikeform?.valid){
    this.validMessage = "Your motorbike registration has been submitted. Thank you!";
    this.motorbikeService.createMotorbikeRegistration(this.motorbikeform.value).subscribe(
      data => {
        this.motorbikeform?.reset();
        return true;
      },
      error =>{
        return Observable.throw (error);
        
      }
    )
  }else{ this.validMessage ="Please fill out the form before submitting";}
}
}
