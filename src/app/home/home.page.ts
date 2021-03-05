import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular'
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  nombreCompleto:String;
  telefono:String;
  correo:String;
  notas:String;
  contactos:Array<any>;
  verNotas:Boolean;

  constructor(public alertController: AlertController) {
    this.nombreCompleto=this.telefono=this.correo=this.notas="";
    this.contactos=[];
    this.verNotas=false;
  }

  async addcontacto(){
    if(this.nombreCompleto == ''){
      this.alertError('Como vas a dejar vacio el nombre...')
    }else if(this.telefono==''){
      this.alertError('Como vas a dejar vacio el telefono...')
    }else if(this.correo==''){
      this.alertError('Como vas a dejar vacio el correo...')
    }else if(this.notas==''){
      this.alertError('Como vas a dejar vacio el notas...')
    }else{
      let contacto = {
        nombreCompleto:this.nombreCompleto,
        telefono:this.telefono,
        correo:this.correo,
        notas:this.notas,
      }
      this.contactos.push(contacto);
      const alert = await this.alertController.create({
        header: 'Exito',
        message: 'Se añadio al contacto',
        buttons: ['OK']
      });
      await alert.present();
      
    }
  }
    
  

async deletecontacto(i) {
  const alert = await this.alertController.create({
    header: 'Eliminar contacto',
    message: '<strong>' + this.contactos[i].nombrecompleto+'</strong>?',
    buttons: [
      {
      text:'Cancelar',
      role: 'cancel',
      cssClass: 'secondary',
      handler: (blah)=>{
        console.log('Confirmar cancelacion: blah')
      }
    },{
      text:'Arre',
      handler: () =>{
        this.contactos.splice(i,1);
      }
    }]
  })
  await alert.present()
}
async alertError(error){
  const alert =await this.alertController.create({
    header: 'error puto',
    message: error,
    buttons: ['WENO']
  })
  await alert.present();
}


}
