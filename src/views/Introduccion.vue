<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    figure.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/img1.svg', style="width: 500px").m-auto
    p El presente componente brinda las bases conceptuales y prácticas que permitirán efectuar la proyección de los estados financieros de resultados, flujo de efectivo y balance general.
    p.mb-0 #[b Nota aclaratoria]: las tablas que se toman como referencia en los ejemplos en cada uno de los temas desarrollados, elaboradas mediante el programa Excel, son derivadas de los mismos, por lo tanto, no se numeran y la elaboración es propia del autor del presente componente.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
