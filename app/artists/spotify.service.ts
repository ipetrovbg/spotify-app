import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SpotifyService {
    constructor(private http: Http) {

    }

    fetchArtists(q, count) {
        let query = q;
        let items = count;
        return this.http.get('https://api.spotify.com/v1/search?q=' + query + '&limit=' + items + '&type=artist')
            .map((res) => res.json());
    }
    getArtist(q) {
        let query = q;
        return this.http.get('https://api.spotify.com/v1/search?q=' + query + '&limit=1&type=artist')
            .map((res) => res.json())
            .toPromise()
            .then((response) => response.artists.items[0]);
    }
}