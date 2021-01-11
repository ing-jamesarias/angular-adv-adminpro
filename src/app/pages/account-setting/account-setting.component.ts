import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styles: []
})
export class AccountSettingComponent implements OnInit {



  constructor(private settingServices: SettingsService) { }

  ngOnInit() {

    this.settingServices.checkCurrentTheme();

  }

  changeTheme(theme: string) {


    this.settingServices.changeTheme(theme);


  }


}
