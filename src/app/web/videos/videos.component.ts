import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  public videos: any[];

  constructor( ) {
    this.videos = [
      {
        link: "https://www.youtube.com/embed/nrbHGKledV0",
        title: "Il paese che non c'era"
      },
      {
        link: "https://www.youtube.com/embed/nrbHGKledV0",
        title: "Il paese che non c'era"
      },
      {
        link: "https://www.youtube.com/embed/nrbHGKledV0",
        title: "Il paese che non c'era"
      },
      {
        link: "https://www.youtube.com/embed/nrbHGKledV0",
        title: "Il paese che non c'era"
      },
      {
        link: "https://www.youtube.com/embed/nrbHGKledV0",
        title: "Il paese che non c'era"
      },
      {
        link: "https://www.youtube.com/embed/nrbHGKledV0",
        title: "Il paese che non c'era"
      },
      {
        link: "https://www.youtube.com/embed/nrbHGKledV0",
        title: "Il paese che non c'era"
      },
      {
        link: "https://www.youtube.com/embed/nrbHGKledV0",
        title: "Il paese che non c'era"
      },
      {
        link: "https://www.youtube.com/embed/nrbHGKledV0",
        title: "Il paese che non c'era"
      }
    ];
  }

  ngOnInit(): void {
  }

}
