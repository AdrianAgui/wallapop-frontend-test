import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearcherComponent } from './searcher/searcher.component';
import { GridComponent } from './grid/grid.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SearcherComponent, GridComponent],
  imports: [CommonModule],
  exports: [HeaderComponent]
})
export class ComponentsModule {}
