import './style.css'

const NavBar = () =>{
    return(
        <nav className='navBarContainer'>
            <div className="perfilNavBar">
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