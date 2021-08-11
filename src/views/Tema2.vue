<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Planeación financiera
    p Hace parte de la planeación estratégica, su objetivo fundamental es establecer los caminos que debe transitar la compañía en el futuro para asegurar la generación de valor de la empresa y el crecimiento de la riqueza para los accionistas, para lo cual es necesario centrar los esfuerzos en incluir los principales componentes de las políticas de inversión y de financiación.
    p El plan financiero se cuantifica proyectado los ingresos, costos, gastos, activos, pasivos y patrimonio para un mediano o largo plazo. Se puede seguir el siguiente orden:
    .row.align-items-center
      .col-lg-7.mb-4.mb-lg-0
        ul.lista-ul
          li 
            i.fas.fa-check-square(style="color: #6595BF")
            | Monto discriminado de las inversiones requeridas por la empresa tanto para desarrollar la operación en forma eficiente como para los nuevos proyectos de inversión, de acuerdo con las estrategias empresariales consignadas en el plan estratégico.
          li 
            i.fas.fa-check-square(style="color: #6595BF")
            | Determinación de las fuentes de financiación que garanticen la estructura de capital más adecuada en cuanto a plazos, tasas de interés, riesgo, capacidad de pago y demás condiciones propias del endeudamiento tanto con pasivo como con patrimonio. Se deben seguir las políticas de financiación consignadas en el plan estratégico.
          li 
            i.fas.fa-check-square(style="color: #6595BF")
            | Proyección de ventas anuales en cantidades y en precios.
          li 
            i.fas.fa-check-square(style="color: #6595BF")
            | Proyección de costos anuales discriminado por cada uno de los elementos del costo de producción.
          li 
            i.fas.fa-check-square(style="color: #6595BF")
            | Proyección de gastos de operación.
          li 
            i.fas.fa-check-square(style="color: #6595BF")
            | Proyección del estado de flujo de efectivo requerido que necesitará la operación.
          li 
            i.fas.fa-check-square(style="color: #6595BF")
            | Proyección del estado financiero de resultados.
          li 
            i.fas.fa-check-square(style="color: #6595BF")
            | Proyección del estado financiero de situación financiera.
      .col-lg-5
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img1.png', style="width: 400px").m-auto

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

<style lang="sass" scoped></style>
