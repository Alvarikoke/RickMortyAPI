import { Component, OnInit } from '@angular/core';
import { Episode } from 'src/app/interfaces/episode.interface';
import { EpisodesService } from 'src/app/services/episodes.service';

@Component({
  selector: 'app-episodes-list',
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.css']
})
export class EpisodesListComponent implements OnInit {

  episodes: Episode[] = [];

  constructor(private episodesService: EpisodesService) { }

  ngOnInit(): void {
    
    this.episodesService.getEpisodes().subscribe((response: any) => {
      console.log('response :>> ', response);
      this.episodes = response.results;
    });
  }

}
