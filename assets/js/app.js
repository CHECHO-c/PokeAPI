
let divPokemon = document.querySelector("#pokemon");
let iptPokemon = document.querySelector("#iptPokemon");
let btnBuscarPokemon = document.querySelector("#btnBuscarPokemon");


    
    
    


function funcionMostarPokemon(){
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1302")
    .then(response => response.json())
    .then(data => {
        let urlPokemon = "";
        let habilidadesPokemon = "";
        let tipoPokemon ="";
        let confirmador = 1;
       
        data.results.forEach(element => {
            if( iptPokemon.value.toLowerCase() == element.name){
                 urlPokemon = element.url;

                
                fetch(urlPokemon)
                .then(response => response.json())
                .then(datosPokemon =>{

                    
                    
                    
                    datosPokemon.abilities.forEach(habilidad=>{
                        habilidadesPokemon += `${habilidad.ability.name}    `;
                    });

                    datosPokemon.types.forEach(tipo => {
                        if(datosPokemon.types.length==1){
                            tipoPokemon += `${tipo.type.name}`
                        }
                        else if(confirmador>1){
                            tipoPokemon += `${tipo.type.name}`
                        }
                        else{
                            tipoPokemon += `${tipo.type.name}/`
                        }
                        
                        confirmador++;
                        
                    });
                    let urlHabitat = datosPokemon.species.url;
                    fetch(urlHabitat)
                    .then(response => response.json())
                    .then(datosEspecie =>{
                       
                    let habitatPokemon = datosEspecie.habitat.name
                    let colorPokemon = datosEspecie.color.name
                    
                    divPokemon.innerHTML = 
                    `<div class="card" style="width: 20rem; background-color: ${colorPokemon};" >
                        <img src="${datosPokemon.sprites.front_default}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h6 class="card-text">
                            <span> Id:  </span> 
                            <span>${datosPokemon.id}</span> 
                            </h6>

                            <h6 class="card-text">
                            <span> Nombre:  </span> 
                            <span>${datosPokemon.name}</span> 
                            </h6>
                            
                            <h6 class="card-text">
                            <span> Habilidades:</span>
                            <span> ${habilidadesPokemon}</span>
                            </h6>


                            <h6 class="card-text">
                            <span>Tipo/Tipos:   </span>
                            <span>${tipoPokemon}</span>
                            </h6>

                            <h6 class="card-text">
                            <span>Habitad:</span>
                            <span>${habitatPokemon}</span>
                            </h6>  
                            
                        </div>
                        </div>
                    `



                    });


                    



                    
                    
                });
            }
            
        });
         
    })

    

    
    
    
    
    


}



btnBuscarPokemon.addEventListener('click',funcionMostarPokemon)
