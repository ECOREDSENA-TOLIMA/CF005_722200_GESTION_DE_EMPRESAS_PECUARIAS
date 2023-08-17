<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Areas de proceso de ración animal
    p(data-aos="fade-left") Las áreas de proceso y elaboración de los alimentos de las especies pueden ser separadas en tres (3) grandes zonas: 

    .row.mb-5.mt-5(data-aos="flip-up")
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema4/1.svg' alt='AvatarTop')
          .tarjeta(style="background-color: #E2E8EC; height:100%; width:100%")
            .text-black.p-4
              h4.text-center Almacenamiento
              p En esta zona, usted puede encontrar: 
                ul.lista-ul.mb-3.mt-3
                  li 
                    i.lista-ul__vineta
                    | Materias primas.
                  li 
                    i.lista-ul__vineta
                    | Productos terminados.
                  li 
                    i.lista-ul__vineta
                    | Productos rechazados.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema4/2.svg' alt='AvatarTop')
          .tarjeta(style="background-color: #E2E8EC; height:100%")
            .text-black.p-4
              h4.text-center Producción
              p Esta zona tiene como objetivo la producción de los alimentos de los animales, según sus características.  La producción se comprende desde la salida de la materia prima del almacén hasta su entrada al lugar de productos terminados.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema4/3.svg' alt='AvatarTop')
          .tarjeta(style="background-color: #E2E8EC; height:100%")
            .text-black.p-4
              h4.text-center Comunes o del personal
              p En el contexto pecuario, es necesario destinar una zona para el personal de trabajo. Esta puede comprender: comedores, baños y cambios de indumentaria.

    p.mb-5(data-aos="fade-left") En la gestión de las áreas de producción, se deben reconocer las características y el funcionamiento de cada zona, para luego evaluarlas. A continuación, se enunciarán las diferentes áreas y sus subáreas, siendo unas necesarias, complementarias y opcionales. 

    h4.mb-5 Almacenamiento

    .row.justify-content-center
      .col-lg-1
        figure(data-aos="fade-right").mb-4
          img(src='@/assets/curso/temas/tema4/4.svg', alt='Texto que describa la imagen')
      .col-lg-11
        p(data-aos="fade-left") Las empresas que gestionan raciones animales deben tener una zona suficiente para almacenar las materias primas, con el propósito de gestionar la materia prima en relación con: 1. Contaminación cruzada, 2. El orden, y 3. Productos a granel, terminados, envasados y empacados. Tener un lugar organizado y estibado facilita el tránsito, la limpieza, el muestreo y la inspección de la materia prima y los alimentos.  Los almacenes tienen:

    .row.mb-5.mt-5(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          h2.text-center Básicas
          p #[b Carga y descarga]
          p Lugares delimitados y sin obstáculos, que facilitan el acceso de los vehículos.
          p #[b Almacenamiento]
          p Sitio que tiene pasillos y estructuras para la acomodación.
          p #[b Manipulación o transporte]
          p Zona destinada a la manipulación de los alimentos o materias primas. Debe ser un lugar sin obstáculos y de tránsito fácil.

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          h2.text-center Complementarias 
          p Ellas son:
          p #[b Administrativas]
          p Área de oficinas de los jefes de almacén.
          p #[b Servicios higiénicos]
          p Zonas especializadas de limpieza y desinfección, baños.
          
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          h2.text-center Opcionales
          p #[b Área de productos en mal estado]
          p Zona especial para el almacenamiento de productos que no cumplen los requerimientos de calidad. Es una zona restringida y lejos del almacén o bodega.

    p(data-aos="fade-left").mb-5 Dentro del área de almacenamiento, es importante guardar los alimentos y las materias primas según sus condiciones organolépticas. Existen varios tipos de almacenamiento, ellos son: 

    .tarjeta--container.row.mb-5(data-aos="flip-up")
      .col-md.tarjeta.p-5(style="background-color: #DEF1F0")
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/temas/tema4/5.svg', alt='Texto que describa la imagen')
          
        h2.text-center Almacenamiento en seco
        p Según González (2013), son espacios que sólo requieren estructuras de acomodación planeadas a partir de unas condiciones que ayuden a conservar la calidad de las materias primas y mejoras de productividad. Siga estas recomendaciones:
          ul.lista-ul.mb-3.mt-3
            li 
              i.lista-ul__vineta
              | Ubicar insumos que utiliza frecuentemente. 
            li 
              i.lista-ul__vineta
              | Guardar alimentos de una misma clase.
            li 
              i.lista-ul__vineta
              | Recuerde registrar las fechas de los insumos en el momento de la recepción.
            li 
              i.lista-ul__vineta
              | Colocar los productos más antiguos al frente de los anaqueles y los que recién ingresan en la parte posterior.
            li 
              i.lista-ul__vineta
              | Mantener los productos lejos del suelo y paredes.
            li 
              i.lista-ul__vineta
              | Almacenar los productos tan altos como les permita su manejo y seguridad.
            li 
              i.lista-ul__vineta
              | Guardar los productos más pesados en la parte baja y los más livianos en la parte alta.
            li 
              i.lista-ul__vineta
              | Facilitar un espacio separado para químicos y artículos de limpieza en general, ya que estos despiden olores nocivos para la salud.
            li 
              i.lista-ul__vineta
              | No permita que se cuelguen prendas de vestir en el almacén.

      .col-md.tarjeta.p-5(style="background-color: #DBF9BD")
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/temas/tema4/6.svg', alt='Texto que describa la imagen')
          
        h2.text-center Almacenamiento refrigerado
        p El almacenamiento congelado es principalmente direccionado a alimentos perecederos, tales como: lácteos, carnes, huesos y subproductos animales, los cuales, por sus condiciones organolépticas, tienden a tener una vida útil mucho más corta.  Esta custodia, a través de una cadena de frío, logra atenuar las condiciones favorables para el crecimiento bacteriano. La refrigeración a temperaturas por debajo de 4 °C inhibe el crecimiento de la mayoría de las bacterias patógenas, pero no las mata; por lo tanto, los cuartos refrigerados mantendrán temperaturas entre 2,5 °C a 6 °C. (UIS, 2008).

    h4.mb-5 Área de producción

    .row.justify-content-center.align-items-center
      .col-lg-1
        figure(data-aos="fade-right").mb-4
          img(src='@/assets/curso/temas/tema4/7.svg', alt='Texto que describa la imagen')
      .col-lg-11
        p(data-aos="fade-left") El área de producción se define a partir de una serie de procedimientos que conllevan la transformación de las materias primas en alimentos planificados, siguiendo los diferentes estándares de calidad. En esta zona, están todos los equipos y herramientas utilizados para la transformación de las materias primas hasta el producto final. 
        p(data-aos="fade-left") La zona de producción es fundamental en el sistema de elaboración de alimentos, porque allí se ejecutan los pasos esenciales para la elaboración de las raciones animales. Algunas acciones que se efectúan son:  peso de las materias primas o bache, transformaciones, mezclas, pelletizado, extrudizado. Cabe mencionar que esto puede variar según la industria. Se debe tener en cuenta la secuencia de las operaciones, para ubicar y distribuir las materias primas y los alimentos. Dentro del área de producción, se debe realizar una programación de la producción, teniendo en cuenta estos aspectos: 

    .row.justify-content-center.align-items-center.mt-4.mb-5
      .col-lg-10
        .row.justify-content-center.align-items-center
          .col-lg-5
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema4/8.jpg', alt='Texto que describa la imagen')
          .col-lg-7
            .tarjeta.p-3.mb-1(style="background-color:#3B5620")(data-aos="flip-up")
              p.offset-1.text-small(style="color:#FFFAD0")(data-aos="fade-left") ▪	Fecha de producción.
            .tarjeta.p-3.mb-1(style="background-color:#3B5620")(data-aos="flip-up")
              p.offset-1.text-small(style="color:#FFFAD0")(data-aos="fade-left") ▪	Nombre del producto.
            .tarjeta.p-3.mb-1(style="background-color:#3B5620")(data-aos="flip-up")
              p.offset-1.text-small(style="color:#FFFAD0")(data-aos="fade-left") ▪	Peso por producir. 

    .row.justify-content-center
      .col-lg-10
        p.mb-5(data-aos="fade-left") Con todo lo mencionado anteriormente, se le invita a observar el siguiente mapa de distribución de procesos de elaboración de raciones animales. Identificar esto es fundamental para comprender los tiempos de elaboración de las raciones.

    .titulo-sexto.color-acento-contenido.offset-2
      h5 Figura 4
      span #[em Mapa de distribución de procesos]
    
    .row.justify-content-center.mt-5
      .col-lg-10
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema4/9.svg', alt='Texto que describa la imagen')

    
          

      
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
