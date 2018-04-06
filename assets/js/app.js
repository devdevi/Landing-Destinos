$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });

  $("#toggle").click(function() {
    $(this).toggleClass("on");
    $("#menu").slideToggle();
  });

  $(function () {
    $('[data-toggle="popover"]').popover()
  })
  
  $('[data-toggle="tooltip"]').tooltip();
  $.ajax({
    url:`https://api-cert.viajesfalabella.com/contents/cl/guia?slug=buzios-2`,
    method:'GET',
    success: printInfo
  })

  function printInfo(data) {
    console.log(data)
    const pais = data[0].acf.pais;
    const titulo = data[0].title.rendered
    const bajada = data[0].acf.bajada;
    const clima = data[0].acf.clima;
    const descripcion = data[0].acf.descripcion;
    const tipo_cambio = data[0].acf.tipo_cambio;
    const tipo_viajero = data[0].acf.tiṕo_viajero;
    const vacuna = data[0].acf.vacuna;
    const tips = data[0].acf.tips;
    const imperdibles = data[0].acf.imperdibles;
    const video= data[0].acf.multimedia.video;
    const docTitulo= data[0].acf.documentacion.titulo;
    const docDescrip= data[0].acf.documentacion.descripcion;
    const cambioDescrip= data[0].acf.tipo_cambio.descripcion;
    const viajeroDescrip= data[0].acf.tipo_viajero.descripcion;
    

    
    let counter1 = 0;
    for (let i= 0; i < 4; i++) {
      counter1++
      let tip = tips[i];
      const tipsNombre = tip.nombre;
      const tipsDescripcion = tip.descripcion;
      $('.carousel-item').first().append('<div class="col-md-3 tip">'+'<div class="counter">' + '0'+counter1 +'</div><h3>' + tipsNombre + '</h3><p>'+ tipsDescripcion + '</p></div>');
      console.log(tipsNombre, tipsDescripcion)
    }
    let counter2 = 4;
    for (let i = 4; i < 7; i++) {
      counter2++
      let tip = tips[i];
      const tipsNombre = tip.nombre;
      const tipsDescripcion = tip.descripcion;
      $('.carousel-item').eq(1).append('<div class="col-md-3 tip">'+'<div class="counter">' + '0'+counter2 +'</div><h3>' + tipsNombre + '</h3><p>'+ tipsDescripcion + '</p></div>');
      $('.carousel-item').eq(1).addClass('offset-md-1');
      $('.carousel-item').eq(1).css('margin-left','10em');
    }

    $('.counter').css({'margin-left': '48px', 'opacity':'0.6'});
    $('.tip h3').css('text-align','center');
    $('.tip').css('position','relative');
    $('.nombreDescrip').css('position','absolute');

    $('#descHome').append('<h3>' + pais + '</h3><h1>' + titulo + '</h1> <h2>' + bajada + '</h2>' + descripcion + '<a href="#">Ver más</a>');
    $('#clima').attr('data-content', `<div>
    <div class="row climaTooltip">
      <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <h5 class="text-left">Clima</h5>
          <hr>
      </div>
      <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <p class="text-left"> <i class="fas fa-circle"> </i> ${clima.descripcion}</p>
      </div>
      <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <p>${clima.meses[0].mes} ${clima.meses[0].minimo}/${clima.meses[0].maximo}</p>
        <p>${clima.meses[1].mes} ${clima.meses[1].minimo}/${clima.meses[1].maximo}</p>
        <p>${clima.meses[2].mes} ${clima.meses[2].minimo}/${clima.meses[2].maximo}</p>
        <p>${clima.meses[3].mes} ${clima.meses[3].minimo}/${clima.meses[3].maximo}</p>
        <p>${clima.meses[4].mes} ${clima.meses[4].minimo}/${clima.meses[4].maximo}</p>
        <p>${clima.meses[5].mes} ${clima.meses[5].minimo}/${clima.meses[5].maximo}</p>
      </div>
      <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
      <p>${clima.meses[6].mes} ${clima.meses[6].minimo}/${clima.meses[6].maximo}</p>
        <p>${clima.meses[7].mes} ${clima.meses[7].minimo}/${clima.meses[7].maximo}</p>
        <p>${clima.meses[8].mes} ${clima.meses[8].minimo}/${clima.meses[8].maximo}</p>
        <p>${clima.meses[9].mes} ${clima.meses[9].minimo}/${clima.meses[9].maximo}</p>
        <p>${clima.meses[10].mes} ${clima.meses[10].minimo}/${clima.meses[10].maximo}</p>
        <p>${clima.meses[11].mes} ${clima.meses[11].minimo}/${clima.meses[11].maximo}</p>
    </div>
  </div>`);

    $('#documento').attr('data-content', `<h5>`+ docTitulo +`</h5><p><i class="fas fa-circle"> </i> `+ docDescrip +`</p>`);

    $('#tipoCambio').attr('data-content', `<h5>Moneda de país</h5><p><i class="fas fa-circle">  </i> `+ cambioDescrip +`</p>`);

    $('#viajero').attr('data-content', `<h5>Tipo de viaje</h5><p><i class="fas fa-circle">  </i> `+ viajeroDescrip +`</p>`);



    $('#video').append('<iframe width="100%" height="315" src="https://www.youtube.com/embed/_Y-QIE6rUWE?autoplay=1&controls=0&showinfo=0&autohide=1&loop=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');

    
    console.log(tips)
    console.log(imperdibles)

    let y = 0;
    for (let y in imperdibles) {
      let pin = imperdibles[y];
      const imperdiblesNombre = pin.nombre;
      const imperdiblesDescripcion = pin.descripcion;
      const imperdiblesImage = pin.imagen;
      console.log(imperdiblesNombre)
      console.log(imperdiblesImage)
      console.log(imperdiblesDescripcion)

      $(".content").append("<div class='carousel-item item row'>" +
                       "<div class='col-6 col-sm-6 col-md-6 col-lg-6 img-sld'>" +
                       "<img src='" + imperdiblesImage + "'>" +
                       "</div>" +
                       "<div class='col-6 col-sm-6 col-md-6 col-lg-6 info'>" +
                       "<span><i class='material-icons share-icon' data-toggle='modal' data-target='impModal'>share</i></span>" +
                       "<h5>Buzios</h5>" +
                       "<h2 class= 'title-sld'>" + imperdiblesNombre + "</h2>" +
                       "<p>" + imperdiblesDescripcion + "</p>" +
                       "</div></div>")

      $(".item").first().addClass("active");
      $(".item img").css('width','100%');
      $(".img-sld").css({ 'display': 'inline-block', 'vertical-align': 'middle', 'padding':'0'});
      $(".info").css({'display':'inline-block' , 'vertical-align': 'middle' });
      $(".share-icon").css({'float':'right', 'cursor':'pointer'});
      

      $(".share-icon").click(function() {
        $('#exampleModal').modal('show')
        $(".mdl").append("<div class='modal fade' id='exampleModal' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>" +
          "<div class='modal-dialog' role='document'>" +
          "<div class='modal-content'>" +
          "<div class='modal-header'>" +
          "<h5 class='modal-title' id='exampleModalLabel'>Compartir</h5>" +
          "<button type='button' class='close' data-dismiss='modal' aria-label='Close'>" +
          "<span aria-hidden='true'>&times;</span>" +
          "</button>" +
          "</div>" +
          "<div class='modal-body share'>" +
          "<div class='row'>" +
          "<div class='col-8 col-sm-6'>" +
          "<ul>" +
          "<li class='shared'><a href=''><i class='fab fa-facebook fbook'></i> &nbsp Facebook</a></li>" +
          "<li class='shared' ><a href=''><i class='fab fa-twitter'></i> Twitter</a></li>" +
          "<li class='shared'><a href=''><i class='fab fa-whatsapp'></i> Whatsapp</a></li>" +
          "</ul>" +
          "</div>" +
          "<div class='col-4 col-sm-6'>" +
          "<ul>" +
          "<li class='shared'><a href=''><i class='fas fa-copy'></i>&nbsp Copiar Link</a></li>" +
          "<li class='shared'><a href=''><i class='fas fa-envelope'></i> Correo Electrónico</a></li>" + 
          "</ul>" +
          "</div>" +
          "</div></div></div></div>")

        $(".shared").css({ 'list-style': 'none', 'border': 'none', 'display': 'block', 'width': 'auto', 'margin': '0.5em'});
        $(".shared a").css({ 'color': 'black', 'font-size': '1em' });
        $(".shared  i").css({ 'border': '2px solid #AAAAAA', 'border-radius': '60%', 'font-size': '2em', 'padding': '5px', 'vertical-align': 'middle'})
      
      })
      
    }
  }

})