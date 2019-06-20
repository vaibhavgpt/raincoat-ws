import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SearchTagsComponent } from './search-tags/search-tags.component';

@NgModule({
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule, MatExpansionModule],
  declarations: [AppComponent, HelloComponent, SearchTagsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
