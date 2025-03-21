
let divPokemon = document.querySelector("#pokemon");
let iptPokemon = document.querySelector("#iptPokemon");
let btnBuscarPokemon = document.querySelector("#btnBuscarPokemon");

function funcionMostarPokemon(){
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1302")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let urlPokemon = "";
        data.results.forEach(element => {
            if(iptPokemon.value ==element.name){
                 urlPokemon = element.url;


                fetch(urlPokemon)
                .then(response => response.json())
                .then(datosPokemon =>{
                    console.log(datosPokemon)
                    divPokemon.innerHTML += `${datosPokemon.name} , ${datosPokemon.id}`
                });
            }
        });
         
    })

    

    
    
    
    
    


}
btnBuscarPokemon.addEventListener('click',funcionMostarPokemon)
