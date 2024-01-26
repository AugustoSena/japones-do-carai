var express = require("express");
var app = express();
app.listen(3000, () => {
    console.log("Server running on port 3000");
});



app.get("/", (req, res, next) => {


    characteres = [
        {
            regex: /[?]/g,
            replace: 't'
        },
        {
            regex: /[a]/g,
            replace: 'a'
        }
    ];

    texto = "teste de exclusão de ? e a";

    for (const e of characteres) {
        texto = texto.replace(e.regex, e.replace)
    }


    res.json({ texto })
});


