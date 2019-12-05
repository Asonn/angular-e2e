import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import localeNl from '@angular/common/locales/nl';
import { EuroPipe } from './pipes/euro.pipe';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { AutocompleterComponent } from './components/autocompleter/autocompleter.component';
import { HttpClientModule } from '@angular/common/http';
import { GameApi } from './apis/game.api';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { GamePage } from './pages/game/game.page';
import { ZooiPage } from './pages/zooi/zooi.page';
import { FocusOnDirective } from './directives/focus-on.directive';

// the second parameter 'nl' is optional
registerLocaleData(localeNl, 'nl');

@NgModule({
	declarations: [
		AppComponent,
		EuroPipe,
		LifecycleComponent,
		AutocompleterComponent,
		GamePage,
		ZooiPage,
		FocusOnDirective
	], // componenten pipes directives
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		RouterModule.forRoot(routes)
	], // modules
	providers: [{ provide: LOCALE_ID, useValue: 'nl' }, GameApi], // dependency injection & globale instellingen
	bootstrap: [AppComponent]
})
export class AppModule {}
