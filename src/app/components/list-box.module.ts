import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { TagComponent } from './tag/tag.component';
import { TagListComponent } from './tag-list/tag-list.component';
import { TituloComponent } from './titulo/titulo.component';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { BoxComponent } from './box/box.component';
import { BoxlistComponent } from './boxlist/boxlist.component';




@NgModule({
  declarations: [TagComponent,TagListComponent,TituloComponent,DescripcionComponent,BoxComponent,BoxlistComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[BoxlistComponent]
})
export class ListBoxModule { }
