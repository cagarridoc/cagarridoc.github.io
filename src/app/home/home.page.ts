import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Animation,AnimationController} from '@ionic/angular';
import { OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { animate, style, transition, trigger } from '@angular/animations';
import { ServicioService } from '../servicio.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{
data:any;
private animacion:Animation = {}as Animation; 
private desplazar:Animation ={}as Animation;

  constructor(private router: Router,private authService: ServicioService,private route:ActivatedRoute,private animationctrl:AnimationController) {this.route.paramMap.subscribe((params)=>{
    this.data=params.get('fortnite')
  })}

  ngOnInit(){
    this.animacion=this.animationctrl.create().addElement(document.querySelectorAll(".wachiturro"))
      .duration(1500).iterations(Infinity).fromTo('opacity',0,1)
      this.animacion.play();
    this.desplazar=this.animationctrl.create().addElement(document.querySelectorAll(".desplazar"))
      .duration(1500).iterations(1).fromTo('transform','translateX(-200px)','translateX(0px)')
      this.desplazar.play();
  }


  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    }); 
  };
  salir(){
    this.authService.signOut()
    this.router.navigate(['']);
  }
}
//fin