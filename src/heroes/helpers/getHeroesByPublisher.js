import {  heroes } from '../data/heroes';

export const getHeroesByPublisher = ( publisher) => {
 console.log("a2ui")
    const validPublishers = ['DC Comics', 'Marvel Comics'];

    if (!validPublishers.includes( publisher )){
        throw new Error (`${ publisher } no es válido`)
    }

    return heroes.filter( heroe => heroe.publisher === publisher);

}
