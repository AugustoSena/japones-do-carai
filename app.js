const express = require("express");
const app = express();



app.get("/", (req, res) => {
    res.sendFile(__dirname + "/html/index.html");  
});

app.get("/teste", (req, res) => {
    var kanjis = require('./kanjis.js'); //recebe o array kanjis de outro arquivo
        kanjis = kanjis.kanjis;//acessa o array no outro arquivo

    var n1= ""; 
    var n2= "";
    var n3= "";
    var n4= "";
    var n5= "";
    
    var text = "texto de teste";

    const remove =  /[?あいうえおかきくけこさしすせそたちつてとなにぬねのはひふヘほまみむめもやゆよらりるれろわをんアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンぁぃぅぇぉゃゅょァィゥェォャュョっッがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポー。、…！0123456789/":!,';~](\r\n|\n|\r)/gm;  
    newText = text.replace(remove,''); //pega o texto e remove todos os caracteres listados na variavel remove


    for(const charactere of kanjis){
        const regex = new RegExp(charactere.kanji,"g");
        const matchRegex = newText.match(regex)
            if(matchRegex){          
                charactere.level == 1 ? n1++ : '';
                charactere.level == 2 ? n2++ : '';
                charactere.level == 3 ? n3++ : '';
                charactere.level == 4 ? n4++ : '';
                charactere.level == 5 ? n5++ : '';
            }
    };
    res.json({
        newText,
        n1,
        n2,
        n3,
        n4,
        n5
    })

});


app.listen(3000, () => {
    console.log("Server running on port 3000");
});