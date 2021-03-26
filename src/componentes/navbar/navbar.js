import './navbar.css';
import avatar from '../../assets/avatar.svg'


const Navbar = ({ sidebarOpen, openSidebar}) => {
    return(
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i className="fas fa-bars" aria-hidden="true"></i>
            </div>
            <div className="navbar_left">
                <a href="#">Produtos</a>
                <a href="#">Usuários</a>
                <a href="#" className="active_link" >Admin</a>
            </div>
            <div className="navbar_right">
                <a href="#">
                    <i className="fas fa-search"></i>
                </a>
                <a href="#">
                    <i className="fas fa-clock"></i>
                </a>
                <a href="#">
                    <img width="30" src={avatar} alt="avatar" />
                </a>
            </div>
        </nav>
    )
}

export default Navbar;