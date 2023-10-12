<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Higienización de las materias primas para ración
    
    .row.justify-content-center.align-items-center
      .col-lg-4
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema2/1.png', alt='Texto que describa la imagen')
      .col-lg-8
        p(data-aos="fade-left") La higienización de materias primas animales, es una combinación de los procesos de limpieza y desinfección, cuyo objetivo es garantizar un producto inocuo, libre de patógenos contaminantes. Es importante considerar en todo momento los efectos potenciales de las actividades de la producción primaria sobre la inocuidad y la idoneidad de los alimentos. Esto incluye la identificación de cualquier punto específico de dichas actividades en el que pueda existir una alta probabilidad de contaminación y así tomar medidas para reducir al mínimo y, de ser posible, eliminar esta probabilidad (FAO, 2020). 
        p(data-aos="fade-left") El control de las fuentes de contaminación es una forma efectiva para hacer frente a la alteración física y química de materias primas; dentro de este, se puede encontrar:


    .row.mb-5.mt-5(data-aos="flip-up")
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/2.svg' alt='AvatarTop')
          .tarjeta(style="background-color: #E2E8EC; height:100%")
            .text-black.p-4
              h2.text-center Control de calidad de agua
              p Se debe asegurar que el agua seleccionada para la elaboración o limpieza de materias primas este bajo condiciones de potabilidad que no generen riesgo para el animal.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/3.svg' alt='AvatarTop')
          .tarjeta(style="background-color: #E2E8EC; height:100%")
            .text-black.p-4
              h2.text-center Control de calidad de higiene manipulación
              p Es necesario certificar que las prácticas de limpieza y desinfección de los operarios sean realizadas de manera eficaz y frecuente.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/4.svg' alt='AvatarTop')
          .tarjeta(style="background-color: #E2E8EC; height:100%")
            .text-black.p-4
              h2.text-center Control de calidad de higiene de elementos
              p La inspección de máquinas procesadoras, mezcladoras, mesones, palas, entre otros, es una actividad que debe realizarse constantemente, porque así se garantiza la limpieza y desinfección.

      p.mt-5(data-aos="fade-left") Como se ha mencionado antes, la higienización es un proceso centrado en la limpieza y desinfección. Este debe estar orientado a minimizar el riesgo de contaminación cuando se aseguran las condiciones microbiológicas de las diferentes materias primas y se restablece el funcionamiento habitual de las instalaciones y de los distintos utensilios tras realizar las actividades de cada área de producción.  Es fundamental evaluar el riesgo, tanto de un producto terminado como de la materia prima utilizada, a partir de los factores que se presentan en la siguiente tabla. 

    .titulo-sexto.color-acento-contenido.offset-1
      h5 Tabla 1 #[em Factores de disminución y aumento del riesgo]

    .row.justify-content-center 
      .col-10
        .tabla-a.color-acento-botones.mb-5 
          table(data-aos="fade-left")
            thead
              tr
                th Aumentan el riesgo
                th Disminuyen el riesgo
            tbody
              tr
                td Productos a granel
                td Productos envasados 
              tr
                td Productos con humedad alta
                td Productos con baja captación de humedad o agua 
              tr
                td Productos almacenados durante largos periodos o almacenamiento inadecuado o con mal rotulación
                td Producto de consumo inmediato 
              tr
                td Productos con pH próximo a la neutralidad 
                td Producto con pH bajo
              tr
                td Manipulación excesiva 
                td Productos tratados previamente

    p.mb-5(data-aos="fade-left") Estos procedimientos de higienización deben ser efectivos cuando usted realiza un plan de higienización a partir de criterios y aspectos como el tiempo y el procedimiento, lo cual permite, a partir de un registro, la verificación de la eficacia de lo realizado. Las características que se deben tener en cuenta para realizar la higienización son:

    .row.justify-content-center.align-items-center
      .col-md-10
        .row.justify-content-center.align-items-center
          .col-md-6.mb-2
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema2/5.svg', alt='Texto que describa la imagen')
          .col-md-6
            .cajon.p-4.mb-2(style="background-color:#DBF9BD")(data-aos="flip-up")
              ul.lista-ul.text-small
                li 
                  i.lista-ul__vineta
                  | Evaluación del riesgo. 
            .cajon.p-4.mb-2(style="background-color:#DBF9BD")(data-aos="flip-up")
              ul.lista-ul.text-small
                li 
                  i.lista-ul__vineta
                  | Evaluación del nivel de riesgo
            .cajon.p-4.mb-2(style="background-color:#DBF9BD")(data-aos="flip-up")
              ul.lista-ul.text-small
                li 
                  i.lista-ul__vineta
                  | Elección de métodos.
            .cajon.p-4.mb-2(style="background-color:#DBF9BD")(data-aos="flip-up")
              ul.lista-ul.text-small
                li 
                  i.lista-ul__vineta
                  | Herramientas y productos a utilizar.
            .cajon.p-4.mb-2(style="background-color:#DBF9BD")(data-aos="flip-up")
              ul.lista-ul.text-small
                li 
                  i.lista-ul__vineta
                  | Recopilación de fichas técnicas de productos a utilizar teniendo en cuenta la seguridad del personal.
            .cajon.p-4.mb-2(style="background-color:#DBF9BD")(data-aos="flip-up")
              ul.lista-ul.text-small
                li 
                  i.lista-ul__vineta
                  | Registros.

    p.mb-5.mt-5(data-aos="fade-left") Otro concepto importante dentro de las características de higiene es el concepto del control de vectores, porque tanto los insectos como los diferentes animales representan un riesgo elevado de contaminación de materias primas y productos elaborados. A continuación, se presentan unas acciones que usted puede considerar en el control de vectores. Esto sin duda le ayudará a elaborar un plan.

    .titulo-sexto.color-acento-contenido.offset-2
      h5 Figura 2
      span #[em Acciones para el control]

    .row.justify-content-center.desktop
      .col.md 
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema2/13.svg', alt='En la figura se observa como primer paso la busqueda de evidencia de la plaga, identificación de la plaga, recoger información de la zona a controlar, localización de los refugios y zonas de riesgo, evaluación de magnitud de la plaga, planificación de la intervención.')

    .row.justify-content-center.movil  
      .col.md 
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema2/14.svg', alt='En la figura se observa como primer paso la busqueda de evidencia de la plaga, identificación de la plaga, recoger información de la zona a controlar, localización de los refugios y zonas de riesgo, evaluación de magnitud de la plaga, planificación de la intervención')
    
    //- LineaTiempoA.color-primario.mb-5.text-white.text-small(:datos="datosLineaTiempoA")

    P.mt-5(data-aos="fade-left") Las plagas son una seria amenaza para la inocuidad de los piensos. Pueden producirse infestaciones de plagas cuando hay locales e instalaciones que favorecen su proliferación, bien debido a la accesibilidad de alimentos o a la existencia de lugares de cobijo. (CESFAC, 2007).
    P(data-aos="fade-left") Los vectores como ratas, ratones, insectos, aves pueden ser vectores de diferentes patologías importantes en el manejo de las enfermedades producidas por los alimentos como lo son salmonellas, leptospira, bacillus, etc. Allí radica la importancia de la vigilancia y control de diferentes plagas para asegurar la inocuidad de los alimentos y así producir un alimento de calidad.
    P(data-aos="fade-left") Para la prevención y el control de plagas es fundamental conocer a qué tipo de plaga nos enfrentamos, que comportamiento tiene, conocer su ciclo biológico para así identificar las técnicas y los productos que podemos utilizar para su control. Conocer el medio, canales de desagüe, entradas a las bodegas, orificios, puertas mal cerradas, mal infraestructura o avería de la misma, todos estos factores influyen en el control y erradicación de dichos vectores, la limpieza de las áreas y el orden en los lugares de almacenamiento y trabajo. Las barreras físicas también hacen parte del control y erradicación de vectores logrando así que las plagas o vectores no ingresen a las diferentes áreas de producción.
    P(data-aos="fade-left") Para complementar la información se invita a ver el siguiente vídeo:

    .row.mb-5
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/Y0tAyE0gPuE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          

           
    //- .row.justify-content-center 
    //-   .col-lg-10
    //-     .tarjeta.p-4.mb-5(style="background-color:#144677")(data-aos="flip-up")
    //-       .row.justify-content-around.align-items-center
    //-         .col-3.col-sm-2.col-lg-1
    //-           img(src="@/assets/curso/temas/tema2/6.svg")
    //-         .col
    //-           .row.justify-content-between.align-items-center
    //-             .col.mb-3.mb-sm-0-py-4
    //-               p.text-small.text-white Para complementar la información se invita a ver el siguiente vídeo:
    //-               p.text-small.text-white(style="margin:-2.5% 0;") Higienización de materias primas para ración
    //-             .col-sm-auto
    //-               a.boton.color-acento-contenido(href="https://www.youtube.com/embed/Y0tAyE0gPuE" target="_blank")
    //-                 span Ver vídeo
    //-                 i.fas.fa-video       

    h5 Higiene de los operarios

    p.mb-5(data-aos="fade-left") Dentro de las características de la higienización, los operarios o personas manipuladoras de las materias primas tienen una función tanto en la contaminación como en la preservación de la inocuidad de los productos. Los seres humanos se identifican como principales vectores de microorganismos, enfermedades y contaminación de las materias primas o los alimentos, puesto que llevan consigo microorganismos en el cabello, la piel, la ropa, la cavidad intestinal, entre otras. En consecuencia, con la manipulación del producto, puede estar en riesgo la producción de este. Ante esto, es importante tener medidas correctas para evitar ser un vector de contaminación, con la implementación de prácticas de prevención y control que ayuden a asegurar un producto de calidad para la ración animal. Algunas prácticas recomendadas son: 

    .row.justify-content-center.align-items-center
      .col-lg-10
        .cajon.p-4(style="background-color:#DBF9BD")(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-lg-3.mb-2
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema2/7.svg', alt='Texto que describa la imagen')
            .col-lg-6
              ul.lista-ul.text-small
                li 
                  i.lista-ul__vineta
                  | No comer en el lugar de trabajo. 
              ul.lista-ul.text-small
                li 
                  i.lista-ul__vineta
                  | Lavarse las manos cada que sea necesario, teniendo en cuenta la manipulación de productos, el ingreso a otras áreas, después de cada descanso, entre otras.
              ul.lista-ul.text-small
                li 
                  i.lista-ul__vineta
                  | Utilizar los elementos de seguridad necesarios.
              ul.lista-ul.text-small
                li 
                  i.lista-ul__vineta
                  | No estornudar o toser sobre la materia prima.
              ul.lista-ul.text-small
                li 
                  i.lista-ul__vineta
                  | No fumar.
              ul.lista-ul.text-small
                li 
                  i.lista-ul__vineta
                  | Limpieza de la indumentaria utilizada.
    
    p.mb-5.mt-5(data-aos="fade-left") Complementando lo anterior, existen técnicas y métodos de higienización de materias primas. Su propósito es proteger, preservar y conservar los productos y los elementos nutricionales que se le brinden al animal, con el fin de que estos puedan expresar todo su potencial genético. Para realizar la limpieza y desinfección, existen dos métodos de limpieza que se caracterizan así: 

    .row.justify-content-center.align-items-center 
      .col-lg-10
        .tarjeta--container.row.mb-5
          .col-md.tarjeta.color.p-4(style="background-color:#1B3F5E")(data-aos="flip-up") 
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/temas/tema2/8.svg', alt='Texto que describa la imagen')
              
            h2.text-center.text-white Manuales
            p.text-center.text-white Los métodos manuales son todos aquellos que consisten en frotar, cepillar y rociar con agua a grandes presiones, donde se puede realizar un barrido húmedo, con escobas, cepillos, enjuagado, y tratamiento con espumas o geles.

          .col-md.tarjeta.color.p-4(style="background-color:#3B5620")(data-aos="flip-up") 
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/temas/tema2/9.svg', alt='Texto que describa la imagen')
              
            h2.text-center.text-white Mecánicos
            p.text-center.text-white Los métodos mecánicos generalmente son aquellos que utilizan las fuerzas de remoción, ya sea del agua o el aire, para así extraer todo el material no deseado; dentro de estos, se encuentran el rociado de agua a presión, el uso de aspiradores, y el flujo de aire a presión.
          
          //- .col-md.tarjeta.color-primario.p-5
          //-   .row.justify-content-center.mb-4
          //-     .col-6
          //-       figure
          //-         img(src='@/assets/curso/temas/tema2/9.svg', alt='Texto que describa la imagen')
              
          //-   h2.text-center Mecánicos
          //-   p.text-center Los métodos mecánicos generalmente son aquellos que utilizan las fuerzas de remoción, ya sea del agua o el aire, para así extraer todo el material no deseado; dentro de estas, se encuentran el rociado de agua a presión, el uso de aspiradores, y el flujo de aire a presión. 


    .row.justify-content-center
      .col-10
        p.mb-5(data-aos="fade-left") Aparte de los métodos de higienización mencionados, cabe resaltar la importancia del uso de los diferentes productos de limpieza y desinfección. Existen múltiples grupos de limpieza, dependiendo de las características del compuesto activo y sus mecanismos de acción. Dentro de los más conocidos, se tienen los siguientes:

    .row.justify-content-center.align-items-center
      .col-lg-10
        .tarjeta.p-4.mb-2(style="background-color:#DBF9BD")(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-lg-2.p-4
              figure
                img(src='@/assets/curso/temas/tema2/10.svg', alt='Texto que describa la imagen')
            .col-lg-10.p-4
              ul.lista-ul.mb-3.text-bold
                li 
                  i.lista-ul__vineta
                  | Jabones 
              p La gran mayoría de jabones utilizados para la limpieza, tanto de manos como de superficies, son elaborados a partir de componentes sódicos y grasas, dando la característica especial de ser biodegradables, pero causando alteraciones de dureza de agua.


    .row.justify-content-center.align-items-center.mt-2
      .col-lg-10
        .tarjeta.p-4.mb-2(style="background-color:#DBF9BD")(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-lg-2.p-4
              figure
                img(src='@/assets/curso/temas/tema2/11.svg', alt='Texto que describa la imagen')
            .col-lg-10.p-4
              ul.lista-ul.mb-3.text-bold
                li 
                  i.lista-ul__vineta
                  | Detergentes, biocidas
              p Son el resultante de una mezcla de muchos componentes que tienen una o más sustancias activas. Su principal función es la remoción de las partículas de suciedad, y esto evita que se vuelvan a adherir a la superficie. También tienen componente antimicrobiano, el cual impide el crecimiento y desarrollo bacteriano, asegurando así una condición de limpieza e inocuidad. 


    .row.justify-content-center.mt-3
      .col-lg-10
        .tarjeta.p-4.mb-5(style="background-color:#FFFAD0")(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema2/12.svg")
            .col
              .row.justify-content-center.align-items-center
                .col
                  p.text-small Para obtener más información sobre los productos de limpieza más utilizados dentro de los grupos de jabones y detergentes, se sugiere leer el Anexo I: “Guía para el desarrollo de normas de higienización de los piensos” (Fundación CESFAC, 2007), desde la página 97 hasta la 103.  
                .col-sm-auto
                  a.boton.color-acento-contenido(:href="obtenerLink('/downloads/Anexo1_Guia_para_el_desarrollo_de_normas_de_higienización_de_los_piensos.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-download



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue

    datosLineaTiempoA: [
      {
        ano: 'Busqueda de evidencia de la plaga',
      },
      {
        ano: 'Identificación de la plaga',
      },
      {
        ano: 'Recoger información de la zona a controlar',
      },
      {
        ano: 'Localización de los refugios y zonas de riesgo',
      },
      {
        ano: 'Evaluación de magnitud de la plaga',
      },
      {
        ano: 'Planificación de la intervención',
      },
    ],
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
