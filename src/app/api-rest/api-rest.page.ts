import { Component, OnInit } from '@angular/core';
import { pokeapi } from '../pokeapi.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-api-rest',
  templateUrl: './api-rest.page.html',
  styleUrls: ['./api-rest.page.scss'],
})
export class ApiRestPage implements OnInit {

  data: any[] = [];
  cont : number = 1;

  constructor(private navCtrl: NavController  ,private apiservice: pokeapi) { }

  ngOnInit() {
    this.next()
  }

  llenarData(pagina:any){this.apiservice.getData(pagina).subscribe((data) =>{
    this.data = data.results;

  })
}
  next(){
    this.llenarData(this.cont)
    this.cont++;
  }

  volver(){
    this.navCtrl.back();
  }
}
