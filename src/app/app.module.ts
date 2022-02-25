import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { ComponentsModule } from './components/components.module';
import { RouterModule } from '@angular/router';
import { ModalsModule } from './modals/modals.module';

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, BrowserModule, AppRoutingModule, HttpClientModule, RouterModule, PagesModule, ComponentsModule, ModalsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
