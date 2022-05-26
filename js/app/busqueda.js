const loadFlags = async () => {

    try {
        const answer = await fetch('https://restcountries.com/v2/all');
    
        console.log(answer);
        if(answer.status === 200) {
            const datos = await respuesta.json(); //accede a la informacion json que provee la api, es async
            console.log(datos.title);  
        } else if (answer.status === 401) {
            console.log("something went wrong");
        } else if (answer.status === 404) {
            console.log("The country you searched for doesn't exist");
        } else {
            console.log("There is an error but we don't know what happened");
        }

    } catch (error) {
        console.log(error);
    }

}

loadFlags();