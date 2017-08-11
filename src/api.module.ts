import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { Configuration } from './configuration';

import { Func_1_2_1Service } from './api/func121.service';
import { Func_1_3_0Service } from './api/func130.service';
import { Func_1_4_0Service } from './api/func140.service';
import { Func_2_0_0Service } from './api/func200.service';
import { Func_2_1_0Service } from './api/func210.service';
import { Func_2_2_0Service } from './api/func220.service';
import { Func_3_0_0Service } from './api/func300.service';

@NgModule({
  imports:      [ CommonModule, HttpModule ],
  declarations: [],
  exports:      [],
  providers:    [ Func_1_2_1Service, Func_1_3_0Service, Func_1_4_0Service, Func_2_0_0Service, Func_2_1_0Service, Func_2_2_0Service, Func_3_0_0Service ]
})
export class ApiModule {
    public static forConfig(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ {provide: Configuration, useFactory: configurationFactory}]
        }
    }
}
