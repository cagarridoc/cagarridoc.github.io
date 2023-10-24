import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {user} from '../app.models';
import { Animation,AnimationController } from '@ionic/angular';
import {ServicioService} from '../servicio.service';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.page.html',
  styleUrls: ['./acceso.page.scss'],
})
export class AccesoPage implements OnInit {
  
  user:any;
  password:any;
  private cargar:Animation={}as Animation;
  constructor(private router:Router,private AnimationCtrl:AnimationController,private authservi:ServicioService,private lgcontrol:LoadingController,private alControl:AlertController) {}

async validarUser(){
  const Loading = await this.lgcontrol.create();
  const alert = await this.alControl.create({
    header: 'Error (X)',
    subHeader: 'Credenciales inválidas',
    message: 'Por favor, ingrese credenciales válidas.',
    buttons: ['OK'],
  });
  await Loading.present()
  const usuario= this.authservi.loginUser(this.user,this.password).then(()=>{
    Loading.dismiss()
    this.router.navigate(['/home',this.user])
  }).catch((error)=>{Loading.dismiss()})
}
  ngOnInit() {
  }

}//fin