import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './views/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SectionComponent } from './shared/section/section.component';
import { WorldSectionComponent } from './shared/section/world-section/world-section.component';
import { EntertainmentSectionComponent } from './shared/section/entertainment-section/entertainment-section.component';
import { RadioComponent } from './shared/radio/radio.component';
import { PoliticsComponent } from './views/politics/politics.component';
import { TechComponent } from './views/tech/tech.component';
import { NewsViewComponent } from './shared/news-view/news-view.component';
import { NewsHeaderComponent } from './shared/news-header/news-header.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, FooterComponent, SectionComponent, WorldSectionComponent, EntertainmentSectionComponent, RadioComponent, PoliticsComponent, TechComponent, NewsViewComponent, NewsHeaderComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
