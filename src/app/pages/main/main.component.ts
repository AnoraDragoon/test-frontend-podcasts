import { Component, OnInit } from '@angular/core';
import { Podcast } from 'src/app/model/podcast';
import { LoadingService } from 'src/app/services/loading.service';
import { PodcastService } from 'src/app/services/podcast.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    podcasts: Podcast[] = [];
    param: string = '';


    constructor(private podcastService: PodcastService, private loadingService: LoadingService) { }

    ngOnInit(): void {
        this.loadingService.activate();
        this.podcastService.load().subscribe((result) => {
            this.podcasts = result;
            console.log(result);
            const loadingFinish = this.loadingService;
            setTimeout(function () {
                loadingFinish.desactivate();
            }, 1000);
        })
    }

}
