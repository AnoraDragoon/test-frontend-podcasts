import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Podcast } from '../model/podcast';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class PodcastService {

    private apiUrl = environment.apiURL;

    constructor(private http: HttpClient) { }

    load() {
        return this.http.get<Podcast[]>(`${this.apiUrl}/us/rss/toppodcasts/limit=100/genre=1310/json`)
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

    loadOne(id: string) {
        return this.http.get(`https://api.allorigins.win/get?url=${encodeURIComponent('https://itunes.apple.com/lookup?id=' + id)}`)
            .pipe(map(
                (data: any) => {
                    const json = JSON.parse(data.contents);
                    const {
                        collectionId: collectionId,
                        collectionName: collectionName,
                        artistName: artistName,
                        artworkUrl600: artworkUrl600
                    } = json.results[0];

                    let result: Podcast = {
                        id: collectionId,
                        title: collectionName,
                        authorName: artistName,
                        img: artworkUrl600
                    }
                    return result;
                }
            ));
    }
}
