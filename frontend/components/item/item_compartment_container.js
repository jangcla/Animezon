import { connect } from 'react-redux';
import { fetchItems } from '../../actions/item_actions';

import ItemCompartment from './item_compartment';


const mSTP = state => {
    const items = Object.values(state.entities.items)

    let anime = items.filter(item => item.type_tag === "anime")

    let manga = items.filter(item => item.type_tag === "manga")
    
    let merch = items.filter(item => item.type_tag === "merch")

    let randomAnime = []
    if (anime.length !== 0) {
        while (randomAnime.length < 4) {
            let num = Math.floor(Math.random() * anime.length)
            let random = anime[num]
            if(!randomAnime.includes(random)) {
                randomAnime.push(random)
            } 
        }
    }

    let randomManga = []
    if (manga.length !== 0) {
        while (randomManga.length < 4) {
            let num = Math.floor(Math.random() * manga.length)
            let random = manga[num]
            if(!randomManga.includes(random)) {
                randomManga.push(random)
            } 
        }
    }

    let randomMerch = []
    if (merch.length !== 0) {
        while (randomMerch.length < 4) {
            let num = Math.floor(Math.random() * merch.length)
            let random = merch[num]
            if(!randomMerch.includes(random)) {
                randomMerch.push(random)
            } 
        }
    }

    return {
            animes: randomAnime,
            mangas: randomManga,
            merch: randomMerch
        }
}
// const mSTP = state => ({
//     items: Object.values(state.entities.items)
// })

const mDTP = dispatch => {

    return { fetchItems: () => dispatch(fetchItems()) }
}
// const mDTP = dispatch => ({
//     fetchItems: () => dispatch(fetchItems())
// })

export default connect(mSTP, mDTP)(ItemCompartment);