<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Planeación estratégica
    p En este punto se desarrollan los aspectos generales de la planeación estratégica que es la base para efectuar la proyección de los Estado Financieros, es necesario, que realice un recorrido por todo el contenido y que pueda realizar los ejercicios para la comprensión y puesta en marcha de este en su ejercicio educativo.
    separador.mb-5
    #t_1_1
    .titulo-segundo
      h2 1.1 Concepto
    p La planeación estratégica se define como el proceso gerencial que tiene por objeto diseñar el derrotero futuro del negocio en todas y cada una de sus áreas, para lo cual es necesario conocer a profundidad su evolución histórica y la realidad actual de la empresa, tanto internamente como en su entorno. El análisis estratégico de la empresa tiene por objeto responder las siguientes preguntas:
    .row.align-items-center
      .col-lg-7
        ul.lista-ul
          li 
            i.fas.fa-check-square(style="color: #6595BF")
            | ¿Por qué existe la organización?
          li 
            i.fas.fa-check-square(style="color: #6595BF")
            | ¿Qué hace?
          li 
            i.fas.fa-check-square(style="color: #6595BF")
            | ¿Cómo lo hace?
          li 
            i.fas.fa-check-square(style="color: #6595BF")
            | ¿Para dónde se dirige?
        p Planear es pensar en el futuro y la estrategia es la guía, la forma en que se debe pensar, la cual, se debe plasmar en un plan, por lo tanto, la planeación estratégica se puede definir como la proyección del futuro utilizando un plan. Tiene por finalidad establecer los objetivos que la empresa desea alcanzar y tiene como fase inicial el análisis de la empresa a su interior con el ánimo de determinar sus debilidades y fortalezas y también de su entorno para detectar oportunidades y fortalezas. Con estos cuatro elementos se construyen las estrategias que tienen por objetivo fijar la ruta por la cual la empresa debe transitar para conseguir la visión previamente fijada.
      .col-lg-5
        figure(data-aos="fade-right")
          img(src='@/assets/curso/img2.svg', style="width: 300px").m-auto
    separador.mb-5
    #t_1_2
    .titulo-segundo
      h2 1.2 Planes empresariales
    p.mb-5 Las empresas deben elaborar tres tipos de planes según el nivel jerárquico en el que se requiere.
    figure.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/img3.svg', style="width: 1200px").m-auto
    p Los planes estratégicos son elaborados por la alta dirección del negocio, tienen un horizonte de cinco o más años. En él se plasman decisiones de carácter cualitativo y numérico. Éstas últimas quedan registradas en el plan financiero de la organización. 
    p Los planes tácticos son propios del nivel gerencial y corresponde elaborarlos a los diferentes subgerentes de la compañía: ventas, producción, mercadeo, finanzas y recursos humanos. Son de mediano plazo entre uno y tres años.
    p.mb-0 Los planes operativos son elaborados por el nivel operativo de la empresa en cada una de las áreas, son de corto plazo.
  
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

<style lang="sass" scoped></style>
