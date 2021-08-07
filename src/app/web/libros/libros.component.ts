import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  public libros: any[];
  public teatros: any[];
  public librosColectivos: any[];
  public traducciones: any[];

  constructor() {

    this.teatros = [

      {
        titulo: 'Ll’aucielle, texto napolitano a partir de “Las Aves” de Aristófanes (2019)',
        descripcion: "Los que buscan vivir en una ciudad entre las aves son dos divertidas transexuales napolitanas que intentan buscar una alternativa a la imparable gentrificación de su ciudad.",
        imagen: "/assets/images/Ll'aucielle.jpg",
      },
      {
        titulo: 'Las ratas (2018)',
        descripcion: 'Tres mujeres encerradas en las escaleras de un edificio. Afuera, una invasión de ratas llena toda una ciudad. Ésta podría ser Madrid, Nápoles o Barcelona. Todo está en confiar en los relatos alucinantes de las tres protagonistas.',
        imagen: '/assets/images/las ratas.jpg',
      },
      {
        titulo: 'Marinella, texto napolitano a partir de “La Sirenita” de Andersen (2015)',
        descripcion: "Marinella y sus hermanas viven en los subterráneos de Nápoles. A diferencia de los otros habitantes, estas sirenas, mitad mujer y mitad rata, tuvieron que aislarse a partir de su horrible transformación, causada por la apocalíptica crisis de gestión de residuos de la ciudad.",
        imagen: '/assets/images/Marinella.jpg',
      },
      {
        titulo: 'Árbol (Espacio Labruc, Madrid, 2014)',
        descripcion: "Sor Margarita quiere matar todas las plantas que habitan en el jardín de la institución psiquiátrica que dirige. Anturio, su sobrino invertido, tiene como misión convertir este vergel demoníaco en un páramo según las órdenes de su tía. Una labor a la que se resiste, pues tiene una particular fascinación por Celidonia, la interna más singular que se encuentra allí, quien trata a uno de los árboles del jardín como si fuera su hijo.",
        imagen: "/assets/images/Árbol.png",
      },
      {
        titulo: 'Hielo (Nudo Teatro, Madrid, 2012)',
        descripcion: "Un relato lírico sobre Reinaldo Atxaga, un joven auxiliar de enfermería en un centro de discapacitados y asiduo visitante de páginas de contactos gay. Reinaldo basa en su experiencia profesional y biográfica la idea de que el sexo debe estar completamente desvinculado de su carácter social y ser vivido como hecho natural entre seres humanos.",
        imagen: "/assets/images/Hielo.jpg",
      },
      {
        titulo: 'Quattro mamme scelte a caso (Teatro Civico 14, Caserta, 2011)',
        descripcion: "La obra es un acercamiento a la obra de Annibale Ruccello a través de cuatro monólogos capaces de devolver los mismos personajes femeninos excepcionales del gran dramaturgo fallecido en un trágico accidente de tráfico. Alessio Arena escribe Sciore Arancia, interpretado por Gea Martire.",
        imagen: "assets/images/Quattro mamme scelte a caso (Teatro).jpg",
      },
      {
        titulo: 'A freva – La peste al Rione Sanità (Teatro di Napoli Mercadante, 2020)',
        descripcion: "Alessio Arena compone las músicas para la obra, con los arreglos y la producción de Luigi Esposito.",
        imagen: '',
      },
    ],

    this.librosColectivos = [

      {
        titulo: 'Napoli per le strade (Azimut, 2009)',
        descripcion: "Veintiún lugares de Nápoles componen la cartografía de una ciudad demasiado vasta y rica en energías contrastadas para ser definida por un solo nombre, o peor, por un estereotipo.",
        imagen: "/assets/images/Napoli per le strade.jpg",
      },
      {
        titulo: 'Diva mon amour (Azimut, 2010)',
        descripcion: 'Una colección de relatos breves dedicados a los mayores iconos gay de la historia.',
        imagen: '/assets/images/Diva Mon Amour.jpg',
      },
      {
        titulo: 'Quattro mamme scelte a caso (Caracò, 2012))',
        descripcion: "Veinticinco años después de la muerte de Annibale Ruccello, un homenaje de cuatro nuevos autores napolitanos a uno de los dramaturgos más innovadores de la segunda mitad del siglo XX.",
        imagen: 'assets/images/Quattro mamme scelte a caso (Libro Caracò editore).jpg',
      },
      {
        titulo: 'Panamericana (La nuova frontiera, 2016) ',
        descripcion: "Un viaje - de México a la Patagonia, pero también más allá - que nueve escritores italianos nos invitan a emprender. (Alessio Arena escribe sobre Reinaldo Arenas.)",
        imagen: "/assets/images/Panamericana-La-Nuova-Frontiera.jpg",
      }
    ],

    this.traducciones = [
      {
        titulo: '"Racconti"',
        autor: 'de Ricardo Jaimes Freyre (Arcoiris, 2021)',
        descripcion: "Fascinado por la narrativa breve, como otros escritores del Modernismo hispanoamericano, el boliviano Ricardo Jaimes Freyre (1868-1933) es autor de notables relatos cortos, aparecidos originalmente en revistas y redescubiertos sólo en las últimas décadas. Estos textos tienen como protagonistas a mendigos obsesionados por la felicidad, ermitaños cansados que ven su soledad perturbada por personajes misteriosos, cortesanas apasionadas del antiguo Bizancio, valientes soldados de la Guerra del Pacífico e indios implacables en busca de venganza. ",
      },
      {
        titulo: '"Un appartamento su Urano"',
        autor: 'de Paul B. Preciado (Fandango Libri 2021)',
        descripcion: "Paul B. Preciado sueña con un apartamento en Urano donde vivir fuera de las relaciones de poder y de las taxonomías sexuales, de género y raciales que la modernidad ha inventado. ",
        premios: 'Traducción parcial.',
      },
      {
        titulo: '"629 – Uomini in gabbia"',
        autor:'de Varios Autores catalanes (Producción Nuovo Teatro Sanità, 2019)',
        descripcion: 'El domingo 10 de junio de 2018, el gobierno italiano no permitió que el barco Aquarius entrara en un puerto italiano. A bordo había 629 inmigrantes. En ese momento, 629 eran los diputados de la República Italiana: una extraña coincidencia, entre hombres que deciden y hombres que no tienen ningún derecho.',
      },
      {
        titulo: '"La testa sott’acqua"',
        autor: 'de Helena Tornero (Producción teatral Nuovo Teatro Sanità, 2019)',
        descripcion: "Helena Tornero inserta, como aglutinante de la historia, el personaje de la madre de Josué, una psicóloga que tiene sueños premonitorios a través de los cuales empieza a predecir que algo le va a pasar a su hijo. Un texto sobre la violencia entre los adolescentes.",
      },
      {
        titulo: '"E la nave va"',
        autor: 'de Diogo Liberano (Producción teatral BeyondTheSud, 2019)',
        descripcion: "Fragmentos del relato del comienzo y evolución de una historia de amor entre un hombre de aproximadamente treinta años y uno de cuarenta y tres. Una historia contada desde el punto de vista de un auto, con un espacio interior sólo para dos personas.",
      },
      {
        titulo: '"Una historia de imposibilidad"',
        autor: 'de Fabio Pisano (Producción teatral BeyondTheSud, 2019)',
        descripcion: '"Acotacionista": Una pausa. Lo cual no es realmente un silencio. La pausa es una elaboración. El silencio es la dramaturgia.',
      },
      {
        titulo: '"Un figlio"',
        autor: 'de Alejandro Palomas (Neri Pozza, 2016)',
        descripcion: 'Guille es un niño sonriente y aparentemente feliz, pero solo hace falta rascar un poco para sospechar que esconde un misterio.',
        premios: 'Premio Letteraria 2016 per la Narrativa in traduzione',
      },
      {
        titulo: '"Todo ya está aquí aunque no se vea: Enrique Vargas y el teatro de los sentidos"',
        autor: 'de Maria Pagliaro (Corre la voz, 2016)',
        descripcion: 'Biografía de Enrique Vargas, fundador del Teatro de los Sentidos y antropólogo colombiano, a través de un encuentro poético con la autora María Pagliaro.',
      },
      {
        titulo: '"Capodanno da mia madre"',
        autor: 'de Alejandro Palomas (Neri Pozza, 2015)',
        descripcion: 'Amalia, Fer, el pequeño piso de protección social, la ternura maternal y fraternal, el humor. En este libro nació el personalísimo universo familiar de Alejandro Palomas.',
      },
    ]
  }

  ngOnInit() {
  }

}
