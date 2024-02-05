import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HighchartsChartComponent, HighchartsChartModule } from 'highcharts-angular';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainComponent } from './main/main.component';
import { TopWidgetComponent } from './top-widget/top-widget.component';
import { MiddleWidgetComponent } from './middle-widget/middle-widget.component';
import { BottomWidgetComponent } from './bottom-widget/bottom-widget.component';
import { MiddleFirstComponent } from './middle-first/middle-first.component';
import { MiddleSecondComponent } from './middle-second/middle-second.component';
import { BottomFirstComponent } from './bottom-first/bottom-first.component';
import { BottomSecondComponent } from './bottom-second/bottom-second.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    MainComponent,
    TopWidgetComponent,
    MiddleWidgetComponent,
    BottomWidgetComponent,
    MiddleFirstComponent,
    MiddleSecondComponent,
    BottomFirstComponent,
    BottomSecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    MatProgressBarModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
