import { useState } from "react";

const data = [
    {
        title: 'Aumento da Segurança dos Pacientes',
        text01: "O projeto Vita eleva a segurança do paciente ao validar continuamente os prazos de validade dos medicamentos, garantindo o uso apenas de produtos seguros. Essa abordagem avançada contribui para uma prática clínica mais segura e confiável.",
    },
    {
        title: "Eficiência e Recursos Otimizados",
        text01: "Ao implementar uma plataforma de gestão de estoque inteligente, o Vita monitora automaticamente os níveis de estoque, evitando interrupções no fornecimento e permitindo a alocação eficiente de recursos. Isso resulta em operações hospitalares mais eficientes e sustentáveis.",
    },
    {   title: "Modernização para uma Saúde Centrada no Paciente",
        text01: "O Vita vai além da gestão de estoque, tornando-se vital para garantir a segurança do paciente. Integrando inteligência e automação, o projeto busca criar ambientes hospitalares centrados no bem-estar, liberando os profissionais para um cuidado mais personalizado e centrado no paciente. Essa abordagem promove uma saúde mais segura e eficiente.",
    }
]
const BandButtons = () => {

  const [botaoAtivo, setBotaoAtivo] = useState(1);
  const [textoExibido, setTextoExibido] = useState(data[0]);

  const handleBotaoClick = (numeroBotao) => {
    // Atualiza o botão ativo e o texto exibido com base no botão clicado
    setBotaoAtivo(numeroBotao);
    switch (numeroBotao) {
      case 1:
        setTextoExibido(data[0]);
        break;
      case 2:
        setTextoExibido(data[1]);
        break;
      case 3:
        setTextoExibido(data[2]);
        break;
      default:
        setTextoExibido("");
    }
  };

  return (
    <>
      <div className="buttonDiv">
        <button
          onClick={() => handleBotaoClick(1)}
          style={{
            backgroundColor: botaoAtivo === 1 ? "transparent" : "white",
            color: botaoAtivo === 1 ? "white" : "#3c55cb",
            border: botaoAtivo === 1 ? " 1px solid white" : "1px solid #3c55cb",
            transition: 'all 0.7s ease'
          }}
        >
          Segurança
        </button>
        <button
          onClick={() => handleBotaoClick(2)}
          style={{
            backgroundColor: botaoAtivo === 2 ? "transparent" : "white",
            color: botaoAtivo === 2 ? "white" : "#3c55cb",
            border: botaoAtivo === 2 ? " 1px solid white" : "1px solid #3c55cb",
            transition: 'all 0.7s ease'
          }}
        >
          Eficiência
        </button>
        <button
          onClick={() => handleBotaoClick(3)}
          style={{
            backgroundColor: botaoAtivo === 3 ? "transparent" : "white",
            color: botaoAtivo === 3 ? "white" : "#3c55cb",
            border: botaoAtivo === 3 ? " 1px solid white" : "1px solid #3c55cb",
            transition: 'all 0.7s ease'
          }}
        >
          Modernização
        </button>
      </div>
      <div className="info_Div">
      <h4>{textoExibido.title}</h4>
      <p>{textoExibido.text01}</p>
      </div>
    </>
  );
};
export default BandButtons;
