import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animation,AnimationController} from '@ionic/angular';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
data:any;
private animacion:Animation = {}as Animation; 
  constructor(private route:ActivatedRoute,private animationctrl:AnimationController) {this.route.paramMap.subscribe((params)=>{
    this.data=params.get('fortnite')
  })}
  ngOnInit(){
    this.animacion=this.animationctrl.create().addElement(document.querySelectorAll(".wachiturro"))
      .duration(1500).iterations(Infinity).fromTo('opacity',0,1)
      this.animacion.play();
  }

}
