import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public customers = [
    {
        "id": 1,
        "name": "Josefina Braga",
        "note": "Unha de acrigel",
        "filename": null,
        "phone": "(21) 991122-2544"
    },
    {
        "id": 2,
        "name": "Ramon Lima",
        "note": "",
        "filename": null,
        "phone": "(21) 994200869"
    },
    {
        "id": 3,
        "name": "Clemilda Prato",
        "note": "Sobrancelha Renah",
        "filename": null,
        "phone": "(21) 987766-4477"
    },
    {
        "id": 4,
        "name": "Vassoura",
        "note": "pernas cabeludas",
        "filename": null,
        "phone": "(11) 96666-8787"
    }
  ]

  constructor() {}

}
