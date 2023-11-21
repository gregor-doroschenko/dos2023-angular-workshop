import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface People {
    name: string;
}

export interface SwapiResult {
    results: People[];
}

@Injectable({
    providedIn: 'root'
})
export class BackendService {
    url = 'https://swapi.dev/api/';

    constructor(private httpClient: HttpClient) {}

    loadList(): Observable<SwapiResult> {
        const url = this.url + 'people';
        return this.httpClient.get<SwapiResult>(url);
    }
}