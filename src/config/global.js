export default {
  global: {
    componenteFormativo: 'Presupuesto financiero',
    descripcionCurso:
      'El proceso de proyección, basado en el estudio estratégico tanto de la empresa como del sector, busca generar una visión del negocio en el mediano y largo plazo, lo cual se constituye en una herramienta que permitirá a los empresarios tomar decisiones de inversión y financiación, pensando siempre en maximizar el valor de la empresa y la riqueza de los socios.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Planeación estratégica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Planes empresariales',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Planeación financiera',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Ejercicio práctico de proyección de estados financieros',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Proyección de ventas',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Proyección de los gastos de operación',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Proyección del costo de producción',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Proyección de la inversión en activos corrientes',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Inversión',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Fuentes de financiación',
            hash: 't_3_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.7',
            titulo: 'Proyección de los estados financieros',
            hash: 't_3_7',
          },
        ],
      },
    ],
    subMenu: [
      //{
      //  nombreRuta: 'actividad',
      //  icono: 'far fa-question-circle',
      //  titulo: 'Actividad didáctica',
      //  desarrolloContenidos: true,
      //},
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
  referencias: [
    {
      referencia: 'Etapas para elaborar un presupuesto. 2021. Actualícese. ',
      link: 'https://actualicese.com/etapas-para-elaborar-un-presupuesto/',
    },
    {
      referencia: 'Incp.org.co. 2021. Bolsa de Valores de Colombia. ',
      link: 'https://incp.org.co/Site/publicaciones/guias/nic-19.pdf',
    },
    {
      referencia:
        'Ministerio de Hacienda y Crédito Público. Aspectos Generales del Proceso Presupuestal Colombiano. ',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Normograma/Lineamiento%20Ministerio%20de%20Hacienda%20y%20Credito%20P%C3%BAblico.pdf',
    },
    {
      referencia:
        'Araujo Arévalo, David. Presupuestos Empresariales: Eje De La Planeación Financiera. Primera Edición. Ed. México: Editorial Trillas, 2012. Print.',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Administración',
      significado:
        'proceso de planificar, organizar, dirigir y controlar el uso de los recursos y las demás actividades, con el fin de lograr los objetivos o metas de la organización de forma eficiente y eficaz.',
    },
    {
      termino: 'Control',
      significado:
        'función administrativa que abarca el proceso de medición y evaluación del desempeño, a fin de adoptar las medidas correctivas necesarias, que debe ser un proceso permanente y regulador.',
    },
    {
      termino: 'Estados financieros',
      significado:
        'informes financieros o de cuentas anuales, que por disposición legal deben presentar las empresas para mostrar su situación económica y financiera durante un periodo determinado.',
    },
    {
      termino: 'Estrategia',
      significado:
        'herramienta de dirección que proporciona procedimientos y técnicas con fundamento científico, que aplicadas de forma permanente permiten mejorar las relaciones de la organización y su entorno. Buscando siempre cumplir la satisfacción de las necesidades de sus clientes y el logro de objetivos.',
    },
    {
      termino: 'Margen de rentabilidad bruto',
      significado:
        'representa el margen de utilidad obtenido sobre las ventas, donde sólo se recupera el costo de ventas. ',
    },
    {
      termino: 'Margen rentabilidad neta',
      significado:
        'representa el margen de utilidad obtenido sobre las ventas, una vez cubierto los impuestos y las reservas. ',
    },
    {
      termino: 'Meta',
      significado:
        'término definido para demostrar el cumplimiento de una meta, estas se complementan con los objetivos definidos en la estrategia.',
    },
    {
      termino: 'Objetivo',
      significado:
        'enunciado de un deseo y las acciones concretas que se proponen para alcanzarlo. Este debe ser claro, medible y observable. Define de forma más abstracta y cualitativamente, lo que pretende lograr.',
    },
    {
      termino: 'Política',
      significado:
        'plan general de acción que orienta a los integrantes de una organización. ',
    },
  ],
  complementario: [
    {
      texto:
        'Polo García, B. (2017). Contabilidad de costos en la alta gerencia: teórico-práctico. Grupo Editorial Nueva Legislación SAS.',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/70840',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Limbelys Rodríguez Cabrales',
        cargo: 'Instructora',
        centro: 'Centro de Servicios Financieros - Regional Distrito Capital',
      },
      {
        nombre: 'Leidy Smith Moreno Mosquera',
        cargo: 'Instructora',
        centro: 'Centro de Servicios Financieros - Regional Distrito Capital',
      },
      {
        nombre: 'Maryuri Agudelo Franco',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Vilma Lucía Perilla Méndez',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia  Hoyos Sepúlveda',
        cargo: 'Edición y corrección de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Marcela González Gómez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo front-end',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jenny Paola Montillo Gélvez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
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
