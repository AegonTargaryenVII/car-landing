import './Navbar.css'

export const Navbar = ({ setHeroCount, setPlaystatus }) => {
    return (
        <div className='nav'>

            <div className='nav-logo '>E-Vee</div>
            <ul className='nav-menu'>
                <li onClick={() => [setHeroCount(0), setPlaystatus(false)]} 
                    
                    >Home</li>
                <li onClick={() => [setHeroCount(1), setPlaystatus(false)]} 
                    
                    >Explore</li>
                <li onClick={() => [setHeroCount(2), setPlaystatus(false)]} 
                    
                    >About</li>
                <li onClick={() => setPlaystatus(true)} className='button'>Contact</li>
            </ul>
        </div>
    )
}
