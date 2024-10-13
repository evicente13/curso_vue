/*
console.log('Inicio');

new Promise( ( resolve, reject ) =>{
    setTimeout(() => {
        //resolve('Mi amigo cumplio');
        
        reject('Mi amigo no cumplio');
    }, 1000);
}).then( (message) =>{
    console.log(message);
}).catch(errorMessage => console.log(errorMessage))
.finally(()=> console.log('Fin de la Promesa'));

console.log('Final');
*/

import type { Hero } from '../data/heores';
import { getHeroesById } from './07-imp-exp';

const getHeroByIdAsync = (id: number) : Promise<Hero> =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            const hero = getHeroesById(id);
            hero ? resolve(hero) : reject(`Heroe no encontrado #${ id }`);
        }, 1500);
    })
}


getHeroByIdAsync(3)
    .then( hero => console.log('El nombre es ', hero.name))
    .catch( alert );