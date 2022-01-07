import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TuiRootModule, TuiDialogModule, TuiLoaderModule, TuiSvgModule } from "@taiga-ui/core";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TuiPreviewModule } from "@taiga-ui/addon-preview";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TuiRootModule,
    BrowserAnimationsModule,
    TuiDialogModule,
    TuiPreviewModule,
    TuiLoaderModule,
    TuiSvgModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
