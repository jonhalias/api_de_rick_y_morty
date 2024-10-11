const getData = async () => {
    try {
        const res = await fetch("https://rickandmortyapi.com/api/character");
        const ch = await res.json();
        const personajes = ch.results;
        console.log(personajes);

        //Elements from the Html
        const li_name = document.getElementById("charac_name");
        const image = document.getElementById("charac_img");
        const p_status = document.getElementById("charac_status");
        const p_specie = document.getElementById("charac_specie");

        for (let i = 0; i <= 20; i++) {

            //Creating Elements
            const li = document.createElement("LI");
            const img = document.createElement("IMG");
            const parag_1 = document.createElement("P");
            const parag_2 = document.createElement("P");

            //Setting Attributes
            img.setAttribute("src", personajes[i].image);
            img.setAttribute("width", "100");
            img.setAttribute("height", "100");

            //Putting Content
            const content = document.createTextNode(personajes[i].name);
            const p1_status = document.createTextNode(personajes[i].status)
            const p2_specie = document.createTextNode(personajes[i].species)

            //Putting appendChild
            li.appendChild(content);
            parag_1.appendChild(p1_status);
            parag_2.appendChild(p2_specie);

            //Putting into the Html
            li_name.appendChild(li);
            image.appendChild(img);
            p_status.appendChild(parag_1);
            p_specie.appendChild(parag_2);
        }

    } catch (error) {
        console.log(error);
    }
}

getData();