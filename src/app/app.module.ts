import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './pages/main/main.component';
import { PodcastDetailsComponent } from './pages/podcast-details/podcast-details.component';
import { EpisodeDetailsComponent } from './pages/episode-details/episode-details.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PodcastCardComponent } from './components/podcast-card/podcast-card.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FilterPodcastsPipe } from './pipes/filter-podcasts.pipe';



@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        PodcastDetailsComponent,
        EpisodeDetailsComponent,
        NotFoundComponent,
        PodcastCardComponent,
        FilterPodcastsPipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgbModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
