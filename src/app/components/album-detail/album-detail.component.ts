import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/TipiDati';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit {

  insiemeFoto : Album[] = []

  constructor(private servizio : AlbumService, private routeurl : ActivatedRoute){
  }
  ngOnInit(): void {
        const id = this.routeurl.snapshot.paramMap.get("id")!
        this.servizio.getPhotos(id).subscribe(a => this.insiemeFoto = a)
  }
}
