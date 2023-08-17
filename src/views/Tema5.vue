<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Equipos para la ración animal
    
    .row.justify-content-center
      .col-lg-4
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema5/1.png', alt='Texto que describa la imagen')
      .col-lg-8
        p(data-aos="fade-left") A causa del aumento de la producción animal, surgen nuevas tecnologías que optimizan la elaboración de productos y raciones animales. Ello mejora las diferentes ofertas nutricionales, a partir de estándares de calidad.  Sin duda, los equipos y herramientas impactan la producción cuando ayudan a la transformación de la materia prima, el pesaje de los ingredientes, la mezcla, el pelletizado, la extrusión, y, en empresas más tecnificadas, el transporte de estas.
        p(data-aos="fade-left") Dentro de las principales clases de equipos, máquinas y herramientas, se encuentran funciones que inician desde una báscula hasta las más sofisticadas extrusoras o peletizadoras. A continuación, revise el siguiente recurso de aprendizaje, para identificar las características de los equipos, máquinas y herramientas. 

    TabsB.color-primario.mb-5.mt-5
      .py-4.py-md-5(titulo="Balanzas o básculas" :icono="require('@/assets/curso/temas/tema5/2.svg')")
        .row.justify-content-center
          .col-10
            p.mb-5 Son utilizadas, principalmente, para determinar el peso de las diferentes materias primas. Existen diferentes tipos de balanzas o básculas, para su correcto funcionamiento deben estar calibradas. Dentro de las balanzas más comunes encontramos:
            .row-justify-content-center
              .col-lg-12
                table
                  thead.text-center
                    tr(style="background-color:#DBF9BD")
                      th Balanzas de pesa deslizante
                      th Balanzas digitales
                      th Balanza de resorte
                  tbody
                    tr
                      td 
                        p.mt-3.mb-5 Por medio del deslizamiento de la pesa, se logra la medición del peso en el plato. Para ello, se debe encontrar el punto de equilibrio y realizar el pesaje en una base plana. 
                        figure(data-aos="fade-right")
                          img(src='@/assets/curso/temas/tema5/3.svg',height="100", width="100" alt='Texto que describa la imagen')
                      td 
                        p.mt-3.mb-5 Poseen un #[em software] para ser más precisas en los pesos y su calibración es un poco más sencilla.
                        figure(data-aos="fade-right")
                          img(src='@/assets/curso/temas/tema5/4.svg',height="100", width="100" alt='Texto que describa la imagen')
                      td 
                        p.mt-3.mb-5 Por medio del resorte y la capacidad de soportar la tensión, se calcula el peso ejercido. Este equipo requiere una calibración constante, ya que puede inducir al error.
                        figure(data-aos="fade-right")
                          img(src='@/assets/curso/temas/tema5/5.svg',height="100", width="100" alt='Texto que describa la imagen')

      .py-4.py-md-5(titulo="Molino" :icono="require('@/assets/curso/temas/tema5/6.svg')")
        .row.justify-content-center
          .col-10
            p.mb-5 El fin de la molienda es fraccionar los granos, por eso es importante el tipo de molino a emplear; entre ellos, encontramos:
            .row-justify-content-center
              .col-lg-12
                table
                  thead.text-center
                    tr(style="background-color:#E2E8EC")
                      th Molino de martillo
                      th Molino de rodillo
                      th Molino de tornillo sin fin
                  tbody
                    tr
                      td 
                        p.mt-3.mb-5 La reducción de la partícula se genera por el impacto de dos martillos, cortando por los bordes de ambos martillos y fraccionando la materia prima.
                        figure(data-aos="fade-right")
                          img(src='@/assets/curso/temas/tema5/7.svg',height="100", width="100" alt='Texto que describa la imagen')
                      td 
                        p.mt-3.mb-5 Tiene la ventaja de crear partículas más uniformes debido a la presión ejercida por dos o más rodillos que giran muy cerca uno del otro.
                        figure(data-aos="fade-right")
                          img(src='@/assets/curso/temas/tema5/8.svg',height="100", width="100" alt='Texto que describa la imagen')
                      td 
                        p.mt-3.mb-5 Produce la ruptura de las partículas por la presión que ejerce el tornillo sobre la malla. 
                        figure(data-aos="fade-right")
                          img(src='@/assets/curso/temas/tema5/9.svg',height="100", width="100" alt='Texto que describa la imagen')

      .py-4.py-md-5(titulo="Mezcladoras" :icono="require('@/assets/curso/temas/tema5/10.svg')")
        .row.justify-content-center
          .col-10
            p.mb-5 Ayudan a iniciar el proceso que realiza la mezcla de las materias primas, donde es importante la secuencia de adición de materias primas y la descarga completa, sin dejar residuos. La mezcla es producida por un tornillo sin fin o cintas que se encargan de realizar una mezcla homogénea.
            .row-justify-content-center
              .col-lg-12
                table
                  thead.text-center
                    tr(style="background-color:#E2E8EC")
                      th Mezcladoras
                  tbody
                    tr
                      td 
                        figure(data-aos="fade-right")
                          img(src='@/assets/curso/temas/tema5/14.svg',height="100", width="100" alt='Texto que describa la imagen')

      .py-4.py-md-5(titulo="Zarandas o cribas" :icono="require('@/assets/curso/temas/tema5/11.svg')")
        .row.justify-content-center
          .col-10
            p.mb-5 Utilizadas para la limpieza de los granos o algunas materias primas. Estas utilizan diferentes diámetros de malla, para así generar una retención de las partículas más grandes y que las pequeñas logren pasar. También se utilizan diferentes fuerzas, como el viento y la fuerza centrípeta, para lograr la eliminación de partículas extrañas a la materia prima. Entre ellas, están:
            .row-justify-content-center
              .col-lg-12
                table
                  thead.text-center.text-white
                    tr(style="background-color:#632059")
                      th Zarandas manuales
                      th Zarandas mecánicas
                      th Cribas por rodillo
                      th Cribas de aire
                  tbody
                    tr
                      td 
                        p.mt-3.mb-5 El método de zarandas manuales es muy utilizado por su facilidad; se deben usar varios tamaños de zarandas para asegurar la limpieza de las impurezas.
                        figure(data-aos="fade-right")
                          img(src='@/assets/curso/temas/tema5/15.svg',height="100", width="100" alt='Texto que describa la imagen')
                      td 
                        p.mt-3.mb-5 Generalmente, actúan por vibración; se debe estar pendiente del tamaño de la zaranda para cada materia prima y así no tener pérdidas por el tamaño de la partícula.
                        figure(data-aos="fade-right")
                          img(src='@/assets/curso/temas/tema5/16.svg',height="100", width="100" alt='Texto que describa la imagen')
                      td 
                        p.mt-3.mb-5 Utilizan la fuerza centrífuga para la eliminación de las partículas no deseadas. Es importante tener en cuenta el uso del tamiz adecuado para cada materia prima según su tamaño.
                        figure(data-aos="fade-right")
                          img(src='@/assets/curso/temas/tema5/17.svg',height="100", width="100" alt='Texto que describa la imagen')
                      td 
                        p.mt-3.mb-5 Utilizada para la limpieza de granos con un peso mucho mayor, donde, por medio del aire ejercido por las hélices, se realiza la separación de los elementos no deseados en los granos o materias primas.
                        figure(data-aos="fade-right")
                          img(src='@/assets/curso/temas/tema5/18.svg',height="100", width="100" alt='Texto que describa la imagen')
                          
      .py-4.py-md-5(titulo="Peletizadora" :icono="require('@/assets/curso/temas/tema5/12.svg')")
        .row.justify-content-center
          .col-10
            p.mb-5 Cuando se utiliza esta máquina, los ingredientes entran al alimentador, después, los molinos de martillos trituran la materia prima, haciéndola pasar por diferentes orificios de prensado. Debido al calor y la presión ejercida, los aceites de las materias primas generan un proceso de compactación.
            .row-justify-content-center
              .col-lg-12
                table
                  thead.text-center
                    tr(style="background-color:#E2E8EC")
                      th Peletizadora
                  tbody
                    tr
                      td 
                        figure(data-aos="fade-right")
                          img(src='@/assets/curso/temas/tema5/19.svg',height="150", width="150" alt='Texto que describa la imagen')

      .py-4.py-md-5(titulo="Extrusor" :icono="require('@/assets/curso/temas/tema5/13.svg')")
        .row.justify-content-center
          .col-10
            p.mb-5 Los extrusores monotornillos transportan la materia prima, la cual va pasando por procesos de calor y aumento de temperatura, con sus respectivas zonas de enfriado.
            .row-justify-content-center
              .col-lg-12
                table
                  thead.text-center
                    tr(style="background-color:#E2E8EC")
                      th Extrusor
                  tbody
                    tr
                      td 
                        figure(data-aos="fade-right")
                          img(src='@/assets/curso/temas/tema5/20.svg',height="150", width="150" alt='Texto que describa la imagen')
                      
    p(data-aos="fade-left") Identificados los equipos que permiten la transformación de materias primas para la ración animal, es importante que, antes del uso de cualquier tecnología en su contexto laboral, comprenda los usos y cuidados de las máquinas, a través de la información que contienen los manuales de funciones.  Estos manuales describen los diferentes procedimientos de operación, de forma detallada y sencilla, usualmente, utilizan fotos, imágenes de colores de botones, entre otros medios que ayudan a guiar al operario.   
              
              

                          

                          


            
                    
                  
          
            
              

</template>

<script>
export default {
  name: 'Tema2',
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
