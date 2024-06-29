import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album, GruppoAlbums } from '../models/TipiDati';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http : HttpClient) { }

  getAlbums() : Observable <GruppoAlbums[]>{
    return this.http.get<GruppoAlbums[]>("https://jsonplaceholder.typicode.com/albums")
  }

  getPhotos(id : string) : Observable <Album[]>{
    return this.http.get<Album[]>('https://jsonplaceholder.typicode.com/photos?albumId=' + id)
  }
}
