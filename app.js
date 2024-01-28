const express = require("express");
const app = express();
app.listen(3000, () => {
    console.log("Server running on port 3000");
});


var kanjis = [	
	//Kanjis N5
        {
            kanji:"日",
            level:"5"
        },
        {
            kanji:"会",
            level:"4"
        },
        {
            kanji:"政",
            level:"3"
        },
        {
            kanji:"党",
            level:"2"
        },
        {
            kanji:"氏",
            level:"1"
        }
];

const characteres = [
    {
        regex: /[?]/g,
        replace: '2'
    },
    {
        regex: /[a]/g,
        replace: '3'
    }
];




app.get("/", (req, res, next) => {
    var level = 0

    texto = "日 teste de exclusão de ? e a 日 党";

    for (const e of characteres) {
        texto = texto.replace(e.regex, e.replace)
    }


    for(const charactere of kanjis){
        const matchRegex = texto.match(charactere.kanji)
            if(matchRegex){
                level++
            }
    }

    res.json({
        texto,
        level
    })

});



//codigo do wesley 
/*     txtArray.forEach((caracter)=>{
        for(var lin = 0 ; lin < bancoTemp.length; lin++){
            for(var col = 0 ; col < 2 ; col++){

                if (caracter == bancoTemp[lin][col]) {
                    
                    for ( i = 1 ; i < 6 ; i++) {
                        if (bancoTemp[lin][col+1] == i) {
                        
                            n+i++;
                           
                        }  
                       
                    }
                }
                console.log(bancoTemp[lin][col]);
            }
        }
        
    });
 */
/*     console.log(n1);
    console.log(n2);
    console.log(n3);
    console.log(n4);
    console.log(n5);
    console.log(aux);  */




 //res.json({ texto })

   // console.log(texto)
    
   // txtArray = texto.split(''); //transforma string em array
   /* txtArray.forEach((caracter)=>{
            for(var lin = 0 ; lin < bancoTemp.length; lin++){
                for(var col = 0 ; col < 2 ; col++){
    
                    if (caracter == bancoTemp[lin][col]) {
                        if (bancoTemp[lin][col+1] == 1) {
                            n1++;
                        }
                        if (bancoTemp[lin][col+1] == 2) {
                            n2++;
                        }
                        if (bancoTemp[lin][col+1] == 3) {
                            n3++;
                        }
                        if (bancoTemp[lin][col+1] == 4) {
                            n4++;
                        }
                        if (bancoTemp[lin][col+1] == 5) {
                            n5++;
                        }
                        for ( i ; i < 6 ; i++) {
                            if (bancoTemp[lin][col+1] == i) {
                                n1++;
                                console.log(i);  
                            }  
                           
                        }
                    }
                    console.log(bancoTemp[lin][col]);
                }
            }
        });
       
    */