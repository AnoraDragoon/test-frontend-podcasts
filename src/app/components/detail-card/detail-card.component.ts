import { Component, Input } from '@angular/core';
import { Podcast } from 'src/app/model/podcast';


@Component({
    selector: 'app-detail-card',
    templateUrl: './detail-card.component.html',
    styleUrls: ['./detail-card.component.css']
})
export class DetailCardComponent {

    @Input() podcast: Podcast | null = null;


    constructor() { }

}
