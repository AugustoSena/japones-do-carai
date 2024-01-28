const express = require("express");
const app = express();
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
var n1 = 0;
var n2 = 0;
var n3 = 0;
var n4 = 0;
var n5 = 0;

var bancoTemp = [	
	//Kanjis N5
	["日","5"],
	//Kanjis N4
	["会","4"],
	//Kanjis N3
	["政","3"],
	//Kanjis N2
	["党","2"],
	//Kanjis N1
	["氏","1"]
];




app.get("/", (req, res, next) => {


  characteres = [
        {
            regex: /[?]/g,
            replace: '2'
        },
        {
            regex: /[a]/g,
            replace: '3'
        }
    ];
    

    texto = "teste de exclusão de ? e a 会党";

    for (const e of characteres) {
        texto = texto.replace(e.regex, e.replace)
    }
    //res.json({ texto })
    res.json({ texto })
    txtArray = texto.split(''); //transforma string em array

    txtArray.forEach((caracter)=>{
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

    console.log(n1);
    console.log(n2);
    console.log(n3);
    console.log(n4);
    console.log(n5);
    console.log(aux); 
});



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