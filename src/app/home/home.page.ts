import { Component, OnInit } from '@angular/core';
import { ToastController, InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  todo:any = {
  };
  temp:any = [];
  constructor(private toastController: ToastController) {}

  ngOnInit(): void {
    this.temp
  }

  async logForm(form : any) {
    if (form.valid) {
      var alert = await this.toastController.create({
        message: `submitted successfully!`,
        duration: 1200,
        position: 'top',
        icon:'checkmark-outline',
        cssClass: 'success-toast'
      });

      this.temp.push({'title':this.todo.title, 'description':this.todo.description});
      await alert.present();
      form.resetForm();
    } else {
      for (const controlName in form.controls) {
        if (form.controls[controlName].invalid) {
          var alert = await this.toastController.create({
            message: `The ${controlName} field is Missing.`,
            duration: 1200,
            position: 'top',
            icon:'close-outline',
            cssClass: 'fail-toast'
          });
          await alert.present();
          break;
        }
    }
  }
  }


  remove(index: any) {
    console.log(this.temp);
    this.temp.splice(index,1);
    console.log(this.temp);
  }

  onIonInfinite(ev:any) {
    this.temp;
    console.log(this.temp)
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

  check(index: any) {
    return this.temp[index];
  }
}
