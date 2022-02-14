import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  imports: [
    NgxEchartsModule.forRoot({
      /**
       * This will import all modules from echarts.
       * If you only need custom modules,
       * please refer to [Custom Build] section.
       */
      echarts: () => import('../home/home.page'), // or import('./path-to-my-custom-echarts')
    }),
  ],
})
export class AppModule {}