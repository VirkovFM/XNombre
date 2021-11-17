$(function () {
  $("#elastic_grid_demo").elastic_grid({
    showAllText: "Todos",
    filterEffect: "popup", // moveup, scaleup, fallperspective, fly, flip, helix , popup
    hoverDirection: true,
    hoverDelay: 0,
    hoverInverse: false,
    expandingSpeed: 500,
    expandingHeight: 500,
    items: [
      {
        title: "<br>Corazón Lotería",
        description: `
                <p>
                Corazón de hoja de lata con acabados de tarjetas de lotería 
                disponible en todas las tiendas, temas de varios colores 
                </p>
                <p><h3>$245.00MXN$</h3></p>
                <div class="colores">
                <p class="text_c color_txt">Color</p> 
                <div class="colores_cards">
                    <div class="rojo card_c"></div>
                    <div class="azul card_c"></div>
                    <div class="amarillo card_c"></div>
                    <div class="rosa card_c"></div>
                </div>
                <p class="subtitulo_card text_c">20 unidades disponibles</p>
                 </div>`,
        thumbnail: ["images/small/1.jpg", "images/small/3.jpg"],
        large: ["images/large/1.png", "images/large/3.jpg"],
        img_title: [
          "Imagen Corazon "
        ],
        button_list: [
          {
            title: "Comprar",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          {
            title: "Añadir al Carrito",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          { title: "♡", url: "http://porfolio.bonchen.net/", new_window: true },
        ],
        tags: ["Corazón"],
      },
    ],
  });
});
