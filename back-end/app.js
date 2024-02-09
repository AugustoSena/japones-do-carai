const cors = require("cors");
const express = require("express");
const app = express();

     
//CONFIG
    //CORS Permite o acesso ao servidor de outros servidores
    app.use(cors());
    //indicar para o express ler body com json
    app.use(express.json());
  

    
    app.post('/test', async (req,res)=> {

        var kanjis = require('./kanjis.js'); //recebe o array kanjis de outro arquivo
            kanjis = kanjis.kanjis;//acessa o array no outro arquivo

        let n1= ""; 
        let n2= "";
        let n3= "";
        let n4= "";
        let n5= "";   

        //req.body.texto recebe o texto vindo da textarea do html
       var text = req.body.texto;

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
        res.json([
            {
                nivel: "n1",
                quantidade: n1
            },
            {
                nivel: "n2",
                quantidade: n2
            },
            {
                nivel: "n3",
                quantidade: n3
            },
            {
                nivel: "n4",
                quantidade: n4
            },
            {
                nivel: "n5",
                quantidade: n5
            }
            
        ]);

    });
    

app.listen(4041, () => {
    console.log("Server running on port 4041");
});