import { Component, OnInit } from '@angular/core';
import { Episode } from 'src/app/interfaces/episode.interface';
import { EpisodesService } from 'src/app/services/episodes.service';

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.css']
})
export class EpisodeDetailsComponent implements OnInit {

  episode: Episode = {
    name: '',
    air_date: '',
    episode: '',
    characters: [],
    url: '',
    created: ''
  };

  constructor(private episodesService: EpisodesService) { }

  ngOnInit(): void {
    
    this.episodesService.getSingleEpisode().subscribe((response: any) => {
      this.episode = {... response}; // Spread operator (es fundamental), iguala pero coge otra posicion de memoria (obj y arr)
      console.log('this.episode :>> ', this.episode);
    });
  }

}
