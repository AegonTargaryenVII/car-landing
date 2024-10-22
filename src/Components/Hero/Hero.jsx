import './Hero.css'
import arrow_btn from '../../assets/arrow_btn.png'
import play_icon from '../../assets/play_icon.png'
import pause_icon from '../../assets/pause_icon.png'

export const Hero = ({ heroCount, heroData, setHeroCount, setPlaystatus, playStatus }) => {
    return (
        <div className="hero">
            <div className="hero-text">
                <p>{heroData.text1}</p>
                <p>{heroData.text2}</p>
            </div>
            <div className="hero-explore">
                <p>Explore the features</p>
                <img src={arrow_btn} alt="" />
            </div>
            <div className="hero-dot-play">
                <ul className="hero-dots">
                    <li onClick={() => [setHeroCount(0), setPlaystatus(false)]} className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}></li>
                    <li onClick={() => [setHeroCount(1), setPlaystatus(false)]} className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}></li>
                    <li onClick={() => [setHeroCount(2), setPlaystatus(false)]} className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}></li>
                </ul>
            </div>
            <div className="hero-play">
                <img   src={playStatus ? pause_icon : play_icon} alt="" />
            </div>
        </div>
    )
}
