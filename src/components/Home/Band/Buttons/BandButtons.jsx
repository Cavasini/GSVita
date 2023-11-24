import { useState } from "react";

const data = [
    {
        text01: "O projeto Vita representa um marco significativo na melhoria da segurança dos pacientes nos hospitais. Ao utilizar tecnologia de ponta, o sistema oferece uma visão completa e proativa do estoque hospitalar, permitindo uma gestão mais eficiente e segura. A automação inteligente monitora constantemente os níveis de estoque, garantindo a disponibilidade contínua de medicamentos essenciais.",
        text02: "Além disso, a validação regular dos prazos de validade assegura que apenas produtos seguros e eficazes sejam utilizados, reduzindo os riscos associados a medicamentos vencidos e contribuindo para aprimorar a qualidade do atendimento médico."
    },
    {
        text01: "O impacto positivo do projeto Vita vai além da segurança do paciente, estendendo-se para a eficiência operacional dos hospitais. A implementação da plataforma de gestão de estoque inteligente resulta em uma administração mais ágil e precisa dos recursos hospitalares. A automação inteligente não apenas monitora os níveis de estoque, mas também emite alertas proativos para reposição, evitando interrupções no fornecimento.",
        text02: "Essa abordagem inovadora contribui para a otimização dos processos internos, reduzindo desperdícios e permitindo que os profissionais de saúde foquem mais tempo no cuidado direto aos pacientes."
    },
    {
        text01: "O projeto Vita não se limita a uma simples modernização da gestão de estoque; ele se posiciona como um instrumento vital na garantia da segurança do paciente e na otimização global dos recursos hospitalares. Ao integrar inteligência e automação, o sistema promove uma abordagem centrada no bem-estar dos indivíduos.",
        text02: "Essa sinergia de tecnologia avançada visa criar um ambiente hospitalar mais seguro, eficiente e orientado para oferecer um atendimento médico de qualidade, redefinindo os padrões de excelência na prestação de cuidados de saúde."
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
            backgroundColor: botaoAtivo === 1 ? "#3c55cb" : "white",
            color: botaoAtivo === 1 ? "white" : "black",
            transition: 'all 0.7s ease'
          }}
        >
          Segurança
        </button>
        <button
          onClick={() => handleBotaoClick(2)}
          style={{
            backgroundColor: botaoAtivo === 2 ? "#3c55cb" : "white",
            color: botaoAtivo === 2 ? "white" : "black",
            transition: 'all 0.7s ease'
          }}
        >
          Eficiência
        </button>
        <button
          onClick={() => handleBotaoClick(3)}
          style={{
            backgroundColor: botaoAtivo === 3 ? "#3c55cb" : "white",
            color: botaoAtivo === 3 ? "white" : "black",
            transition: 'all 0.7s ease'
          }}
        >
          Modernização
        </button>
      </div>
      <div className="info_Div">
      <p>{textoExibido.text01}</p>
      <p>{textoExibido.text02}</p>
      </div>
    </>
  );
};
export default BandButtons;
