import { Component, OnInit,OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit,OnDestroy {
  data: Observable<any>;

  Nombre: string;
  Asignatura : String;
  Fecha: String;
  Asistencia : boolean = true;
  estilo: string;
  correo : String;

  constructor(private firestore: AngularFirestore, private navCtrl: NavController, private aroute:ActivatedRoute) { }
  ngOnDestroy(): void { this.apagarCamara()
  }
  apagarCamara(){
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
    document.querySelector('body').classList.remove('scanner-active');

  }
  async pedirPermiso(){
    try{
      const state= await BarcodeScanner.checkPermission({
        force:true
      })
      if (state.granted){return true};
      return false;
    }
    catch(error){console.log(error)}
  }
  async abrirCam(){
    try{
      const permiso= await this.pedirPermiso()
      if (!permiso){
        return;
      }
      this.estilo='hidden';
      await BarcodeScanner.hideBackground()
      document.querySelector('body').classList.add('scanner-active');
      const resultado=await BarcodeScanner.startScan();
      if (resultado?.hasContent){
        this.Asignatura=resultado.content;
        
      }
      try{
        this.AgregarDatos();
      }
      catch(error){console.log(error)}
      document.querySelector('body').classList.remove('scanner-active');
    }
    catch(error){
      console.log(error);
      this.apagarCamara();
    }
  }

  obtenerNombre(): Observable<any> {
    return this.firestore.collection('usuario', ref => ref.where('email', '==', this.correo)).valueChanges();
  }


  ngOnInit() {
    this.aroute.paramMap.subscribe(params => {
      this.correo = params.get('dato');
    });
    if (this.correo){
      console.log('pollo')
    }
    this.obtenerNombre().subscribe(array => {this.Nombre = array[0].nombre})
    const nau=new Date;
        this.Fecha=nau.toLocaleDateString();
        console.log(this.Nombre)
  }

  AgregarDatos() {
    const data = { nombre: this.Nombre, asignatura:this.Asignatura , fecha:this.Fecha , asistencia: this.Asistencia};
    this.firestore.collection('Asistencia').add(data)
      .then((docRef) => {
        console.log('Documento agregado con ID: ', docRef.id);
        this.navCtrl.back();
      })
      .catch((error) => {});
}

}
