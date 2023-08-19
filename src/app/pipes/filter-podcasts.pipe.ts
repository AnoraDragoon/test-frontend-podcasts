import { Pipe, PipeTransform } from '@angular/core';
import { Podcast } from '../model/podcast';

@Pipe({
    name: 'filterPodcasts'
})
export class FilterPodcastsPipe implements PipeTransform {

    transform(value: Podcast[], arg: string): Podcast[] {
        if (!value || !arg) {
            return value;
        }

        arg = arg.toLowerCase();

        return value.filter(item => {
            return item.title.toLowerCase().includes(arg) || item.authorName.toLowerCase().includes(arg)
        });
    }

}
