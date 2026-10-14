let express = require('express');
let app = express();

let derulos = {
    "data": [
        {
            name: "Whatcha Say",
            year: "2009",
            timestamp: "0:11-0:12",
            lyrics: "Jasahn Deruloh"
        },
        {
            name: "In My Head",
            year: "2009",
            timestamp: "0:03-0:05",
            lyrics: "JaySun DeRulahhh"
        },
        {
            name: "Encore",
            year: "2010",
            timestamp: "0:14-0:15",
            lyrics: "JasUN DeRULOE"
        },
        {
            name: "Don't Wanna Go Home",
            year: "2011",
            timestamp: "0:03-0:04",
            lyrics: "jAsonnDeruULOuh"
        },
        {
            name: "1,2,3 ft. Jason Derulo & De La Ghetto",
            year: "2018",
            timestamp: "1:27-1:28",
            lyrics: "jjjaasin derulo hOOO"
        },
        {
            name: "Savage Love (Laxed - Siren Beat) with Jawsh 685",
            year: "2020",
            timestamp: "0:04-0:05",
            lyrics: "JaSinderulohh"
        },
        {
            name: "Cono",
            year: "2020",
            timestamp: "0:03-0:05",
            lyrics: "jAsiiii-deruloeee"
        },
        {
            name: "Lifestyle ft. Adam Levine",
            year: "2021",
            timestamp: "0:02-0:04",
            lyrics: "Uh, jaSOn deruLOUH"
        },
        {
            name: "Acapulco",
            year: "2021",
            timestamp: "0:14-0:15",
            lyrics: "jhAsiN derulouhhe"
        },
        {
            name: "Saturday/Sunday ft. David Guetta",
            year: "2023",
            timestamp: "0:03-0:04",
            lyrics: "chAsinderulo-OH"
        },
        {
            name: "Down",
            year: "2024",
            timestamp: "0:05-0:07",
            lyrics: "JAsiiin derUloehe, hyaYY"
        }
        
    ]
}

app.get('/about',(request,response)=>{
    response.send("Jason Joel Desrouleaux, known professionally as Jason Derulo, is an American singer, songwriter, and dancer. Since the start of his solo recording career in 2009, he has sold over 250 million singles worldwide and has achieved fourteen platinum singles in the US. His signature melodic intro tag—where he sings his name—became one of the most recognizable music tropes of the 2010s.");
})

app.get('/derulos',(request,response)=>{
    response.json(derulos);
})

app.get('/derulos/:derulo',(request,response)=>{
    console.log(request.params.derulo);
    let song_name = request.params.derulo;
    let user_obj;
    for(let i=0; i<derulos.data.length; i++){
        if(song_name == derulos.data[i].name){
            user_obj = derulos.data[i];
        }
    }
    console.log(user_obj);
    if(user_obj){
        response.json(user_obj);
    } else {
        response.json({status: "derulo not found"})
    }
})




app.listen(3000, ()=>{
    console.log("app is listening at localhost: 3000");
})