import { Component, OnInit } from '@angular/core';
import { EpisodiosService } from '../../services/episodios.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html'
})
export class TablaComponent implements OnInit {

  episodes: any[] = [];

  constructor(private episodiosService: EpisodiosService) {}

  ngOnInit(): void {
    this.episodiosService.getEpisodes().subscribe((response: any) => {
      this.episodes = response.results;
    });
  }

}
