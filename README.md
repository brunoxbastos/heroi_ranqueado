# 🎮 Calculadora de Partidas Rankeadas de Herói

Este projeto implementa uma lógica para calcular o saldo de vitórias e derrotas de um herói em um jogo, determinando seu rank com base nesse saldo. Além disso, ele define o nível do herói com base em sua experiência (XP).

## 🚀 Tecnologias Utilizadas

*   **JavaScript**: Linguagem de programação principal para a lógica do projeto.

## ✨ Funcionalidades

*   **Cálculo de Saldo de Rankeadas**: A função `ranked` calcula o saldo de vitórias e derrotas de um jogador.
*   **Determinação de Rank**: Com base no saldo de vitórias e derrotas, o herói é classificado em diferentes ranks (Ferro, Bronze, Prata, Ouro, Diamante, Lendário, Imortal).
*   **Determinação de Nível por XP**: O nível do herói é definido com base em sua quantidade de experiência (XP), classificando-o em níveis como Ferro, Bronze, Prata, Ouro, Platina, Ascendente, Imortal e Radiante.
*   **Exibição Unificada de Dados**: Apresenta de forma clara o nome do herói, seu XP, nível, saldo de vitórias e seu rank.

## 🎯 Objetivo do Desafio

O objetivo deste desafio era criar uma função que recebesse como parâmetro a quantidade de vitórias e derrotas de um jogador, retornando o saldo de Rankeadas (vitórias - derrotas) e classificando o jogador em um rank específico, conforme as seguintes regras:

*   Se o **saldo de vitórias** for menor do que 10 = Ferro
*   Se o **saldo de vitórias** for entre 11 e 20 = Bronze
*   Se o **saldo de vitórias** for entre 21 e 50 = Prata
*   Se o **saldo de vitórias** for entre 51 e 80 = Ouro
*   Se o **saldo de vitórias** for entre 81 e 90 = Diamante
*   Se o **saldo de vitórias** for entre 91 e 100 = Lendário
*   Se o **saldo de vitórias** for maior ou igual a 101 = Imortal

**Observação**: A implementação atual da função `ranked` utiliza o *saldo* (vitórias - derrotas) para determinar o rank, enquanto o objetivo do desafio especificava o *número de vitórias*. Esta é uma pequena divergência que pode ser ajustada se o objetivo for seguir estritamente a regra do número de vitórias.

## ⚙️ Como Rodar o Projeto

1.  **Clone o repositório** (se estiver em um repositório Git):
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    ```
2.  **Navegue até o diretório do projeto**:
    ```bash
    cd calculadora-rankeadas
    ```
3.  **Execute o arquivo JavaScript** usando Node.js:
    ```bash
    node seu_arquivo.js # Substitua 'seu_arquivo.js' pelo nome do seu arquivo JavaScript
    ```

## 🤝 Contribuição

Sinta-se à vontade para sugerir melhorias ou correções.

## 📄 Licença

Este projeto está licenciado sob a licença MIT.

---

Feito com ❤️ por [Seu Nome/Seu Usuário do GitHub]
