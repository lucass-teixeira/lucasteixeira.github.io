import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Route, RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CardComponent } from './components/card/card.component';
import { PillComponent } from './components/pill/pill.component';
import { TopicPipe } from './pipes/topic/topic.pipe';
import { TopOfPageComponent } from './components/top-of-page/top-of-page.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { LottieModule } from 'ngx-lottie';
import { PillfilterComponent } from './components/pillfilter/pillfilter.component'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CardHomeComponent } from './components/card-home/card-home.component';
import { CardProjectComponent } from './components/card-project/card-project.component';
import { TruncatePipe } from './shared/pipes/truncate.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BtnFilterSelectComponent } from './components/btn-filter-select/btn-filter-select.component';
import { ScreenShareComponent } from './screen-share/screen-share.component'


export function playerFactory() {
  return import('lottie-web');
} 

const routes: Route[] = 
[
  // {path: 'home', component: ScreenShareComponent },
  // {path: '', component: HomeComponent},
  // {path: 'projects', component: ProjectsComponent},
  // {path:'**',redirectTo:'home'},
  {path: '', component: ScreenShareComponent },
  {path:'**',redirectTo:''},
]



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavMenuComponent,
    ProjectsComponent,
    CardComponent,
    PillComponent,
    TopicPipe,
    TopOfPageComponent,
    SearchBarComponent,
    PillfilterComponent,
    SidenavComponent,
    CardHomeComponent,
    CardProjectComponent,
    TruncatePipe,
    BtnFilterSelectComponent,
    ScreenShareComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    LottieModule.forRoot({ player: playerFactory, useWebWorker: true })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
