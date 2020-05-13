
// Import the core angular services.
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// Import the application components and services.
import { AppComponent } from "./app.component";
import { ViewportIntersectionSrcDirective } from "./viewport-intersection-src.directive";

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

@NgModule({
	imports: [
		BrowserModule
	],
	providers: [],
	declarations: [
		AppComponent,
		ViewportIntersectionSrcDirective
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {
	// ...
}
