import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  data: Observable<any>;

  Nombre: String;
  Asignatura : String;
  Fecha: Date;
  Asistencia : boolean = true;

  constructor(private firestore: AngularFirestore, private navCtrl: NavController) { }

  ngOnInit() {
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
