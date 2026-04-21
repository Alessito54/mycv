import { NgModule } from '@angular/core';
@NgModule()
export class AngularFireModule {
    static initializeApp(config: any) {
        return { ngModule: AngularFireModule, providers: [] };
    }
}
