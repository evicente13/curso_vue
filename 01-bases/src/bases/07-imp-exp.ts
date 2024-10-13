import heroes,{type Owner} from "../data/heores";

//console.log( heroes, owners);

export const getHeroesById = (id:number) =>{
    return heroes.find(hero => hero.id ===id);
}

//console.log( getHeroesById(100));

export const getHeroesByOwner = (owner: Owner) => {
    return heroes.filter(hero => hero.owner === owner) ?? {};
}

//console.log(getHeroesByOwner('DC'));
