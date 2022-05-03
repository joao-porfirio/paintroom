import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import { calculoMetroQuadrado } from '../api/calculos'
import { sugerirQuantidadeLatasTinta } from '../api/calculos'
import { useNavigate } from 'react-router-dom';
import '../css/reset.css';
import '../css/style.css';
import background from '../../src/assets/img/paint-bucket.png'
import Swal from 'sweetalert2'

const schema = yup.object({
    altura1: yup.number().positive().required().typeError('Insira uma altura válida'),
    largura1: yup.number().positive().required().typeError('Insira uma largura válida'),
    janela1: yup.number().typeError('Selecione uma quantidade'),
    porta1: yup.number().typeError('Selecione uma quantidade'),

    altura2: yup.number().positive().required().typeError('Insira uma altura válida'),
    largura2: yup.number().positive().required().typeError('Insira uma largura válida'),
    janela2: yup.number().typeError('Selecione uma quantidade'),
    porta2: yup.number().typeError('Selecione uma quantidade'),

    altura3: yup.number().positive().required().typeError('Insira uma altura válida'),
    largura3: yup.number().positive().required().typeError('Insira uma largura válida'),
    janela3: yup.number().typeError('Selecione uma quantidade'),
    porta3: yup.number().typeError('Selecione uma quantidade'),

    altura4: yup.number().positive().required().typeError('Insira uma altura válida'),
    largura4: yup.number().positive().required().typeError('Insira uma largura válida'),
    janela4: yup.number().typeError('Selecione uma quantidade'),
    porta4: yup.number().typeError('Selecione uma quantidade'),
    porta5: yup.number().typeError('Selecione uma quantidade')
}).required();

export function Formulario() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const navigate = useNavigate();

    const previneEnvio = (mensagem) =>{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${mensagem}`,
        })
        return;
    }
    const checkMetroQuadrado = (data) => {
        let retorno = true;

        const metragem1 = calculoMetroQuadrado(data.altura1, data.largura1, data.janela1, data.porta1, 1).valorAreaFinal;
        const metragem2 = calculoMetroQuadrado(data.altura2, data.largura2, data.janela2, data.porta2, 2).valorAreaFinal;
        const metragem3 = calculoMetroQuadrado(data.altura3, data.largura3, data.janela3, data.porta3, 3).valorAreaFinal;
        const metragem4 = calculoMetroQuadrado(data.altura4, data.largura4, data.janela4, data.porta4, 4).valorAreaFinal;

        const resultado =
            [
                calculoMetroQuadrado(data.altura1, data.largura1, data.janela1, data.porta1, 1),
                calculoMetroQuadrado(data.altura2, data.largura2, data.janela2, data.porta2, 2),
                calculoMetroQuadrado(data.altura3, data.largura3, data.janela3, data.porta3, 3),
                calculoMetroQuadrado(data.altura4, data.largura4, data.janela4, data.porta4, 4)
            ];

        for (let i = 0; i < resultado.length; i++){
            if (resultado[i].porcentagemObjetosNaParede === true) {
                previneEnvio(`Porcentagem de objetos maior que 50% na parede ${resultado[i].numeroParede}`); 
                retorno = false
            }
            if (resultado[i].contaAlturaParede === false) {
                previneEnvio(`Altura da parede deve ser 30cm maior que a porta na parede ${resultado[i].numeroParede}`);
                retorno = false
            }    
        }

        sugerirQuantidadeLatasTinta(metragem1 + metragem2 + metragem3 + metragem4);

        const resultados = [metragem1, metragem2, metragem3, metragem4];

        for (let i = 0; i < resultados.length; i++) {
            if (resultados[i] < 1 || resultados[i] > 15) {
                previneEnvio("A metragem deve ser entre 1 e 15 na parede "+(i + 1))
                retorno = false;
            }
        }

        retorno === true ? navigate("/exibicao") : retorno = false;
    } 
    const onSubmit = data => checkMetroQuadrado(data);

    return (
        <Box sx={{ flexGrow: 1 }}>
            
            <div className="logo-central"><img src={background} alt=""/></div>
   
            <form onSubmit={handleSubmit(onSubmit)} className="formulario">
                <div className="formulario__container">
                    <div className="formulario__box">
                        <Typography variant="h3" component="div" style={{fontFamily: 'Lexend-Deca'}}>
                            Parede 1
                        </Typography>
                        <article className="formulario__campos-area">
                            <input className="formulario__field" pattern="[\d.?!]*" title="Exemplo: 1.5" placeholder="Altura" {...register("altura1")} />
                            <input className="formulario__field" pattern="[\d.?!]*" title="Exemplo: 1.5" placeholder="Largura" {...register("largura1")} />
                        </article>
                        <article className="formulario__campos-area">
                            <p className="formulario__aviso-erro">{errors.altura1?.message}</p>
                            <p className="formulario__aviso-erro">{errors.largura1?.message}</p>
                        </article>
                        <article className="formulario__campos-area">
                            <article className="formulario__campos-selecao">
                                <Typography variant="h5" gutterBottom component="div" style={{fontFamily: 'Lexend-Deca'}}>
                                    Janelas
                                </Typography>
                                <select className="formulario__selecao" name="janela1" {...register("janela1")} >
                                    <option value="0">Selecione</option>
                                    <option value="1">Uma</option>
                                    <option value="2">Duas</option>
                                    <option value="3">Três</option>
                                    <option value="4">Quatro</option>
                                    <option value="5">Cinco</option>
                                </select>
                            </article>
                            <article className="formulario__campos-selecao">
                                <Typography variant="h5" gutterBottom component="div" style={{fontFamily: 'Lexend-Deca'}}>
                                    Portas
                                </Typography>
                                <select className="formulario__selecao" name="porta1" {...register("porta1")} >
                                    <option value="0">Selecione</option>
                                    <option value="1">Uma</option>
                                    <option value="2">Duas</option>
                                    <option value="3">Três</option>
                                    <option value="4">Quatro</option>
                                    <option value="5">Cinco</option>
                                </select>
                            </article>
                        </article>
                    </div>
                    <div className="formulario__box">
                        <Typography variant="h3" component="div" style={{fontFamily: 'Lexend-Deca'}}>
                            Parede 2
                        </Typography>
                        <article className="formulario__campos-area">
                            <input className="formulario__field" pattern="[\d.?!]*" title="Exemplo: 1.5" placeholder="Altura" {...register("altura2")} />
                            <input className="formulario__field" pattern="[\d.?!]*" title="Exemplo: 1.5" placeholder="Largura" {...register("largura2")} />
                        </article>
                        <article className="formulario__campos-area">
                            <p className="formulario__aviso-erro">{errors.altura2?.message}</p>
                            <p className="formulario__aviso-erro">{errors.largura2?.message}</p>
                        </article>
                        <article className="formulario__campos-area">
                            <article className="formulario__campos-selecao">
                                <Typography variant="h5" gutterBottom component="div" style={{fontFamily: 'Lexend-Deca'}}>
                                    Janelas
                                </Typography>
                                <select className="formulario__selecao" name="janela2" {...register("janela2")} >
                                    <option value="0">Selecione</option>
                                    <option value="1">Uma</option>
                                    <option value="2">Duas</option>
                                    <option value="3">Três</option>
                                    <option value="4">Quatro</option>
                                    <option value="5">Cinco</option>
                                </select>
                            </article>
                            <article className="formulario__campos-selecao">
                                <Typography variant="h5" gutterBottom component="div" style={{fontFamily: 'Lexend-Deca'}}>
                                    Portas
                                </Typography>
                                <select className="formulario__selecao" name="porta2" {...register("porta2")} >
                                    <option value="0">Selecione</option>
                                    <option value="1">Uma</option>
                                    <option value="2">Duas</option>
                                    <option value="3">Três</option>
                                    <option value="4">Quatro</option>
                                    <option value="5">Cinco</option>
                                </select>
                            </article>
                        </article>
                    </div>
                </div>
                <div className="formulario__container">
                    <div className="formulario__box">
                        <Typography variant="h3" component="div" style={{fontFamily: 'Lexend-Deca'}}>
                            Parede 3
                        </Typography>
                        <article className="formulario__campos-area">
                            <input className="formulario__field" pattern="[\d.?!]*" title="Exemplo: 1.5" placeholder="Altura" {...register("altura3")} />
                            <input className="formulario__field" pattern="[\d.?!]*" title="Exemplo: 1.5" placeholder="Largura" {...register("largura3")} />
                        </article>
                        <article className="formulario__campos-area">
                            <p className="formulario__aviso-erro">{errors.altura3?.message}</p>
                            <p className="formulario__aviso-erro">{errors.largura3?.message}</p>
                        </article>
                        <article className="formulario__campos-area">
                            <article className="formulario__campos-selecao">
                                <Typography variant="h5" gutterBottom component="div" style={{fontFamily: 'Lexend-Deca'}}>
                                    Janelas
                                </Typography>
                                <select className="formulario__selecao" name="janela3" {...register("janela3")} >
                                    <option value="0">Selecione</option>
                                    <option value="1">Uma</option>
                                    <option value="2">Duas</option>
                                    <option value="3">Três</option>
                                    <option value="4">Quatro</option>
                                    <option value="5">Cinco</option>
                                </select>
                            </article>
                            <article className="formulario__campos-selecao">
                                <Typography variant="h5" gutterBottom component="div" style={{fontFamily: 'Lexend-Deca'}}>
                                    Portas
                                </Typography>
                                <select className="formulario__selecao" name="porta3" {...register("porta3")} >
                                    <option value="0">Selecione</option>
                                    <option value="1">Uma</option>
                                    <option value="2">Duas</option>
                                    <option value="3">Três</option>
                                    <option value="4">Quatro</option>
                                    <option value="5">Cinco</option>
                                </select>
                            </article>
                        </article>
                    </div>
                    <div className="formulario__box">
                        <Typography variant="h3" component="div" style={{fontFamily: 'Lexend-Deca'}}>
                            Parede 4
                        </Typography>
                        <article className="formulario__campos-area">
                            <input className="formulario__field" pattern="[\d.?!]*" title="Exemplo: 1.5" placeholder="Altura" {...register("altura4")} />
                            <input className="formulario__field" pattern="[\d.?!]*" title="Exemplo: 1.5" placeholder="Largura" {...register("largura4")} />
                        </article>
                        <article className="formulario__campos-area">
                            <p className="formulario__aviso-erro">{errors.altura4?.message}</p>
                            <p className="formulario__aviso-erro">{errors.largura4?.message}</p>
                        </article>
                        <article className="formulario__campos-area">
                            <article className="formulario__campos-selecao">
                                <Typography variant="h5" gutterBottom component="div" style={{fontFamily: 'Lexend-Deca'}}>
                                    Janelas
                                </Typography>
                                <select className="formulario__selecao" name="janela4" {...register("janela4")} >
                                    <option value="0">Selecione</option>
                                    <option value="1">Uma</option>
                                    <option value="2">Duas</option>
                                    <option value="3">Três</option>
                                    <option value="4">Quatro</option>
                                    <option value="5">Cinco</option>
                                </select>
                            </article>
                            <article className="formulario__campos-selecao">
                                <Typography variant="h5" gutterBottom component="div" style={{fontFamily: 'Lexend-Deca'}}>
                                    Portas
                                </Typography>
                                <select className="formulario__selecao" name="porta4" {...register("porta4")} >
                                    <option value="0">Selecione</option>
                                    <option value="1">Uma</option>
                                    <option value="2">Duas</option>
                                    <option value="3">Três</option>
                                    <option value="4">Quatro</option>
                                    <option value="5">Cinco</option>
                                </select>
                            </article>
                        </article>
                    </div>
                </div>
                <Button variant="contained" id="btn-submit" type="submit" style={{fontFamily: 'Inter-Medium', marginBottom: '20px'}}>Calcular</Button>
            </form>
        </Box>
    );
}