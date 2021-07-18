import './styles.css';


export function Section() {
  return (
    <div className='info'>
      <div className='box-info'>
        <h2>Algumas razões para você ter um planner de viagem</h2>
        <img src='rota.png' />
      </div>

      <div className='box-cards'>
        <div className='card'>
          <p>Planejar uma viagem é desenhar suas experiências.</p>
        </div>
        <div className='card'>
          <p>A viagem começa antes de você chegar lá.</p>
        </div>
        <div className='card'>
          <p>Um bom planejamento economiza dinheiro.</p>
        </div>
      </div>
    </div>
  )
};
