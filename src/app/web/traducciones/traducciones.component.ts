import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-traducciones',
  templateUrl: './traducciones.component.html',
  styleUrls: ['./traducciones.component.css']
})
export class TraduccionesComponent implements OnInit {

  public traducciones: any[];

  constructor() {

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
