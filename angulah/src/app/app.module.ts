import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import localeNl from '@angular/common/locales/nl';
import { EuroPipe } from './pipes/euro.pipe';

// the second parameter 'nl' is optional
registerLocaleData(localeNl, 'nl');

@NgModule({
	declarations: [AppComponent, EuroPipe], // componenten pipes directives
	imports: [BrowserModule, FormsModule, ReactiveFormsModule], // modules
	providers: [{ provide: LOCALE_ID, useValue: 'nl' }], // dependency injection & globale instellingen
	bootstrap: [AppComponent]
})
export class AppModule {}
