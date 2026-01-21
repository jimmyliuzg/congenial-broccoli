export interface Race {
    id: string;
    name: string;
    distance: string;
    type: string;
    date: string;
    location: string;
    latitude: number;
    longitude: number;
    url: string;
    cutoffTime: string;
    qualifyingTime: string | null;
    cost: number;
    elevationGain: number;
    status: string;
}

export interface SearchCriteria {
    experienceLevel: 'Beginner' | 'Intermediate' | 'Advanced';
    distance: '5K' | '10K' | 'Half Marathon' | 'Marathon' | string;
    type: 'Road' | 'Trail' | string;
    location: string;
    timelineInMonths: number;
}
