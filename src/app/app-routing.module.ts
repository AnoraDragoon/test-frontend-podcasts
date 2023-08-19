import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { PodcastDetailsComponent } from './pages/podcast-details/podcast-details.component';
import { EpisodeDetailsComponent } from './pages/episode-details/episode-details.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


const routes: Routes = [
    {
        path: '',
        component: MainComponent
    },
    {
        path: 'podcast/podcastId/episode/:episodeId',
        component: EpisodeDetailsComponent
    },
    {
        path: 'podcast/:podcastId',
        component: PodcastDetailsComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
