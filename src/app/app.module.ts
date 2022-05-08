import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListBoxModule } from './components/list-box.module';



@NgModule({
  declarations: [    
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    ListBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
