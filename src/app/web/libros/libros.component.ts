import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  public libros: any[];

  constructor() {

    this.libros = [
      {
        titulo: 'La notte non vuole venire (Fandango Libri, 2018)',
        descripcion: "Es el 8 de junio de 1953 y el transatlántico Homeland acaba de cruzar el Estrecho de Gibraltar, alcanzando el punto del Mar Mediterráneo que corresponde a las coordenadas de latitud 37' 21' Norte, longitud 4' 30' Este, las mismas que figurarán en el certificado de defunción de la pasajera más famosa a bordo, Griselda Andreatini, para todos los que han amado su voz en el extranjero, simplemente doña Gilda Mignonette. Casi septuagenaria, consumida por el alcohol y los celos, Gilda realiza su último viaje a Nápoles, la ciudad que cantó durante medio siglo y que la convirtió en la 'reina de los emigrantes'. La vigila Esterina Malacarne, conocida por todos simplemente como la guagliona, la asistente de pelo blanco y aspecto infantil que Gilda se trajo de Italia, una chica de los barrios populares pero educada, que siempre ha actuado como su intérprete debido a que su padre era portero en el consulado americano. Mientras Gilda duerme en su última cama, la joven vuelve a unir los hilos del pasado que vivieron juntas, la llegada a Ellis Island, la vida de lujos y teatros en Nueva York, el encuentro con Federico García Lorca, su audaz intento de suicidio y la correspondencia entre el poeta y la cantante. Pero sobre todo el amor y la traición de Esterina con el único hombre al que nunca debió querer. Con el telón de fondo del Nueva York de los locos años veinte a la Segunda Guerra Mundial y de una generación desperdiciada en la búsqueda de su fortuna, Alessio Arena canta con conmovedora nostalgia la prohibición, los gánsteres italoamericanos, la fama de Gilda en los escenarios, las pasiones y las decepciones de la más grande cantante italiana de América.",
        imagen: '/assets/images/La notte non vuole venire.jpg',
      },
      {
        titulo: 'La letteratura tamil a Napoli (Neri Pozza, 2014)',
        descripcion: "Escondidos en el subsuelo de la ciudad, y dispuestos a inmolarse para dar a conocer al mundo la trágica causa del Tamil Eelam, su patria perdida, tras la rendición final de los Tigres y el asesinato de su líder Velupillai Prabhakaran por las fuerzas gubernamentales de Sri Lanka, los tamiles de Nápoles en veinte años de trabajo han creado otro mundo. Casi un doble de la ciudad, y han formado una sociedad secreta, la Accademia dei Sotterranei, que sigue produciendo obras literarias napo-tamiles. Diez de sus escritores, enclavados en el subsuelo de la ciudad, cuentan la maravillosa historia de esta guerra desconocida, y lo hacen en diez capítulos, tantos como son los avatares (reencarnaciones) de Vishnu, cuyos retablos destacan en los bajos de los barrios Materdei, Sanità, Quartieri Spagnoli y Pallonetto di Santa Lucia. En este concierto narrativo, una comunidad invisible cuenta sus asombrosas hazañas, sus mitologías y su vida cotidiana. Es una comunidad que ha dejado su huella en el imaginario actual de Nápoles y que, a su vez, ha sido profundamente marcada por el carácter de la ciudad, creando mezclas sorprendentes. Así que tenemos vírgenes con trompa y cola de elefante, santos nacidos de la fusión de Buda y San Gennaro, y una desesperada actividad literaria expresada en las páginas de una revista underground llamada Cannarutizia...",
        imagen: '/assets/images/La letteratura tamil a Napoli.jpg',
        premios: 'Segundo clasificado en el Premio Neri Pozza 2014, finalista Premio Minerva 2014.',
      },
      {
        titulo: 'La casa girata (novela breve) (Senzapatria, 2010)',
        descripcion: '23 de noviembre de 1980, Nápoles tiembla mientras Guglielmo Strazzullo sueña con el terremoto de su alma. Es a través de la historia de su madre, empleada de los grandes almacenes Upim, donde entre la ropa de mujer habitual se promociona una "literatura expresionista rusa adaptada a las amas de casa y otros animales domésticos", que la tragedia personal de Guglielmo se amplifica, hasta el punto de convertirse en expresión de un sentimiento más universal de inadecuación.',
        imagen: '/assets/images/La casa girata.jpg',
      },
      {
        titulo: 'Il mio cuore è un mandarino acerbo (Zona/Novevolt, 2010)',
        descripcion: "Juntad a Amanda Lear y al napolitano Nino D'Angelo, al puerto de Marsella y a la isla de Procida, a la Biblia y a Baudelaire, a tres enanos y a un travesti que posee la profundidad trágica de un personaje de Genet. En una síntesis existencial de los años ochenta, en medio de la desvinculación política, la heroína fácil, las nuevas reivindicaciones sexuales y los increíbles peinados con laca, Alessio Arena nos regala una novela tragicómica que es también una película, un guion cinematográfico que se interpreta a sí mismo. Así, los acontecimientos de un hombre enamorado de la idea de ser mujer, o de ser, más simplemente, Dios en la Tierra, se alternan en la preparación de su compleja, extraña e inédita transfiguración. En la que se llora, se ríe y se baila, según la tradición napolitana.",
        imagen: '/assets/images/Il mio cuore è un mandarino acerbo.jpg',
      },
      {
        titulo: 'L’infanzia delle cose (Manni, 2009)',
        descripcion: "Años ochenta. Nápoles, Rione Sanità. Antonio Bacioterracino tiene quince años. Su padre, Patrizio, un cantante relacionado con la Camorra, muere de una sobredosis de heroína, y el resto de la familia se traslada a Madrid, al barrio de Lavapiés, guarida de la comunidad gitana. Pero en esta historia no hay clichés. Un realismo mágico napolitano-latino y un lenguaje que provoca el encuentro entre dos culturas, persiguiéndose entre violines, incendios, un perro que imita el vibrato de June Christy, cucarachas, ajuntadoras y estafadores napolitanos.",
        imagen: "/assets/images/L'infanzia delle cose.jpg",
        premios: 'Premio Giuseppe Giusti Opera Prima',
      },
    ]
  }

  ngOnInit() {
  }

}
