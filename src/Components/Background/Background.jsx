import './Background.css'
import spider from '../../assets/edge_background.jpg'
import jonSnow from '../../assets/JonSnow.jpg'
import MilesMorales from '../../assets/MilesMorales.jpg'
import DarkKnight from '../../assets/DarkKnight.jpg'
export const Background = ({ playStatus, heroCount }) => {


    if (heroCount === 0) {
        return <img src={jonSnow} className='background' alt='' />
    } else if (heroCount === 1) {
        return <img src={MilesMorales} className='background' alt='' />
    } else if (heroCount === 2) {
        return <img src={DarkKnight} className='background' alt='' />
    } else if (heroCount == 3) {
        return <img src={spider} className='background' alt='' />
    } else {
        return <img src={spider} className='background' alt='' />
    }


}
