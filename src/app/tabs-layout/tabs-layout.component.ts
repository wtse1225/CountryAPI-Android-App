import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tabs-layout',
  templateUrl: './tabs-layout.component.html',
  styleUrls: ['./tabs-layout.component.scss'],
})
export class TabsLayoutComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}
}
