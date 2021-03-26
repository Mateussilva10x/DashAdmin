import './Sidebar.css'
import logo from '../../assets/logo1.png'

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
        <div className={sidebarOpen ? "sidebar-responsivo" : ""} id="sidebar">
            <div className="sidebar_title">
                <div className="sidebar_img">
                    <img src={logo} alt="logo"/>
                </div>

                <i onClick={() => closeSidebar()}
                className="fas fa-times"
                id="sidebarIcon"
                aria-hidden="true"
                ></i>
            </div>
            <div className="sidebar_menu">
                <div className="sidebar_link active_menu_link">
                    <i className="fas fa-minus-square"></i>
                    <a href="#">Home</a>
                </div>
                <h2>ADMIN</h2>
                <div className="sidebar_link">
                    <i className="fas fa-tachometer-alt"></i>
                    <a href="#">Área administrativa</a>
                </div>
                <div className="sidebar_link">
                    <i className="fas fa-building"></i>
                    <a href="#">Lojas</a>
                </div>
                <div className="sidebar_link">
                    <i className="fas fa-archive"></i>
                    <a href="#">Produtos</a>
                </div>
                <div className="sidebar_link">
                    <i className="fas fa-bars"></i>
                    <a href="#">Categorias</a>
                </div>
                <div className="sidebar_link">
                    <i className="fas fa-utensils"></i>
                    <a href="#">Pedidos</a>
                </div>
                <h2>PESSOAS</h2>
                <div className="sidebar_link">
                    <i className="fas fa-male"></i>
                    <a href="#">Administradores</a>
                </div>
                <div className="sidebar_link">
                    <i className="fas fa-user-circle"></i>
                    <a href="#">Usuários</a>
                </div>
                <div className="sidebar_link">
                    <i className="fas fa-wallet"></i>
                    <a href="#">Pagamentos</a>
                </div>
                <div className="sidebar_link">
                    <i className="fas fa-file-alt"></i>
                    <a href="#">Política de privacidade</a>
                </div>
                <div className="sidebar_logout">
                    <i className="fas fa-power-off"></i>
                    <a href="#">Log out</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;