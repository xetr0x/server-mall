

exports.index = (req, res) =>{          //exporterar modulen router samt bildar en funktion med namnet index
    res.readfile('../public/home.html');            //indexcontroller respondar med att läsa in home.html filen.
    console.log('html site is live!');          //berättar om att html sidan är live
}