<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Ración animal

    .row.justify-content-center.align-items-center
      .col-lg-4
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/1.png', alt='Texto que describa la imagen')
      .col-lg-8
        p(data-aos="fade-left") Una ración se define como una provisión diaria de alimento o forraje planeada para una dieta de un animal. Esta es determinada según su estado de desarrollo. Para la composición de esta dieta, se seleccionan materias primas o productos balanceados y que tienen una determinada concentración de ingredientes para la satisfacción de los requerimientos energéticos, proteicos y minerales de los animales. Es importante conocer las características nutricionales de un alimento para así identificar las interacciones que dicho alimento generará en el animal. La gran mayoría de materias primas provienen de los vegetales, que aportan valores nutricionales a un costo relativamente más económico. Dentro de los nutrientes que están en las dietas de los animales, se clasifican:

    .titulo-sexto.color-acento-contenido.offset-1.mt-5.mb-5
      h5 Tabla 2 #[em Nutrientes presentes en la dieta animal]

    .row.justify-content-center.mb-5
      .col-lg-10
        .tabla-c(data-aos="flip-up")
          table
            tr
              th Agua
              td 
                p.text-small Contenido de agua de los alimentos. 
            tr
              th Proteínas, aminoácidos
              td 
                p.text-small Porcentajes de proteínas según materias primas. 
            tr
              th Nitrógeno no proteico
              td 
                p.text-small (solo utilizado en las dietas para rumiantes) compuesto por urea, sales de amonio, nitritos, nitratos, entre otros. 
            tr
              th Glucósidos solubles
              td 
                p.text-small Las hexosas, pentosas, las pectinas, amilopectina, amilasa.
            tr
              th Glucósidos estructurales
              td 
                p.text-small Solo para rumiantes, estructurados por hemicelulosa y celulosa.
            tr
              th Lípidos- extracto etére
              td 
                p.text-small Ácidos grasos, triglicéridos y glicerol. 
            tr
              th Minerales
              td 
                p.text-small Fósforo, calcio, zinc, hierro, potasio, cloro, magnesio, etc.
            tr
              th Vitaminas hidrosolubles
              td 
                p.text-small Tiamina, riboflavina, vitamina B6, vitamina B12, las vitaminas del complejo B, ácidos nicotínicos, ascórbico, biotina.
            tr
              th Vitaminas liposolubles
              td 
                p.text-small Vitaminas A, D, C, E, K.
            tr
              th Aditivos 
              td 
                p.text-small Utilizados generalmente para dar mayor palatabilidad al alimento, digestibilidad, absorción, entre otros. 

    p.mb-5(data-aos="fade-left") Para la elaboración de raciones de los animales, es fundamental entender cada materia prima. Por ello, se debe hacer un análisis de la composición y la capacidad de los elementos nutricionales. En este sentido, existen dos métodos para dicho análisis. El primero es el método de análisis proximal (bromatológico), cuyo objetivo es detallar uno a uno los componentes importantes de las materias primas, para así realizar la mezcla de las raciones animales según sus necesidades básicas. Otro método es #[i Van Soest], orientado al manejo de forrajes y pastos. Este método propone la separación de los componentes como la fibra. La diferencia entre los dos métodos es que el análisis proximal no descompone los componentes de la fibra, en primer lugar. A continuación, revise el siguiente recurso educativo para encontrar en cada método una opción de análisis de la materia prima.

    .titulo-sexto.color-acento-contenido.offset-1
      h5 Figura 3.
      span  #[i  Métodos para el análisis de los elementos nutricionales]
    
    .row.justify-content-center
      .col-md-10.desktop 
        figure
          img(src='@/assets/curso/temas/tema3/32.svg', alt='En la figura tiene la pregunta ¿Cómo analizar las composiciones de la ración animal?, puedes optar por Método “Proximal-Weende”, también puedes optar por Método análisis “Van Soest”, ¿Cuál es la diferencia entre estos dos métodos?')

    .row.justify-content-center.movil 
      .col-md-10.movil
        figure
          img(src='@/assets/curso/temas/tema3/33.svg', alt='En la figura tiene la pregunta ¿Cómo analizar las composiciones de la ración animal?, puedes optar por Método “Proximal-Weende”, también puedes optar por Método análisis “Van Soest”, ¿Cuál es la diferencia entre estos dos métodos?')

    LineaTiempoD.color-acento-contenido.mb-5.mt-5
      .row.justify-content-center.align-items-center(numero="1" titulo= "Método <i>“proximal-weende”</i>")
        .col-md-7.mb-4.mb-md-0
          p.text-small En la actualidad, muchos de los alimentos o materias primas se describen utilizando el análisis proximal, ya que realiza la separación completa de la humedad y el componente de materia seca. Este análisis utiliza una cantidad de 3 muestras. 
          h6 ● Primera muestra
          p.text-small Eleva la materia prima a temperaturas entre 100°C- 110 °C, con el objetivo de determinar su capacidad de humedad o agua. La materia seca contiene nutrientes, como: proteína bruta, extracto etéreo, cenizas, fibra bruta, extracto libre de nitrógeno, extracto no nitrogenado (carbohidratos- glucósidos solubles), siendo estos componentes la base fundamental para realizar y analizar los alimentos.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema3/34.jpg', alt='Texto que describa la imagen')
        .col-md-12.mb-4.mb-md-0            
          h6 ● Segunda muestra
          p.text-small Es utilizada para el análisis de la proteína cruda, siendo una de las más importantes hablando de nutrición animal. Lo que se determina es el nitrógeno total que se libera en una digestión química, multiplicado por el factor 6.25 proveniente de un cálculo realizado, donde 100 g de proteína contienen 16 g de nitrógeno, 100 ÷ 16 = 6.25, siendo este un valor constante. Como limitante de este análisis, está la no diferenciación entre el nitrógeno no proteico y el proteico, ya que el no proteico no es absorbido por los monogástricos. 
          p.text-small Ejemplo: 

          .titulo-sexto.color-acento-contenido
            h5 Figura 4.
            span  #[i  Fórmula proteína bruta]
          figure.mb-3
            img(src='@/assets/curso/temas/tema3/35.svg', alt='En la figura se observa que para 1 gramo de maíz se tiene de 7.68 % de nitrógeno, igualmente se tiene que el porcentaje PB es igual a 7.68 por 6.25 igual a 48 porciento de proteína bruta.')

          h6 ● Tercera muestra
          p.text-small Se somete por medio de un disolvente a la extracción del extracto etéreo o componente grasa de la materia prima, teniendo en cuenta que se realiza la extracción de aceites y todos los componentes liposolubles. El restante se somete al componente ácido y, después, al componente alcalino, para obtener la fibra bruta o cruda. 
          p.text-small El extracto libre de nitrógeno se obtiene del faltante para llegar a 100 %, después de los procedimientos anteriores, siendo estos principalmente los componentes glucósidos solubles.
      
      .row.justify-content-center(numero="2" titulo="Método análisis de <i>“Van Soest”</i>")
        .col-md-12.mb-4.mb-md-0
          p.text-small Es utilizado en el manejo de forrajes y pastos. El método propone una separación de los componentes de la fibra que ayudan a determinar mejor cada uno, porque el análisis proximal no los diferencia como primer procedimiento para la determinación de estos componentes. El análisis de #[i “Van Soest”] realiza una separación de las capas fibrilares del forraje, por medio de una sustancia detergente neutra. El resultado de esto es llamado fibra detergente neutra (FDN) y el restante que desaparece se presume que es el componente digestible. Seguido a esto, al componente de hemicelulosa se le aplica una solución ácida detergente, la cual es digerida, y al resultado se le llama fibra detergente ácido. En el último paso, se oxida, para disolver la lignina, y se obtiene la celulosa como remanente, que después se incinera. Los pasos anteriores son calculados de acuerdo con su desaparición.
        .col-md-11
          .titulo-sexto.color-acento-contenido
            h5 Figura 5.
            span #[em Diferencias entre el análisis proximal y método de Van Soest]
          figure
            img(src='@/assets/curso/temas/tema3/7.svg', alt='En la figura se observa análisis proximal, humedad con el agua, materia seca como proteina bruta, extracto etéreo, fibra bruta, extracto libre de nitrógeno, cenizas, el análisis de "Van Soest" contenido celular, proteína cruda, grasa cruda, azúcar, almidón, pectinas, igualmente la pared celular con hemicelulosa FDN, celulosa FDA, lignina.')
        p.mt-5(data-aos="fade-left") El análisis #[i proximal] no diferencia entre el componente de hemicelulosa y lignina (fibras insolubles), unificándolo todo en el extracto libre de nitrógeno, al lado de los carbohidratos (fuente de energía).


    //- .row.justify-content-center.align-items-center.mt-5(data-aos="flip-up")
    //-   .tarjeta.tarjeta--gris.p-4.mb-5
    //-     h4.titulo-cuarto Método #[em “proximal-weende”]
    //-     SlyderA(tipo="b")
    //-       .row.justify-content-center.align-items-center.p-4
    //-         .col-md-6.mb-4.mb-md-0
    //-           p En la actualidad, muchos de los alimentos o materias primas se describen utilizando el análisis #[em proximal], ya que realiza la separación completa de la humedad y el componente de materia seca. Este análisis utiliza una cantidad de 3 muestras.
    //-         .col-md-6
    //-           figure
    //-             img(src='@/assets/curso/temas/tema3/2.jpg', alt='Texto que describa la imagen')
    //-       .row.justify-content-center.align-items-center.p-4
    //-         .col-md-6.mb-4.mb-md-0
    //-           h4 Primera muestra
    //-           p Eleva la materia prima a  temperaturas entre 100 - 110 °C, con el objetivo de determinar su capacidad de humedad o agua. La materia seca contiene nutrientes, como son proteína bruta, extracto etéreo, cenizas, fibra bruta, extracto libre de nitrógeno, extracto no nitrogenado (carbohidratos- glucósidos solubles), siendo estos componentes la base fundamental para realizar y analizar los alimentos.
    //-         .col-md-6
    //-           figure
    //-             img(src='@/assets/curso/temas/tema3/3.jpg', alt='Texto que describa la imagen')
    //-       .row.justify-content-center.align-items-center.p-4
    //-         .col-md-6.mb-4.mb-md-0
    //-           h4 Segunda muestra
    //-           p Es utilizada para el análisis de la proteína cruda, siendo una de las más importantes hablando de nutrición animal. Lo que se determina es el nitrógeno total que se libera en una digestión química, multiplicado por el factor 6.25 proveniente de un cálculo realizado, donde 100 g de proteína contienen 16 g de nitrógeno, 100 ÷ 16 = 6.25, siendo este un valor constante. Como limitante de este análisis, está la no diferenciación entre el nitrógeno no proteico y el proteico, ya que el no proteico no es absorbido por los monogástricos.
    //-           p #[b Ejemplo:]  
    //-           p Proteína bruta 1 gramo de maíz --------- 7.68 % de nitrógeno 
    //-           p(style="margin:-2.5% 0;") % PB= 7.68 x 6.25 =48 % de proteína bruta.

    //-         .col-md-6
    //-           figure
    //-             img(src='@/assets/curso/temas/tema3/4.jpg', alt='Texto que describa la imagen')
    //-       .row.justify-content-center.align-items-center.p-4
    //-         .col-md-6.mb-4.mb-md-0
    //-           h4 Tercera muestra
    //-           p Se somete por medio de un disolvente a la extracción del extracto etéreo o componente grasa de la materia prima, teniendo en cuenta que se realiza la extracción de aceites y todos los componentes liposolubles. El restante se somete al componente ácido y, después, al componente alcalino, para obtener la fibra bruta o cruda.
    //-           p El extracto libre de nitrógeno se obtiene del faltante para llegar a 100%, después de los procedimientos anteriores, siendo estos principalmente los componentes glucósidos solubles.
    //-         .col-md-6
    //-           figure
    //-             img(src='@/assets/curso/temas/tema3/5.jpg', alt='Texto que describa la imagen')

    //- .row.justify-content-center.align-items-center(data-aos="flip-up")
    //-   .tarjeta.tarjeta--gris.p-4.mb-5
    //-     h4.titulo-cuarto Método análisis de #[em “Van Soest”]
    //-     SlyderA(tipo="b")
    //-       .row.justify-content-center.align-items-center.p-4
    //-         .col-md-6.mb-4.mb-md-0
    //-           p Es utilizado en el manejo de forrajes y pastos. El método propone una separación de los componentes de la fibra que ayudan a determinar mejor cada uno, porque el análisis proximal no los diferencia como primer procedimiento para la determinación de estos componentes. El análisis de “Van Soest” realiza una separación de las capas fibrilares del forraje, por medio de una sustancia detergente neutra. El resultado de esto es llamado fibra detergente neutra (FDN) y el restante que desaparece se presume que es el componente digestible. Seguido a esto, al componente de hemicelulosa se le aplica una solución ácida detergente, la cual es digerida, y al resultado se le llama fibra detergente ácido. En el último paso, se oxida, para disolver la lignina, y se obtiene la celulosa como remanente, que después se incinera. Los pasos anteriores son calculados de acuerdo con su desaparición.
    //-         .col-md-6
    //-           figure
    //-             img(src='@/assets/curso/temas/tema3/6.jpg', alt='Texto que describa la imagen')
    //-       .row.justify-content-center.align-items-center.p-4
    //-         .col-md-6.mb-4.mb-md-0
    //-           h4 Diferencias entre el análisis proximal y el método de #[b “van Soest”]
    //-           p El análisis proximal no diferencia entre el componente de hemicelulosa y lignina (fibras insolubles), unificándolo todo en el extracto libre de nitrógeno, al lado de los carbohidratos (fuente de energía).
    //-         .col-md-6
    //-           .titulo-sexto.color-acento-contenido
    //-             h5 Figura 3
    //-             span #[em Diferencias entre el análisis proximal y método de Van Soest]
    //-           figure
    //-             img(src='@/assets/curso/temas/tema3/7.svg', alt='Texto que describa la imagen')

    separador 
    .titulo-segundo.color-secundario
      h2#t_3_1 3.1  Técnica y métodos de elaboración

    .row.justify-content-center.align-items-center
      .col-12
        .row.justify-content-center.align-items-center
          .col-md-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema3/8.png', alt='Texto que describa la imagen')
          .col-md-8
            p(data-aos="fade-left") Las técnicas y métodos de elaboración de raciones pueden ser simples, complejos y tecnificados; pueden ejecutarlos desde una persona sin conocimientos técnicos hasta los operarios de una industria alimentaria. Independientemente de la elección, tienen como objetivo suplir las necesidades nutricionales de los animales. Recuerde que es necesario que la persona reconozca la composición de los ingredientes o materias primas utilizadas.
            .tarjeta.p-4(style="background-color:#DBF9BD")(data-aos="flip-up")
              p(data-aos="fade-left") La gran mayoría de animales requiere energía para sus procesos de mantenimiento o metabolismo normal; además, para su crecimiento, reproducción y sus capacidades productivas, que son de gran importancia para la explotación pecuaria. En 1945, el NRC (#[i “National Research Counci”]: Consejo Nacional de Investigación) propuso un sistema de formulación que expone los valores de las energías de las materias primas, entre ellas: energía animal como calorías (CAL), energía bruta (EB), energía digestible (ED), energía metabolizable (EM) y energía neta (EN). Este fue un gran avance para la formulación de raciones, porque entender cómo separar cada componente energético permite atender necesidades alimentarias de las especies animales.  A continuación, se caracterizan cada una de las energías que usted debe comprender para su actividad laboral. 

    .row.justify-content-center.align-items-center
      .col-10
        TabsA.color-acento-contenido.mb-5.mt-5(data-aos="flip-up")
          .tarjeta.color-secundario--borde.p-4(titulo="Calorías (CAL)")
            p Es la cantidad de calor necesaria para elevar un grado centígrado una molécula de H2O, por ejemplo, para pasar de 14.5 ºC a 15.5 ºC. Se pueden medir en kilocalorías, que son 1000 calorías (o 4.184 julios), o en megacalorías, que son 1.000.000 de calorías.

          .tarjeta.color-secundario--borde.p-4(titulo="Total de nutrimentos digestibles (TDN)")
            p Los nutrientes digestibles totales es un método en el cual se utilizan las matemáticas para tener un cálculo aproximado de la energía liberada por un ingrediente o materia prima, teniendo en cuenta los valores obtenidos por el análisis proximal.

          .tarjeta.color-secundario--borde.p-4(titulo="Energía bruta (EB)")
            p Es la energía que desprende un alimento al quemarse totalmente en una bomba calorimétrica. Es un parámetro aproximado de energía que se obtiene de forma rápida.

          .tarjeta.color-secundario--borde.p-4(titulo="Energía digestible (ED)")
            p Se obtiene de la resta entre energía bruta y la energía eliminada por las heces. Esta energía es la que se encuentra disponible para el animal.

          .tarjeta.color-secundario--borde.p-4(titulo="Energía metabolizable (EM)")
            p Proceso de pérdida producido por la orina y los gases de la digestión (rumiantes). Se observó para los rumiantes que el valor de energía metabolizable representa alrededor del 82 % de la energía digestible, por lo que la EM se puede estimar con tan solo multiplicar ED x 0.82. En cerdos y aves, la relación es mucho más variable, pero está cerca del 92 %, ED x 0.92 = EM.

          .tarjeta.color-secundario--borde.p-4(titulo="Energía neta (EN)")
            p La energía neta es la energía metabolizable a la cual se le resta el incremento calórico del animal; esta energía es destinada para dos tipos de necesidades: la producción y el mantenimiento.

    .row.justify-content-center.align-items-center.mb-5
      .col-12
        .row
          .col-lg-3
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema3/9.png', alt='Texto que describa la imagen')
          .col-lg-9
            p(data-aos="fade-left") De acuerdo con la última actualización de la NRC, la energía que más se utiliza para la elaboración de raciones es la energía metabolizable (EM). Esta se divide en dos: 1. Energía para ganancia/producción y 2. Energía neta para producción o para mantenimiento. A medida que avanza la edad, el peso y la producción de los animales, cambia la composición de ganancia o producción. Es importante tener en cuenta el peso, la edad productiva y la ganancia deseada del animal, para así elaborar o adecuar una ración óptima. Las guías de NRC en sus diferentes tablas suministran la EM de los animales en megacalorías/día (Mcal/día), siendo de gran importancia conocer la densidad energética de los diferentes alimentos, donde la EM del animal se divide por la EM del alimento, dando como resultado la cantidad de alimento suministrado en el día. Recuerde que debe tener en cuenta cómo se presenta la materia prima o alimento: seco o fresco, para así determinar si tiene la humedad o no.

    .row.justify-content-center.align-items-center.mb-3
      .col-11
        .tarjeta.p-3(style="background-color:#FFFAD0")(data-aos="flip-up")
          p.offset-1 #[b Ejemplo.]
          .row.justify-content-center.align-items-center
            .col-md-10.mb-3
              .tarjeta.p-4(style="background-color:#1B3F5E")(data-aos="flip-up")
                .row.justify-content-center.align-items-center
                  .col-7
                    p.text-white Fórmula.
                    p.text-white EM animal ÷ EM alimento
                    p.text-white Un ternero de 45 kilogramos necesita ser alimentado, para ello, se selecciona leche entera, esta tiene una capacidad del 12 % de humedad, aproximadamente, 5,37 Mcal de energía por kilogramo de materia seca, con un aumento de 600 gramos PC/día. Su requerimiento será de 3,50 según tablas NRC.
                    p.text-white Desarrollo de la formulación.
                    p.text-white 3.50 requerimiento animal ÷ 5.37 Mcal de alimento = 0.6517 kilogramos de materia seca de leche/día, que se podría expresar como 0.6517 kg ÷ 0.12 de humedad = 5,43 kilogramos de leche entera en materia fresca al día.
                  .col-md-5
                    figure(data-aos="fade-right")
                      img(src='@/assets/curso/temas/tema3/10.svg', alt='Texto que describa la imagen')
    
    .row.justify-content-center.align-items-center
      .col-10.mb-5
        p Sumado a lo expuesto, se le sugiere observar el siguiente gráfico, que presenta la distribución de la energía.

    .titulo-sexto.color-acento-contenido.offset-2
      h5 Figura 6
      span #[em Distribución de la energía]

    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-10.desktop
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/11.svg', alt='Energía bruta No es digerible Energía digestible (-) Energía fecal Energía metabolizable (-) Orina y gases de la digestión Energía neta (-) Incremento calórico Producción Leche - Carne - Reproducción Mantenimiento Digestión - Ritmo cardíaco, Respoiración')

    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-10.movil
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/36.svg', alt='Energía bruta No es digerible Energía digestible (-) Energía fecal Energía metabolizable (-) Orina y gases de la digestión Energía neta (-) Incremento calórico Producción Leche - Carne - Reproducción Mantenimiento Digestión - Ritmo cardíaco, Respoiración')

    p(data-aos="fade-left") Retomando los métodos que nos convoca la presente sección de información, se continúa caracterizando métodos de elaboración de las raciones animales.

    p ●	#[b Método de cuadrado de #[i Pearson] Simple]  

    .row.justify-content-center.align-items-center 
      .col-lg-1.mb-3
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/12.svg', alt='Texto que describa la imagen')
      .col-lg-11
        p(data-aos="fade-left") Es un método de formulación de raciones de elaboración manual, en el cual se utilizan las proteínas brutas de dos materias primas, donde es importante contar con una fuente energética y una fuente proteica. Se debe realizar un cuadro, donde se separan los alimentos, la proteína bruta del alimento, la concentración deseada, las partes y proporción de las fuentes alimenticias. Posterior a esto, se toma la proteína bruta del maíz, cuyo valor es 7.5 %, y la proteína bruta de la soja tostada, que es de 36,8 %; donde el maíz cumple el requerimiento energético y la soja tostada, el proteico. Seguidamente, se elige la concentración deseada, según el requerimiento del animal; en este caso, será de 18 %. Teniendo estos valores, se procede a restar los valores de proteína bruta y concentración deseada; es importante restar primero el número mayor, ambos resultados se suman.
        p(data-aos="fade-left") Finalmente, se realiza una ecuación, donde se toma cada valor de las partes lo multiplicamos por 100 y lo dividimos por la sumatoria total de ambas partes; este resultado lo multiplicamos por la cantidad total de alimento a realizar, para obtener cuánto debemos agregar de dicho alimento. A continuación, se presenta un ejemplo:

    .titulo-sexto.color-acento-contenido.offset-2
      h5 Figura 7
      span #[em Ejemplo método de cuadrado de Pearson Simple]
    
    .row.justify-content-center.align-items-center.mt-5
      .col-lg-10.desktop
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/13.svg', alt='En la figura se observa alimentos maíz nacional y soja tostada, contra proteína bruta, concentración deseada, partes, proporción de fuentes')

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-10.movil
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/37.svg', alt='En la figura se observa alimentos maíz nacional y soja tostada, contra proteína bruta, concentración deseada, partes, proporción de fuentes')


    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-lg-6
       .tarjeta.p-4(style="background-color:#FFFAD0")(data-aos="flip-up")
        p.text-center Suponga que se quiere realizar una ración de 2.000 gr:
        p.text-center #[b 64.2 % ÷ 100 = 0.642 x 2.000gr = 1284 gr de maíz nacional]
        p.text-center(style="margin:-2.5% 0;") #[b 35.8 % ÷ 100= 0.358 x 2.000 gr = 716 gr de soja tostada]

    p ●	#[b Cuadro de #[em “Pearson”] compuesto]  

    .row.justify-content-center.align-items-center.mb-5 
      .col-md-1.mb-3
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/14.svg', alt='Texto que describa la imagen')
      .col-md-11
        p(data-aos="fade-left") El cuadrado de #[i Pearson] compuesto tiene los mismos componentes del cuadrado de #[i Pearson] simple, pero con un mayor número de ingredientes, donde su única condición es que la cantidad de ingredientes sea par para poder lograr el resultado óptimo. La ejecución del método es la misma que la del cuadrado de #[i Pearson] simple.

    p ●	#[b Ecuaciones simultáneas] 
    
    .row.justify-content-center.align-items-center 
      .col-md-1.mb-3
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/15.svg', alt='Texto que describa la imagen')
      .col-md-11
        p(data-aos="fade-left") Este método requiere un poco más de conocimiento matemático y algebraico, donde es posible determinar dos o más ecuaciones con dos o más materias primas o ingredientes, cuyo objetivo es encontrar la incógnita, para lo cual se tienen, como primer paso, que determinar las materias primas a utilizar y el requerimiento del animal. Seguido a este paso, hay que convertir los datos a decimales; después, se expresan en las ecuaciones; posteriormente, se anula una incógnita y se despeja la siguiente; y por último, se hace el reemplazo de la incógnita. Es importante, después de terminar el proceso, hacer la comprobación de la formulación.

    p.mt-4.mb-5 #[b Comprenda el paso a paso para hallar las ecuaciones.]

    .row.mb-5(data-aos="flip-up")
      .col-md-4.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5(style="height:100%; background-color:#DBF9BD")
          .tarjeta-numerada__numero
            .h2 01
          h4.text-center Determinación de la materia prima  
          p.text-center Maíz grano--------------🡪 8.8 %
          p.text-center Torta de soya---------- 45 %
          p.text-center Requerimiento---------🡪 15 %
      .col-md-4.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5(style="height:100%; background-color:#DBF9BD")
          .tarjeta-numerada__numero
            .h2 02
          h4.text-center Convertir a decimales
          p.text-center Se dividen estos porcentajes por 100
          p.text-center Maíz grano-----------🡪 0.088
          p.text-center Torta de soya--------🡪 0.45
          p.text-center Requerimiento ------🡪 0.15
      .col-md-4.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5(style="height:100%; background-color:#DBF9BD")
          .tarjeta-numerada__numero
            .h2 03
          h4.text-center Expresar las ecuaciones
          p.text-center X= Maíz grano
          p.text-center Y= Torta de soya  
          p.text-center 1= 100 % de lo deseado, o sea, el requerimiento
          p.text-center Donde la fórmula A es: X+Y= 1
          p.text-center Donde la fórmula B es: 0.0888X+0.45Y= 0.15 

    .row.mb-5(data-aos="flip-up")
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5(style="height:100%; background-color:#DBF9BD")
          .tarjeta-numerada__numero
            .h2 04
          h4.text-center Anulación de la incógnita
          p.text-center Se toma la fórmula A y se multiplica por el valor negativo del coeficiente de X en la fórmula B, expresándola de esta manera:
          p.text-center -0.088X-0.088Y= - 0.088
          p.text-center 0.088X +0,45Y=0,15/0.362Y=0.062 Se realiza una suma vertical de las dos fórmulas, donde se cancela el valor X de ambas fórmulas y se resuelve el valor Y
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5(style="height:100%; background-color:#DBF9BD")
          .tarjeta-numerada__numero
            .h2 05
          h4.text-center Despeje de la otra ecuación 
          p.text-center 0.362Y= 0.062
          p.text-center Donde Y es igual a Y = dividimos 0.062/0.362 Y =0.1713, este es el valor de Y.
    
    .row.mb-5.justify-content-center.align-items-center(data-aos="flip-up")
      .col-6
        .tarjeta-numerada.color-primario.p-5(style="height:100%; background-color:#DBF9BD")
            .tarjeta-numerada__numero
              .h2 6
            h4.text-center Reemplazo de la incógnita 
            p.text-center Se toma la ecuación A y se reemplaza el valor de Y hallado previamente.
            p.text-center A: X+ 0.1713 = 1 el resultado de Y pasa al otro lado a restar, de esta manera 
            p.text-center A: X = 1-0.1713 resolviendo el valor de X
            p.text-center X = 0.8287
            p.text-center Posterior a este proceso, los valores tanto de X como de Y se deben multiplicar por 100 para convertirlos en porcentajes, donde se sabe que
            p.text-center X= Maíz de grano 0.8287 -----🡪 82.87 %
            p.text-center Y= Torta de soya 0.1713 -----🡪 17.13 %

    p(data-aos="fade-left") Para realizar la comprobación de la formulación, se realiza la sumatoria de los porcentajes, lo cual, como resultado, debe dar 100 %, o 99 % a causa de los decimales.

    .row.justify-content-center.align-items-center
      .col-10
        .tarjeta.p-4(style="background-color:#FFFAD0")(data-aos="flip-up")
          p Con estos porcentajes, se puede empezar a realizar el racionamiento de las materias primas, dependiendo de la cantidad de alimento a suministrar, donde se multiplica el valor de X por la cantidad de kilos y el valor de Y por la cantidad de kilos de alimento a suministrar.

    p.mt-5 ●	#[b Métodos computarizados]  

    .row.justify-content-center.align-items-center.mb-5 
      .col-md-1.mb-3
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/16.svg', alt='Texto que describa la imagen')
      .col-md-11
        p(data-aos="fade-left") Existen métodos computarizados especializados para la formulación de raciones, los cuales emplean las grandes industrias alimenticias, para así generar una adición completa y exacta de vitaminas, minerales, proteínas, aditivos, aminoácidos esenciales, entre otros. Dentro de estos, se pueden encontrar las diferentes tablas de #[em Excel], el componente #[em SOLVER], entre otros.
        
    separador 
    .titulo-segundo.color-secundario
      h2#t_3_2 3.2  Tratamiento de ración

    .row.justify-content-center.align-items-center 
      .col-lg-4
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/17.png', alt='Texto que describa la imagen')
      .col-lg-8
        p(data-aos="fade-left") El tratamiento de las raciones está orientado a ofrecer inocuidad y confiabilidad de los alimentos cuando se asegura una ración alimenticia libre de patógenos que alteran el metabolismo animal. Esto genera retrasos e inconvenientes en la producción.
        .tarjeta.p-4(style="background-color:#DBF9BD")(data-aos="flip-up")
          p(data-aos="fade-left") El tratamiento más utilizado en las industrias alimenticias es a base de calor, donde se realiza en corto tiempo la elevación de temperaturas, logrando un efecto de compresión y descompresión. Esto destruye los componentes bacterianos o microorganismo y se evita la pérdida de nutrientes de la ración o alimento. Dentro del tratamiento dado a las raciones, la eliminación de impurezas que pueden resultar del proceso es una actividad de importancia para asegurar la calidad del producto, ya que se pueden eliminar impurezas tales como metales, piedras, entre otros, de las materias primas utilizadas; esta puede ser realizada por métodos manuales, como el zarandeo, o tecnificados, como por aspiración.  

    separador 
    .titulo-segundo.color-secundario
      h2#t_3_3 3.3  Transformación materias primas
    p.mb-5(data-aos="fade-left") La transformación de las diferentes materias primas es un proceso a través del cual una materia prima de valores nutricionales y costos bajos logra convertirse en una ración alimenticia con un valor nutricional alto. Este valor de producción se adiciona por medio de diferentes técnicas que agregan un valor al componente nutricional e inocuo de las materias primas.  Dentro de las técnicas de transformación, se encuentran el lavar, pasteurizar, congelar, envasar, peletizar, extrudizar y la adición de conservantes, entre otros factores. Dentro de la transformación de los alimentos o raciones, los métodos más conocidos son los #[i pellets] y #[i extrudes]. A continuación, se describe cada uno de los métodos de transformación. 

    .row.justify-content-center.align-items-center(data-aos="flip-up")
      .tarjeta.tarjeta--gris.p-4.mb-5
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center.p-4
            .col-md-6.mb-4.mb-md-0
              h4 Molienda
              p Proceso que se le realiza a las materias primas, en especial a los granos, a través de herramientas o máquinas que fracturan el producto,  para lograr una mejor mezcla en la ración y digestibilidad por parte de los animales. 
              p La molienda se puede separar en pre-molienda y post-molienda. La pre-molienda se realiza principalmente a materias primas que posteriormente serán almacenadas, y la post-molienda es antes del proceso de mezcla.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/18.jpg', alt='Texto que describa la imagen')
          .row.justify-content-center.align-items-center.p-4
            .col-md-6.mb-4.mb-md-0
              h4 #[em Pellets]
              p El peletizado es un proceso que toma las materias primas seleccionadas y pesadas. Estas se pueden encontrar en polvo con baja palatabilidad, lo que lo hace difícil de suministrar al animal; por eso, a través del aumento de temperatura y manejo de la humedad, se ejerce una fuerza mecánica, para transformar la materia prima en partículas mucho más grandes, que son fáciles de ingerir por el animal.
              p El tamaño del #[em pellet] puede variar según el tamaño y las condiciones fisiológicas de la ingesta del animal. Estos son usualmente formados cilíndricamente y varían desde 3/32" (2,38 mm) hasta 1 3/8” (34,9mm), a pesar de que hay tamaños más grandes, pero que resultan poco frecuentes. (Muñoz, 2004).
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/19.jpg', alt='Texto que describa la imagen')
          .row.justify-content-center.align-items-center.p-4
            .col-md-6.mb-4.mb-md-0
              h4 Extruido
              p Es un proceso adicional dado a los #[em pellets]. Se caracteriza por transformarse en extrusión, donde un proceso de cocción continua y pareja producen una unión, cambios de forma, estructura, flotabilidad y composición de la materia prima.  Es muy utilizado en la acuicultura, por su característica flotabilidad debido a la formación de lipo-carbohidratos.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/20.jpg', alt='Texto que describa la imagen')

    p.mb-5(data-aos="fade-left") Continuando en el contexto de las transformaciones, es importante comprender la mezcla de los ingredientes.  Su importancia está al nivel de la selección de las materias primas, porque, dependiendo de una mezcla adecuada, está el éxito de la ración elaborada. Sin duda, este proceso puede marcar la diferencia entre el éxito o el fracaso de la ración. Es importante tener un protocolo estándar en la preparación de las raciones, para así asegurar: 1.  La uniformidad de la ración preparada, 2. Uniformidad de los lotes, y 3. Información frente al uso de las materias primas. Esto sin duda ayuda a evitar la alteración de los diferentes sistemas digestivos de los animales y, por ende, afecta la producción.

    .row.justify-content-center.align-items-center
      .tarjeta.p-4(style="background-color:#DBF9BD")(data-aos="flip-up")
        .row.justify-content-center.align-items-center
          .col-lg-3
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema3/21.png', alt='Texto que describa la imagen')
          .col-lg-9
            p(data-aos="fade-left") La dieta o ración animal debe estar perfectamente formulada para las necesidades de los animales, para lograr los objetivos productivos deseados.  En la mezcla de los ingredientes, influyen muchos factores que pueden variar dependiendo del sistema productivo, donde muchas veces el orden de la mezcla está ligado a la practicidad del operario, del establecimiento, ubicación de las materias primas, disponibilidad, tiempos de mezclado, entre otros. De allí la importancia de la ubicación y la manera de almacenamiento de las materias primas, teniéndose en cuenta, desde el primer momento del proceso, para generar una comodidad del personal y un mínimo flujo de movimiento de maquinarias o equipo.
            p(data-aos="fade-left") Los diferentes ingredientes que componen la dieta varían y generan una gran diversidad de estados, pasando desde polvo hasta el líquido. Usted debe aprender a identificar la materia prima a partir de su tamaño, humedad, poder de colmatación, aglomeración, de resistencia al frío, al calor, entre otros. Todo ello define el orden de la ración, para entregar un alimento de calidad al animal y bajo condiciones estandarizadas. A continuación, se exponen algunos criterios que usted debe considerar en su zona de trabajo.

    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-lg-10
        .row.justify-content-center.align-items-center
          .col-lg-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema3/22.jpg', alt='Texto que describa la imagen')
          .col-lg-8
            .cajon.p-3.mb-2(style="background-color:#3B5620")(data-aos="flip-up")
              p.text-small(style="color:#FFFAD0")(data-aos="fade-left") Los ingredientes de baja densidad deben agregarse primero. Entre ellos, se encuentra el heno o paja. Cuando se agrega de primero, se asegura una mezcla homogénea de los ingredientes y esto evita la selección por parte del animal.
            .cajon.p-3.mb-2(style="background-color:#3B5620")(data-aos="flip-up")
              p.text-small(style="color:#FFFAD0")(data-aos="fade-left") Las materias primas que sean similares, frente a su tamaño y densidades, son propensas a mezclarse fácil y rápidamente. Por ejemplo: se pueden colocar los granos molidos, harinas, extruidos y pellets frente a densidades que son muy parecidas. Posteriormente a esto, se deben agregar los diferentes minerales y aditivos, todos los ingredientes que se usan en más bajas proporciones.
            .cajon.p-3.mb-2(style="background-color:#3B5620")(data-aos="flip-up")
              p.text-small(style="color:#FFFAD0")(data-aos="fade-left") Cuando se adicionan minerales a las materias primas o ingredientes, se debe garantizar una mezcla homogénea. El tiempo de preparación es de tres (3) minutos.
            .cajon.p-3.mb-2(style="background-color:#3B5620")(data-aos="flip-up")
              p.text-small(style="color:#FFFAD0")(data-aos="fade-left") Entregar al animal las materias primas húmedas con bajo componente aglutinante y alto nivel de humedad. Este puede ubicarse en el antepenúltimo orden.
            .cajon.p-3.mb-2(style="background-color:#3B5620")(data-aos="flip-up")
              p.text-small(style="color:#FFFAD0")(data-aos="fade-left") Los subproductos viscosos, pegajosos y/o húmedos, como la melaza o el gluten, se pueden agregar a la ración animal de últimos. 

    separador 
    .titulo-segundo.color-secundario
      h2#t_3_4 3.4  Transformación materias primas
    
    p.mb-5(data-aos="fade-left") Uno de los errores comunes en la nutrición animal es confundir alimentar con formular. Cualquier persona puede realizar una formulación sin un conocimiento previo de nutrición, siguiendo unos requerimientos dados; pero la verdadera aplicación de la formulación animal es comprender al animal, su estado fisiológico, su anatomía, su etapa de desarrollo y los diferentes requerimientos nutricionales que cada uno de estos factores genera en el animal. La importancia de este proceso es la aplicación de las fórmulas y los valores nutricionales adecuados para cada alimento animal. Las diferentes fórmulas empleadas deben tener los siguientes criterios:

    .row.justify-content-center 
      .col-12
        .cajon.color.p-4(style="background-color:#FFFAD0")(data-aos="fade-left")
          .row.justify-content-center
            .col-md-6
              p(data-aos="fade-left") ● Necesidades nutricionales del animal.
              p(data-aos="fade-left") ● Alimentos y análisis de alimentos. 
              p(data-aos="fade-left") Con estos criterios, se debe interpretar la buena utilización de las fórmulas y los resultados esperados, buscando siempre satisfacer los requerimientos del animal, para así lograr un índice productivo mayor de los animales.

            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema3/38.jpg', alt='Texto que describa la imagen')

    separador 
    .titulo-segundo.color-secundario
      h2#t_3_5 3.5  Buenas prácticas de fabricación de alimentos de uso animal

    p(data-aos="fade-left") Las buenas prácticas de elaboración de los alimentos de uso animal son todas las acciones involucradas en este aspecto que brindan un estándar de inocuidad y calidad, según las diferentes normas y lineamientos que ofrecen a las diferentes especies un alimento de calidad.
    p(data-aos="fade-left") Las buenas prácticas de fabricación de alimentos (BPFA) constituyen el factor tendiente para asegurar que los alimentos se fabriquen en forma uniforme y controlada, de acuerdo con normas de calidad, el uso que se pretende dar y conforme con las condiciones establecidas para su comercialización (ICA, 1998).
    p.mb-5(data-aos="fade-left") Dentro de las buenas prácticas, existen unos lineamientos de garantía de calidad, los cuales se toman desde el concepto individual hasta el colectivo, estos son:

    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
      .row.justify-content-center.align-items-center(titulo="Personal")(data-aos="flip-up")
        .col-md-3.p-4
          figure
            img(src='@/assets/curso/temas/tema3/23.svg', alt='Texto que describa la imagen')
        .col-md-7.mb-4.mb-md-0.p-4
          p Un sistema productivo gestionado desde los estándares de las BPFA necesita un personal entrenado desde un método de evaluación y supervisión constante. Para la producción, la empresa debe contar con un organigrama o una programación de funciones específicas. 
          p Además de lo anterior, la empresa debe tener condiciones que favorezcan la salud del personal. Algunas prácticas que se deben fomentar son: la limpieza y desinfección de las diferentes áreas laborales, las condiciones de entrega de materias primas y traslado. 
          p Cabe mencionar que el personal debe utilizar siempre todos los elementos de protección requeridos para la labor que está realizando, donde la empresa pecuaria será responsable de la capacitación en los temas de higiene, manipulación de alimentos, seguridad y elementos de protección personal, aparte de las especificaciones de las funciones a realizar.  Para la empresa, es importante tener en cuenta las diferentes políticas empresariales, los POE y las listas de chequeo.

      .row.justify-content-center.align-items-center(titulo="Instalaciones")
        .col-md-3.p-4
          figure
            img(src='@/assets/curso/temas/tema3/24.svg', alt='Texto que describa la imagen')
        .col-md-7.mb-4.mb-md-0.p-4
          p Las instalaciones sugeridas en las buenas prácticas deben estar construidas, adaptadas, ubicadas y mantenidas con el propósito de beneficiar un proceso, al margen de errores mínimos de riesgos. Las instalaciones deben mantenerse limpias y desinfectadas, de acuerdo con protocolos. Además, tener las áreas con buena iluminación, temperatura, humedad y ventilación, para evitar plagas. Cuando planee una instalación, tenga presente:
          p Cuando planee una instalación, tenga presente:
          p 1. Separación de las diferentes áreas productivas
          p 2. Almacenamiento
          p 3. Control de calidad
          p 4. Descanso/refrigerio
          p 5. Servicios sanitarios

      .row.justify-content-center.align-items-center(titulo="Equipos")
        .col-md-3.p-4
          figure
            img(src='@/assets/curso/temas/tema3/25.svg', alt='Texto que describa la imagen')
        .col-md-7.mb-4.mb-md-0.p-4
          p Las diferentes operaciones realizadas en el proceso de elaboración de raciones están determinadas por el diseño, construcción y ubicación de los diferentes equipos y maquinaria. Estos últimos se deben ubicar de tal manera que minimicen la pérdida de materia prima, mantenimiento, limpieza y desinfección.   Tenga presente establecer un adecuado programa de mantenimiento, que asegure la limpieza y el correcto funcionamiento de todos los equipos. De esta actividad, debe llevarse un registro completo. Esto es de vital importancia, sobre todo, en algunos equipos utilizados en la industria de alimentos para animales, como son peletizados, expansores y extrusores (ICA, 1998).
          
      .row.justify-content-center.align-items-center(titulo="Materiales")
        .col-md-3.p-4
          figure
            img(src='@/assets/curso/temas/tema3/26.svg', alt='Texto que describa la imagen')
        .col-md-7.mb-4.mb-md-0.p-4
          p Las diferentes materias primas deben ser adquiridas de proveedores confiables, certificados y avalados por los diferentes medios de control, asegurando así su veracidad frente a la información suministrada y dando el parte de calidad de esta. Todas deben ser inspeccionadas bajo criterios de calidad e inocuidad, teniendo en cuenta los diferentes factores que puedan alterar la materia prima. El almacenamiento de dichas materias primas debe ser apropiado para cada una y asegurando que se realice el previo etiquetado, rotulado con número de lote, y toma de muestra. Cuando usted rechace un material, haga una rotación y almacene la materia en lugares determinados y restringidos. Finalmente, cuando manipule material de desecho, recoléctelo y empáquelo adecuadamente para ser llevado a los diferentes centros de disposición de residuos para realizar su tratamiento o eliminación. 

      .row.justify-content-center.align-items-center(titulo="Alimentos medicados")(data-aos="flip-up")
        .col-md-3.p-4
          figure
            img(src='@/assets/curso/temas/tema3/27.svg', alt='Texto que describa la imagen')
        .col-md-7.mb-4.mb-md-0.p-4
          p Cada vez que se elaboran alimentos con fármacos veterinarios, se deben tener en cuenta condiciones importantes, como lo es la prescripción del médico veterinario. El utilizar medicamentos registrados es importante, así como el tiempo de retiro del medicamento y su rotulación en el alimento, para evitar contaminación. Según la FDA (2014), la contaminación de alimentos para uso animal producida por los fármacos veterinarios fue de 11 %, principalmente causada por el uso de implementos mal aseados, que contenían trazas de medicamentos, de allí la importancia de la limpieza o, si es posible, el uso único de implementos para estas labores de preparación.
          
      .row.justify-content-center.align-items-center(titulo="Documentos")
        .col-md-3.p-4
          figure
            img(src='@/assets/curso/temas/tema3/28.svg', alt='Texto que describa la imagen')
        .col-md-7.mb-4.mb-md-0.p-4
          p La documentación es una de las partes fundamentales en el proceso de las Buenas prácticas de fabricación de alimentos, porque el registro o recolección de datos de cada proceso es fundamental para realizar un análisis, evaluar indicadores, verificar el cumplimiento de muchas labores y fuentes de trazabilidad. Esta documentación de producción y control de calidad se debe actualizar y verificar de manera continua, para así generar un sistema de calidad íntegro y eficiente.     

    .row.justify-content-center
      .col-10
        p.mt-5(data-aos="fade-left") En resumen, las buenas prácticas de preparación de alimentos que usted debe fomentar y que fueron caracterizadas anteriormente son:
    
    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-lg-10
        .row.justify-content-center.align-items-center
          .col-lg-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema3/29.jpg', alt='Texto que describa la imagen')
          .col-lg-8
            .cajon.p-3.mb-1(style="background-color:#3B5620")(data-aos="flip-up")
              p.text-small(style="color:#FFFAD0")(data-aos="fade-left") Utilización de equipos e instalaciones adecuadas para la elaboración de alimentos.
            .cajon.p-3.mb-1(style="background-color:#3B5620")(data-aos="flip-up")
              p.text-small(style="color:#FFFAD0")(data-aos="fade-left") Personal capacitado y procedimientos aprobados por el ente regulador.
            .cajon.p-3.mb-1(style="background-color:#3B5620")(data-aos="flip-up")
              p.text-small(style="color:#FFFAD0")(data-aos="fade-left") Métodos de ensayo válidos.
            .cajon.p-3.mb-1(style="background-color:#3B5620")(data-aos="flip-up")
              p.text-small(style="color:#FFFAD0")(data-aos="fade-left") Registros de todos los procedimientos y resultados obtenidos.
            .cajon.p-3.mb-1(style="background-color:#3B5620")(data-aos="flip-up")
              p.text-small(style="color:#FFFAD0")(data-aos="fade-left") Independencia o libre elección de las materias primas aprobadas o rechazadas después de que sea una materia prima aprobada para su uso en alimentos por el ente regulador.

    .row.justify-content-center
      .col-10
        p(data-aos="fade-left") El estricto cumplimiento de ellas llevará, sin duda, al logro de la calidad total en la elaboración de los insumos, facilitando su acceso al comercio internacional (ICA, 1998). Dentro de las BPFA, es de fundamental comprender las diferentes enfermedades transmitidas por los alimentos (ETA) para su prevención. A continuación, se exponen los procesos que alteran la inocuidad de los alimentos.
        
    .row.justify-content-center.mt-5
      .col-10
        .tarjeta.p-4.mb-1(style="background-color:#1B3F5E")(data-aos="flip-up")
          .row.justify-content-center 
            .col.lg-5
              h4.text-center.mb-5(style="color:#FFFAD0") Malos procesos de limpieza y desinfección
              figure(data-aos="fade-right").mb-4
                img(src='@/assets/curso/temas/tema3/30.jpg', alt='Texto que describa la imagen')
              p.text-center(style="color:#FFFAD0") ●	Mala higiene del personal.
              p.text-center(style="color:#FFFAD0; margin:-2.5% 0") ●	Operarios enfermos.
            .col.lg-5
              h4.text-center.mb-5(style="color:#FFFAD0") Manipulación inadecuada
              figure(data-aos="fade-right").mb-4
                img(src='@/assets/curso/temas/tema3/31.jpg', alt='Texto que describa la imagen')
              p.text-center(style="color:#FFFAD0") ●	Productos químicos en los alimentos.
              p.text-center(style="color:#FFFAD0") ●	Temperaturas inadecuadas.
              p.text-center(style="color:#FFFAD0") ●	Contaminación cruzada.
              
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
