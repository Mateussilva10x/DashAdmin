import Chart from '../charts/Chart';
import pessoa from '../../assets/pessoa.svg'
import './main.css';

const Main = () => {
    return(
        <main>
            <div className="main_container">
                <div className="main_title">
                    <img src={pessoa} alt="hello"/>
                    <div className="main_greeting">
                        <h1>Olá Mateus</h1>
                        <p>Bem vindo ao seu painel</p>
                    </div>
                </div>
                <div className="main_cards">
                    <div className="card">
                        <i className="fas fa-file-alt fa-2x text-lightblue"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Número de pedidos</p>
                            <span className="font-bold text-title">578</span>
                        </div>
                    </div>
                    <div className="card">
                        <i className="fas fa-wallet fa-2x text-red"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Pagamentos</p>
                            <span className="font-bold text-title">R$2.467,00</span>
                        </div>
                    </div>
                    <div className="card">
                        <i className="fas fa-archive fa-2x text-yellow"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Número de Pedidos</p>
                            <span className="font-bold text-title">670</span>
                        </div>
                    </div>
                    <div className="card">
                        <i className="fas fa-bars fa-2x text-green"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Categorias</p>
                            <span className="font-bold text-title">40</span>
                        </div>
                    </div>
                </div>

                <div className="charts">
                    <div className="charts_left">
                        <div className="charts_left_title">
                            <div>
                                <h1>Daily Reports</h1>
                                <p>Campina Grande, Paraiba, BR</p>
                            </div>
                            <i className="fas fa-dollar-sign"></i>
                        </div>
                        <Chart />
                    </div>

                    <div className="charts_right">
                        <div className="charts_right_title">
                            <div>
                                <h1>Daily Reports</h1>
                                <p>Campina Grande, Paraiba, BR</p>
                            </div>
                            <i className="fas fa-chart-bar"></i>
                        </div>
                      
                        <div className="chart_right_cards">
                            <div className="card1">
                                <h1>Lucro</h1>
                                <p>R$2.500,00</p>
                            </div>

                            <div className="card2">
                                <h1>Pagamentos</h1>
                                <p>R$250,00</p>
                            </div>

                            <div className="card3">
                                <h1>Custo de hospedagem</h1>
                                <p>R$150,00</p>
                            </div>
                            <div className="card4">
                                <h1>Banco de Dados</h1>
                                <p>R$180,00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;