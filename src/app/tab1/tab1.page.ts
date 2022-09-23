import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public objectSchedule = [
        {
            "id": 1,
            "date": "2022-09-30",
            "note": "Teste Teset",
            "amount": 55.97,
            "type": null,
            "customer": {
                "id": 3,
                "name": "Natalia Lima",
                "note": "Sobrancelha Renah",
                "filename": null,
                "phone": "(21) 987766-4477"
            },
            "service": {
                "id": 3,
                "name": "Cilios volume brasileiro",
                "description": "",
                "amount": 85
            }
        },
        {
            "id": 2,
            "date": "2022-09-22",
            "note": "Teste Teset",
            "amount": 190,
            "type": null,
            "customer": {
                "id": 3,
                "name": "Ramon Lima",
                "note": "Sobrancelha Renah",
                "filename": null,
                "phone": "(21) 987766-4477"
            },
            "service": {
                "id": 3,
                "name": "Sobrancelhas limpeza",
                "description": "",
                "amount": 85
            }
        }
    ]
  public winwidth = 0
  constructor(platform: Platform, private router: Router) {
    platform.ready().then(() => {
      this.winwidth = platform.width();
    });
  }

  ngOnInit() {
    
    // this.GeneralService.getApiDestaques().subscribe(
    //   data => {
    //     const response = (data as any);
    //     this.objectCards = response;
    // })
  
  }

}
