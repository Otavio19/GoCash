import './style.css'

const NavBar = ({openMenu}) =>{

    return(
        <nav className='navBarContainer'>
            <div className="perfilNavBar">
                <button onClick={openMenu}>MENU</button>
                <img src="https://placehold.co/70" alt="" />
                <h2>Otávio Afonso Elias</h2>
            </div>
            <hr />
            <ul className='listNavBar'>
                <li>Ordens</li>
                <li>Perfil</li>
                <li>Sair</li>
            </ul>
        </nav>
    )
}

export default NavBar