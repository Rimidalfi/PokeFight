# Pokémon - Gotta Catch ’Em All! 🐢 🦐 🐳

This is a simple API to fetch Data for your next Pokémon project.

API URL:

`https://pokefightapi.onrender.com`

You can make three different calls:

---

1.  `https://pokefightapi.onrender.com/pokemon`

    Delivers a JSON file with all available Pokemon entries.

---

2.  `https://pokefightapi.onrender.com/pokemon/:id`

    Delivers a JSON file with the data of a specific Pokémon based on its ID. A valid ID is a number from 1 to 809. For example, the entry with ID 1 looks like this:

    `{"id":1,"name":{"english":"Bulbasaur","japanese":"フシギダネ","chinese":"妙蛙种子","french":"Bulbizarre"},"type":["Grass","Poison"],"base":{"HP":45,"Attack":49,"Defense":49,"Sp. Attack":65,"Sp. Defense":65,"Speed":45}}`

---

3.  `https://pokefightapi.onrender.com/pokemon/:id/:info`

    Delivers a JSON file containing data for a specific Pokémon based on its ID, along with detailed information determined by the 'info' keyword. Valid 'info' keywords include '/name', '/type', and '/base'.

    Example:

    `/pokemon/1/name   >>   {"english":"Bulbasaur","japanese":"フシギダネ","chinese":"妙蛙种子","french":"Bulbizarre"}`

    `/pokemon/1/type   >>   ["Grass","Poison"]`

    `/pokemon/1/base   >>   {"HP":45,"Attack":49,"Defense":49,"Sp. Attack":65,"Sp. Defense":65,"Speed":45}`

---

4.  `https://pokefightapi.onrender.com/types`

    Delivers a JSON file with all TYPES of the available Pokemon entries.
