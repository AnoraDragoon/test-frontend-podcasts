import { Component, Input } from '@angular/core';
import { Episode } from 'src/app/model/episode';

@Component({
    selector: 'app-podcast-table',
    templateUrl: './podcast-table.component.html',
    styleUrls: ['./podcast-table.component.css']
})
export class PodcastTableComponent {

    @Input() podcastId: string | null = '';
    @Input() episodeList: Episode[] = [];


    constructor() { }


}
