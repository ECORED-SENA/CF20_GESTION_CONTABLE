<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Ejercicio práctico de proyección de estados financieros
    p Una empresa del sector de alimentos procesados está planeando abrir una nueva línea de productos y desea determinar cuál sería el monto de la inversión requerida, las posibles fuentes de financiamiento, el impacto de las políticas de cartera, inventarios, endeudamiento y reparto de utilidades sobre la situación financiera del nuevo negocio. Para tal fin ha contratado los servicios de la firma Gestión Contable y Financiera Asesores S.A.S (GCF) para que efectúe las proyecciones financieras de la nueva unidad de negocios para los próximos 6 años.
    p Dentro del trabajo desarrollado por la empresa asesora, se conocieron los siguientes datos extractados del estudio de factibilidad elaborado:
    ul.lista-ul.mb-5
      li 
        i.fas.fa-check-square(style="color: #6595BF")
        | Costo de los estudios de factibilidad: $60.000.000.
      li 
        i.fas.fa-check-square(style="color: #6595BF")
        | Ventas esperadas: Se deben tomar las cifras históricas del sector de las cantidades vendidas en los últimos 5 años. Se pretende penetrar el mercado en el año 1 de proyección en un 2%. A partir del año 2 se proyecta incrementar el volumen de ventas al ritmo del crecimiento de la economía (tome como base el PIB). El precio proyectado para el año uno de proyección es de $135.000 la unidad y para los siguientes años un incremento en precios equivalente a la inflación del año anterior. Las ventas se efectúan todas a crédito y se les otorga a los clientes un plazo de 45 días para pagar.
  
    .row
      .col-lg-8
        .row.justify-content-center
          .col-6
            table.mb-5.st
              tr(style="background-color: #6595BF")
                th.text-white.text-center  AÑO <br> (HISTÓRICO)
                th.text-white.text-center.bt VENTAS ANUALES EN <br> CANTIDADES DEL SECTOR
              tr(style="background-color: #DFECF9")
                td.text-center 1
                td.text-center.bt 1.600.000
              tr(style="background-color: #E8E8E8")
                td.text-center 2
                td.text-center.bt 1.760.000
              tr(style="background-color: #DFECF9")
                td.text-center 3
                td.text-center.bt 1.980.000
              tr(style="background-color: #E8E8E8")
                td.text-center 4
                td.text-center.bt 2.340.000
              tr(style="background-color: #DFECF9")
                td.text-center 5
                td.text-center.bt 2.687.500
        ul.lista-ul
          li 
            i.fas.fa-check-square(style="color: #6595BF")
            | Costos unitarios de materia prima: $30.000.
          li 
            i.fas.fa-check-square(style="color: #6595BF")
            | Mano de obra directa: $20.000 por unidad (sin prestaciones).
          li 
            i.fas.fa-check-square(style="color: #6595BF")
            | Las prestaciones sociales representan el 50% de los salarios a pagar y el 80% de ellas se pagan en efectivo durante el período.
          li 
            i.fas.fa-check-square(style="color: #6595BF")
            p Costos indirectos de fabricación del primer año:
              ul.lista-ul.mt-3
                li 
                  i.fas.fa-check(style="color: #A66D58")
                  | Mano de obra indirecta: $300.000.000
                li 
                  i.fas.fa-check(style="color: #A66D58")
                  | Mantenimiento: $60.000.000
                li 
                  i.fas.fa-check(style="color: #A66D58")
                  | Arrendamiento: $180.000.000
                li 
                  i.fas.fa-check(style="color: #A66D58")
                  | Servicios públicos, aseo y vigilancia: $240.000.000
      .col-lg-4.mb-4.mb-lg-0
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img5.svg', style="width: 400px").m-auto
    ul.lista-ul
      li 
        i.fas.fa-check-square(style="color: #6595BF")
        | Gastos de administración y ventas: $1.000.000.000.
      li 
        i.fas.fa-check-square(style="color: #6595BF")
        | Se debe comprar una máquina por $5.000.000.000, cuya vida útil se estima en 10 años y se deprecia por el método línea recta.
      li 
        i.fas.fa-check-square(style="color: #6595BF")
        | Un banco local prestará recursos al 20% anual. El plazo para pagarlos será de 5 años y se cancelará en cuotas iguales al final de cada año.
      li 
        i.fas.fa-check-square(style="color: #6595BF")
        | La tasa de impuesto a la renta será del 35%.
      li 
        i.fas.fa-check-square(style="color: #6595BF")
        | Reparto de utilidades, el 50% de las utilidades netas de cada año.
      li 
        i.fas.fa-check-square(style="color: #6595BF")
        | Los proveedores de materia prima conceden un plazo de 60 días para el pago.
    .row.align-items-center
      .col-lg-8
        ul.lista-ul
          li 
            i.fas.fa-check-square(style="color: #6595BF")
            p Para el primer año de operaciones se desea mantener un efectivo mínimo equivalente a dos meses de: gastos de administración y ventas, salarios (sin prestaciones) arrendamiento, mantenimiento y otros costos fijos (mencionados antes).
          li 
            i.fas.fa-check-square(style="color: #6595BF")
            p La política de inversión en activos corrientes planeada es:
              ul.lista-ul.mt-3
                li 
                  i.fas.fa-check(style="color: #A66D58")
                  | Cuentas por cobrar: 45 días de ventas.
                li 
                  i.fas.fa-check(style="color: #A66D58")
                  | Materia prima: 10 días de producción.
                li 
                  i.fas.fa-check(style="color: #A66D58")
                  | Productos en proceso: 15 días de ventas expresado en unidades equivalentes terminadas.
                li 
                  i.fas.fa-check(style="color: #A66D58")
                  | Productos terminados: 20 días de ventas.
          li 
            i.fas.fa-check-square(style="color: #6595BF")
            | Se requiere una inversión en capital de trabajo para 4 meses.
          li 
            i.fas.fa-check-square(style="color: #6595BF")
            | Se presupuesta que los volúmenes de ventas crezcan al ritmo del crecimiento de la economía (PIB).
          li 
            i.fas.fa-check-square(style="color: #6595BF")
            | Los precios crecerán al ritmo de la inflación.
          li 
            i.fas.fa-check-square(style="color: #6595BF")
            | Se presupuesta una política de reparto de utilidades del 50% cada año.
        p El primer paso para seguir es la proyección de ventas.
      .col-lg-4
        figure(data-aos="fade-right")
          img(src='@/assets/curso/img6.svg', style="width: 400px").m-auto
    separador.mb-5
    #t_3_1
    .titulo-segundo
      h2 3.1 Proyección de ventas
    p.mb-5 A continuación, se observa la proyección de cada rubro requerido.
    .h4 Ventas en unidades
    p El primer rubro que se debe proyectar es el de ventas tanto en volumen como en cantidades. Existen muchas técnicas de proyección de ventas, entre otras:
    ul.lista-ul.mb-5
      li 
        i.fas.fa-check-square(style="color: #6595BF")
        | La elaboración de encuestas, practicadas por el equipo de ventas de una empresa pequeña o mediante la contratación de expertos en el caso de empresas más grandes.
      li 
        i.fas.fa-check-square(style="color: #6595BF")
        | Utilización del método de análisis de series de tiempos en el caso de que las ventas de la empresa tengan componentes cíclicos o estacionales.
      li 
        i.fas.fa-check-square(style="color: #6595BF")
        | Empleo de factores de crecimiento basados en indicadores macroeconómicos como el PIB y el IPC.
      li 
        i.fas.fa-check-square(style="color: #6595BF")
        | Análisis de regresión el cual establece una relación lineal de las ventas históricas bien sea de la empresa o del sector.
    .row.justify-content-center.mb-5
      .col-lg-10.bg-color1.mb-5
        p El grupo asesor GCF proyectó las ventas del primer año de operación de la nueva línea de negocios en 58.000 unidades calculadas utilizando el método de regresión lineal que sigue la siguiente metodología:
        ol.lista-ol--cuadro.lista-ol.mb-5
          li 
            .lista-ol--cuadro__vineta
              span a
            | Se dispone de las ventas históricas del sector durante los últimos 5 años:
        .row.justify-content-center
          .col-lg-5
            table.st
              tr(style="background-color: #6595BF")
                th.text-white.text-center AÑO <br> (HISTÓRICO)
                th.text-white.text-center.bt VENTAS ANUALES EN <br> CANTIDADES DEL SECTOR
              tr(style="background-color: #DFECF9")
                td.text-center 1
                td.text-center.bt 1.600.000
              tr(style="background-color: #E8E8E8")
                td.text-center 2
                td.text-center.bt 1.760.000
              tr(style="background-color: #DFECF9")
                td.text-center 3
                td.text-center.bt 1.980.000
              tr(style="background-color: #E8E8E8")
                td.text-center 4
                td.text-center.bt 2.340.000
              tr(style="background-color: #DFECF9")
                td.text-center 5
                td.text-center.bt 2.687.500
      .col-lg-10.bg-color1.mb-5
        ol.lista-ol--cuadro.lista-ol
          li 
            .lista-ol--cuadro__vineta
              span b
            | Se proyectan las ventas futuras del sector para los próximos años utilizando la ecuación y = mx + b, en donde:
        .row
          .col-6
            ul.lista-ul.mt-3
              li 
                i.fas.fa-check(style="color: #6595BF")
                p #[b #[i m]] es la pendiente de la línea de regresión que representa el número de unidades que aumenta #[b #[i y]] por cada unidad de #[b #[i x]]. Se calcula con la siguiente fórmula:
            figure(data-aos="fade-right")
              img(src='@/assets/curso/img7.svg', style="width: 400px").m-auto
            ul.lista-ul.mt-3
              li 
                i.fas.fa-check(style="color: #6595BF")
                p #[b #[i x]] es el número del año histórico.
          .col-6
            ul.lista-ul.mt-3
              li 
                i.fas.fa-check(style="color: #6595BF")
                p #[b #[i b]] es la intersección de #[b #[i y]] en la línea de regresión cuando #[b #[i x]] toma el valor de cero. Se calcula con la siguiente fórmula:
            figure(data-aos="fade-left")
              img(src='@/assets/curso/img8.svg', style="width: 400px").m-auto
      .col-lg-10.bg-color1.mb-5
        ol.lista-ol--cuadro.lista-ol.mb-5
          li 
            .lista-ol--cuadro__vineta
              span c
            | Para desarrollar las fórmulas de m y b se utilizó la siguiente tabla en Excel:
        .row.justify-content-center
          .col-lg-6
            table.mb-5.st
              tr(style="background-color: #6595BF")
                th.text-white.text-center AÑO<br>(HISTÓRICO)
                th.text-white.text-center.bt X
                th.text-white.text-center.bt Y
                th.text-white.text-center.bt XY
                th.text-white.text-center.bt X
                  sup 2
              tr(style="background-color: #DFECF9")
                td.text-center Año 1
                td.text-end.bt 1
                td.text-end.bt 1.600.000  
                td.text-end.bt 1.600.000
                td.text-end.bt 1
              tr(style="background-color: #E8E8E8")
                td.text-center Año 2
                td.text-end.bt 2
                td.text-end.bt 1.760.000
                td.text-end.bt 3.520.000
                td.text-end.bt 4
              tr(style="background-color: #DFECF9")
                td.text-center Año 3
                td.text-end.bt 3
                td.text-end.bt 1.980.000  
                td.text-end.bt 5.940.000
                td.text-end.bt 9
              tr(style="background-color: #E8E8E8")
                td.text-center Año 4
                td.text-end.bt 4
                td.text-end.bt 2.340.000
                td.text-end.bt 9.360.000
                td.text-end.bt 16
              tr(style="background-color: #DFECF9")
                td.text-center Año 5
                td.text-end.bt 5
                td.text-end.bt 2.687.500  
                td.text-end.bt 13.437.500
                td.text-end.bt 25
              tr
                th.text-center(style="background-color: #FBF5F0") Sumatorias
                td.text-center(style="background-color: #EACCB2").bt 15
                td.text-center(style="background-color: #EACCB2").bt 28.865.000
                td.text-center(style="background-color: #EACCB2").bt 90.715.000
                td.text-center(style="background-color: #EACCB2").bt 55
        p.mb-5 El resumen de los datos es el siguiente:
        .row.justify-content-center
          .col-lg-4
            table.mb-5.st
              tr(style="background-color: #B7CBDC")
                th.text-center n
                th.text-center.bt 5
              tr(style="background-color: #DFECF9")
                td.text-center Sumatoria de Y
                td.text-center.bt 28.865.000
              tr(style="background-color: #E8E8E8")
                td.text-center Sumatoria de X
                td.text-center.bt 15
              tr(style="background-color: #DFECF9")
                td.text-center Sumatoria de XY
                td.text-center.bt 90.715.000
              tr(style="background-color: #E8E8E8")
                td.text-center Sumatoria de X
                  sup 2
                td.text-center.bt 55
            table.st
              tr(style="background-color: #DFECF9")
                th.text-center m
                td.text-center.bt 275.500
              tr(style="background-color: #E8E8E8")
                th.text-center b
                td.text-center.bt 1.247.000
      .col-lg-10.bg-color1.mb-5
        ol.lista-ol--cuadro.lista-ol.mb-5
          li 
            .lista-ol--cuadro__vineta
              span d
            | A continuación, se presenta la gráfica de la línea de regresión elaborada con los datos consignados anteriormente:
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img9.svg', style="width: 550px").m-auto
      .col-lg-10.bg-color1.mb-5
        ol.lista-ol--cuadro.lista-ol.mb-5
          li 
            .lista-ol--cuadro__vineta
              span e
            | Con los datos calculados de m y b se proyectan las ventas del sector del primer año de proyección:
        p.text-center.mb-5 #[i Ventas año] 1 = 275.500 x 6+1.247.000 = 2.900.00
        p.mb-0 Como se tienen datos de 5 años históricos, el año uno proyectado corresponde al número 6.
      .col-lg-10.bg-color1.mb-5
        ol.lista-ol--cuadro.lista-ol.mb-5
          li 
            .lista-ol--cuadro__vineta
              span f
            p De acuerdo con un estudio del mercado, la empresa podría participar con una participación del 2% de la venta del sector, por lo cual la nueva línea vendería 58.000 unidades resultado de multiplicar 2.900.000 por el 2% de participación.<br><br>Para los siguientes 5 años la empresa asesora determinó viable incrementar la cantidad de unidades vendidas tomando como base el crecimiento de la economía representado por el indicador Producto Interno Bruto (PIB) del cual se conocieron los siguientes datos:
        .row.justify-content-center
          .col-lg-8
            table.st
              tr(style="background-color: #6595BF")
                th.text-white.text-center Indicador de crecimiento
                th.text-white.text-center.bt AÑO<br>1
                th.text-white.text-center.bt AÑO<br>2
                th.text-white.text-center.bt AÑO<br>3
                th.text-white.text-center.bt AÑO<br>4
                th.text-white.text-center.bt AÑO<br>5
                th.text-white.text-center.bt AÑO<br>6
              tr(style="background-color: #DFECF9")
                td.text-center Crecimiento en unidades (PIB)
                td.text-center.bt 1,00%
                td.text-center.bt 1,20%
                td.text-center.bt 1,50%
                td.text-center.bt 1,50%
                td.text-center.bt 1,50%
                td.text-center.bt 1,50%
      .col-lg-10.bg-color1
        ol.lista-ol--cuadro.lista-ol.mb-5
          li 
            .lista-ol--cuadro__vineta
              span g
            p Luego para el segundo año se proyectaron unas ventas de 58.580 unidades calculadas con la fórmula: 58.000 x (1 + 1%). Para el año 3 las ventas proyectadas fueron de 58.283 unidades, calculadas así: 58.283 x (1 + 1.2%). Note que se debe tomar el PIB del período anterior.<br><br>En resumen, las ventas proyectadas de la nueva línea de negocios quedó de la siguiente manera:
        .row.justify-content-center
          .col-lg-8
            table.st
              tr(style="background-color: #6595BF")
                th(style="background-color: #FBF5F0")
                th.text-white.text-center.bt AÑO<br>1
                th.text-white.text-center.bt AÑO<br>2
                th.text-white.text-center.bt AÑO<br>3
                th.text-white.text-center.bt AÑO<br>4
                th.text-white.text-center.bt AÑO<br>5
                th.text-white.text-center.bt AÑO<br>6
              tr(style="background-color: #DFECF9")
                td.text-center Ventas esperadas anuales - unidades
                td.text-center.bt 58.000
                td.text-center.bt 58.580
                td.text-center.bt 59.283
                td.text-center.bt 60.172
                td.text-center.bt 61.075
                td.text-center.bt 61.991
    .h3 Precio de Venta Unitario (PVU)
    p.mb-5 El PVU se determinó partiendo del precio de venta histórico promedio del sector en el último año histórico de $130.000 sobre el cual se efectuaron incrementos equivalentes a la inflación proyectada utilizando los siguientes datos del Índice de Precios al Consumidor (IPC):
    .row.justify-content-center
      .col-lg-7
        table.mb-5.st
          tr(style="background-color: #6595BF")
            th.text-white.text-center Indicador de crecimiento
            th.text-white.text-center.bt AÑO 5<br>(H)
            th.text-white.text-center.bt AÑO 1<br>(P)
            th.text-white.text-center.bt AÑO 2<br>(P)
            th.text-white.text-center.bt AÑO 3<br>(P)
            th.text-white.text-center.bt AÑO 4<br>(P)
            th.text-white.text-center.bt AÑO 5<br>(P)
            th.text-white.text-center.bt AÑO 6<br>(P)
          tr(style="background-color: #DFECF9")
            td.text-center Crecimiento en precios (IPC)
            td.text-center.bt 3.85%
            td.text-center.bt 3.20%
            td.text-center.bt 3.20%
            td.text-center.bt 3.00%
            td.text-center.bt 3.00%
            td.text-center.bt 3.00%
            td.text-center.bt 3.00%
        p El PVU del primer año de proyección ascendió a $135.000 resultado de multiplicar: 130.000 x (1 + 3.85%). 
    p.mb-5 Para los siguientes años se utilizó el mismo procedimiento dando como resultado los siguientes PVU:
    .row.justify-content-center
      .col-lg-8
        table.mb-5.st
          tr(style="background-color: #6595BF")
            th(style="width: 20%; background-color: #FFFFFF")
            th.text-white.text-center.bt AÑO 1
            th.text-white.text-center.bt AÑO 2
            th.text-white.text-center.bt AÑO 3
            th.text-white.text-center.bt AÑO 4
            th.text-white.text-center.bt AÑO 5
            th.text-white.text-center.bt AÑO 6
          tr(style="background-color: #DFECF9")
            td.text-center Precio de venta unitario
            td.text-center.bt $135.000
            td.text-center.bt $139.320
            td.text-center.bt $143.778
            td.text-center.bt $148.092
            td.text-center.bt $152.534
            td.text-center.bt $157.110
    p.mb-5 Con los datos de volumen de ventas y precio de venta unitario se proyectan las ventas totales del nuevo negocio. Para el año uno sería de $7.830.000.000, cifra calculada con la fórmula: 58.000 x $135.000. El siguiente es el cuadro de ventas proyectadas:
    .row.justify-content-center
      .col-lg-9
        table.mb-5.st
          tr(style="background-color: #6595BF")
            th(style="background-color: #FFFFFF")
            th.text-white.text-center.bt AÑO 1
            th.text-white.text-center.bt AÑO 2
            th.text-white.text-center.bt AÑO 3
            th.text-white.text-center.bt AÑO 4
            th.text-white.text-center.bt AÑO 5
            th.text-white.text-center.bt AÑO 6
          tr(style="background-color: #DFECF9")
            td.text-center Ventas
            td.text-center.bt $7.830.000.000
            td.text-center.bt $8.161.365.600
            td.text-center.bt $8.523.605.402
            td.text-center.bt $8.910.966.985
            td.text-center.bt $9.316.034.499
            td.text-center.bt $9.739.428.628
    .h3 Proyección del costo de producción
    p El costo de producción está formado por la materia prima (MP) la mano de obra directa (MOD) y los costos indirectos de fabricación (CIF).
    .row
      .col-lg-8
        ul.lista-ul
          li 
            i.fas.fa-check-square(style="color: #6595BF")
            | Para calcular el costo unitario de materia prima se parte del dato de entrada de $30.000 determinado por GCF SAS y se proyecta con el IPC. Para el primer año proyectado su valor sería de 30.960 calculado así: 30.000 x (1 + 3.2%) y así para los demás años.
          li 
            i.fas.fa-check-square(style="color: #6595BF")
            | Para proyectar el valor de la MOD se sigue el mismo procedimiento utilizado con la MP:
        .row.justify-content-center.mb-4
          .col-4.bg-color2
            p.text-center.mb-0 20.000 X (1 + 3.2%) = 20.640
    .row
      .col-lg-8
        ul.lista-ul
          li 
            i.fas.fa-check-square(style="color: #6595BF")
            | Los costos indirectos de fábrica, también denominados carga fabril, están formados para la nueva línea de negocios por la mano de obra indirecta, el arrendamiento de la fábrica, el mantenimiento de la maquinaria, servicios públicos, de aseo y vigilancia. La proyección de los CIF se efectúa tomando los datos de entrada dados por la empresa asesora para el primer año, incrementándose con el IPC para los siguientes.
    p.mb-5 El resumen de las proyecciones está resumido en el siguiente cuadro:
    .row.justify-content-center.mb-5
      .col-lg-8
        table.st
          tr(style="background-color: #6595BF")
            th.text-white.text-center(style="width: 35%") Rubro
            th.text-white.text-center.bt AÑO 1
            th.text-white.text-center.bt AÑO 2
            th.text-white.text-center.bt AÑO 3
            th.text-white.text-center.bt AÑO 4
            th.text-white.text-center.bt AÑO 5
            th.text-white.text-center.bt AÑO 6
          tr(style="background-color: #DFECF9")
            td.text-center Costo unitario de materia prima
            td.text-center.bt $30.000
            td.text-center.bt $30.960
            td.text-center.bt $31.951
            td.text-center.bt $32.909
            td.text-center.bt $33.897
            td.text-center.bt $34.913
          tr(style="background-color: #E8E8E8")
            td.text-center Costo unitario de obra directa
            td.text-center.bt $20.000
            td.text-center.bt $20.640
            td.text-center.bt $21.300
            td.text-center.bt $21.939
            td.text-center.bt $22.598
            td.text-center.bt $23.276
    .row.justify-content-center
      .col-lg-11
        table.st
          tr
            th(colspan="7" style="background-color: #727997").text-center.text-white COSTOS INDIRECTOS DE FABRICACIÓN
          tr(style="background-color: #6595BF")
            th.text-white.text-center(style="width: 35%") Rubro
            th.text-white.text-center.bt AÑO 1
            th.text-white.text-center.bt AÑO 2
            th.text-white.text-center.bt AÑO 3
            th.text-white.text-center.bt AÑO 4
            th.text-white.text-center.bt AÑO 5
            th.text-white.text-center.bt AÑO 6
          tr(style="background-color: #DFECF9")
            th.text-center Mano de obra indirecta
            td.text-end.bt $300.000.000
            td.text-end.bt $309.600.000
            td.text-end.bt $319.507.200
            td.text-end.bt $329.092.416
            td.text-end.bt $338.965.188
            td.text-end.bt $349.134.144
          tr(style="background-color: #E8E8E8")
            th.text-center Arrendamiento
            td.text-end.bt $180.000.000
            td.text-end.bt $185.760.000
            td.text-end.bt $191.704.320
            td.text-end.bt $197.455.450
            td.text-end.bt $203.379.113
            td.text-end.bt $209.480.486
          tr(style="background-color: #DFECF9")
            th.text-center Mantenimiento
            td.text-end.bt $60.000.000
            td.text-end.bt $61.920.000
            td.text-end.bt $63.901.440
            td.text-end.bt $65.818.483
            td.text-end.bt $67.793.038
            td.text-end.bt $69.826.829
          tr(style="background-color: #E8E8E8")
            th.text-center Servicios públicos, de aseo y vigilancia
            td.text-end.bt $240.000.000
            td.text-end.bt $247.680.000
            td.text-end.bt $255.605.760
            td.text-end.bt $263.273.933
            td.text-end.bt $271.172.151
            td.text-end.bt $279.307.315
    separador.mb-5
    #t_3_2
    .titulo-segundo
      h2 3.2 Proyección de los gastos de operación
    p.mb-5 Como se sabe, según el área donde se generen se pueden clasificar como de administración o de ventas. Entre los gastos de operación que el nuevo negocio planea tener se encuentran los siguientes:
    .row.align-items-center.mb-4
      .col-lg-4
        .h4 Gastos desembolsables
      .col-lg-8
        table.st
          tr
            th(colspan="2" style="background-color: #727997").text-center.text-white GASTOS DE OPERACIÓN
          tr(style="background-color: #6595BF")
            th.text-white.text-center GASTOS DE ADMINISTRACIÓN
            th.text-white.text-center.bt GASTOS DE VENTAS
          tr(style="background-color: #DFECF9")
            td.text-center Nómina de administración
            td.text-center.bt Nómina de ventas
          tr(style="background-color: #E8E8E8")
            td.text-center Servicios públicos
            td.text-center.bt Servicios públicos
          tr(style="background-color: #DFECF9")
            td.text-center Arriendo
            td.text-center.bt Arriendo
          tr(style="background-color: #E8E8E8")
            td.text-center Aseo
            td.text-center.bt Aseo
          tr(style="background-color: #DFECF9")
            td.text-center Vigilancia
            td.text-center.bt Vigilancia
          tr(style="background-color: #E8E8E8")
            td.text-center Suministros
            td.text-center.bt Suministros
    .row.align-items-center.mb-5
      .col-lg-4
        .h4 Gastos no desembolsables
      .col-lg-8
        table.st
          tr(style="background-color: #DFECF9")
            td.text-center Depreciaciones
            td.text-center.bt Depreciaciones
          tr(style="background-color: #E8E8E8")
            td.text-center Amortizaciones
            td.text-center.bt Amortizaciones
    p.mb-5 Como se puede apreciar el nombre de los gastos en la mayoría de los casos es el mismo concepto, pero se diferencian porque se generan en diferentes áreas de la empresa. La metodología para proyectar los gastos de operación, excepto las depreciaciones y amortizaciones, es la misma utilizada con la materia prima y la mano de obra directa: se toman los datos de entrada para el primer año y se proyectan con el dato del IPC.
    .row.align-items-center
      .col-lg-3.mb-4.mb-lg-0
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img10.svg', style="width: 250px").m-auto
      .col-lg-9
        p.mb-4 Para el segundo año proyectado la cifra queda en $1.032.000.000 calculada de la siguiente manera:
        .row.justify-content-center.mb-4
          .col-4.bg-color2
            p.text-center.mb-0 #[i Gastos de operación Año 2] = 1.000.000.000 × (1 + 3.2%)
        p.mb-4 La proyección para los seis años queda de la siguiente manera:
        .row.justify-content-center.mb-5
          .col-lg-11
            table.st
              tr(style="background-color: #6595BF")
                th(style="background-color: #FFFFFF")
                th.text-white.text-center.bt AÑO 1
                th.text-white.text-center.bt AÑO 2
                th.text-white.text-center.bt AÑO 3
                th.text-white.text-center.bt AÑO 4
                th.text-white.text-center.bt AÑO 5
                th.text-white.text-center.bt AÑO 6
              tr(style="background-color: #DFECF9")
                th.text-center Gastos de administración y venta
                td.text-center.bt $1.000.000.000
                td.text-center.bt $1.032.000.000
                td.text-center.bt $1.065.024.000
                td.text-center.bt $1.096.974.720
                td.text-center.bt $1.129.883.962
                td.text-center.bt $1.163.780.480
    separador.mb-5
    #t_3_3
    .titulo-segundo
      h2 3.3 Proyección del costo de producción
    .row.mb-5
      .col-lg-6
        p Para determinar el número de unidades a producir, cifra que depende del volumen de ventas, y de las políticas sobre inventarios de productos en proceso y productos terminados. En este proceso se utiliza el conocido método de juego de inventarios de la siguiente manera:
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img11.svg', style="width: 400px").m-auto
      .col-lg-6.d-flex.justify-content-between.flex-column
        p Como lo que se desea determinar es el número de unidades a producir, se despeja la ecuación anterior:
        figure(data-aos="fade-right")
          img(src='@/assets/curso/img12.svg', style="width: 400px").m-auto
    p.mb-5 Ahora bien, el caso plantea que al final del periodo presupuestado quedan no sólo unidades de productos terminados sino también de productos en proceso, por lo cual se efectúa un doble juego de inventarios como se ilustra a continuación:
    .row.align-items-center.mb-5
      .col-lg-6.mb-4.mb-lg-0
        table.st
          tr(style="background-color: #6595BF")
            th.text-white.text-center Unidades para vender
          tr(style="background-color: #DFECF9")
            td.text-center (-) Inventario inicial de productos en proceso
          tr(style="background-color: #E8E8E8")
            td.text-center (-) Inventario final de productos terminados
          tr(style="background-color: #DFECF9")
            td.text-center (+) Inventario final de productos en proceso
          tr(style="background-color: #E8E8E8")
            td.text-center (-) Inventario final de productos terminados
          tr(style="background-color: #DFECF9")
            td.text-center (=) Unidades a producir
      .col-lg-6
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img13.svg', style="width: 400px").m-auto
    p Si se tiene en cuenta que es el primer año de operaciones de la nueva línea de negocio, los valores de inventarios iniciales serán cero.
    p.mb-5 Para calcular las cantidades de inventarios finales se utilizan los índices de rotación, que para el caso de los productos terminados es de 18, dato calculado con base en el dato de entrada que indica que la empresa tardaría en promedio 20 días en vender sus nuevos productos:
    .row.align-items-center
      .col-lg-4.mb-4.mb-lg-0
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img14.svg', style="width: 400px").m-auto
      .col-lg-8
        figure(data-aos="fade-right").mb-4
          img(src='@/assets/curso/img15.svg', style="width: 600px")
        p La rotación de productos en proceso es de 24 calculado con la siguiente fórmula:
        figure(data-aos="fade-right").mb-4
          img(src='@/assets/curso/img16.svg', style="width: 600px")
        p Recuerde que una política de inventario de productos terminados de 20 días significa que el gerente de ventas espera que el proceso de venta dure máximo 20 días, por consiguiente, al final del periodo proyectado quedarán unidades terminadas para 20 días de ventas.
        p ¿Cuál es ese número de unidades?
        figure(data-aos="fade-right").mb-4
          img(src='@/assets/curso/img17.svg', style="width: 730px")
        p De igual manera se calcula el número de unidades terminadas equivalentes al inventario final de productos en proceso:
        figure(data-aos="fade-right").mb-4
          img(src='@/assets/curso/img18.svg', style="width: 730px")
    p.text-center.mb-4 Con los datos anteriores se calcula el número de unidades a producir para el año uno, bajo el siguiente esquema:
    .row.justify-content-center.mb-5
      .col-lg-6.mb-4.mb-lg-0
        table.st
          tr(style="background-color: #DFECF9")
            td.text-center (+) Unidades a vender
            td.text-center.bt 58.000
          tr(style="background-color: #E8E8E8")
            td.text-center (-) Inventario inicial de productos en proceso
            td.text-center.bt
          tr(style="background-color: #DFECF9")
            td.text-center (-) Inventario inicial de productos terminados
            td.text-center.bt
          tr(style="background-color: #E8E8E8")
            td.text-center (+) Inventario final de productos en proceso
            td.text-center.bt 2.417
          tr(style="background-color: #DFECF9")
            td.text-center (+) Inventario final de productos terminados
            td.text-center.bt 3.222
          tr(style="background-color: #E8E8E8")
            td.text-center (=) Unidades a producir
            td.text-center.bt 63.639
    p.text-center.mb-4 Así quedaría para los seis años de proyección:
    .row.justify-content-center.mb-5
      .col-lg-8
        table.st
          tr
            th(colspan="7" style="background-color: #727997").text-center.text-white PRESUPUESTO UNIDADES A PRODUCIR
          tr(style="background-color: #6595BF")
            th.text-white.text-center
            th.text-white.text-center.bt AÑO 1
            th.text-white.text-center.bt AÑO 2
            th.text-white.text-center.bt AÑO 3
            th.text-white.text-center.bt AÑO 4
            th.text-white.text-center.bt AÑO 5
            th.text-white.text-center.bt AÑO 6
          tr(style="background-color: #DFECF9")
            th.text-center (+) Unidades a vender
            td.text-end.bt 58.000
            td.text-end.bt 58.580
            td.text-end.bt 59.283
            td.text-end.bt 60.172
            td.text-end.bt 61.075
            td.text-end.bt 61.991
          tr(style="background-color: #E8E8E8")
            th.text-center (-) Inventario inicial de productos en proceso
            td.text-end.bt
            td.text-end.bt 2.417
            td.text-end.bt 2.441
            td.text-end.bt 2.470
            td.text-end.bt 2.507
            td.text-end.bt 2.545
          tr(style="background-color: #DFECF9")
            th.text-center (-) Inventario inicial de productos terminados
            td.text-end.bt
            td.text-end.bt 3.222
            td.text-end.bt 3.254
            td.text-end.bt 3.294
            td.text-end.bt 3.343
            td.text-end.bt 3.393
          tr(style="background-color: #E8E8E8")
            th.text-center (+) Inventario final de productos en proceso
            td.text-end.bt 2.417
            td.text-end.bt 2.441
            td.text-end.bt 2.470
            td.text-end.bt 2.507
            td.text-end.bt 2.545
            td.text-end.bt 2.583
          tr(style="background-color: #DFECF9")
            th.text-center (+) Inventario final de productos terminados
            td.text-end.bt 3.222
            td.text-end.bt 3.254
            td.text-end.bt 3.294
            td.text-end.bt 3.343
            td.text-end.bt 3.393
            td.text-end.bt 3.444
          tr(style="background-color: #E8E8E8")
            th.text-center (=) Unidades a producir
            td.text-end.bt 63.639
            td.text-end.bt 58.636
            td.text-end.bt 59.352
            td.text-end.bt 60.258
            td.text-end.bt 61.163
            td.text-end.bt 62.080
    p.mb-4 Con los datos anteriores se proyecta el estado de costo de producción:
    .row.justify-content-center.mb-5
      .col-lg-10
        table.st
          tr(style="background-color: #6595BF")
            th.text-white.text-center
            th.text-white.text-center.bt AÑO 1
            th.text-white.text-center.bt AÑO 2
            th.text-white.text-center.bt AÑO 3
            th.text-white.text-center.bt AÑO 4
            th.text-white.text-center.bt AÑO 5
            th.text-white.text-center.bt AÑO 6
          tr(style="background-color: #DFECF9")
            th.text-center Materia prima
            td.text-end.bt $1.909.170.000
            td.text-end.bt $1.815.370.560
            td.text-end.bt $1.896.339.133
            td.text-end.bt $1.983.045.080
            td.text-end.bt $2.073.212.782
            td.text-end.bt $2.167.424.767
          tr(style="background-color: #E8E8E8")
            th.text-center Mano de obra directa
            td.text-end.bt $1.272.780.000
            td.text-end.bt $1.210.247.040
            td.text-end.bt $1.264.226.089
            td.text-end.bt $1.322.030.054
            td.text-end.bt $1.382.141.855
            td.text-end.bt $1.444.949.845
          tr(style="background-color: #DFECF9")
            th.text-center Mano de obra indirecta
            td.text-end.bt $300.000.000
            td.text-end.bt $309.600.000
            td.text-end.bt $319.507.200
            td.text-end.bt $329.092.416
            td.text-end.bt $338.965.188
            td.text-end.bt $349.134.144
          tr(style="background-color: #E8E8E8")
            th.text-center Prestaciones sociales
            td.text-end.bt $786.390.000
            td.text-end.bt $759.923.520
            td.text-end.bt $791.866.644
            td.text-end.bt $825.561.235
            td.text-end.bt $860.553.522
            td.text-end.bt $897.041.994
          tr(style="background-color: #DFECF9")
            th.text-center Arrendamiento
            td.text-end.bt $180.000.000
            td.text-end.bt $185.760.000
            td.text-end.bt $191.704.320
            td.text-end.bt $197.455.450
            td.text-end.bt $203.379.113
            td.text-end.bt $209.480.486
          tr(style="background-color: #E8E8E8")
            th.text-center Mantenimiento
            td.text-end.bt $60.000.000
            td.text-end.bt $61.920.000
            td.text-end.bt $63.901.440
            td.text-end.bt $65.818.483
            td.text-end.bt $67.793.038
            td.text-end.bt $69.826.829
          tr(style="background-color: #DFECF9")
            th.text-center Otros CIF
            td.text-end.bt $240.000.000
            td.text-end.bt $247.680.000
            td.text-end.bt $255.605.760
            td.text-end.bt $263.273.933
            td.text-end.bt $271.172.151
            td.text-end.bt $279.307.315
          tr(style="background-color: #E8E8E8")
            th.text-center TOTAL COSTOS EN EFECTIVO
            td.text-end.bt $4.748.340.000
            td.text-end.bt $4.590.501.120
            td.text-end.bt $4.783.150.586
            td.text-end.bt $4.986.276.651
            td.text-end.bt $5.197.217.649
            td.text-end.bt $5.417.165.380
          tr(style="background-color: #DFECF9")
            th.text-center Costo de depreciación
            td.text-end.bt $500.000.000
            td.text-end.bt $500.000.000
            td.text-end.bt $500.000.000
            td.text-end.bt $500.000.000
            td.text-end.bt $500.000
            td.text-end.bt $500.000
          tr(style="background-color: #E8E8E8")
            th.text-center TOTAL COSTO DE PRODUCCIÓN
            td.text-end.bt $5.248.340.000
            td.text-end.bt $5.090.501.120
            td.text-end.bt $5.283.150.586
            td.text-end.bt $5.486.276.651
            td.text-end.bt $5.197.717.649
            td.text-end.bt $5.417.665.380
    p.mb-5 A continuación, se describe el proceso de cálculo de las cifras anteriores:
    .row.justify-content-center
      .col-lg-7
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/img19.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h4 Materia prima (M.P.)
              p.text-center #[i M.P. = Unidades a producir * costo unitario de la M.P.]
              p.text-center #[i M.P. = 63.639 * 30.000]
              p.text-center #[i M.P. = 1.909.170.000]
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/img19.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h4 Mano de obra directa (M.O.D.)
              p.text-center #[i M.O.D. = Unidades a producir * costo unitario de la M.O.D.]
              p.text-center #[i M.O.D. = 63.639 * 20.000]
              p.text-center #[i M.O.D. = 1.272.780.000]
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/img19.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              p La mano de obra indirecta (M.O.I.) es un dato de entrada dado por el estudio de factibilidad con un monto de $300.000.000 para el primer año, valor que crece con el IPC y que para el segundo año de proyección quedaría así:
              p.text-center #[i M.O.I. año 2 = 300.000.000 * (1 + 3.2%)]
              p.text-center #[i M.O.I. año 2 = 309.600.000]
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/img19.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              p El valor de las prestaciones sociales se ha proyectado en un 50% de las nóminas de producción. Para el primer año su valor se calculó como sigue:
              p.text-center #[i Carga prestacional = (M.O.D. + M.O.I )* 50%]
              p.text-center #[i Carga prestacional = (1.272.780.000 + 300.000.000) * 50%]
              p.text-center #[i Carga prestacional = 786.390.000]
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/img19.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              p.my-4 Para el cálculo de los rubros arrendamiento, mantenimiento, servicios públicos, aseo y vigilancia, se tienen en cuenta los datos de entrada dado por el estudio de factibilidad para el primer año, y luego se sigue la metodología de hacerlos crecer para el resto de los años con el IPC.
    separador.mb-5
    #t_3_4
    .titulo-segundo
      h2 3.4 Proyección de la inversión en activos corrientes
    p.mb-5 Es necesario valorar el monto requerido de inversión en inventarios y cartera comercial.
    .row.justify-content-center.mb-5
      .col-lg-8.bg-color1.mb-5
        ul.lista-ul
          li 
            i.fas.fa-check-square(style="color: #D9A171")
            p El valor del rubro productos en proceso se calcula multiplicando el valor del inventario final de productos en proceso por el valor del costo unitario en efectivo:
        p.mb-0.text-center 2.417 X 74.614 = 180.314.265
      .col-lg-8.bg-color1.mb-5
        ul.lista-ul
          li 
            i.fas.fa-check-square(style="color: #D9A171")
            p El valor del costo unitario sale de dividir el costo de producción en efectivo entre el número de unidades a producir:
        figure
          img(src='@/assets/curso/img20.svg', style="width: 200px").m-auto
      .col-lg-8.bg-color1.mb-5
        ul.lista-ul
          li 
            i.fas.fa-check-square(style="color: #D9A171")
            p El valor del rubro productos terminados se calcula multiplicando el valor del inventario final de productos terminados por el valor del costo unitario en efectivo:
        p.text-center.mb-0 3.222 X 74.614 = 240.405.278
      .col-lg-8.bg-color1
        ul.lista-ul
          li 
            i.fas.fa-check-square(style="color: #D9A171")
            p El valor del inventario final de materia prima es igual a la división entre la mano de obra directa consumida y la rotación de materia prima:
        figure
          img(src='@/assets/curso/img21.svg', style="width: 230px").m-auto
    p Ahora bien, para calcular la rotación de materia prima se dividen los días del año entre el plazo que la empresa estima va a estar almacenada la materia prima, que para este caso son 10 días, luego 360 entre 10 da como resultado 36.
    p.mb-5 La inversión proyectada en inventarios queda como observa en el siguiente cuadro:
    .row.justify-content-center.mb-5
      .col-12
        table.st
          tr(style="background-color: #6595BF")
            th.text-white.text-center INVERSIÓN EN INVENTARIOS
            th.text-white.text-center.bt AÑO 1
            th.text-white.text-center.bt AÑO 2
            th.text-white.text-center.bt AÑO 3
            th.text-white.text-center.bt AÑO 4
            th.text-white.text-center.bt AÑO 5
            th.text-white.text-center.bt AÑO 6
          tr(style="background-color: #DFECF9")
            th.text-center Productos en proceso
            td.text-end.bt $180.341.265
            td.text-end.bt $191.101.256
            td.text-end.bt $199.056.172
            td.text-end.bt $207.451.219
            td.text-end.bt $216.256.870
            td.text-center.bt $225.395.267
          tr(style="background-color: #E8E8E8")
            th.text-center Productos terminados
            td.text-end.bt $240.405.278
            td.text-end.bt $254.749.482
            td.text-end.bt $265.461.956
            td.text-end.bt $276.629.208
            td.text-end.bt $288.314.168
            td.text-center.bt $300.527.023
          tr(style="background-color: #DFECF9")
            th.text-center Rotación del inventario de Materia Prima (360 / días de inventario de Materia Prima)
            td.text-end.bt 36
            td.text-end.bt 36
            td.text-end.bt 36
            td.text-end.bt 36
            td.text-end.bt 36
            td.text-center.bt 36
          tr(style="background-color: #E8E8E8")
            th.text-center Inventario final de Materia Prima (Costo total de M.P. a consumir / Rotación de M.P.)
            td.text-end.bt $53.032.500
            td.text-end.bt $50.426.960
            td.text-end.bt $52.676.087
            td.text-end.bt $55.084.586
            td.text-end.bt $57.589.244
            td.text-center.bt $60.206.244
    .row.justify-content-center
      .col-lg-8.bg-color1.mb-5
        ul.lista-ul
          li 
            i.fas.fa-check-square(style="color: #D9A171")
            p Para el cálculo del valor de la cartera comercial que va a quedar al final del año basta dividir el valor de las ventas entre la rotación de cartera.
        figure.mb-4
          img(src='@/assets/curso/img22.svg', style="width: 250px").m-auto
        p.mb-0 La rotación de cartera se calcula dividiendo los días del año entre el plazo que la empresa estima va a dar a sus clientes ya que se estima que todas las ventas se efectuarán a crédito con un plazo de 45 días, luego 360 entre 45 da como resultado 8.
      .col-lg-8.bg-color1.mb-5
        ul.lista-ul
          li 
            i.fas.fa-check-square(style="color: #D9A171")
            p Una cosa es el valor final de la cartera y otra es la inversión requerida en cartera, valor que se calcula dividiendo el monto de la cartera entre el precio de venta unitario para luego multiplicarlo por el costo de producción unitario en efectivo. Queda de la siguiente manera:
        figure
          img(src='@/assets/curso/img23.svg', style="width: 280px").m-auto
      .col-lg-8.bg-color1
        ul.lista-ul
          li 
            i.fas.fa-check-square(style="color: #D9A171")
            p.mb-0 Si la empresa vende en el primer año la suma de $7.830.000.000 y el valor de la cartera final es de $978.750.000, significa que la diferencia, $6.851.250.000 se recaudó en el año. Dato importante que va a alimentar el estado de flujo de efectivo, mientras que el valor de ventas alimenta el estado de resultados y el saldo de cartera va a parar al estado de situación financiera.
    separador.mb-5
    #t_3_5
    .titulo-segundo
      h2 3.5 Inversión
    p.mb-5 En este punto se calcula la inversión que la empresa requiere efectuar para montar la nueva línea de negocio al igual que las fuentes de financiación.
    ul.lista-ul
      li 
        i.fas.fa-check-square(style="color: #6595BF")
        p #[b Inversión en efectivo:] tal cual lo dicen los datos de entrada se prevé que para iniciar operaciones sin contratiempos de flujo de caja es necesario tener en cuenta al momento de calcular la inversión inicial una cantidad de dinero que soporte la operación durante los primeros dos meses para poder pagar los gastos de operación, los salarios, el arrendamiento, el mantenimiento y los gastos de servicios públicos, de aseo y vigilancia. Dichos valores se calculan dividiendo el valor anual de cada gasto entre los doce meses del año y el resultado se multiplica por 2.<br><br>El resultado es el siguiente:
    .row.justify-content-center.mb-5
      .col-lg-5
        table.st
          tr(style="background-color: #6595BF")
            th.text-white.text-center INVERSIÓN MÍNIMA EN EFECTIVO
            th.text-white.text-center.bt AÑO 1
          tr(style="background-color: #DFECF9")
            th.text-center Gastos de Administración y Ventas
            td.text-center.bt $166.666.667
          tr(style="background-color: #E8E8E8")
            th.text-center Salarios
            td.text-center $262.130.000
          tr(style="background-color: #DFECF9")
            th.text-center Arrendamiento
            td.text-center.bt $30.000.000
          tr(style="background-color: #E8E8E8")
            th.text-center Mantenimiento
            td.text-center.bt $10.000.000
          tr(style="background-color: #DFECF9")
            th.text-center Servicios públicos, de aseo y vigilancia
            td.text-center.bt $40.000.000
          tr(style="background-color: #E8E8E8")
            th.text-center TOTAL EFECTIVO REQUERIDO MÍNIMO
            td.text-center.bt $508.796.667
    ul.lista-ul
      li 
        i.fas.fa-check-square(style="color: #6595BF")
        p #[b Inversión total requerida:] Se calcula recogiendo los cálculos efectuados anteriormente.<br><br>El dato es el siguiente:
    .row.justify-content-center
      .col-lg-5
        table.st
          tr(style="background-color: #6595BF")
            th.text-white.text-center INVERSIÓN INICIAL EN ACTIVOS
            th.text-white.text-center.bt AÑO 1
          tr(style="background-color: #DFECF9")
            th.text-center Efectivo
            td.text-center.bt $508.796.667
          tr(style="background-color: #E8E8E8")
            th.text-center Cuentas por cobrar
            td.text-center.bt $540.949.182
          tr(style="background-color: #DFECF9")
            th.text-center Inventario de materia prima
            td.text-center.bt $53.032.500
          tr(style="background-color: #E8E8E8")
            th.text-center Inventario de productos en proceso
            td.text-center.bt $180.341.265
          tr(style="background-color: #DFECF9")
            th.text-center Inventarios de productos terminados
            td.text-center.bt $240.405.278
          tr(style="background-color: #E8E8E8")
            th.text-center Cargos diferidos
            td.text-center.bt $60.000.000
          tr(style="background-color: #DFECF9")
            th.text-center Maquinaria
            td.text-center.bt $5.000.000.000
          tr(style="background-color: #E8E8E8")
            th.text-center TOTAL
            td.text-center.bt $6.583.524.892
    separador.mb-5
    #t_3_6
    .titulo-segundo
      h2 3.6 Fuentes de financiación
    p La financiación y la inversión son dos de las principales decisiones financieras que deben tomar los socios con asesoría del grupo directivo de la empresa. Las empresas tienen cuatro fuentes de financiación: los pasivos, aportes de capital, desinversiones y la generación interna de fondos. 
    p.mb-5 Los pasivos pueden ser:
    figure(data-aos="fade-left").mb-5
      img(src='@/assets/curso/img24.svg', style="width: 1200px").m-auto
    p El aporte de capital se hace en las sociedades anónimas mediante la emisión de acciones comunes, las cuales otorgan a su poseedor derechos de tipo económico y político. Los derechos económicos se refieren a la obtención de una participación en las utilidades que logra la empresa (dividendos) el beneficio dado por la diferencia entre el precio de compra y el de venta (valorización) al momento de vender y el derecho a comprar nuevas acciones que emita la empresa (derechos de suscripción). Los derechos políticos se refieren a que el accionista puede participar y votar en la asamblea general de accionistas y revisar los libros de la sociedad dentro de los límites de tiempo establecido para ello. (Bolsa de valores de Colombia, s.f.). En las demás sociedades los aportes se denominan cuotas partes de interés.
    .row.align-items-center
      .col-lg-6
        p Las desinversiones se refieren a la venta de algunos activos fijos que la empresa no requiera en el normal desarrollo de su operación con el fin de financiar el capital de trabajo. 
        p La generación interna de fondos tiene que ver con los recursos generados por la empresa en el desarrollo de su actividad principal y se obtienen sumándole a la utilidad neta del ejercicio los costos y gastos que no generan salida de caja como las depreciaciones.
        p Lo importante es tener una política clara de financiación de los activos. Lo más recomendable es que los activos de corto plazo se financien con pasivo de corto plazo y las inversiones de largo plazo se financien con una adecuada combinación entre pasivo financiero de largo plazo y aportes de capital (estructura de capital de la empresa). Por consiguiente, el capital de trabajo se debería financiar con proveedores hasta donde lo permita el mercado, el resto con el flujo de caja bruto que genere la operación y si este no alcanza, se deberá recurrir a préstamos de corto plazo o a emisión de papeles comerciales. La inversión en activos de largo plazo se debería financiar con una combinación de aportes de capital, obligaciones financieras de largo plazo, emisión de bonos y con la Generación Interna de Fondos (GIF). Esta última fuente es muy importante porque le da a la empresa la posibilidad de crecer en el largo plazo mediante inversiones estratégicas como aumento de la planta, cambio tecnológico, planes exportadores.
      .col-lg-6.mb-4.mb-lg-0
        figure(data-aos="fade-right")
          img(src='@/assets/curso/img25.svg', style="width: 500px").m-auto
    p La financiación propuesta por la empresa asesora es la siguiente: $327.033.750 por cuenta de los proveedores, un crédito bancario por valor de $2.502.596.457 y el saldo, $3.753.894.685 con un aporte de los accionistas.
    p.mb-5 El valor financiado por los proveedores fue calculado dividiendo el valor de las compras de materia prima a crédito del primer año entre la rotación de proveedores.
    .row.justify-content-center.mb-5
      .col-lg-5
        table.st
          tr(style="background-color: #6595BF")
            th.text-white.text-center(style="background-color: #FFFFFF")
            th.text-white.text-center.bt AÑO 1
          tr(style="background-color: #DFECF9")
            th.text-center Consumo de materia prima
            td.text-center.bt $1.909.170.000
          tr(style="background-color: #E8E8E8")
            th.text-center (-) Inventario inicial de materia prima
            td.text-center.bt
          tr(style="background-color: #DFECF9")
            th.text-center (+) Inventario final de materia prima
            td.text-center.bt $53.032.500
          tr(style="background-color: #E8E8E8")
            th.text-center (=) Compras a crédito
            td.text-center.bt $1.962.202.500
    figure.mb-5
      img(src='@/assets/curso/img26.svg', style="width: 650px").m-auto
    p.mb-5 Por lo tanto, la financiación total queda de la siguiente manera:
    .row.justify-content-center.mb-5
      .col-lg-5
        table.st
          tr(style="background-color: #6595BF")
            th.text-white.text-center(colspan="2") FUENTES DE FINANCIAMIENTO
          tr(style="background-color: #DFECF9")
            th.text-center Proveedores
            td.text-center.bt $327.033.750
          tr(style="background-color: #E8E8E8")
            th.text-center Saldo por financiar
            td.text-center.bt $6.256.491.142
          tr(style="background-color: #DFECF9")
            th.text-center Política de financiamiento
            td.text-center.bt 40%
          tr(style="background-color: #E8E8E8")
            th.text-center Acreedores financieros
            td.text-center.bt $2.502,596,456
          tr(style="background-color: #DFECF9")
            th.text-center Socios
            td.text-center.bt $3,753,894,685
          tr(style="background-color: #E8E8E8")
            th.text-center Total financiación
            td.text-center.bt $6.583.524.892
    p.mb-5 Financiación bancaria: Los $2.502.596.457 se financian con una entidad bancaria a una tasa del 20% para cancelar en cuotas anuales iguales durante 5 años. La tabla de amortización se muestra a continuación:
    .row.justify-content-center.mb-5
      .col-lg-8
        table.st
          tr
            th(colspan="6" style="background-color: #727997").text-center.text-white TABLA DE AMORTIZACIÓN
          tr(style="background-color: #6595BF")
            th.text-white.text-center
            th.text-white.text-center.bt 1
            th.text-white.text-center.bt 2
            th.text-white.text-center.bt 3
            th.text-white.text-center.bt 4
            th.text-white.text-center.bt 5
          tr(style="background-color: #DFECF9")
            th.text-center Abono a intereses
            td.text-end.bt $500.519.291
            td.text-end.bt $433.259.657
            td.text-end.bt $352.548.097
            td.text-end.bt $255.694.224
            td.text-end.bt $139.469.577
          tr(style="background-color: #E8E8E8")
            th.text-center Abono a capital
            td.text-end.bt $336.298.169
            td.text-end.bt $403.557.803
            td.text-end.bt $484.269.364
            td.text-end.bt $581.123.237
            td.text-end.bt $697.347.884
          tr(style="background-color: #DFECF9")
            th.text-center Saldo de capital
            td.text-end.bt $2.166.298.169
            td.text-end.bt $1.762.740.484
            td.text-end.bt $1.278.471.120
            td.text-end.bt $697.347.884
            td.text-end.bt
          tr(style="background-color: #E8E8E8")
            th.text-center Valor de la cuota
            td.text-end.bt $836.817.461
            td.text-end.bt $836.817.461
            td.text-end.bt $836.817.461
            td.text-end.bt $836.817.461
            td.text-end.bt $836.817.461
    .row.align-items-center
      .col-lg-6
        p.mb-4 El valor de la cuota se calcula con la siguiente fórmula:
        figure.mb-4
          img(src='@/assets/curso/img27.svg', style="width: 370px").m-auto
        p Cada vez que se cancele una cuota se abona una parte a intereses y el resto a la deuda. 
        p Para el primer año el valor del interés es iguales a:
        .row.justify-content-center.mb-4
          .col-8.bg-color3
            p.text-center.mb-0 2.502.596.457 X 20% = 500.519.291
        p Por consiguiente, el saldo se abona a capital:
        .row.justify-content-center.mb-4
          .col-8.bg-color3
            p.text-center.mb-0  836.817.461 - 500.519.291 = 336.298.169
        p Al final del primer año el saldo de la deuda es igual a:
        .row.justify-content-center.mb-4
          .col-8.bg-color3
            p.text-center.mb-0 2.502.596.457 - 336.298.169 = 2.166.298.287
      .col-lg-6
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img28.svg', style="width: 450px").m-auto
    separador.mb-5
    #t_3_7
    .titulo-segundo
      h2 3.7 Proyección de los estados financieros
    p.mb-5 El último paso es proyectar los estados financieros para lo cual ya se tienen todos los componentes que se han calculado a lo largo de todo el estudio. Basta tomar los datos de las variables que componen cada uno de ellos.
    ul.lista-ul
      li 
        i.fas.fa-check-square(style="color: #D9A171")
        p #[b Iniciamos con el costo de ventas]
    .row.justify-content-center
      .col-lg-10
        table.mb-5.st
          tr(style="background-color: #6595BF")
            th.text-white.text-center(style="background-color: #FFF")
            th.text-white.text-center.bt AÑO 1
            th.text-white.text-center.bt AÑO 2
            th.text-white.text-center.bt AÑO 3
            th.text-white.text-center.bt AÑO 4
            th.text-white.text-center.bt AÑO 5
            th.text-white.text-center.bt AÑO 6
          tr(style="background-color: #DFECF9")
            th.text-center Inventario inicial producto en proceso
            td.text-end.bt
            td.text-end.bt $199.331.193
            td.text-end.bt $211.916.114
            td.text-end.bt $219.864.233
            td.text-end.bt $228.253.436
            td.text-end.bt $237.061.932
          tr(style="background-color: #E8E8E8")
            th.text-center (+) Costo de producción
            td.text-end.bt $5.248.340.000
            td.text-end.bt $5.090.501.120
            td.text-end.bt $5.283.150.587
            td.text-end.bt $5.486.276.650
            td.text-end.bt $5.697.217.649
            td.text-end.bt $5.917.165.380
          tr(style="background-color: #DFECF9")
            th.text-center (-) Inventario final productos en proceso
            td.text-end.bt $199.331.193
            td.text-end.bt $211.916.114
            td.text-end.bt $219.864.233
            td.text-end.bt $288.253.436
            td.text-end.bt $237.061.932
            td.text-end.bt $246.199.069
          tr(style="background-color: #E8E8E8")
            th.text-center (=) Costo de los productos terminados
            td.text-end.bt $5.049.008.807
            td.text-end.bt $5.077.916.199
            td.text-end.bt $5.275.202.468
            td.text-end.bt $5.477.887.447
            td.text-end.bt $5.688.409.154
            td.text-end.bt $5.908.028.243
          tr(style="background-color: #DFECF9")
            th.text-center (+) Inventario inicial productos terminados
            td.text-end.bt
            td.text-end.bt $265.719.943
            td.text-end.bt $282.496.941
            td.text-end.bt $293.211.653
            td.text-end.bt $304.368.264
            td.text-end.bt $316.051.526
          tr(style="background-color: #E8E8E8")
            th.text-center (-) Inventario final productos terminados
            td.text-end.bt $265.719.943
            td.text-end.bt $282.496.941
            td.text-end.bt $293.211.653
            td.text-end.bt $304.368.264
            td.text-end.bt $316.051.526
            td.text-end.bt $328.265.425
          tr(style="background-color: #DFECF9")
            th.text-center Total costo de ventas
            td.text-end.bt $4.783.288.864
            td.text-end.bt $5.061.139.202
            td.text-end.bt $5.264.487.756
            td.text-end.bt $5.466.730.836
            td.text-end.bt $5,676.892.526
            td.text-end.bt $5.895.814.345
    ul.lista-ul
      li 
        i.fas.fa-check-square(style="color: #D9A171")
        p #[b Luego se proyecta el estado de resultados]
    .row.justify-content-center
      .col-lg-10
        table.mb-5.st
          tr(style="background-color: #6595BF")
            th.text-white.text-center(style="background-color: #FFF")
            th.text-white.text-center.bt AÑO 1
            th.text-white.text-center.bt AÑO 2
            th.text-white.text-center.bt AÑO 3
            th.text-white.text-center.bt AÑO 4
            th.text-white.text-center.bt AÑO 5
            th.text-white.text-center.bt AÑO 6
          tr(style="background-color: #DFECF9")
            th.text-center Ventas
            td.text-end.bt $7.830.000.000
            td.text-end.bt $8.161.365.600
            td.text-end.bt $8.523.605.402
            td.text-end.bt $8.910.966.985
            td.text-end.bt $9.316.034.499
            td.text-end.bt $9.739.428.628
          tr(style="background-color: #E8E8E8")
            th.text-center (-) Costos de ventas
            td.text-end.bt $4.783.288.864
            td.text-end.bt $5.061.139.202
            td.text-end.bt $5.264.487.756
            td.text-end.bt $5.466.730.836
            td.text-end.bt $5.676.725.892
            td.text-end.bt $5.895.814.345
          tr(style="background-color: #DFECF9")
            th.text-center Utilidad bruta
            td.text-end.bt $3.046.711.136
            td.text-end.bt $3.100.226.398
            td.text-end.bt $3.259.117.646
            td.text-end.bt $3.444.236.149
            td.text-end.bt $3.639.308.607
            td.text-end.bt $3.843.614.284
          tr(style="background-color: #E8E8E8")
            th.text-center (-) Gastos de admón. y ventas
            td.text-end.bt $1.000.000.000
            td.text-end.bt $1.032.000.000
            td.text-end.bt $1.065.024.000
            td.text-end.bt $1.096.974.720
            td.text-end.bt $1.129.883.962
            td.text-end.bt $1.163.780.480
          tr(style="background-color: #DFECF9")
            th.text-center (-) Amortización de diferidos
            td.text-end.bt $12.000.000
            td.text-end.bt $12.000.000
            td.text-end.bt $12.000.000
            td.text-end.bt $12.000.000
            td.text-end.bt $12.000.000
            td.text-end.bt
          tr(style="background-color: #E8E8E8")
            th.text-center Utilidad operativa
            td.text-end.bt $2.034.711.136
            td.text-end.bt $2.056.226.398
            td.text-end.bt $2.182.093.646
            td.text-end.bt $2.335.261.429
            td.text-end.bt $2.497.424.646
            td.text-end.bt $2.679.833.803
          tr(style="background-color: #DFECF9")
            th.text-center (-) Intereses
            td.text-end.bt $500.519.291
            td.text-end.bt $433.259.657
            td.text-end.bt $352.548.097
            td.text-end.bt $255.694.224
            td.text-end.bt $139.469.577
            td.text-end.bt
          tr(style="background-color: #E8E8E8")
            th.text-center Utilidad antes de impuestos
            td.text-end.bt $1.534.191.845
            td.text-end.bt $1.622.966.741
            td.text-end.bt $1.829.545.549
            td.text-end.bt $2.079.567.205
            td.text-end.bt $2.357.955.069
            td.text-end.bt $2.679.833.803
          tr(style="background-color: #DFECF9")
            th.text-center (-) Impuestos
            td.text-end.bt $521.625.227
            td.text-end.bt $551.808.692
            td.text-end.bt $622.045.487
            td.text-end.bt $707.052.850
            td.text-end.bt $801.704.723
            td.text-end.bt $911.143.493
          tr(style="background-color: #E8E8E8")
            th.text-center Utilidad neta
            td.text-end.bt $1.012.566.618
            td.text-end.bt $1.071.158.049
            td.text-end.bt $1.207.500.063
            td.text-end.bt $1.372.514.355
            td.text-end.bt $1.556.250.346
            td.text-end.bt $1.768.690.310
    .row.justify-content-center.mb-5
      .col-lg-8
        p.mb-4 El valor del gasto por la amortización de diferidos se calcula dividiendo el valor pagado por los estudios de factibilidad entre los años señalados por la empresa para amortizarlos:
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img29.svg', style="width: 650px").m-auto
    ul.lista-ul
      li 
        i.fas.fa-check-square(style="color: #D9A171")
        p #[b Estado de utilidades retenidas]
    .row.justify-content-center
      .col-lg-10
        table.mb-5.st
          tr
            th(colspan="7" style="background-color: #727997").text-center.text-white UTILIDADES RETENIDAS
          tr(style="background-color: #6595BF")
            th.text-white.text-center(style="background-color: #FFF")
            th.text-white.text-center.bt AÑO 1
            th.text-white.text-center.bt AÑO 2
            th.text-white.text-center.bt AÑO 3
            th.text-white.text-center.bt AÑO 4
            th.text-white.text-center.bt AÑO 5
            th.text-white.text-center.bt AÑO 6
          tr(style="background-color: #DFECF9")
            th.text-center Utilidades al inicio del año
            td.text-end.bt
            td.text-end.bt $405.026.647
            td.text-end.bt $833.489.867
            td.text-end.bt $1.316.489.892
            td.text-end.bt $1.865.495.634
            td.text-end.bt $2.487.995.772
          tr(style="background-color: #E8E8E8")
            th.text-center (+) Utilidades del presente ejercicio
            td.text-end.bt $1.012.566.618
            td.text-end.bt $1.071.158.049
            td.text-end.bt $1.207.500.063
            td.text-end.bt $1.372.514.355
            td.text-end.bt $1.556.250.346
            td.text-end.bt $1.768.690.310
          tr(style="background-color: #DFECF9")
            th.text-center (=) Utilidades disponibles para reparto
            td.text-end.bt $1.012.566.618
            td.text-end.bt $1.476.184.696
            td.text-end.bt $2.040.989.929
            td.text-end.bt $2.689.004.247
            td.text-end.bt $3.421.745.979
            td.text-end.bt $4.256.686.082
          tr(style="background-color: #E8E8E8")
            th.text-center (-) Reservas
            td.text-end.bt $101.256.662
            td.text-end.bt $107.115.805
            td.text-end.bt $120.750.006
            td.text-end.bt $137.251.436
            td.text-end.bt $155.625.035
            td.text-end.bt $176.869.031
          tr(style="background-color: #DFECF9")
            th.text-center (=) Utilidad a disposición de la asamblea
            td.text-end.bt $911.309.956
            td.text-end.bt $1.369.068.891
            td.text-end.bt $1.920.239.923
            td.text-end.bt $2.551.752.811
            td.text-end.bt $3.266.120.945
            td.text-end.bt $4.079.817.051
          tr(style="background-color: #E8E8E8")
            th.text-center (-) Dividendos decretados
            td.text-end.bt $506.283.309
            td.text-end.bt $535.579.025
            td.text-end.bt $603.750.031
            td.text-end.bt $686.257.178
            td.text-end.bt $778.125.173
            td.text-end.bt $884.345.155
          tr(style="background-color: #DFECF9")
            th.text-center (=) Total Utilidades Retenidas
            td.text-end.bt $405.026.647
            td.text-end.bt $833.489.867
            td.text-end.bt $1.316.489.892
            td.text-end.bt $1.865.495.634
            td.text-end.bt $2.487.995.772
            td.text-end.bt $3.195.471.896
    p.mb-5 Se debe recordar, que la reserva legal equivale al 10% de las utilidades netas de cada año y que de las utilidades líquidas de cada ejercicio deberá repartirse por lo menos el 50%, salvo que los asociados dispongan lo contrario, en cuyo caso, se requerirá del voto afirmativo de un número plural de asociados, que representen por lo menos el 78% de las acciones o cuotas partes de interés.
    ul.lista-ul
      li 
        i.fas.fa-check-square(style="color: #D9A171")
        p #[b Flujo de efectivo]
    p El siguiente paso es elaborar el estado de flujo de efectivo presupuestado para lo cual se debe tener en cuenta los ingresos y los egresos de dinero.
    p.mb-5 Los ingresos y los egresos de dinero tienen tres fuentes:
    figure(data-aos="fade-left").mb-5
      img(src='@/assets/curso/img30.svg', style="width: 950px").m-auto
    p ¿Que datos van al estado de flujo de efectivo?
    p.mb-5 Veamos por ejemplo cómo se reparte el valor de las ventas en los diferentes estados financieros:
    .row.justify-content-center.mb-5
      .col-lg-7
        table.st
          tr(style="background-color: #6595BF")
            th.text-white.text-center OPERACIÓN
            th.text-white.text-center.bt VALOR
            th.text-white.text-center.bt ESTADO FINANCIERO
          tr(style="background-color: #DFECF9")
            td.text-center Ventas a crédito
            td.text-center.bt $7.830.000.000
            td.text-center.bt Resultados
          tr(style="background-color: #E8E8E8")
            td.text-center Los clientes quedan debiendo 45 días
            td.text-center.bt $978.750.000
            td.text-center.bt Situación Financiera
          tr(style="background-color: #DFECF9")
            td.text-center Los clientes pagaron 320 días
            td.text-center.bt $6.851.250.000
            td.text-center.bt Flujo de Efectivo
    p.mb-5 Estado financiero de flujo de efectivo
    .row.justify-content-center
      .col-lg-10
        table.mb-5.st
          tr
            th(colspan="7" style="background-color: #727997").text-center.text-white EFECTIVO GENERADO POR LAS OPERACIONES
          tr(style="background-color: #6595BF")
            th.text-white.text-center(style="background-color: #FFF")
            th.text-white.text-center.bt AÑO 1
            th.text-white.text-center.bt AÑO 2
            th.text-white.text-center.bt AÑO 3
            th.text-white.text-center.bt AÑO 4
            th.text-white.text-center.bt AÑO 5
            th.text-white.text-center.bt AÑO 6
          tr(style="background-color: #DFECF9")
            th.text-center Recaudo de cartera
            td.text-end.bt $6.851.250.000
            td.text-end.bt $8.119.944.900
            td.text-end.bt $8.478.325.427
            td.text-end.bt $8.862.546.787
            td.text-end.bt $9.265.401.060
            td.text-end.bt $9.686.504.362
          tr(style="background-color: #E8E8E8")
            th.text-center Egresos operativos
            td.text-end.bt
            td.text-end.bt
            td.text-end.bt
            td.text-end.bt
            td.text-end.bt
            td.text-end.bt
          tr(style="background-color: #DFECF9")
            th.text-center Pagos de materia prima
            td.text-end.bt $1.634.168.750
            td.text-end.bt $1.837.671.267
            td.text-end.bt $1.884.284.387
            td.text-end.bt $1.970.976.026
            td.text-end.bt $2.060.673.464
            td.text-end.bt $2.154.321.045
          tr(style="background-color: #E8E8E8")
            th.text-center Sueldos y salarios
            td.text-end.bt $1.572.780.000
            td.text-end.bt $1.519.847.040
            td.text-end.bt $1.583.733.289
            td.text-end.bt $1.651.122.470
            td.text-end.bt $1.721.107.043
            td.text-end.bt $1.794.083.989
          tr(style="background-color: #DFECF9")
            th.text-center Prestaciones sociales
            td.text-end.bt $629.112.000
            td.text-end.bt $765.216.816
            td.text-end.bt $785.478.020
            td.text-end.bt $818.822.317
            td.text-end.bt $853.555.064
            td.text-end.bt $889.744.300
          tr(style="background-color: #E8E8E8")
            th.text-center Arrendamiento
            td.text-end.bt $180.000.000
            td.text-end.bt $185.760.000
            td.text-end.bt $191.704.320
            td.text-end.bt $197.455.450
            td.text-end.bt $203.379.113
            td.text-end.bt $209.480.486
          tr(style="background-color: #DFECF9")
            th.text-center Mantenimiento
            td.text-end.bt $60.000.000
            td.text-end.bt $61.920.000
            td.text-end.bt $63.901.440
            td.text-end.bt $65.818.483
            td.text-end.bt $67.793.038
            td.text-end.bt $69.826.829
          tr(style="background-color: #E8E8E8")
            th.text-center Otros costos indirectos
            td.text-end.bt $240.000.000
            td.text-end.bt $247.680.000
            td.text-end.bt $255.605.760
            td.text-end.bt $263.273.933
            td.text-end.bt $271.172.151
            td.text-end.bt $279.307.315
          tr(style="background-color: #DFECF9")
            th.text-center Gastos de administración y ventas
            td.text-end.bt $1.000.000.000
            td.text-end.bt $1.032.000.000
            td.text-end.bt $1.065.024.000
            td.text-end.bt $1.096.974.720
            td.text-end.bt $1.129.883.962
            td.text-end.bt $1.163.780.480
          tr(style="background-color: #E8E8E8")
            th.text-center Pago de impuestos
            td.text-end.bt
            td.text-end.bt $521.625.227
            td.text-end.bt $551.808.692
            td.text-end.bt $622.045.487
            td.text-end.bt $707.052.850
            td.text-end.bt $801.704.723
          tr(style="background-color: #DFECF9")
            th.text-center Total egresos operativos
            td.text-end.bt $5.317.060.750
            td.text-end.bt $6.171.720.350
            td.text-end.bt $6.381.539.908
            td.text-end.bt $6.686.488.884
            td.text-end.bt $7.014.616.684
            td.text-end.bt $7.362.249.168
          tr(style="background-color: #E8E8E8")
            th.text-center Efectivo generado por las operaciones
            td.text-end.bt $1.534.189.250
            td.text-end.bt $1.948.224.550
            td.text-end.bt $2.096.785.519
            td.text-end.bt $2.176.057.903
            td.text-end.bt $2.250.784.375
            td.text-end.bt $2.324.255.194
    p.mb-5 Más: efectivo que proveerán las actividades de financiación.
    table.mb-5.st
      tr(style="background-color: #6595BF")
        th.text-white.text-center(style="background-color: #FFF")
        th.text-white.text-center.bt INICIO AÑO 1
        th.text-white.text-center.bt AÑO 1
        th.text-white.text-center.bt AÑO 2
        th.text-white.text-center.bt AÑO 3
        th.text-white.text-center.bt AÑO 4
        th.text-white.text-center.bt AÑO 5
        th.text-white.text-center AÑO 6
      tr(style="background-color: #DFECF9")
        th.text-center Aportes de socios
        td.text-end.bt $3.753.894.685
        td.text-end.bt
        td.text-end.bt
        td.text-end.bt
        td.text-end.bt
        td.text-end.bt
        td.text-end.bt
      tr(style="background-color: #E8E8E8")
        th.text-center (-) Pago de dividendos
        td.text-end.bt
        td.text-end.bt
        td.text-end.bt $506.283.309
        td.text-end.bt $535.579.025
        td.text-end.bt $603.750.031
        td.text-end.bt $686.257.178
        td.text-end.bt $778.125.173
      tr(style="background-color: #DFECF9")
        th.text-center Préstamos bancarios
        td.text-end.bt $2.502.596.457
        td.text-end.bt
        td.text-end.bt
        td.text-end.bt
        td.text-end.bt
        td.text-end.bt
        td.text-end.bt
      tr(style="background-color: #E8E8E8")
        th.text-center (-) Abono a préstamo
        td.text-end.bt
        td.text-end.bt $336.298.169
        td.text-end.bt $403.557.803
        td.text-end.bt $484.269.364
        td.text-end.bt $581.123.237
        td.text-end.bt $697.347.884
        td.text-end.bt
      tr(style="background-color: #DFECF9")
        th.text-center (-) Interés
        td.text-end.bt
        td.text-end.bt $500.519.291
        td.text-end.bt $433.259.657
        td.text-end.bt $352.548.097
        td.text-end.bt $255.694.224
        td.text-end.bt $139.469.577
        td.text-end.bt
      tr(style="background-color: #E8E8E8")
        th.text-center Efectivo provisto actividades de financiación
        td.text-end.bt $6.256.491.142
        td.text-end(style="color: #B80202").bt $836.817.461
        td.text-end(style="color: #B80202").bt $1.343.100.769
        td.text-end(style="color: #B80202").bt $1.372.396.485
        td.text-end(style="color: #B80202").bt $1.440.567.492
        td.text-end(style="color: #B80202").bt $1.523.074.638
        td.text-end(style="color: #B80202").bt $778.125.173
    p.mb-5 Menos: efectivo que demandarán las actividades de inversión.
    table.mb-5.st
      tr(style="background-color: #6595BF")
        th.text-white.text-center(style="background-color: #FFF")
        th.text-white.text-center.bt INICIO AÑO 1
        th.text-white.text-center.bt AÑO 1
        th.text-white.text-center.bt AÑO 2
        th.text-white.text-center.bt AÑO 3
        th.text-white.text-center.bt AÑO 4
        th.text-white.text-center.bt AÑO 5
        th.text-white.text-center.bt AÑO 6
      tr(style="background-color: #DFECF9")
        th.text-center Compra de maquinaria
        td.text-end.bt $5.000.000.000
        td.text-end.bt
        td.text-end.bt
        td.text-end.bt
        td.text-end.bt
        td.text-end.bt
        td.text-end.bt
      tr(style="background-color: #E8E8E8")
        th.text-center Estudio de factibilidad
        td.text-end.bt $60.000.000
        td.text-end.bt
        td.text-end.bt
        td.text-end.bt
        td.text-end.bt
        td.text-end.bt
        td.text-end.bt
      tr(style="background-color: #6595BF")
        th.text-center Efectivo demandado actividades de inversión
        td.text-end.bt $5.060.000.000
        td.text-end.bt
        td.text-end.bt
        td.text-end.bt
        td.text-end.bt
        td.text-end.bt
        td.text-end.bt
      tr(style="background-color: #E8E8E8")
        th.text-center Aumento de efectivo
        td.text-end.bt $1.196.491.142
        td.text-end.bt $697.371.789
        td.text-end.bt $605.123.781
        td.text-end.bt $724.389.034
        td.text-end.bt $735.490.411
        td.text-end.bt $727.709.737
        td.text-end.bt $1.546.130.021
      tr(style="background-color: #DFECF9")
        th.text-center Más: efectivo inicial
        td.text-end.bt
        td.text-end.bt $1.196.491.142
        td.text-end.bt $1.893.862.931
        td.text-end.bt $2.498.986.712
        td.text-end.bt $3.223.375.746
        td.text-end.bt $3.958.866.156
        td.text-end.bt $4.686.575.894
      tr(style="background-color: #6595BF")
        th.text-center Efectivo final
        td.text-end.bt $1.196.491.142
        td.text-end.bt $1.893.862.931
        td.text-end.bt $2.498.986.712
        td.text-end.bt $3.223.375.746
        td.text-end.bt 3.958.866.156
        td.text-end.bt $4.686.575.894
        td.text-end.bt $6.232.705.914
    p Para el primer año de actividades no hay efectivo inicial.
    p El aumento del efectivo es la sumatoria del efectivo generado por la operación más el efectivo provisto por las actividades de financiación menos el efectivo que demandan las actividades de inversión.
    p.mb-5 El valor del efectivo final se lleva al estado de Situación Financiera en la cuenta de efectivo.
    ul.lista-ul
      li 
        i.fas.fa-check-square(style="color: #D9A171")
        p Finalmente, ya está todo listo para elaborar el estado de situación financiera (Balance general) proyectado, que resume el movimiento y saldo de cada una de las operaciones efectuadas por la empresa.
    .row
      .col-12
        table.st
          tr
            th(colspan="8" style="background-color: #727997").text-center.text-white ESTADO DE SITUACIÓN FINANCIERA A 31 DE DICIEMBRE
          tr(style="background-color: #6595BF")
            th.text-white.text-center(style="background-color: #FFF")
            th.text-white.text-center.bt INICIO DEL AÑO 1
            th.text-white.text-center.bt AÑO 1
            th.text-white.text-center.bt AÑO 2
            th.text-white.text-center.bt AÑO 3
            th.text-white.text-center.bt AÑO 4
            th.text-white.text-center.bt AÑO 5
            th.text-white.text-center.bt AÑO 6
          tr(style="background-color: #DFECF9")
            th.text-center Activos
            td.text-end.bt
            td.text-end.bt
            td.text-end.bt
            td.text-end.bt
            td.text-end.bt
            td.text-end.bt
            td.text-end.bt
          tr(style="background-color: #E8E8E8")
            th.text-center Efectivo
            td.text-end.bt $1.196.491.142
            td.text-end.bt $1.893.862.931
            td.text-end.bt $2.498.986.712
            td.text-end.bt $3.223.375.746
            td.text-end.bt $3.958.866.156
            td.text-end.bt $4.686.575.894
            td.text-end.bt $6.232.705.914
          tr(style="background-color: #DFECF9")
            th.text-center Cuentas por cobrar
            td.text-end.bt
            td.text-end.bt $978.750.000
            td.text-end.bt $1.020.170.700
            td.text-end.bt $1.065.450.675
            td.text-end.bt $1.113.870.873
            td.text-end.bt $1.164.504.312
            td.text-end.bt $1.217.428.579
          tr(style="background-color: #E8E8E8")
            th.text-center Materias primas
            td.text-end.bt
            td.text-end.bt $53.032.500
            td.text-end.bt $50.426.960
            td.text-end.bt $52.676.087
            td.text-end.bt $55.084.586
            td.text-end.bt $57.589.244
            td.text-end.bt $60.206.244
          tr(style="background-color: #DFECF9")
            th.text-center Productos en proceso
            td.text-end.bt
            td.text-end.bt $199.331.193
            td.text-end.bt $211.916.114
            td.text-end.bt $219.864.233
            td.text-end.bt $228.253.436
            td.text-end.bt $237.061.932
            td.text-end.bt $246.199.069
          tr(style="background-color: #E8E8E8")
            th.text-center Productos terminados
            td.text-end.bt
            td.text-end.bt $265.719.943
            td.text-end.bt $282.496.941
            td.text-end.bt $293.211.653
            td.text-end.bt $304.368.264
            td.text-end.bt $316.051.526
            td.text-end.bt $328.265.425
          tr(style="background-color: #DFECF9")
            th.text-center Total activos corrientes
            td.text-end.bt $1.196.491.142
            td.text-end.bt $3.390.696.568
            td.text-end.bt $4.063.997.427
            td.text-end.bt $4.854.578.394
            td.text-end.bt $5.660.443.315
            td.text-end.bt $6.461.782.907
            td.text-end.bt $8.084.805.230
          tr(style="background-color: #E8E8E8")
            th.text-center Cargos diferidos
            td.text-end.bt $60.000.000
            td.text-end.bt $48.000.000
            td.text-end.bt $36.000.000
            td.text-end.bt $24.000.000
            td.text-end.bt $12.000.000
            td.text-end.bt
            td.text-end.bt
          tr(style="background-color: #DFECF9")
            th.text-center Maquinaria
            td.text-end.bt $5.000.000.000
            td.text-end.bt $5.000.000.000
            td.text-end.bt $5.000.000.000
            td.text-end.bt $5.000.000.000
            td.text-end.bt $5.000.000.000
            td.text-end.bt $5.000.000.000
            td.text-end.bt $5.000.000.000
          tr(style="background-color: #E8E8E8")
            th.text-center Depreciación acumulada
            td.text-end.bt
            td.text-end.bt $500.000.000
            td.text-end.bt $1.000.000.000
            td.text-end.bt $1.500.000.000
            td.text-end.bt $2.000.000.000
            td.text-end.bt $2.500.000.000
            td.text-end.bt $3.000.000.000
          tr(style="background-color: #DFECF9")
            th.text-center Total activos no corrientes
            td.text-end.bt $5.060.000.000
            td.text-end.bt $4.548.000.000
            td.text-end.bt $4.036.000.000
            td.text-end.bt $3.524.000.000
            td.text-end.bt $3.012.000.000
            td.text-end.bt $2.500.000.000
            td.text-end.bt $2.000.000.000
          tr(style="background-color: #6595BF")
            th.text-center Total activos
            td.text-end.bt $6.256.491.142
            td.text-end.bt $7.938.696.568
            td.text-end.bt $8.099.997.427
            td.text-end.bt $8.378.578.394
            td.text-end.bt $8.672.443.315
            td.text-end.bt $8.961.782.907
            td.text-end.bt $10.084.805.230
          tr(style="background-color: #DFECF9")
            th.text-center Pasivos
            td.text-end.bt
            td.text-end.bt
            td.text-end.bt
            td.text-end.bt
            td.text-end.bt
            td.text-end.bt
            td.text-end.bt
          tr(style="background-color: #E8E8E8")
            th.text-center Proveedores
            td.text-end.bt
            td.text-end.bt $327.033.750
            td.text-end.bt $302.127.503
            td.text-end.bt $316.431.377
            td.text-end.bt $330.908.930
            td.text-end.bt $345.952.907
            td.text-end.bt $361.673.628
          tr(style="background-color: #DFECF9")
            th.text-center Obligaciones financieras
            td.text-end.bt $2.502.596.457
            td.text-end.bt $2.166.298.287
            td.text-end.bt $1.762.740.484
            td.text-end.bt $1.278.471.120
            td.text-end.bt $697.347.884
            td.text-end.bt
            td.text-end.bt
          tr(style="background-color: #E8E8E8")
            th.text-center Impuestos por pagar
            td.text-end.bt
            td.text-end.bt $521.625.227
            td.text-end.bt $551.808.692
            td.text-end.bt $622.045.487
            td.text-end.bt $707.052.850
            td.text-end.bt $801.704.723
            td.text-end.bt $911.143.493
          tr(style="background-color: #DFECF9")
            th.text-center Dividendos por pagar
            td.text-end.bt
            td.text-end.bt $506.283.309
            td.text-end.bt $535.579.025
            td.text-end.bt $603.750.031
            td.text-end.bt $686.257.178
            td.text-end.bt $778.125.173
            td.text-end.bt $884.345.155
          tr(style="background-color: #E8E8E8")
            th.text-center Prestaciones
            td.text-end.bt
            td.text-end.bt $157.278.000
            td.text-end.bt $151.984.704
            td.text-end.bt $158.373.329
            td.text-end.bt $165.112.247
            td.text-end.bt $172.110.704
            td.text-end.bt $179.408.399
          tr(style="background-color: #6595BF")
            th.text-center Total pasivos
            td.text-end.bt $2.502.596.457
            td.text-end.bt $3.678.518.573
            td.text-end.bt $3.304.240.408
            td.text-end.bt $2.979.071.344
            td.text-end.bt $2.586.679.089
            td.text-end.bt $2.097.893.507
            td.text-end.bt $2.336.570.675
          tr(style="background-color: #E8E8E8")
            th.text-center Patrimonio
            td.text-end.bt
            td.text-end.bt
            td.text-end.bt
            td.text-end.bt
            td.text-end.bt
            td.text-end.bt
            td.text-end.bt
          tr(style="background-color: #DFECF9")
            th.text-center Capital
            td.text-end.bt $3.753.894.685
            td.text-end.bt $3.753.894.685
            td.text-end.bt $3.753.894.685
            td.text-end.bt $3.753.894.685
            td.text-end.bt $3.753.894.685
            td.text-end.bt $3.753.894.685
            td.text-end.bt $3.753.894.685
          tr(style="background-color: #E8E8E8")
            th.text-center Reservas
            td.text-end.bt
            td.text-end.bt $101.256.662
            td.text-end.bt $208.372.467
            td.text-end.bt $329.122.473
            td.text-end.bt $466.373.908
            td.text-end.bt $621.998.943
            td.text-end.bt $798.867.974
          tr(style="background-color: #DFECF9")
            th.text-center Utilidades Retenidas
            td.text-end.bt
            td.text-end.bt $405.026.647
            td.text-end.bt $833.489.867
            td.text-end.bt $1.316.489.892
            td.text-end.bt $1.865.495.634
            td.text-end.bt $2.487.995.772
            td.text-end.bt $3.195.471.896
          tr(style="background-color: #6595BF")
            th.text-center Total patrimonio
            td.text-end.bt $3.753.894.685
            td.text-end.bt $4.260.177.994
            td.text-end.bt $4.795.757.019
            td.text-end.bt $5.399.507.050
            td.text-end.bt $6.085.764.227
            td.text-end.bt $6.863.889.400
            td.text-end.bt $7.748.235.555
          tr(style="background-color: #6595BF")
            th.text-center Total pasivos y patrimonio
            td.text-end.bt $6.256.491.142
            td.text-end.bt $7.938.696.568
            td.text-end.bt $8.099.997.427
            td.text-end.bt $8.378.578.394
            td.text-end.bt $8.672.443.315
            td.text-end.bt $8.961.782.907
            td.text-end.bt $10.084.805.230

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

<style lang="sass" scoped></style>
