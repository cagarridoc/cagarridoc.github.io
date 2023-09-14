import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {user} from '../app.models';
import { Animation,AnimationController } from '@ionic/angular';
@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.page.html',
  styleUrls: ['./acceso.page.scss'],
})
export class AccesoPage implements OnInit {
  usuarios:user[]=[
    {Id:1,nombre:'chiquitin',password:'Lrealotp'},
    {Id:2,nombre:'itsotroky',password:'noganktop'},
    {Id:3,nombre:'profe',password:'1234'}
  ]
  user:any;
  password:any;
  private cargar:Animation={}as Animation;
  constructor(private router:Router,private AnimationCtrl:AnimationController) {}

validarUser(){
  for(const i of this.usuarios){
    if(i.nombre===this.user){
      if(i.password===this.password){
        this.router.navigate(['/home',this.user])
      }
    }    
  }
}
  ngOnInit() {
  }

}//fin