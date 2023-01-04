import React from 'react'
import miniLata from '../../src/assets/img/paint-32.png'
import lataPequena from '../../src/assets/img/paint-64.png'
import lataMedia from '../../src/assets/img/paint-128.png'
import lataGrande from '../../src/assets/img/paint-256.png'
import { Typography } from "@mui/material";
import Button from '@mui/material/Button';
import FirstPageOutlinedIcon from '@mui/icons-material/FirstPageOutlined';
import { useNavigate } from 'react-router-dom'
export const Exibicao = () => {

    const navigate = useNavigate();
    if(localStorage.getItem("latas") == null) window.location = "/"; 

    const metroQuadrado = Number(localStorage.getItem("metrosQuadrados"));
    const latas = localStorage.getItem("latas");
    const litrosNecessarios = Number(localStorage.getItem("litrosNecessarios")); 

    const arrayLatas = [];

    if (latas.split(",").length > 0) {
        latas.split(",").forEach((x, y) => arrayLatas.push(x))
    }

    const retornarImagem = (tipoLata) => {
        let source = "";
        let tamanho = 0;
        let tipoDeLata = "";

        switch (tipoLata) {
            case "mini":
                source = miniLata;
                tamanho = 0.5;
                tipoDeLata = "Mini Lata";
                break;
            case "pequena":
                source = lataPequena;
                tamanho = 2.5;
                tipoDeLata = "Lata Pequena";
                break;
            case "media":
                source = lataMedia;
                tamanho = 3.6;
                tipoDeLata = "Lata Média";
                break;
            case "grande":
                source = lataGrande;
                tamanho = 18;
                tipoDeLata = "Lata Grande";
                break;
            default:
                tipoDeLata = "Sem latas";
        }
        const dados = {
            url: source,
            litros: tamanho,
            tipo: tipoDeLata
        }
        return dados;
    }

    return (
        <section className="exibicao">
            <Typography variant="h3" component="div" style={{ fontFamily: 'Lexend-Deca' }}>{`O tamanho do cômodo é de ${metroQuadrado.toPrecision(4)}m2.`}</Typography>
            <br />

            <Typography variant="h4" component="div" style={{ fontFamily: 'Inter-Medium' }}>{`Para atender ao tamanho, são necessários ${litrosNecessarios} litros de tinta.`}</Typography>
            <br />

            <Typography variant="h2" component="div" style={{ fontFamily: 'Lexend-Deca' }}>
                Tamanhos de lata disponíveis:
            </Typography>
            <div className="exibicao__container">
                <article className="exibicao__latas">
                    <img src={miniLata} alt="Mini Lata" />
                    <small className="exibicao__tipoLata">Mini Lata</small>
                    <legend className="exibicao__legenda">0.5 L</legend>
                </article>
                <article className="exibicao__latas">
                    <img src={lataPequena} alt="Lata Pequena" />
                    <small className="exibicao__tipoLata">Lata Pequena</small>
                    <legend className="exibicao__legenda">2.5 L</legend>
                </article>
                <article className="exibicao__latas">
                    <img src={lataMedia} alt="Lata Média" />
                    <small className="exibicao__tipoLata">Lata Média</small>
                    <legend className="exibicao__legenda">3.6 L</legend>
                </article>
                <article className="exibicao__latas">
                    <img src={lataGrande} alt="Lata Grande" />
                    <small className="exibicao__tipoLata">Lata Grande</small>
                    <legend className="exibicao__legenda">18 L</legend>
                </article>
            </div>
            <Typography variant="h2" component="div" style={{ fontFamily: 'Lexend-Deca' }}>
                Sugestão de compra
            </Typography>
            <div className="exibicao__container">
                {
                    arrayLatas.map((tipoLata, index) => {

                        return (
                            <article key={index} className="exibicao__latas">
                                <img key={index} src={retornarImagem(tipoLata).url} alt={retornarImagem(tipoLata).tipo} />
                                <small className="exibicao__tipoLata">{retornarImagem(tipoLata).tipo}</small>
                                <legend className="exibicao__legenda">{`${retornarImagem(tipoLata).litros} L`}</legend>
                            </article>
                        )
                    })
                }
            </div>
            <Button onClick={()=>navigate('/')} color="primary" variant="contained" startIcon={<FirstPageOutlinedIcon />} size="medium" id="btn-back" >
				Voltar
			</Button>
        </section>
    )
}