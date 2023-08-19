import { Component, OnInit } from '@angular/core';
import { Podcast } from 'src/app/model/podcast';
import { PodcastService } from 'src/app/services/podcast.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    podcasts: Podcast[] = [];


    constructor(private podcastService: PodcastService) { }

    ngOnInit(): void {
        this.podcastService.load().subscribe((result) => {
            this.podcasts = result;
        })
    }

}
