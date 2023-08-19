import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PodcastService } from 'src/app/services/podcast.service';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MOCK_PODCAST, Podcast } from 'src/app/model/podcast';
import { Episode, MOCK_EPISODE } from 'src/app/model/episode';

@Component({
    selector: 'app-episode-details',
    templateUrl: './episode-details.component.html',
    styleUrls: ['./episode-details.component.css']
})
export class EpisodeDetailsComponent implements OnInit {

    public podcastId: string | null = null;
    public episodeId: string | null = null;
    public podcast: Podcast | null = null;
    episode: Episode | null = null;


    constructor(private podcastService: PodcastService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.paramMap.pipe(
            switchMap((params: ParamMap) => {
                this.podcastId = params.get('podcastId');
                this.episodeId = params.get('episodeId');
                if (this.podcastId) {
                    return this.podcastService.loadOne(this.podcastId);
                }
                return of(null);
            })
        )
            .subscribe(data => {
                if (data && this.episodeId) {
                    this.podcast = { ...data, description: MOCK_PODCAST.description };
                    this.episode = MOCK_EPISODE;
                }
            });
    }

}
