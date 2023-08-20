import { styled } from "styled-components"
import { Container } from "@mui/material";

interface BannerProps {
    imagem: string,
}

 const BannerEstilizado = styled(Container)`
     background-color: ${props => props.theme.cores.fundoBanner} !important;
     padding-left: 0 !important;
     padding-right: 0 !important;
     max-width: none !important;
     display: flex !important;
     justify-content: center !important;
     position: relative;
 `

const ImagemBanner = styled.img`
    width: 100%;
    max-width: 1440px;
    @media screen and (max-width: ${props => props.theme.breakpoints.me}){
        display: none;
    }
`
const TituloBanner = styled.h1`
    font-size: ${props => props.theme.tamanho.textoBanner};
    color: ${props => props.theme.cores.textoBanner};
    font-weight: ${props => props.theme.textoBannero};
    position: absolute;
    top: 50%;
    translate: 0 -50%;
    margin: 0;
    width: 50%;
    max-width: 588px;
    left: 5%;
    @media screen and (max-width: ${props => props.theme.breakpoints.me}){
        display: none;
    }
`

function Banner({imagem}: BannerProps) {
    return (
        <BannerEstilizado sx={{margin: 0}}>
            <ImagemBanner src={imagem} />
            <TituloBanner>Encontre profissionais de diversas especialidades e agende sua consulta com facilidade!</TituloBanner> 
        </BannerEstilizado>
    )
}

export default Banner;