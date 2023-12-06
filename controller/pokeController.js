import {readFile} from 'fs/promises';

async function readJsonFile() {
    try {
      const data = await readFile('./pokedex.json', 'utf-8');
      const jsonData = JSON.parse(data);
      return jsonData;

    } catch (error) {
      console.error('Fehler beim Lesen der JSON-Datei:', error.message);
    }
  };


const pokeViews = {

    viewAll: (req,res)=> readJsonFile().then(data=>res.json(data)),

    viewSpecific : (req,res)=> {
        const currentID = req.params.id;
        readJsonFile().then(data=>{
            const pokeList = data;
            const singlePokemon = pokeList.find(e=>e.id==currentID);
            singlePokemon ? res.json(singlePokemon) : res.json({error:`❗️ERROR❗️NO Pokemon with ID: ${currentID} found! Please select ID(NUMBER) between 1 and ${pokeList.length}`})
        });
    },

    viewSpecificDetail : (req,res)=>{
        const currentID = req.params.id;
        const currentInfo = req.params.info;
        if (currentInfo === 'name' || currentInfo === 'base' || currentInfo === 'type'){
            readJsonFile().then(data=> {
                const pokeList = data;
                const singlePokemon = pokeList.find(e=>e.id==currentID);
                singlePokemon ? res.json(singlePokemon[currentInfo]) : res.json({error:`❗️ERROR❗️`})
            });
        }else{res.json({error:`❗️ERROR❗️ "/${currentInfo}" is not a valid Route! Please use "/name", "/type" or "/base"`})}
    },
    viewTypes : (req,res)=> {
        readJsonFile().then((data)=>{
            let typeList = [];
            data.forEach((entry)=>{
                entry.type.forEach(type=>{
                    if (!typeList.includes(type)) {typeList.push(type)}
                });
            });
            res.json({types:typeList})
            });
    },
}

export default pokeViews;

