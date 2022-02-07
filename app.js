//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

app.get("/", function(req, res) {
  res.locals.title = "Adel SANAA - Home";
  res.redirect("/en/home");
});

app.get("/fr/", function(req, res) {
  res.locals.title = "Adel SANAA - Home";
  res.redirect("/fr/home");
});

// app.get("/about", function(req, res) {
//   res.locals.title = "Adel SANAA - About";
//   res.render("about.ejs");
// });
//
// app.get("/bigprojets-video", function(req, res) {
//   res.locals.title = "Adel SANAA - Big Projets™ : VIDÉOS";
//   res.render("bigprojets-video.ejs");
// });
//
// app.get("/bigprojets", function(req, res) {
//   res.locals.title = "Adel SANAA - Big Projets™";
//   res.render("bigprojets.ejs");
// });
//
// app.get("/bigprojets-web", function(req, res) {
//   res.locals.title = "Adel SANAA - Big Projets™ : WEB";
//   res.render("bigprojets-web.ejs");
// });
//
// app.get("/contact", function(req, res) {
//   res.locals.title = "Adel SANAA - Contact";
//   res.render("contact.ejs");
// });

// -------------------------------------------------------------------------- //
  //LANGUE ENGLISH

  //Big Projets WEB
app.get("/en/bigprojets-web/:projet", function(req, res) {

  let requestedTitle = _.toLower(req.params.projet);

  if (requestedTitle === "makyma") {
    res.locals.title = "Adel SANAA - Makyma";
    res.render("en/bigprojets-makyma.ejs");
  }

  if (requestedTitle === "speed-moto-services") {
    res.locals.title = "Adel SANAA - Speed Moto Services";
    res.render("en/bigprojets-speedmotoservices.ejs");
  }

  if (requestedTitle === "l-ecopin") {
    res.locals.title = "Adel SANAA - L'Écopin";
    res.render("en/bigprojets-lecopin.ejs");
  }

  if (requestedTitle === "culture-campus") {
    res.locals.title = "Adel SANAA - Culture Campus";
    res.render("en/bigprojets-culturecampus.ejs");
  }

  if (requestedTitle === "nike-snkrs") {
    res.locals.title = "Adel SANAA - Nike SNKRS";
    res.render("en/bigprojets-nikesnkrs.ejs");
  }

  if (requestedTitle === "covcom") {
    res.locals.title = "Adel SANAA - Covcom";
    res.render("en/bigprojets-covcom.ejs");
  }

  if (requestedTitle === "galaxygenerator") {
    res.locals.title = "Adel SANAA - Galaxy generator";
    res.render("en/bigprojets-galaxygenerator.ejs");
  }

  if (requestedTitle === "musee-decouleur") {
    res.locals.title = "Adel SANAA - Musée Dé-Couleur";
    res.render("en/bigprojets-decouleur.ejs");
  }
});

  //Big Projets VIDEO
app.get("/en/bigprojets-video/:projet", function(req, res) {

  let requestedTitle = _.toLower(req.params.projet);

  //Projet : Adidas
  if (requestedTitle === "adidas") {
    res.locals.title = "Adel SANAA - Adidas";
    res.render("en/bigprojets-adidas.ejs");
  }

  //Projet : Pas de love
  if (requestedTitle === "pas-de-love") {
    res.locals.title = "Adel SANAA - Pas de love";
    res.render("en/bigprojets-pasdelove.ejs");
  }

  //Projet : Dans le complot
  if (requestedTitle === "dans-le-complot") {
    res.locals.title = "Adel SANAA - Dans le complot";
    res.render("en/bigprojets-danslecomplot.ejs");
  }

  //Projet : Cauchemar
  if (requestedTitle === "cauchemar") {
    res.locals.title = "Adel SANAA - Cauchemar";
    res.render("en/bigprojets-cauchemar.ejs");
  }

});

// +++++++++++++++++ FR ++++++++++++++++ //
//Big Projets WEB
app.get("/fr/bigprojets-web/:projet", function(req, res) {

let requestedTitle = _.toLower(req.params.projet);

if (requestedTitle === "makyma") {
  res.locals.title = "Adel SANAA - Makyma";
  res.render("fr/fr-bigprojets-makyma.ejs");
}

if (requestedTitle === "speed-moto-services") {
  res.locals.title = "Adel SANAA - Speed Moto Services";
  res.render("fr/fr-bigprojets-speedmotoservices.ejs");
}

if (requestedTitle === "l-ecopin") {
  res.locals.title = "Adel SANAA - L'Écopin";
  res.render("fr/fr-bigprojets-lecopin.ejs");
}

if (requestedTitle === "culture-campus") {
  res.locals.title = "Adel SANAA - Culture Campus";
  res.render("fr/fr-bigprojets-culturecampus.ejs");
}

if (requestedTitle === "nike-snkrs") {
  res.locals.title = "Adel SANAA - Nike SNKRS";
  res.render("fr/fr-bigprojets-nikesnkrs.ejs");
}


});

//Big Projets VIDEO
app.get("/fr/bigprojets-video/:projet", function(req, res) {

let requestedTitle = _.toLower(req.params.projet);

//Projet : Adidas
if (requestedTitle === "adidas") {
  res.locals.title = "Adel SANAA - Adidas";
  res.render("fr/fr-bigprojets-adidas.ejs");
}

//Projet : Pas de love
if (requestedTitle === "pas-de-love") {
  res.locals.title = "Adel SANAA - Pas de love";
  res.render("fr/fr-bigprojets-pasdelove.ejs");
}

//Projet : Dans le complot
if (requestedTitle === "dans-le-complot") {
  res.locals.title = "Adel SANAA - Dans le complot";
  res.render("fr/fr-bigprojets-danslecomplot.ejs");
}

//Projet : Cauchemar
if (requestedTitle === "cauchemar") {
  res.locals.title = "Adel SANAA - Cauchemar";
  res.render("fr/fr-bigprojets-cauchemar.ejs");
}

});

//LANGUE, PAGE ROUTE
app.get("/:language/:page/", function(req, res) {


  let requestedLanguage = _.toLower(req.params.language);
  let requestedPage = _.toLower(req.params.page);


  if (requestedLanguage === "en") {

    // Home
    if (requestedPage === "home") {
      res.locals.title = "Adel SANAA - Home";
      res.render("en/index.ejs");
    }

    // Contact
    if (requestedPage === "contact") {
      res.locals.title = "Adel SANAA - Contact";
      res.render("en/contact.ejs");
    }


    // About
    if (requestedPage === "about") {
      res.locals.title = "Adel SANAA - About";
      res.render("en/about.ejs");
    }

    // Big Projets
    if (requestedPage === "bigprojets") {
      res.locals.title = "Adel SANAA - Big Projets™";
      res.render("en/bigprojets.ejs");
    }

    //Big Projets - Vidéos
    if (requestedPage === "bigprojets-video") {
      res.locals.title = "Adel SANAA - Big Projets™ : VIDÉOS";
      res.render("en/bigprojets-video.ejs");

    }

    //Big Projets - Web
    if (requestedPage === "bigprojets-web") {
      res.locals.title = "Adel SANAA - Big Projets™ : WEB";
      res.render("en/bigprojets-web.ejs");
    }

// -------------------------------------------------------------------------- //
  //LANGUE FR
  } else if (requestedLanguage === "fr") {

    //Fr - Home
    if (requestedPage === "home") {
      res.locals.title = "Adel SANAA - Home";
      res.render("fr/fr-index.ejs");
    }

    //Fr - About
    if (requestedPage === "about") {
      res.locals.title = "Adel SANAA - About";
      res.render("fr/fr-about.ejs");
    }

    //Fr - Big Projets
    if (requestedPage === "bigprojets") {
      res.locals.title = "Adel SANAA - Big Projets™";
      res.render("fr/fr-bigprojets.ejs");
    }

    //Fr - Big Projets - Vidéos
    if (requestedPage === "bigprojets-video") {
      res.locals.title = "Adel SANAA - Big Projets™ : VIDÉOS";
      res.render("fr/fr-bigprojets-video.ejs");
    }
    //Fr - Big Projets - Web
    if (requestedPage === "bigprojets-web") {
      res.locals.title = "Adel SANAA - Big Projets™ : WEB";
      res.render("fr/fr-bigprojets-web.ejs");
    }

    //Fr - Contact
    if (requestedPage === "contact") {
      res.locals.title = "Adel SANAA - Me contacter";
      res.render("fr/fr-contact.ejs");
    }

  }
});


app.use(function(req, res, next) {
  res.status(404);
  // respond with html page
  if (req.accepts('html')) {
    res.locals.title = "Adel SANAA - Error 404";
    res.render('error404', {
      url: req.url
    });
    return;
  }

  // respond with json
  if (req.accepts('json')) {
    res.send({
      error: 'Not found'
    });
    return;
  }
  // default to plain-text. send()
  res.type('txt').send('Not found');
});

const port = process.env.PORT || 4000;

app.listen(port, function() {
  console.log("Server started successfully.");

});
