import { Component, Input } from '@angular/core';
import { Podcast } from 'src/app/model/podcast';

@Component({
    selector: 'app-podcast-card',
    templateUrl: './podcast-card.component.html',
    styleUrls: ['./podcast-card.component.css']
})
export class PodcastCardComponent {

    @Input() podcast: Podcast | null = null;


    constructor() { }

}
