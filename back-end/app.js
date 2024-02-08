const cors = require("cors");
const express = require("express");
const app = express();

     


//CONFIG
    //CORS Permite o acesso ao servidor de outros servidores
    app.use(cors());
    //indicar para o express ler body com json
    app.use(express.json());
  
    app.post('/test', async (req,res)=> {
       
       let texto = req.body;
       res.status(200);
       console.log(texto);
      
    });

    
    app.get('/test', async (req,res)=> {


        var kanjis = require('./kanjis.js'); //recebe o array kanjis de outro arquivo
            kanjis = kanjis.kanjis;//acessa o array no outro arquivo

        let n1= ""; 
        let n2= "";
        let n3= "";
        let n4= "";
        let n5= "";

    


       var text = "猫は鋭た嗅覚を持ち、体が非常に柔軟であるため狭い場所や高い場所にも容易に登ることができる。独立心が強く、縄張り意識が高いのも特徴で、狩猟本能が強いため、しばしば遊びながらその本能を発揮する。自分の領域を守るためのマーキング行動や、鳴き声、体の動きを使ったコミュニケーションも行う。肉食である猫は、栄養バランスの取れた食事を必要とし、人間による世話にも一定の注意を要する。定期的な健康診断、ワクチン接種、そして適切なグルーミングが飼育には必要であり、トイレトレーニングは比較的容易だが、猫は他の訓練に関しては独立した性格のため、しつけが難しいことが多い。";

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