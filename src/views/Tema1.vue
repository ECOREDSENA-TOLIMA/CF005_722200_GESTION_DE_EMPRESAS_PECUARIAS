<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Materias primas para alimento animal

    p.mb-5(data-aos="fade-left") Las materias primas son la base fundamental para la alimentación animal porque de ellas se obtienen los nutrientes necesarios para suplir las necesidades nutricionales de los animales. Para ello, se deben considerar diferentes factores, como son:
    
    .titulo-sexto.color-acento-contenido.offset-2
      h5 Figura 1
      span #[em Factores para alimentación animal]
    .row.mb-5
      .col-md-3.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/1.svg' alt='En la figura se observa la especie, requerimiento para cada especie, ingredientes o materias primas, costo, hábito del consumidor.')
          .tarjeta(style="background-color:#FFFAD0; width:100%")
            .text.p-4
              h2.text-center La  especie              

      .col-md-3.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/2.svg' alt='En la figura se observa la especie, requerimiento para cada especie, ingredientes o materias primas, costo, hábito del consumidor.')
          .tarjeta(style="background-color:#FFFAD0; width:100%")
            .p-4
              h2.text-center Requerimiento para cada especie

      .col-md-3.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/3.svg' alt='En la figura se observa la especie, requerimiento para cada especie, ingredientes o materias primas, costo, hábito del consumidor.')
          .tarjeta(style="background-color:#FFFAD0; width:100%")
            .p-4
              h2.text-center Ingredientes o materias primas

      .col-md-3.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/4.svg' alt='En la figura se observa la especie, requerimiento para cada especie, ingredientes o materias primas, costo, hábito del consumidor.')
          .tarjeta(style="background-color:#FFFAD0; width:100%")
            .p-4
              h2.text-center Costo

      .col-md-3.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/5.svg' alt='En la figura se observa la especie, requerimiento para cada especie, ingredientes o materias primas, costo, hábito del consumidor.')
          .tarjeta(style="background-color:#FFFAD0; width:100%")
            .p-4
              h2.text-center Hábito del consumidor
    
    //- .row.justify-content-center
    //-   .tarjeta.tarjeta.p-4.mb-5(style="background-color:#3B5620")(data-aos="flip-up")
    //-     .row.justify-content-center
    //-       .col-sm-6.col-lg-2.mb-4.mb-lg-0
    //-         .tarjeta--boton.color-primario.p-4(style="height:100%")
    //-           .row.justify-content-center.mb-3
    //-             .col-7
    //-               figure
    //-                 img(src='@/assets/curso/temas/tema1/1.svg', alt='Texto que describa la imagen')

    //-           h3.text-center La  especie
    //-       .col-sm-6.col-lg-2.mb-4.mb-lg-0
    //-         .tarjeta--boton.color-primario.p-4(style="height:100%")
    //-           .row.justify-content-center.mb-3
    //-             .col-7
    //-               figure
    //-                 img(src='@/assets/curso/temas/tema1/2.svg', alt='Texto que describa la imagen')

    //-           h3.text-center Requerimiento para cada especie
    //-       .col-sm-6.col-lg-2.mb-4.mb-lg-0
    //-         .tarjeta--boton.color-primario.p-4(style="height:100%")
    //-           .row.justify-content-center.mb-3
    //-             .col-7
    //-               figure
    //-                 img(src='@/assets/curso/temas/tema1/3.svg', alt='Texto que describa la imagen')

    //-           h3.text-center Ingredientes o materias primas
    //-       .col-sm-6.col-lg-2.mb-4.mb-lg-0
    //-         .tarjeta--boton.color-primario.p-4(style="height:100%")
    //-           .row.justify-content-center.mb-3
    //-             .col-7
    //-               figure
    //-                 img(src='@/assets/curso/temas/tema1/4.svg', alt='Texto que describa la imagen')

    //-           h3.text-center Costo
    //-       .col-sm-6.col-lg-2.mb-4.mb-lg-0
    //-         .tarjeta--boton.color-primario.p-4(style="height:100%")
    //-           .row.justify-content-center.mb-3
    //-             .col-7
    //-               figure
    //-                 img(src='@/assets/curso/temas/tema1/5.svg', alt='Texto que describa la imagen')

    //-           h3.text-center Hábito del consumidor

    .row.justify-content-center.mt-5
      .col-10
        .tarjeta.tarjeta.p-4.mb-5(style="background-color:#DBF9BD")(data-aos="flip-up")
          p(data-aos="fade-left") Dentro de las materias primas, es importante conocer los requerimientos energéticos y proteicos de los animales; dependiendo de ellos, se realiza la elección de dichas materias primas.

    .row.justify-content-center 
      .col-lg-3
        figure.mb-5(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/6.png', alt='Texto que describa la imagen')
      .col-lg-8
        p(data-aos="fade-left") Las materias primas pueden clasificarse según su origen. Ellas son de origen vegetal, animal o mineral. Cada grupo aporta elementos nutricionales necesarios para el animal en su etapa de mantenimiento y producción. Se pueden nombrar de acuerdo con el valor nutricional aportado: los #[b macro ingredientes], que son aquellos con un alto valor de proteínas, lípidos y glucósidos altos, o los #[b micro ingredientes], en donde se encuentran todos aquellos que aportan vitaminas y minerales. Cabe mencionar que en algunos casos las medicinas se utilizan en menor proporción para no interferir con este tipo de nutrientes. A continuación, se le sugiere identificar algunas definiciones y características de las materias primas.

    .row.mt-5.justify-content-center
      .col-lg-10
        ImagenInfografica.color-acento-contenido.mb-5(data-aos="flip-up")
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/7.svg', alt='Texto que describa la imagen')
          
          .tarjeta.color-acento-botones.p-3(x="60.1%" y="1%" numero="")
            .h5.mb-2 Verduras y hortalizas
          .tarjeta.color-acento-botones.p-3(x="84%" y="11.9%" numero="")
            .h5.mb-2 Frutas
          .tarjeta.color-acento-botones.p-3(x="96%" y="31.8%" numero="")
            .h5.mb-2 Cereales
            p La más utilizada por su aporte energético y fibra.
          .tarjeta.color-acento-botones.p-3(x="97.5%" y="47.8%" numero="")
            .h5.mb-2 Grasas vegetales
          .tarjeta.color-acento-botones.p-3(x="88.5%" y="70.5%" numero="")
            .h5.mb-2 Frutos secos
          .tarjeta.color-acento-botones.p-3(x="66%" y="87.1%" numero="")
            .h5.mb-2 Legumbres
          .tarjeta.color-acento-botones.p-3(x="26%" y="87.9%" numero="")
            .h5.mb-2 Huevos
            p.text-bold Derivados
            p Clara deshidratada.
          .tarjeta.color-acento-botones.p-3(x="5.4%" y="64.5%" numero="")
            .h5.mb-2 Pescado
            p.text-bold Derivados
            p Aceite de pescado.
          .tarjeta.color-acento-botones.p-3(x="3.4%" y="38.5%" numero="")
            .h5.mb-2 Leche
            p.text-bold Derivados
            p Margarina-Yogurt-Queso.  
          .tarjeta.color-acento-botones.p-3(x="16.8%" y="18.5%" numero="")
            .h5.mb-2 Carne
            p.text-bold Derivados
            p Harinas de hueso-Sangre-Pezuña-Pelo. 

    p.mb-5(data-aos="fade-left") Comprendida la clasificación de las materias primas, es necesario reconocer los fundamentos de la nutrición animal, que se divide en compuestos orgánicos e inorgánicos. Cuando se hace referencia a los primeros, se encuentran nitrógenos, lípidos, carbohidratos y vitaminas. En los segundos yacen principalmente los minerales.
    
    .row.justify-content-center 
      .col-lg-10
        .tarjeta.p-4.mb-5(style="background-color:#144677")(data-aos="flip-up")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema1/8.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small(style="color:white") Para ampliar su conocimiento, se ha elegido el artículo “Compuestos orgánicos e inorgánicos” de Rodríguez et al. (2002). En el texto citado, se presenta la diferenciación de los componentes orgánicos e inorgánicos, las principales características de cada componente, y sus principales aportes a los diferentes organismos vivos.
                .col-sm-auto
                  a.boton.color-acento-contenido(href="https://go-gale-com.bdigital.sena.edu.co/ps/i.do?p=GVRL&u=sena&id=GALE|CX3003700023&v=2.1&it=r" target="_blank")
                    span Enlace web
                    i.fas.fa-link


    separador 
    .titulo-segundo.color-secundario
      h2#t_1_1 1.1  Métodos de acopio e inspección

    .row.justify-content-center 
      .col-lg-3
        figure.mb-5(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/9.svg', alt='Texto que describa la imagen')
      .col-lg-9
        p(data-aos="fade-left") Comprendida la clasificación y características de las materias primas según su origen, es momento de identificar los métodos de acopio (almacenamiento) e inspección de las materias primas, las cuales requieren ser guardadas desde diferentes lineamientos. Es necesario entender que un acopio o almacenamiento se caracteriza por reunir o agrupar elementos: materias primas, en este contexto. Para su custodia, existen formas de reunirlos y disponerlos para el proceso de elaboración de raciones. Las técnicas deben garantizar la inocuidad de las materias primas. 
        .tarjeta.p-4.mb-5(style="background-color:#DBF9BD")(data-aos="flip-up")
          p En las producciones, se establecen diferentes métodos de acopio o almacenamiento de las materias primas, según las condiciones del almacén. A ellos se les debe asegurar el flujo eficaz y oportuno hacia el área de elaboración o producción. Esto, garantizando la calidad y cantidad de los productos bajo una manipulación y acopio desde las condiciones organolépticas de estas. 

    p.mb-5(data-aos="fade-left") Los métodos para el acopio de las materias primas dentro de un almacén dependen de factores como el espacio y utilización de este, así como de la forma de colocar las materias primas. Las formas más comunes de acomodar y organizar son las siguientes: 

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")(data-aos="flip-up")
      .row.justify-content-center.align-items-center(titulo="Almacenamiento o acopio ordenado")
        .col-md-2.p-4
          figure
            img(src='@/assets/curso/temas/tema1/10.svg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0.p-4
          p Se define en la elección de un lugar determinado para cada uno de los elementos que serán guardados, teniendo en cuenta el flujo de inventario, entrada y salida de materias primas. Los espacios asignados son flexibles y sus condiciones físicas ayudan a evitar mezclas de productos. Se debe marcar cada espacio con el nombre de la materia o componente que allí se pondrá. Esto asegura inocuidad. Con este método, la bodega o almacén no se llena completamente.

      .row.justify-content-center.align-items-center(titulo="Almacenamiento o acopio en bloque")
        .col-md-2.p-4
          figure
            img(src='@/assets/curso/temas/tema1/11.svg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0.p-4
          p Este método se caracteriza por la acomodación de las materias primas según su orden de llegada. Estas se acomodan en bloques y no existen espacios entre referencias. El almacén se llena en un 100% y posee las mismas características de un acopio ordenado, con sus ventajas y desventajas.
      .row.justify-content-center.align-items-center(titulo="Almacenamiento o acopio a granel")
        .col-md-2.p-4
          figure
            img(src='@/assets/curso/temas/tema1/24.svg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0.p-4
          p Este método determina un almacenamiento de materias primas sueltas. Su separación se debe a la evitación de mezclas entre ellas.  Se debe tener cuidado con materias tales como harinas, porque son volátiles.
          p La inspección que se realiza en este método es la verificación de las condiciones necesarias para asegurar la inocuidad y calidad de los alimentos de los animales, porque estos expresarán su potencial acuerdo con la calidad del alimento brindado.
          p En caso de presentarse una alteración de la materia prima, ya sea por rancidez o caducidad, en la inspección se debe identificar, separar y determinar la causa de dicha alteración.
    separador 
    .titulo-segundo.color-secundario
      h2#t_1_2 1.2  Características de perecibilidad

    p(data-aos="fade-left") En la gestión del acopio y almacenamiento de las diferentes materias primas, es importante conocer e identificar sus características con respecto a la perecibilidad. La perecibilidad se define como el deterioro de las materias primas o alimentos por condiciones físicas, químicas o biológicas. Las características de la perecibilidad son generalmente determinadas por la vida útil del producto, es decir, por la duración de la materia prima en condiciones de calidad organolépticas óptimas y de calidad aceptable, ya sean de horas o días, a temperatura ambiente (Aguilar, 2012).
    p.mb-5(data-aos="fade-left") #[em Madigan] et al. (2000) definen el deterioro de materias primas o alimentos como cualquier cambio en el aspecto visual, olor o sabor de un producto alimenticio que lo hace inaceptable para el consumidor. Entendiendo esta afirmación de los autores con respecto a las condiciones de cambios o alteraciones, se deben comprender los factores que afectan directa o indirectamente el producto o materia prima. Observe el siguiente recurso de aprendizaje para más información. 
            
    ImagenInfograficaB.color-primario.mb-5
      template(v-slot:imagen)
        figure(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema1/12.svg', alt='Imagen decorativa')
      div(x="20%" y="40%" tooltip="tooltip de max 35 caracteres" numero="1")
        SlyderA(tipo="b")
          .row.justify-content-center
            .col-md-1
              figure
                img(src='@/assets/curso/temas/tema1/13.svg', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              h4 Temperatura
              p Incide en el crecimiento de microorganismos. Afecta las características de cada materia prima cuando altera sus contenidos nutricionales. También puede ayudar a retardar la perecibilidad de los alimentos entre los 4° y 7°C.

          .row.justify-content-center
            .col-md-1
              figure
                img(src='@/assets/curso/temas/tema1/14.svg', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              h4 Aire
              p Es un elemento nocivo para las vitaminas, porque genera descomposición  en las vitaminas D y A. Acusa oxidación en los pigmentos cárnicos y mezcla de condiciones organolépticas y/o nutricionales.
          .row.justify-content-center
            .col-md-1
              figure
                img(src='@/assets/curso/temas/tema1/15.svg', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              h4 Humedad
              p Sucede en captación de humedad o agua de algunas materias primas. Esto es producido por la condensación.

          .row.justify-content-center
            .col-md-1
              figure
                img(src='@/assets/curso/temas/tema1/16.svg', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              h4 Luz
              p Es causal de las pérdidas de vitaminas A y D porque son fotosensibles.

      div(x="50%" y="76%" tooltip="tooltip de max 35 caracteres" numero="2")
        SlyderA(tipo="b")
          .row.justify-content-center
            .col-md-1
              figure
                img(src='@/assets/curso/temas/tema1/17.svg', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              h4 Enzimas
              p Reacción causada por las propias enzimas de las materias primas utilizadas o reacción a mezclas.

          .row.justify-content-center
            .col-md-1
              figure
                img(src='@/assets/curso/temas/tema1/18.svg', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              h4 Parásitos
              p Causada por agentes como roedores, pájaros e insectos, que generan contaminación y transmisión de enfermedades.
          .row.justify-content-center
            .col-md-1
              figure
                img(src='@/assets/curso/temas/tema1/19.svg', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              h4 Microbiológicas
              p Están en el alimento o materia prima. Un medio propicio para su crecimiento y desarrollo. 

      div(x="80%" y="40%" tooltip="tooltip de max 35 caracteres" numero="3")
        SlyderA(tipo="b")
          .row.justify-content-center
            .col-md-1
              figure
                img(src='@/assets/curso/temas/tema1/20.svg', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              h4 Oxidación de las vitaminas
              p Es el tiempo de exposición de una materia prima a factores que la llevan a su degradación.  

          .row.justify-content-center
            .col-md-1
              figure
                img(src='@/assets/curso/temas/tema1/21.svg', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              h4 Descomposición proteica
              p Causan mal olor en las materias primas.
          .row.justify-content-center
            .col-md-1
              figure
                img(src='@/assets/curso/temas/tema1/22.svg', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              h4 Fermentación de glucósidos
              p Generan un sabor picante en las materias primas o alimentos.
          .row.justify-content-center
            .col-md-1
              figure
                img(src='@/assets/curso/temas/tema1/23.svg', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              h4 Enranciamiento de lípidos 
              p Es un proceso por el cual un alimento con alto contenido en grasas o aceites se altera con el tiempo, adquiriendo un sabor desagradable.

    separador 
    .titulo-segundo.color-secundario
      h2#t_1_3 1.3  Técnicas de selección, adecuación, recepción y evaluación
    p.mb-5(data-aos="fade-left") Las materias primas seleccionadas para la elaboración de alimento animal, son una fuente que define la composición de un alimento; en consecuencia, su adecuación, recepción y evaluación son acciones constantes para determinar la calidad y bienestar animal.  A continuación, se describen algunas técnicas planeadas desde la inocuidad y calidad de los productos. Estas técnicas ofrecen unos alimentos sanos y seguros, tanto para los animales como para los consumidores finales. ¿Ha escuchado sobre las técnicas de selección, adecuación, recepción y evaluación? Para más información, que le ayudará a desarrollar conocimiento, revise este recurso educativo. 

    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
      .row.justify-content-center.align-items-center(titulo="Selección")(data-aos="flip-up")
        .col-md-3.p-4
          figure
            img(src='@/assets/curso/temas/tema1/25.png', alt='Texto que describa la imagen')
        .col-md-7.mb-4.mb-md-0.p-4
          p Esta técnica se centra en la selección de los ingredientes o materias primas que se usarán en la ración animal. Se hace necesario hacer un listado de estas materias, que se deben comprar a proveedores que garanticen un producto seguro porque cumple con las especificaciones estipuladas para cada materia prima.
          p Los proveedores deben suministrar las especificaciones exactas de los productos, para así realizar una formulación mucho más precisa de las raciones. Tenga cuidado, cuando cambie de proveedor, deben solicitar las especificaciones de las materias primas, ya que pueden tener una variación significativa con respecto a trazas de medicamentos o alguna alteración. 
          p Finalmente, cuando usted haga una selección de los ingredientes o materias primas, tenga presente los componentes nutricionales, energéticos y proteicos.

      .row.justify-content-center.align-items-center(titulo="Adecuación")
        .col-md-3.p-4
          figure
            img(src='@/assets/curso/temas/tema1/26.png', alt='Texto que describa la imagen')
        .col-md-7.mb-4.mb-md-0.p-4
          p La adecuación es un proceso que debe suceder antes de la recepción de las materias primas. Esta debe planearse con la intención de agilizar el proceso de recepción y descargue de las materias primas, para así evitar los factores de perecibilidad. Ello garantiza un producto óptimo.
          p Cuando usted necesita realizar la técnica de adecuación, seleccione un espacio adecuado para la descarga de las materias primas, que luego son direccionadas al lugar de almacenamiento.
          p Es importante realizar la revisión de las diferentes estructuras: contenedores, estibas, envases, entre otros, y aplicar los protocolos de limpieza de las áreas de almacenamiento.

      .row.justify-content-center.align-items-center(titulo="Recepción")
        .col-md-3.p-4
          figure
            img(src='@/assets/curso/temas/tema1/27.png', alt='Texto que describa la imagen')
        .col-md-7.mb-4.mb-md-0.p-4
          p Esta técnica tiene como propósito la revisión de los ingredientes o materias primas solicitadas. Estas deben coincidir con la lista de solicitud y envío del proveedor. Usted puede identificar el contenido de los empaques o cajas porque deben tener una rotulación sobre número, fecha, lote y todas las características que informen su caducidad y registro.
          p Antes de realizar la descarga, realice una leve inspección de los productos, en relación con el embalaje, cantidad, color, olor, textura, densidad, humedad, peso y temperatura de los productos. Si existe alguna alteración, haga el respectivo reporte. Cabe mencionar, en el momento de la recepción de materias primas o productos a granel, un muestreo de las materias. Tome de forma aleatoria un ¼ a ½ de materia. Haga una identificación y rotulación de esta actividad con estos aspectos: fecha de muestra, fecha de elaboración del producto, tipo de materia prima, fecha de caducidad. Con materias primas o ingredientes como aceites, grasas, entre otros, la muestra se debe realizar después de haber iniciado el descargue.
          p Todas las muestras deben ser debidamente almacenadas, evitando la descomposición y destrozo por parte de roedores o insectos.

      .row.justify-content-center.align-items-center(titulo="Evaluación")
        .col-md-3.p-4
          figure
            img(src='@/assets/curso/temas/tema1/28.png', alt='Texto que describa la imagen')
        .col-md-7.mb-4.mb-md-0.p-4
          p La técnica de evaluación es un procedimiento que se realiza desde el proceso de selección, cuando se valora la calidad de la materia prima. Es importante, en el antes, durante y después de la recepción, velar por el cumplimiento de los requerimientos de los animales. Es un procedimiento que se realiza de manera constante y durante todas las fases.
          
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
