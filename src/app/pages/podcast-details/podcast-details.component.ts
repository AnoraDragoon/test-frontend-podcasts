import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { PodcastService } from 'src/app/services/podcast.service';
import { MOCK_PODCAST, Podcast } from 'src/app/model/podcast';
import { Episode, MOCK_EPISODE } from 'src/app/model/episode';


@Component({
    selector: 'app-podcast-details',
    templateUrl: './podcast-details.component.html',
    styleUrls: ['./podcast-details.component.css']
})
export class PodcastDetailsComponent implements OnInit {

    public podcastId: string | null = null;
    public podcast: Podcast | null = null;
    episodeList: Episode[] = [];


    constructor(private podcastService: PodcastService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.paramMap.pipe(
            switchMap((params: ParamMap) => {
                this.podcastId = params.get('podcastId');
                if (this.podcastId) {
                    return this.podcastService.loadOne(this.podcastId);
                }
                return of(null);
            })
        )
            .subscribe(data => {
                if (data) {
                    this.podcast = { ...data, description: MOCK_PODCAST.description };
                    for (let index = 0; index < 10; index++) {
                        this.episodeList.push(MOCK_EPISODE);
                    }
                }
            });
    }

}
