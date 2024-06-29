import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../services/album.service';
import { GruppoAlbums } from '../../models/TipiDati';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrl: './album.component.css'
})
export class AlbumComponent implements OnInit{
  ListaAlbums : GruppoAlbums [] = []

  constructor(private servizioAlbums : AlbumService){}

  ngOnInit(): void {
    this.servizioAlbums.getAlbums().subscribe( albums => this.ListaAlbums = albums)
  }


}
