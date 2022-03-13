import { ModalLayoutComponent } from './modal-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalsRoutingModule } from './modals-routing.module';

@NgModule({
  declarations: [ModalLayoutComponent],
  imports: [CommonModule, ModalsRoutingModule]
})
export class ModalsModule {}
