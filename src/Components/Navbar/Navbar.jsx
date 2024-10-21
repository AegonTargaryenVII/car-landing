import './Navbar.css'

export const Navbar = () => {
    return (
        <div className='nav'>

            <div className='nav-logo'>E-Vee</div>
            <ul className='nav-menu'>
                <li className='button'>Home</li>
                <li className='button'>Explore</li>
                <li className='button'>About</li>
                <li className='button'>Contact</li>
            </ul>
        </div>
    )
}
