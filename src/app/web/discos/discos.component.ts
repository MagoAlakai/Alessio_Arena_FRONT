import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discos',
  templateUrl: './discos.component.html',
  styleUrls: ['./discos.component.css']
})
export class DiscosComponent implements OnInit {

  public discos: any[];
  public discos1: any[];
  public discoGiancarlo: any[];

  constructor() {

    this.discos = [
      {
        titulo: 'Autorretrato de ciudad invisible (2010)',
        link: 'https://open.spotify.com/album/78pylcdLzUTchThMeN0fuI?si=Ckw_CE1GTna-Ija7SaQfKA&dl_branch=1&nd=1',
        imagen: '/assets/images/Alessio Arena Autorretrato.jpg',
      },
      {
        titulo: 'Bestiari(o) familiar(e) (2013)',
        link: 'https://open.spotify.com/album/6yJr0Imi77OU3SgkQoacXu?si=w9DQC1DhQOODE0OZWRM07g&dl_branch=1&nd=1',
        imagen: '/assets/images/Alessio Arena Bestiario Familiare.jpg',
      },
    ];

  this.discos1 = [
    {
      titulo: 'La secreta danza (2016)',
      link: 'https://open.spotify.com/album/3VOVUdumQdaSGCoo1edBro?si=6YVjy_kRRvOZemAiCHp1vw&dl_branch=1&nd=1',
      imagen: '/assets/images/Alessio Arena La secreta danza.jpg',
    },
    {
      titulo: 'Atacama! (2019)',
      link: 'https://open.spotify.com/album/6q0GpmH0bkdDuUvTd8leOf?si=Fd4IKySLQeOCq4hZtNTmVg&dl_branch=1&nd=1',
      imagen: '/assets/images/Alessio Arena Atacama!.jpg',
    },
  ];

  this.discoGiancarlo = [
    {
      titulo: 'Dummèneca (2020)',
      link: 'https://open.spotify.com/album/0iaz2Ooe4ySvgJmCFjPmMU?si=mURo0RHXSqq47Sn4b83gmA&dl_branch=1&nd=1',
      imagen: '/assets/images/Alessio e Giancarlo Arena - Dummèneca.jpg',
    },
  ];

}

  ngOnInit() {
  }

}
