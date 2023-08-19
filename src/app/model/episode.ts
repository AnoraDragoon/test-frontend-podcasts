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
    duration: 200
}
