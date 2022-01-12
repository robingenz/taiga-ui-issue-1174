import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  TuiRootModule,
  TuiDialogModule,
  TuiLoaderModule,
  TuiSvgModule,
} from '@taiga-ui/core';
import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  PreviewDialogService,
  TuiPreviewModule,
} from '@taiga-ui/addon-preview';
import { TUI_DIALOGS } from '@taiga-ui/cdk';

export const PREVIEW_DIALOG_PROVIDER: Provider = {
  provide: TUI_DIALOGS,
  useExisting: PreviewDialogService,
  multi: true,
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TuiRootModule,
    BrowserAnimationsModule,
    TuiDialogModule,
    TuiPreviewModule,
    TuiLoaderModule,
    TuiSvgModule,
  ],
  providers: [PREVIEW_DIALOG_PROVIDER],
  bootstrap: [AppComponent],
})
export class AppModule {}
