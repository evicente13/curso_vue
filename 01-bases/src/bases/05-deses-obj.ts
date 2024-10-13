
interface Hero {
    name : string;
    age: number;
    codeName: string;
    power?: string;
}

export const person: Hero = {
    name: 'Tonny',
    age: 45,
    codeName: 'Ironman',
    power: 'Money'

}

const { age, name, power ='No tiene poder' } = person;// puede ser un objeto o un arreglo
console.log({age, name, power});

interface CreateHeroArgs {
    name : string;
    age: number;
    codeName: string;
    power?: string;
}


const createHero = ({name, age, codeName, power} : CreateHeroArgs) => ({
    id: 12345,
    name: name,
    age: age,
    codeName: codeName,
    power: power ?? 'No tiene poder',
})

console.log(createHero(person));