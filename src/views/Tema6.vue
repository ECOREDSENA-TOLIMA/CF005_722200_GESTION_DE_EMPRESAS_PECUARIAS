<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Seguridad y salud en el trabajo
    .row.justify-content-center.align-items-center
      .col-lg-4
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema6/1.png', alt='Texto que describa la imagen')
      .col-lg-8
        p(data-aos="fade-left") La salud y la seguridad en el trabajo es la disciplina que trata de la prevención de las lesiones y enfermedades laborales. A través de ella, se fomentan los cuidados y la protección de los empleados en todas las áreas de trabajo, a través de seguimientos constantes y detallados en cada área.
        p(data-aos="fade-left") Cada trabajador forma un vínculo entre salud y trabajo y, por tanto, siempre se debe tener en cuenta la influencia que tiene sobre la salud de la persona la ejecución de ciertas actividades. 

    .row.justify-content-center.mt-5.mb-5
      .col-md-12
        figure(data-aos="fade-left")
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/5CF3HZdu6Bc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    
    //- .row.justify-content-center.mt-5
    //-   .col-lg-10
    //-     .tarjeta.p-4.mb-5(style="background-color:#144677")(data-aos="flip-up")
    //-       .row.justify-content-center.align-items-center
    //-         .col-3.col-sm-2.col-lg-1
    //-           img(src="@/assets/curso/temas/tema6/2.svg")
    //-         .col
    //-           .row.justify-content-center.align-items-center
    //-             .col
    //-               p.text-small.text-white El conjunto de variables que se definen, desde la realización de la tarea y el entorno en que ésta se realiza, se denomina condiciones de trabajo, y están constituidas por factores del medio ambiente, de la tarea, de la organización y del individuo (Mintrabajo, 2016). Se le invita a observar el siguiente recurso educativo para más información.
    //-             .col-sm-auto
    //-               a.boton.color-acento-contenido(href="https://www.youtube.com/embed/5CF3HZdu6Bc" target="_blank")
    //-                 span Ver video
    //-                 i.fas.fa-video

    p.mb-5(data-aos="fade-left") Existen trabajos que, por sus condiciones, exponen al trabajador a un peligro que puede generar una enfermedad o lesión. Algunos riesgos existentes son: 

    TabsB.color-acento-contenido.mb-5(data-aos="flip-up")
      .py-4.py-md-5(titulo="Riesgos físicos")
        .row.justify-content-center.align-items-center
          .col-md-3
            figure
              img(src='@/assets/curso/temas/tema6/9.svg', alt='Texto que describa la imagen')
          .col-md-4.mb-4.mb-md-0.offset-2
            h4 Riesgos físicos
            p Es la posibilidad que existe de sufrir un daño corporal en diferentes grados de intensidad; entre los principales riesgos físicos se encuentran la exposición a diferentes temperaturas extremas (calor o frío), exposición a fuertes ruidos por tiempos prolongados, tipos de movimientos que generen vibraciones, donde se ven afectadas las articulaciones y la presión arterial, el sometimiento a iluminaciones (oscuridad y deslumbramiento), radiación ionizante y no ionizante, y manipulación de maquinaria pesada.

      .py-4.py-md-5(titulo="Riesgos biológicos")
        .row.justify-content-center.align-items-center
          .col-md-3
            figure
              img(src='@/assets/curso/temas/tema6/10.svg', alt='Texto que describa la imagen')
          .col-md-4.mb-4.mb-md-0.offset-2
            h4 Riesgos biológicos
            p Son todos los que, por presencia de organismos o microorganismos (bacterias, hongos, virus o parásitos), pueden afectar la salud en un entorno laboral, pueden causar enfermedad temporal, permanente o la muerte. Existen trabajos que, por sus condiciones, se consideran de alto riesgo biológico; entre estos, los profesionales de la salud, agropecuarios y biológicos.

      .py-4.py-md-5(titulo="Riesgos químicos")
        .row.justify-content-center.align-items-center
          .col-md-3
            figure
              img(src='@/assets/curso/temas/tema6/11.svg', alt='Texto que describa la imagen')
          .col-md-4.mb-4.mb-md-0.offset-2
            h4 Riesgos químicos
            p Aquellas condiciones que pueden afectar la salud de un trabajador por contacto no controlado con agentes químicos; pueden ser por inhalación, ingestión o absorción de sustancias nocivas para la salud.

      .py-4.py-md-5(titulo="Riesgos ergonómicos")
        .row.justify-content-center.align-items-center
          .col-md-3
            figure
              img(src='@/assets/curso/temas/tema6/12.svg', alt='Texto que describa la imagen')
          .col-md-4.mb-4.mb-md-0.offset-2
            h4 Riesgos ergonómicos
            p En su mayoría, el riesgo ergonómico se da por posturas incorrectas en trabajos de oficina que son sedentarios o trabajos que son repetitivos en sus movimientos, y que con el tiempo pueden causar un gran daño y lesiones a nivel músculo esquelético y generar dolores por diferentes lesiones; también se encuentra el levantamiento excesivo de peso con o sin una técnica adecuada.

      .py-4.py-md-5(titulo="Riesgos psicosociales")
        .row.justify-content-center.align-items-center
          .col-md-3
            figure
              img(src='@/assets/curso/temas/tema6/13.svg', alt='Texto que describa la imagen')
          .col-md-4.mb-4.mb-md-0.offset-2
            h4 Riesgos psicosociales
            p Afectan de manera notable la salud de los trabajadores y se derivan de las deficiencias en el planteamiento, la organización y la gestión del trabajo, así como de un nulo entorno social en el lugar de trabajo. Todo esto puede generar resultados psicológicos, físicos y sociales negativos, como el estrés laboral, el agotamiento o la depresión en la persona; para prevenirlo, es importante las pausas activas en el trabajo y respetar los horarios laborales.

      .py-4.py-md-5(titulo="Riesgos ambientales")
        .row.justify-content-center.align-items-center
          .col-md-3
            figure
              img(src='@/assets/curso/temas/tema6/14.svg', alt='Texto que describa la imagen')
          .col-md-4.mb-4.mb-md-0.offset-2
            h4 Riesgos ambientales
            p Son todos aquellos que no se pueden controlar, como la probabilidad de que ocurra una catástrofe, un evento propio de la naturaleza o por acción del hombre. Existen riesgos naturales (todos aquellos riesgos geológicos) y riesgos antrópicos (aquellas circunstancias causadas por las acciones del ser humano).

      .py-4.py-md-5(titulo="Riesgos mecánicos")
        .row.justify-content-center.align-items-center
          .col-md-3
            figure
              img(src='@/assets/curso/temas/tema6/15.svg', alt='Texto que describa la imagen')
          .col-md-4.mb-4.mb-md-0.offset-2
            h4 Riesgos mecánicos
            p Conjunto de eventos que pueden causar daño a un trabajador, como quemaduras, cortes, golpes, entre otros; en su mayoría, se presentan por la manipulación de herramientas y vehículos.        
        
    p(data-aos="fade-left") Cuando se habla de que existe un peligro, se refiere a una condición potencial, que puede provocar daños en la salud, y riesgo es la probabilidad de exposición a un evento peligroso, es la consecuencia del peligro. En la siguiente tabla, se hace una comparación entre peligros y riesgos. Obsérvela.

    .titulo-sexto.color-acento-contenido.offset-2.mt-5.mb-5
      h5 Tabla 3 
      span #[em Peligro y riesgos - Tipo físico]

    .row.justify-content-center(data-aos="flip-up")
      .col-lg-8
        .tabla-b.color.mb-5
          .tabla-b__header(style="background-color:#1B3F5E")
            h4.mb-0 Tipo físico
          table
            tr.text-center(style="background-color:#DBF9BD")
              th Peligros
              th Riesgos
            tr
              th Ruido 
              td Pérdida de audición, estrés. 
            tr
              th Iluminación 
              td Cefalea, pérdida de visión, estrés. 
            tr
              th Temperaturas extremas 
              td Mareos, pérdida de destreza, trastornos cardiovasculares.
            tr
              th Radiación 
              td Alteraciones en la piel y deshidratación. 

              
    .titulo-sexto.color-acento-contenido.offset-2.mt-5.mb-5
      h5 Tabla 4 
      span #[em Peligro y riesgos - Tipo biológico]
    .row.justify-content-center.mt-5(data-aos="flip-up")
      .col-lg-8
        .tabla-b.color-acento-contenido.mb-5
          .tabla-b__header(style="background-color:#1B3F5E")
            h4.mb-0 Tipo biológico
          table
            tr.text-center(style="background-color:#DBF9BD")
              th Peligros
              th Riesgos
            tr
              th Bacterias, virus y hongos
              td Reacciones alérgicas, afecciones en piel, enfermedades en sistemas, muerte.
            tr
              th Roedores e insectos 
              td Enfermedades infectocontagiosas o virales.

    .titulo-sexto.color-acento-contenido.offset-2.mt-5.mb-5
      h5 Tabla 5 
      span #[em Peligro y riesgos - Tipo químico]

    .row.justify-content-center.mt-5(data-aos="flip-up")
      .col-lg-8
        .tabla-b.color-acento-contenido.mb-5
          .tabla-b__header(style="background-color:#1B3F5E")
            h4.mb-0 Tipo químico
          table
            tr.text-center(style="background-color:#DBF9BD")
              th Peligros
              th Riesgos
            tr
              td Gases, vapores, partículas de diferentes materiales, humos metálicos
              td Cefaleas, náuseas, vómitos, irritaciones en diferentes sistemas, quemaduras, asfixia, alteración cardiovascular, muerte.

    .titulo-sexto.color-acento-contenido.offset-2.mt-5.mb-5
      h5 Tabla 6 
      span #[em Peligro y riesgos - Tipo ergonómico]
    .row.justify-content-center.mt-5(data-aos="flip-up")
      .col-lg-8
        .tabla-b.color-acento-contenido.mb-5
          .tabla-b__header(style="background-color:#1B3F5E")
            h4.mb-0 Tipo ergonómico
          table
            tr.text-center(style="background-color:#DBF9BD")
              th Peligros
              th Riesgos
            tr
              td Manejo de cargas, movimientos repetitivos y sobreesfuerzo
              td Trauma acumulativo, afección en sistema musculoesquelético, lesiones a nivel de columna vertebral, alteración en sistema cardiovascular. 

    
    .titulo-sexto.color-acento-contenido.offset-2.mt-5.mb-5
      h5 Tabla 7 
      span #[em Peligro y riesgos - Tipo psicosocial]
    .row.justify-content-center.mt-5(data-aos="flip-up")
      .col-lg-8
        .tabla-b.color-acento-contenido.mb-5
          .tabla-b__header(style="background-color:#1B3F5E")
            h4.mb-0 Tipo psicosocial
          table
            tr.text-center(style="background-color:#DBF9BD")
              th Peligros
              th Riesgos
            tr
              td Condiciones intralaborales
              td Estrés, depresión y ansiedad.

    .titulo-sexto.color-acento-contenido.offset-2.mt-5.mb-5
      h5 Tabla 8 
      span #[em Peligro y riesgos - Tipo mecánico]

    .row.justify-content-center.mt-5(data-aos="flip-up")
      .col-lg-8
        .tabla-b.color-acento-contenido.mb-5
          .tabla-b__header(style="background-color:#1B3F5E")
            h4.mb-0 Tipo mecánico
          table
            tr.text-center(style="background-color:#DBF9BD")
              th Peligros
              th Riesgos
            tr
              td Atrapamientos, golpes, herramientas cortopunzantes, superficies calientes 
              td Amputaciones, heridas graves, fracturas, alteraciones en tejidos blandos, muerte.


    separador 
    .titulo-segundo.color-secundario
      h2#t_6_1 6.1  Elementos de protección personal

    p.mb-5(data-aos="fade-left") Para un trabajador, los elementos de protección personal (EPP) se definen como aquellos requeridos para el desarrollo de las actividades propias de su cargo. El uso de los EPP ayuda a protegerlo de posibles daños derivados de la exposición a los peligros en los lugares de trabajo y que pueden generar daños en su salud o integridad física (Minsalud, 2021). Algunos elementos de protección propios del contexto pecuario son: 

    .row 
      .col
        .tarjeta.p-4.mb-5(style="background-color:#3B5620")(data-aos="flip-up")
          .row.mb-5
            .col-md-6.col-lg.mb-5.mb-lg-0
              .tarjeta-avatar
                img(src='@/assets/curso/temas/tema6/3.svg' alt='AvatarTop')
                .tarjeta(style="background-color:#FFFAD0")
                  .text.p-4
                    h2.text-center Protección  de cabeza
                    p Dentro de este grupo se clasifican los cascos, pasamontañas y cofias.

            .col-md-6.col-lg.mb-5.mb-lg-0
              .tarjeta-avatar
                img(src='@/assets/curso/temas/tema6/4.svg' alt='AvatarTop')
                .tarjeta(style="background-color:#FFFAD0")
                  .text.p-4
                    h2.text-center Gafas de seguridad
                    p En estos implementos, están los lentes de seguridad.

            .col-md-6.col-lg.mb-5.mb-lg-0
              .tarjeta-avatar
                img(src='@/assets/curso/temas/tema6/5.svg' alt='AvatarTop')
                .tarjeta(style="background-color:#FFFAD0")
                  .text.p-4
                    h2.text-center Protección respiratoria
                    p En este grupo, usted puede encontrar tapabocas desechables y reutilizables, protector respiratorio sin válvula para polvo.

            .col-md-6.col-lg.mb-5.mb-lg-0
              .tarjeta-avatar
                img(src='@/assets/curso/temas/tema6/6.svg' alt='AvatarTop')
                .tarjeta(style="background-color:#FFFAD0")
                  .text.p-4
                    h2.text-center Cuerpo
                    p Algunos implementos son overol, chaqueta y pantalón térmico, arnés de seguridad, guantes (vaqueta, nitrilo, térmicos).

            .col-md-6.col-lg.mb-5.mb-lg-0
              .tarjeta-avatar
                img(src='@/assets/curso/temas/tema6/7.svg' alt='AvatarTop')
                .tarjeta(style="background-color:#FFFAD0")
                  .text.p-4
                    h2.text-center Pies
                    p Dentro de estos elementos, se encuentran medias térmicas, punteras de seguridad y botas de seguridad.

    separador 
    .titulo-segundo.color-secundario
      h2#t_6_2 6.2  Técnicas de evaluación
    p.mb-5(data-aos="fade-left") Para una evaluación y análisis completo de salud y seguridad en el trabajo, se deben tener en cuenta algunos puntos que pueden aportar datos anuales, todo mediante listas de chequeo donde se puedan valorar los riesgos por medio de visitas o desplazamientos por parte del personal seleccionado hasta las áreas de cada puesto en la empresa y así tener una observación cercana de cada uno de los trabajadores y poder determinar con precisión cada probabilidad de riesgo; entre los puntos, están:

    .row.justify-content-center.align-items-center.mt-4.mb-5
      .col-lg-10
        .row.justify-content-center.align-items-center
          .col-lg-3
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema6/8.jpg', alt='Texto que describa la imagen')
          .col-lg-8
            .cajon.p-2.mb-1(style="background-color:#3B5620")(data-aos="flip-up")
              p.offset-1.text-small(style="color:#FFFAD0")(data-aos="fade-left") Estudios y exploración de accidentes de trabajo y enfermedades profesionales en cada área de la empresa.
            .cajon.p-2.mb-1(style="background-color:#3B5620")(data-aos="flip-up")
              p.offset-1.text-small(style="color:#FFFAD0")(data-aos="fade-left") Seguimiento de la salud integral de cada uno de los trabajadores (vigilancia epidemiológica constante).
            .cajon.p-2.mb-1(style="background-color:#3B5620")(data-aos="flip-up")
              p.offset-1.text-small(style="color:#FFFAD0")(data-aos="fade-left") Las inspecciones y auditorías constantes y completas en los lugares de trabajo.
            .cajon.p-2.mb-1(style="background-color:#3B5620")(data-aos="flip-up")
              p.offset-1.text-small(style="color:#FFFAD0")(data-aos="fade-left") Planes integrales de prevención y control de accidentes mayores que puedan causar alta gravedad en la salud del trabajador.
            .cajon.p-2.mb-1(style="background-color:#3B5620")(data-aos="flip-up")
              p.offset-1.text-small(style="color:#FFFAD0")(data-aos="fade-left") Vigilancia obligatoria del uso de equipos de protección individual en cada una de las áreas de la empresa.
            .cajon.p-2.mb-1(style="background-color:#3B5620")(data-aos="flip-up")
              p.offset-1.text-small(style="color:#FFFAD0")(data-aos="fade-left") Desarrollo completo de planes de emergencia que sean ejecutados en aquellos casos que representen un riesgo, para minimizar un daño a la integridad de cada uno de los trabajadores.

    p.mb-5(data-aos="fade-left") Cada evaluación se debe hacer con individualidad, esto facilita detección temprana de posibles afecciones a la salud en cada individuo; de no ser personal, la evaluación que se hace por visita técnica se debe dirigir a cada puesto y área de la empresa; sin embargo, se deben hacer chequeos médicos periódicos, de manera individual, a cada trabajador. Se debe entregar un informe detallado donde se clasifica el potencial de riesgo, peligro y daño; entre las clasificaciones más comunes, se encuentra la categorización en tres niveles: 

    .row.mb-5.justify-content-center
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta(style="background-color:#1B3F5E; height:100%")
          .text.p-4.text-center
            h2.text-white.text-center Intolerable
            hr
            p.text-white Se define cuando se debe evaluar y detener casi en el momento la situación que se presenta, para evitar accidentes y daños a la salud.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta(style="background-color:#1B3F5E; height:100%")
          .text.p-4.text-center
            h2.text-white.text-center Importante
            hr
            p.text-white Son aquellos puntos de control que se deben tener en cuenta para una mejora rápida.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta(style="background-color:#1B3F5E; height:100%")
          .text.p-4.text-center
            h2.text-white.text-center Moderado
            hr
            p.text-white Son aquellos puntos de control donde se pueden hacer actividades para una mejora progresiva, tales como pausas activas, rotaciones de turno, equipos de protección mejorados, entre otros.

    p(data-aos="fade-left") Hasta aquí se ha organizado para usted un conjunto de conocimiento científico y técnico que le ayudará a la apropiación de información que se complementa con un conjunto de actividades de aprendizaje para desarrollar una competencia que le ayude a resolver desafíos en torno a la identificación de materias primas y equipos para la preparación de ración animal según parámetros técnicos y normativa. 


            

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
