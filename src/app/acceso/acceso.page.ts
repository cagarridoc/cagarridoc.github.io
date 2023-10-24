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

ngOnInit() {
  } 
async validarUser(){
  const Loading = await this.lgcontrol.create();
  const alert = await this.alControl.create({
    header: 'Error (X)',
    subHeader: 'Credenciales inválidas',
    message: 'Por favor, ingrese credenciales válidas.',
    buttons: ['OK'],
  });
  await Loading.present()
  const usuario = await this.authservi.loginUser(this.user,this.password).catch((error) => {
    Loading.dismiss()
  })
  if(usuario){
    Loading.dismiss()
    this.router.navigate(['/home',this.user])
  }else{
    console.log('provide correct values');
    
  }
}
}//fin