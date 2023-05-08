import { Component, OnInit } from '@angular/core';
import { Episode } from 'src/app/interfaces/episode.interface';
import { EpisodesService } from 'src/app/services/episodes.service';

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.css']
})
export class EpisodeDetailsComponent implements OnInit {

  episodes: Episode[] = [];

  constructor(private episodesService: EpisodesService) { }

  ngOnInit(): void {
    
    this.episodesService.getSingleEpisode().subscribe((response: any) => {
      console.log('response :>> ', response);
      this.episodes = response.results;
    });
  }

}
