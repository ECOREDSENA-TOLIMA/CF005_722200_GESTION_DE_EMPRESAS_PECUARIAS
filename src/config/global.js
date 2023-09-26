export default {
  global: {
    componenteFormativo:
      'Generalidades en la preparación de raciones para especies animales',
    descripcionCurso:
      'El presente componente de formación surge de la necesidad de aproximarse a la alimentación animal como un componente importante en la producción porque es la base fundamental para la expresión genética de los mismos. La preparación de raciones es un componente importante en la nutrición animal para llegar a alcanzar los diferentes requerimientos energéticos, proteicos, vitamínicos y minerales, logrando así un sistema productivo rentable, bajo los lineamientos de unas buenas prácticas de alimentación.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Materias primas para el alimento animal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Métodos de acopio e inspección',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Características de la perecibilidad',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Técnicas de selección, adecuación, recepción y evaluación',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Higienización de las materias primas para ración',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Ración animal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Técnica y métodos de elaboración',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tratamiento de ración',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Transformación materias primas',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Criterios e interpretación de fórmulas',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo:
              'Buenas prácticas de fabricación de alimentos de uso animal',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Areas de proceso de ración animal',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Equipos para la ración animal ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Seguridad y salud en el trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Elementos de protección personal ',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Técnicas de evaluación',
            hash: 't_6_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar pdf',
        download: 'downloads/CFA_05_722200.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Higienización de las materias primas para ración',
      referencia:
        'FAO. (2020). “Codex Alimentarius”. Principios generales de higiene de los alimentos. OMS.',
      tipo: 'Texto Digital.',
      link:
        'https://www.fao.org/fao-who-codexalimentarius/about-codex/es/#c453333',
    },
    {
      tema: 'Ración animal',
      referencia: 'ICA. (2021). Alimentos. Gov.co.  ',
      tipo: 'Página web.',
      link:
        'https://www.ica.gov.co/areas/pecuaria/servicios/alimentos-para-animales.aspx',
    },
    {
      tema: 'Técnica y métodos de elaboración',
      referencia:
        'EEA INTA Balcarce. (2002). Composición de alimentos para rumiantes. Sitio Argentino de Producción Animal. ',
      tipo: 'Repositorio Abierto.  ',
      link:
        'https://www.produccion-animal.com.ar/tablas_composicion_alimentos/01-alimentos_rumiantes.pdf',
    },
    {
      tema: 'Técnica y métodos de elaboración',
      referencia:
        'Cerdas, R. (2013).  Formulación de raciones para carne y leche. Desarrollo de un módulo práctico para técnicos y estudiantes de ganadería de Guanacaste, Costa Rica. “InterSedes”, 14(29), p. 128-153.',
      tipo: 'Texto Digital.',
      link: 'https://www.redalyc.org/pdf/666/66629448009.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Aditivo ',
      significado:
        'Ingrediente adicionado a los productos, ya sea para aumentar su palatabilidad o su transformación, así como su componente nutricional.',
    },
    {
      termino: 'Aguas duras y blandas',
      significado:
        'Es principalmente dado por la cantidad de minerales o compuestos minerales que contiene el agua, si contiene muchos, se denomina agua dura, y si son pocos, se denomina agua blanda.',
    },
    {
      termino: 'Almacén',
      significado:
        'Lugar o espacio donde se organizan las materias primas, subproductos o productos. ',
    },
    {
      termino: 'Contaminación cruzada ',
      significado:
        'Proceso donde se altera un producto o materia prima, ya sea por bacterias, otra materia prima, medicamentos, etc. Se produce principalmente por el manipulador de alimentos. ',
    },
    {
      termino: 'Formula alimenticia',
      significado:
        'Es una secuencia de elementos llamados ingredientes, en los cuales se relacionan cantidades de los mismos.',
    },
    {
      termino: 'Fuerza centrífuga ',
      significado:
        'Es la fuerza ejercida en un cilindro o círculo del centro hacia afuera.',
    },
    {
      termino: 'Lote',
      significado:
        'Cantidad de producto o insumo que se fabrica en un solo ciclo (fecha de fabricación es la misma), la característica especial es ser homogéneo.',
    },
    {
      termino: 'Peletizar ',
      significado:
        'Es un proceso mecánico donde se realiza una mezcla de ingredientes previamente molidos; son humedecidos y calentados con vapor, luego, son compactados en pequeños cilindros.   ',
    },
    {
      termino: 'Registro ',
      significado:
        'Acción de registrar una actividad, acción, comportamiento, eventualidad, entre otros.  ',
    },
    {
      termino: 'Suplemento alimenticio',
      significado:
        'Son adicionales a la alimentación, principalmente contienen gran cantidad de minerales, proteínas, vitaminas, aminoácidos, enzimas, entre otros. ',
    },
    {
      termino: 'Sustancia activa',
      significado:
        'Molécula que tiene un medicamento como ingrediente esencial. ',
    },
    {
      termino: 'Vida útil',
      significado: 'Duración estimada que tiene un producto o alimento.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aguilar, J. (2012). Métodos de conservación de alimentos. Red Tercer Milenio.',
      link: '',
    },
    {
      referencia:
        'Cerdas, R. (2013).  Formulación de raciones para carne y leche. Desarrollo de un módulo práctico para técnicos y estudiantes de ganadería de Guanacaste, Costa Rica. InterSedes, 14(29), p. 128-153.',
      link: 'https://www.redalyc.org/pdf/666/66629448009.pdf',
    },
    {
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). Sistemas de gestión de la seguridad y salud en el trabajo [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=5CF3HZdu6Bc',
    },
    {
      referencia:
        'EEA INTA Balcarce. (2002). Composición de alimentos para rumiantes. Sitio Argentino de Producción Animal.',
      link:
        'https://www.produccion-animal.com.ar/tablas_composicion_alimentos/01-alimentos_rumiantes.pdf',
    },
    {
      referencia:
        'FAO. (2020). Codex Alimentarius. Principios generales de higiene de los alimentos. OMS.',
      link:
        'https://www.fao.org/fao-who-codexalimentarius/about-codex/es/#c453333',
    },
    {
      referencia:
        'Fundación CESFAC. (2007). Guía para el desarrollo de normas de higienización de los piensos. Ministerio de Agricultura, Pesca y Alimentación.',
      link:
        'https://cesfac.es/media/attachments/2019/08/08/guia-higienizacin.pdf',
    },
    {
      referencia:
        'González, M. (2013). Recepción, organización y control de materias primas. Slideshare.',
      link:
        'https://es.slideshare.net/ManoloGonzalez4/recepcion-organizacion-y-control-de-materias-primas',
    },
    {
      referencia:
        'ICA. (1998). Buenas Prácticas en la Fabricación de Alimentos en Colombia. Grupo de regulación y control de alimentos para animales.  ',
      link:
        'http://www.ucv.ve/fileadmin/user_upload/facultad_agronomia/BPF_Alimentos_Balanceados.pdf',
    },
    {
      referencia: 'ICA. (2021). Alimentos. Gov.co.',
      link:
        'https://www.ica.gov.co/areas/pecuaria/servicios/alimentos-para-animales.aspx',
    },
    {
      referencia:
        'Madigan, M., Martinko, J., y Parker, J. (2000). “Brock biology of microorganisms”. Prentice Hall International. ',
      link: '',
    },
    {
      referencia:
        'Ministerio del Trabajo [Mintrabajo]. (2016). Sistema de gestión de seguridad y salud en el trabajo SG-SST.',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/59614744/Programa+Sistema+de+Gestion+de+Seguridad+y+Salud+en+el+Trabajo.pdf/cb0222ac-ca46-d3ad-ab49-0099c0051b39?version=1.0',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social [Minsalud]. (2021). Gestión integral de elementos de protección personal (EPP).',
      link:
        'https://www.minsalud.gov.co/Ministerio/Institucional/Procesos%20y%20procedimientos/GTHS02.pdf',
    },
    {
      referencia:
        'Muñoz, O. (2004). Comparación entre Extruido y Pelletizado en Alimentos de Camarones. VII “Simposium” Internacional de Nutrición Acuícola.',
      link: 'http://eprints.uanl.mx/8392/1/22Osvaldo_Munoz.pdf',
    },
    {
      referencia:
        'Rodríguez, A., López, N., Quintero, H. y Canales, R. (2002). Compuestos Orgánicos e Inorgánicos. En A. Rodríguez, Ciencia, Tecnología y Ambiente (p. 37-45). “Cengage Learning”.',
      link:
        'https://link.gale.com/apps/doc/CX3003700023/GVRL?u=sena&sid=bookmark-GVRL&xid=6ea6e595',
    },
    {
      referencia:
        'Universidad Industrial de Santander [UIS]. (2008). Guía de almacenamiento seco, refrigerado y congelado.',
      link:
        'https://www.uis.edu.co/intranet/calidad/documentos/bienestar_estudiantil/guias/GBE.27.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Juan Manuel Loaiza Trujillo ',
          cargo: 'Experto Temático /Instructor ',
          centro:
            'Regional Valle  - Centro Latinoamericano de Especies Menores Tuluá',
        },
        {
          nombre: 'Cristian Metaute Medina ',
          cargo: 'Diseñador Instruccional ',
          centro:
            'Regional Distrito Capital  - Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Carolina Coca Salazar ',
          cargo: 'Revisora Metodología y Pedagógica  ',
          centro:
            'Regional Distrito Capital  - Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Darío González ',
          cargo: 'Corrección de estilo ',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Humberto Arias Díaz',
          cargo: 'Diseñador instruccional ',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Inés Machado López',
          cargo: 'Asesor Metodológico ',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Sebastián Trujillo Afanador',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador ',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Sebastián Trujillo Afanador',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y Vinculación en Plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de Contenidos Accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
