import Header from "./Components/Header";
import logo  from './assets/image/ocean.png'
import Content from "./Components/Content";
import Card from "./Components/Card";
import Button from "./Components/Button";
import Footer from "./Components/Footer";

function App() {
  const items =
  [
    {
      title:"Início",
      target:"inicio",
    },
    {
      title:"O CONCURSO",
      target:"concurso",
    },
    {
      title:"SOBRE",
      target:"sobre",
    },
    {
      title:"Regras",
      target:"regra",
    },
    {
      title:"Inscrição",
    }
];

const cronograma = [
  {
    title:"EXPOSIÇÃO DE FOTOS",
    content:"20 à 24/03/2017 na divisórias da Ouvidoria (em frente ao elevador)"
  },
  {
    title:"Apresentação",
    content:"20/03/2017 das 16:30h ás 17:30h."
  }
]


  return (
    <div className="flex flex-col lg:w-full max-w-5xl self-center justify-self-center">
        <Header items={items} />
        <div id="inicio" className="w-full h-auto relative">
          <img src={logo} className="w-full h-auto block"/>
        </div>
        <main className="bg-lightPink w-full h-auto flex justify-center">
            <div className="lg:w-5/6 w-4/5 h-auto bg-white  p-8 lg:p-14 relative -top-28">
                <div className="flex w-full lg:flex-row flex-col">
                  <Content id="concurso" title="O CONCURSO" className="lg:w-4/6 w-full lg:mr-12 lg:p-4">
                      <p>
                        Concurso de fotografia para todos os técnicos do Inema para exposição de fotos que retratem a temática água (os desafios e as belezas encontradas em campo) pelos colaboradores. Além de uma apresentação cultural com um artista de rua (poesia, musica, cordel) que aborde a temática água. 
                      </p>
                  </Content>
                  <div className="flex flex-col lg:w-2/6 w-full h-auto justify-center items-center  top-0  lg:relative lg:-top-20">
                      <Card cronograma={cronograma} />
                      <Button className="bg-blue mt-20 text-white text-opacity-70 hover:bg-opacity-90 p-2 pl-6 pr-6">FAÇA SUA INSCRIÇÃO</Button>
                  </div>
                </div>
                <hr className="border border-lightGray w-full"/>
                <Content id="sobre" title="Sobre" className="mt-12">
                    <p>Objetivos</p>
                    <br/>
                    <p>Promover a seleção de 100 fotografias produzidas por colaboradores do Inema em comemoração ao dia da água, que será elaborado um mural de fotos denominado de “Varal das Águas”.</p>
                    <br/>
                    <p>Dos participante</p>
                    <br/>
                    <p>Poderão participar do Concurso Fotográfico 2017: Todos os colaboradores do Instituto do Meio Ambiente e Recursos Hídricos - INEMA e Secretaria do Meio Ambiente -SEMA.</p>
                    <br/>
                    <p>Das especificações das fotografias participantes</p><br/>
                    <p>As fotografias devem abordar somente o tema OS DESAFIOS E AS BELEZAS RETRATADAS EM CAMPO REFERENTE À SITUAÇÃO HIDRICA, devendo ser obrigatoriamente a foto ser tirada em inspeção em campo a serviço do Inema.</p>
                    <br/>
                    <p>Premiação final do concurso</p>
                    <br/>
                    <p>As 05 (cinco) primeiras fotografia que for mais votada nas redes sociais (Facebook e Instagram) do Inema, receberá como prêmio.</p>
                </Content>
              <Content id="regra" title="Regras">
                    <p>Todas as fotos que retrate da temática água (tais como situação de secas ou excedentes hídricos, as belezas e os desafios de se trabalhar com os recursos hídricos etc.) serão bem vindas.</p>
                      <ul className="list-disc pl-12">
                          <li>As fotos devem ser originais e sem alterações.</li>
                          <li>As fotos devem expor os ambientes visitados em inspeções técnicas realizadas durante inspeções pelo INEMA.</li>
                          <li>Fotografias que incluam pessoas serão desclassificadas.</li>
                          <li>As fotos devem ser enviadas com um formulário de inscrição preenchido.</li>
                          <li>As fotografias do concurso se tornarão publicas.</li>
                          <li>O fotógrafo da foto que receber mais votos ganhará um prêmio simbólico.</li>
                          <li>Cada pessoa só poderá cadastrar uma única foto.</li>
                          <li>A votação será por meio das redes sociais do INEMA.</li>
                          <li>As vagas serão limitadas apenas 50.</li>
                      </ul>
                    <p>A foto vencedora irá ganhar um kit de brinde (Agenda, caneta, livro).</p>
              </Content>
            </div>
        </main>
        <Footer/>
    </div>
  );
}

export default App;
