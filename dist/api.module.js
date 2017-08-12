import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { Configuration } from './configuration';
import { DefaultService } from './api/default.service';
var ApiModule = (function () {
    function ApiModule() {
    }
    ApiModule.forConfig = function (configurationFactory) {
        return {
            ngModule: ApiModule,
            providers: [{ provide: Configuration, useFactory: configurationFactory }]
        };
    };
    ApiModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, HttpModule],
                    declarations: [],
                    exports: [],
                    providers: [DefaultService]
                },] },
    ];
    /** @nocollapse */
    ApiModule.ctorParameters = function () { return []; };
    return ApiModule;
}());
export { ApiModule };
//# sourceMappingURL=/Users/probinson/hackathon/obp/sdk/src/api.module.js.map