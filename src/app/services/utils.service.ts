import { Injectable } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  public loading: any;
  public modal: any;

  constructor(
    private pickerCtrl: PickerController,
    private loadingCtrl: LoadingController,
    private storage: Storage,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
  ) {
    storage.ready();
  }

  async openPicker(columns, buttons) {
    const picker = await this.pickerCtrl.create({
      columns: columns,
      buttons: buttons,
    });
    await picker.present();
  }

  async showLoading(setting) {
    this.loading = await this.loadingCtrl.create(setting);
    await this.loading.present()
  }

  hideLoading() {
    this.loading.dismiss();
  }

  setStorage(key: string, value: any) {
    this.storage.set(key, value);
  }

  getStorage(key: string) {
    return this.storage.get(key);
  }

  async presentAlert(setting: Object) {
    const alert = await this.alertCtrl.create(setting);
    await alert.present();
  }

  async showModal(component, props) {
    this.modal = await this.modalCtrl.create({
      component: component,
      componentProps: props,
    });
    return await this.modal.present();
  }

  disModal(messege) {
    this.modal.dismiss(messege);
  }
}
