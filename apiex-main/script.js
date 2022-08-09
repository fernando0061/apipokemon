//Variáveis
let tbody = document.querySelector("#list")
let list = document.querySelectorAll("#nome")
let arrayPok =[]
let pokArray = [
    "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
    "Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
    "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    "It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.",
    "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
    "It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.",
    "It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.",
    "For protection, it releases a horrible stench from the antenna on its head to drive away enemies.",
    "It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless to avoid attack.",
    "In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
    "Beware of the sharp stinger on its head. It hides in grass and bushes where it eats leaves.",
    "Able to move only slightly. When endangered, it may stick out its stinger and poison its enemy.",
    "It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly.",
    "Very docile. If attacked, it will often kick up sand to protect itself rather than fight back.",
    "This Pokémon is full of vitality. It constantly flies around its large territory in search of prey.",
    "This Pokémon flies at Mach 2 speed, seeking prey. Its large talons are feared as wicked weapons.",
    "Will chew on anything with its fangs. If you see one, you can be certain that 40 more live in the area.",
    "Its hind feet are webbed.", 
    "They act as flippers, so it can swim in rivers and hunt for prey."];



//Formulação
fetch('https://pokeapi.co/api/v2/pokemon/').then(res=>{
    res.json().then(dados=>{
        const pokemonList = [];
        console.log(dados);
        let i = 0
        for (pokemon of dados.results){
            pokemonList.push(pokemon.name);
            
        }
        
        console.log(pokemonList)
        for(u=0;u<pokArray.length;u++){
            const descricao = pokArray[u]
            document.getElementById('nome').innerHTML += `<a href="https://www.pokemon.com/br/pokedex/${pokemonList[u]}"  
            class="list-group-item list-group-item-action list-group-item-primary">${pokemonList[u]}<img src="./image/${pokemonList[u]}.png" width = 100px heigh = 100px class="rounded mx-auto d-block" alt="Imagem responsiva" > 
            <p>${descricao}</p></a>`
        
        }
        

        console.log(pokemonList)
        //mostrarDados(pokemonList)

    });
}).catch(erro=>{
    console.log(erro)
});




// Exibição
//function mostrarDados(dados){
    //tbody.innerHTML= dados
//}