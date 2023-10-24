import { Component, OnInit } from '@angular/core';
import { user } from '../app.models';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicioService } from '../servicio.service';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-recordar',
  templateUrl: './recordar.page.html',
  styleUrls: ['./recordar.page.scss'],
})
export class RecordarPage implements OnInit {
  user:any;
  constructor(private route:Router,public formBuilder:FormBuilder, public loadingCtrl: LoadingController, public authService:ServicioService) {}

  ngOnInit() {
  }

  async reset(){
    this.authService.resetPassword(this.user)
    this.route.navigate(['/acceso'])
  }
}
