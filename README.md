Sistema para cálculo de latas de tinta necessárias para pintar um cômodo de 4 paredes.

Este projeto foi desenvolvido com o objetivo de entregar o proposto no desafio (Code Challenge), oferecido e proposto.

Desenvolvimento baseado em ReactJS, Sass e Material UI 

# Instruções para desenvolvimento:
Uma aplicação web ou mobile que ajude o usuário a calcular a quantidade de tinta necessária para pintar uma sala.
Essa aplicação deve considerar que a sala é composta de 4 paredes e deve permitir que o usuário escolha qual a medida de cada parede e quantas janelas e portas possuem cada parede.
Com base na quantidade necessária o sistema deve apontar tamanhos de lata de tinta que o usuário deve comprar, sempre priorizando as latas maiores. Ex: se o usuário precisa de 19 litros, ele deve sugerir 1 lata de 18L + 2 latas de 0,5L

# Regras de negócio:
Nenhuma parede pode ter menos de 1 metro quadrado nem mais de 50 metros quadrados, mas podem possuir alturas e larguras diferentes
O total de área das portas e janelas deve ser no máximo 50% da área de parede
A altura de paredes com porta deve ser, no mínimo, 30 centímetros maior que a altura da porta
Cada janela possui as medidas: 2,00 x 1,20 mtos
Cada porta possui as medidas: 0,80 x 1,90
Cada litro de tinta é capaz de pintar 5 metros quadrados
Não considerar teto nem piso.
As variações de tamanho das latas de tinta são:

0,5 L
2,5 L
3,6 L
18 L

Observação:

Nos campos foi previsto como separador o ponto (.)

![Calcular tintas necessárias para um cômodo](https://raw.githubusercontent.com/joao-porfirio/paintroom/master/src/assets/img/projeto.PNG?token=GHSAT0AAAAAAB3EX3QUKA7JLD32BU6KP6AYY3SYBZQ)

Acesse o projeto em https://calculartintas.netlify.app/