import './Background.css'
import spider from '../../assets/image1.jpg'
import jonSnow from '../../assets/image2.jpg'
import MilesMorales from '../../assets/image3.jpg'
import steveandPeggy from '../../assets/video1.mp4'
export const Background = ({ playStatus, heroCount }) => {


if(playStatus){
    return(
        <video className='background' autoPlay loop muted>
            <source src={steveandPeggy} type='video/mp4'/>
        </video>
    )
}else if (heroCount === 0) {
        return <img src={spider} className='background' alt='' />
    } else if (heroCount === 1) {
        return <img src={jonSnow} className='background' alt='' />
    } else if (heroCount === 2) {
        return <img src={MilesMorales } className='background' alt='' />
    }

}
