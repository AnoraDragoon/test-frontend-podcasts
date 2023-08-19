import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Podcast } from '../model/podcast';


@Injectable({
    providedIn: 'root'
})
export class PodcastService {

    constructor(private http: HttpClient) { }

    load() {
        return this.http.get<Podcast[]>('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
            .pipe(map(
                (result: any) => result.feed.entry.map(
                    (item: any) => {
                        return {
                            id: item.id.attributes['im:id'],
                            title: item.title.label,
                            authorName: item["im:artist"].label,
                            img: item['im:image'][2].label
                        }
                    }
                )
            ));
    }
}
