import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TituloComponent } from './components/titulo/titulo.component';
import { DescripcionComponent } from './components/descripcion/descripcion.component';
import { TagComponent } from './components/tag/tag.component';
import { TagListComponent } from './components/tag-list/tag-list.component';
import { BoxComponent } from './components/box/box.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    DescripcionComponent,
    TagComponent,
    TagListComponent,
    BoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
