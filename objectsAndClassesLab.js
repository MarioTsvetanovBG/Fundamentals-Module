function personInfo(firstName, lastName, age) {
    /*    
    output
    firstName: Peter
    lastName: Pan
    age: 20
    */

    let newObject = {
        firstName: firstName,
        lastName: lastName,
        age: age,
    }


    /*
    console.log(newObject) ще върне стринг с вида:
    {firstName: 'Pesho', lastName: 'Peshov', age: '23'},
    докато ретърн връща следния формат:
    firstName: Pesho
    lastName: Peshov
    age: 23
    */
    return newObject;
}

personInfo("Pesho", "Peshov", "23")




function city(objectString) {
    //input: a function receives a single parameter – an object, containing five properties:
    //{ name, area, population, country, postcode }
    /*
    the output should be:
    name -> Sofia
    area -> 492
    population -> 1238438
    */

    for (const parameter of Object.keys(objectString)) {
        console.log(`${parameter} -> ${objectString[parameter]}`)
    }
}
city({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
});



function convertToObject(JSONtext) {
    //Write a function that receives a string in JSON format and converts it to an object.
    //input: '{"name": "George", "age": 40, "town": "Sofia"}'
    
    let jsonParsed = JSON.parse(JSONtext);
    for (let element of Object.keys(jsonParsed)) {
        console.log(`${element}: ${jsonParsed[element]}`);
    }
}
convertToObject({ "name": "George", "age": 40, "town": "Sofia" })


function convertToJSON(firstName, lastName, hairColor) {
    let obj = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor,
    }
    let jsonFormating = JSON.stringify(obj);
    console.log(jsonFormating);
}


function cats(catsArray) {
    class Cats {
        constructor(ime, vazrast) {
            this.saotvetnotoIme = ime; 
            this.saotvetnataVazrast = vazrast;
        }
        meow() {
            console.log(`${this.saotvetnotoIme}, age ${this.saotvetnataVazrast} says Meow`);
        }
    }


    for (let i = 0; i < catsArray.length; i++) {
        let catsArraySplit = catsArray[i].split(' ');
        let imeNaKotka = catsArraySplit[0];
        let vazrastNaKotka = catsArraySplit[1];
        let novaKotka = new Cats(imeNaKotka, vazrastNaKotka)
        novaKotka.meow();
    }
}
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);

function songs(array) {
    let copySongs = array.slice(0);
    let numberOfTheSong = Number(copySongs.shift());
    let typeList = copySongs.pop();

    class Songs {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
        playlist() {
            console.log(this.name)
        }
    }

    for(let i = 0; i < numberOfTheSong; i++) {
        let newSong = copySongs[i].split('_'); 
        let typeOfSong = newSong[0];
        let nameOfSong = newSong[1];
        let timeOfSong = newSong[2];
        let songGo = new Songs(typeOfSong, nameOfSong, timeOfSong);
        if (typeList === "all") {
            songGo.playlist();
        } else if (typeOfSong === typeList) {
            songGo.playlist();
        } else {
            continue;
        }
    }
}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    )