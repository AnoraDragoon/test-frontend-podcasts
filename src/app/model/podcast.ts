export interface Podcast {
    id: string;
    title: string;
    authorName: string;
    img: string;
    description?: string;
}

export const MOCK_PODCAST: Podcast = {
    id: '1493353598',
    title: 'BIG FACTS with Big Bank & DJ Scream - The Black Effect and iHeartPodcasts',
    authorName: 'The Joe Budden Network',
    img: 'https://is4-ssl.mzstatic.com/image/thumb/Podcasts126/v4/c3/1c/5f/c31c5fe5-2ef7-6604-1c4c-d04c703c586a/mza_3268293942379878303.jpg/170x170bb.png',
    description: 'Se debe mostrar una barra lateral con la imagen del podcast, su título, su autor y su descripción.' +
        ' Se debe mostrar una sección principal donde se visualizará el número de episodios que actualmente tiene el podcast' +
        ' así como un listado de los mismos indicando su título, fecha de publicación y duración.' +
        ' Una vez obtenido el detalle de un podcast desde el servicio externo por primera vez, se deberá almacenar en cliente' +
        ' de manera que solo se vuelva a solicitar si ha pasado un día desde la última vez que se solicitó.'
}
