import { Injectable } from '@angular/core';
import { pickerController } from '@ionic/core';
import { PickerController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private pickerCtrl: PickerController
  ) { }

  async openPicker(columns, buttons) {
    const picker = await this.pickerCtrl.create({
      columns: columns,
      buttons: buttons,
    });
    await picker.present();
  }
}
