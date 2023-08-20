import { styled } from "styled-components";
import {iconesRodape} from 'tema';


function Footer () {

    const FooterEstilizado = styled.footer`
        padding: 1.5rem;
        background-color: ${props => props.theme.cores.rodape};
    `
    const Icones = styled.div`
        text-align: center;
    `

    const IconeEstilizado = styled.i<{icone: string}>`
        content: url(${props => props.icone});
        margin-right: 1rem;
    `
    const ParagrafoEstilizado = styled.p`
        font-weight: ${props => props.theme.forca.rodape};
        color: ${props => props.theme.cores.rodapeTexto};
        text-align: center;
        margin-bottom: 0;
    `

    return (
        <FooterEstilizado>
            <Icones>
                {iconesRodape.map((icone) => {
                    return (
                        <a href={icone.linker} target="_blank">
                            <IconeEstilizado icone={icone.redeSocial} ></IconeEstilizado>
                        </a>
                    )
                })}
            </Icones>
            <ParagrafoEstilizado>2023 &copy; Desenvolvido por Editora Finantech | Todos os direitos reservados.</ParagrafoEstilizado>
        </FooterEstilizado>
    )
}



export default Footer;