import { Component, OnInit } from '@angular/core';
import { user } from '../app.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recordar',
  templateUrl: './recordar.page.html',
  styleUrls: ['./recordar.page.scss'],
})
export class RecordarPage implements OnInit {
  usuarios:user[]=[
    {Id:1,nombre:'chiquitin',password:'Lrealotp'},
    {Id:2,nombre:'itsotroky',password:'noganktop'},
  ]
  user:any;
  constructor(private route:Router) {}
  RecoverUser(){
    for(const i of this.usuarios){
      if(i.nombre==this.user){
        this.route.navigate(['/acceso'])
      }
    }
  }

  ngOnInit() {
  }

}
