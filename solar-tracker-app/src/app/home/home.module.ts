import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import {NgChartsModule} from 'ng2-charts'
import { NgxEchartsModule } from 'ngx-echarts';

import 'chartjs-plugin-zoom';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    NgApexchartsModule,
    NgChartsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
