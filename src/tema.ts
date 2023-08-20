import facebook from 'Components/Footer/assets/img/facebook.png';
import google from 'Components/Footer/assets/img/google.png';
import whatsapp from 'Components/Footer/assets/img/whatsapp.png';
import instagram from 'Components/Footer/assets/img/instagram.png';
import { ReactComponent as IconeBusca } from "Components/CardServico/busca.svg";
import { ReactComponent as IconeAgenda } from "Components/CardServico/agenda.svg";
import { ReactComponent as IconeLembrete } from "Components/CardServico/lembrete.svg";
import { ReactComponent as IconeAvaliacao } from "Components/CardServico/avaliacao.svg";


const tema = {
    tamanho: 
        {
            titulo: '1.5rem',
            geral: '1rem',
            textoBanner: '1.5rem',
            tituloPaper: '18px',
            tituloSecaoDepoimentos: '1.5rem',
            subtitulo: '18px',
            textoIcone: '14px',
            tituloFormulario: '1.5rem',
        },
    forca: 
        {
            titulo: '700',
            dadosTabela: '400',
            botao: '700',
            rodape: '400',
            linkCabecalho: '700',
            textoBanner: '700',
            tituloPaper: '700',
            tituloSecaoDepoimentos: '700',
            subtitulo: '700',
            textoIcone: '400',
            textoLabel: '700',
            tituloFormulario: '700',
        },
    cores: 
        {
            titulo: '#339CFF',
            botao: "#0B3B60",
            botaoTexto: '#FFFFFF',
            tituloTabela: "#0B3B60",
            dadosTabela: '#6B6E71',
            rodape: "#0B3B60",
            rodapeTexto: '#FFFFFF',
            linkCabecalho: "#0B3B60",
            fundoBanner: '#339CFF',
            textoBanner: '#E7EBEF',
            tituloPaper: '#6B6E71',
            tituloSecaoDepoimentos: '#0B3B60',
            subtitulo: '#0B3B60',
            textoIcone: '#FFFFFF',
            textoLabel: '#0B3B60',
            tituloFormulario: '#6B6E71',
        },
    fonte: 
        {
            geral: `'Public Sans', sans-serif`,
        },
    breakpoints: 
        {
            sm: '359px',
            me: '767px',
            la: '1023px',
            xl: '1439px',
        },
}

export const iconesRodape = [
    {
        redeSocial: facebook,
        linker: 'https://www.facebook.com',
    },
    {
        redeSocial: google,
        linker: 'https://www.google.com',
    },
    {
        redeSocial: whatsapp,
        linker: 'https://www.whatsapp.com',
    }, 
    {
        redeSocial: instagram,
        linker: 'https://www.instagram.com',
    }
]

export const tiposServicos = [
    {
        icone: IconeBusca,
        texto: 'Encontre especialistas',
    },
    {
        icone: IconeAgenda,
        texto: 'Agende consultas',
    },
    {
        icone: IconeLembrete,
        texto: 'Defina lembretes',
    },
    {
        icone: IconeAvaliacao,
        texto: 'Avalie os serviços',
    },
]

export const depoimentos = [
    {
        texto: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
        autor: "Júlio, 40 anos, São Paulo/SP.",
    },
    {
        texto: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
        autor: "Júlio, 40 anos, São Paulo/SP.",
    },
    {
        texto: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores.",
        autor: "Júlio, 40 anos, São Paulo/SP.",
    },
]

interface ProfissionalProps {
    nome: string,
    especialidade: string,
}

export interface ConsultasDiaProps 
{
    id: number,
    data: string,
    horario: string,
    profissional: ProfissionalProps,
    paciente: string,
    modalidade: string,
}

export interface QuantidadeConsultasProps {
    id: number,
    quantidade: number,
    profissional: ProfissionalProps,
}

export interface DadosAvaliacoesProps {
    id: number,
    imagem: string,
    nome: string,
    especialidade: string,
    nota: number,
}

export interface TypeDadosAvaliacoesProps {
    avaliacoes: DadosAvaliacoesProps,
}

export interface ArrayQntdConsultaProps{
    qtdConsultaProfissional: QuantidadeConsultasProps[];
}

export interface ArrayConsultasDiaProps { 
    consultas: ConsultasDiaProps[],
}

export interface InputTextoProps {
    rotulo?: string,
    descricao: string,
    valor: string
    setValor: React.Dispatch<React.SetStateAction<string>>,
}

export const planos: string[] = [
    "Sulamerica",
    "Unimed",
    "Bradesco",
    "Amil",
    "Biosaúde",
    "Biovida",
    "Outro"
]


export default tema;