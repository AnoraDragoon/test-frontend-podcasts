export interface Episode {
    id: string;
    title: string;
    date: Date;
    duration: number;
    description?: string;
}


export const MOCK_EPISODE: Episode = {
    id: '1535809555',
    title: 'BIG FACTS with Big Bank & DJ Scream - The Black Effect and iHeartPodcasts',
    date: new Date(),
    duration: 200,
    description: 'Se debe mostrar una barra lateral con la imagen del podcast, su título, su autor y su descripción.' +
        ' <p><a href="https://www.google.es/">Google</a></p>' +
        ' así como un listado de los mismos indicando su título, fecha de publicación y duración.'
}
