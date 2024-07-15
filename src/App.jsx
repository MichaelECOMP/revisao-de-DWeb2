'use strict';

import React, { useState, useEffect } from 'react';

const App = () => {
  const [logs, setLogs] = useState([]);

  const logOutput = (message) => {
    setLogs((prevLogs) => [...prevLogs, message]);
  };

  useEffect(() => {
    // 1 - Variáveis criadas utilizando var e let
    var nome = 'Regulus';
    let funcao = 'Guerreiro';

    // 2 - Constante
    const idade = 30;

    // 3 - Imprimir o conteúdo das vars e da constante criadas anteriormente
    logOutput(`Nome: ${nome}`);
    logOutput(`Função: ${funcao}`);
    logOutput(`Idade: ${idade}`);

    // 4 - Alterar o conteúdo das variáveis criadas no item 1 em um bloco de comandos e imprimir seus respectivos conteúdos
    {
      var nome = 'Akira';
      let funcao = 'Mago';
      logOutput(`Nome atualizado: ${nome}`);
      logOutput(`Função atualizada: ${funcao}`);
    }

    // 5 – Comentários
    // Comentário de linha
    /* Comentário de bloco */

    // 6 – Soma numérica de 2 valores e mostrar o resultado
    const soma = idade + 5;
    logOutput(`Soma (Idade + 5): ${soma}`);

    // 7 – Concatenar 2 strings e mostrar o resultado
    const nomeCompleto = nome + ' ' + funcao;
    logOutput(`String concatenada (Nome + Função): ${nomeCompleto}`);

    // 8 - Comparação estrita
    const ehIgual = (nome === 'Akira');
    logOutput(`Comparação estrita (Nome === "Akira"): ${ehIgual}`);

    // 9 – Realizar o decremento em 1 unidade de uma variável
    let experiencia = 10;
    experiencia--;
    logOutput(`Decremento (Experiência - 1): ${experiencia}`);

    // 10 - Utilizar o operador lógico &&
    const ehExperiente = (experiencia > 5 && idade > 20);
    logOutput(`Operador lógico AND (Experiência > 5 && Idade > 20): ${ehExperiente}`);

    // 11 - Utilizar o operador lógico ||
    const ehNovoOuJovem = (experiencia < 5 || idade < 25);
    logOutput(`Operador lógico OR (Experiência < 5 || Idade < 25): ${ehNovoOuJovem}`);

    // 12 – Criar um IF ternário
    const descricaoFuncao = (funcao === 'Mago') ? 'Usa magia' : 'Usa força';
    logOutput(`IF ternário (Descrição da Função): ${descricaoFuncao}`);

    // 13 - Criar um IF
    if (idade > 18) {
      logOutput('Adulto');
    }

    // 14 - Criar um switch
    const regiao = 'norte';
    switch (regiao) {
      case 'norte':
        logOutput('Região: Norte');
        break;
      case 'sul':
        logOutput('Região: Sul');
        break;
      default:
        logOutput('Região desconhecida');
    }

    // 15 - Criar um for
    for (let i = 0; i < 3; i++) {
      logOutput(`For Loop, iteração ${i}`);
    }

    // 16 - Criar um while
    let j = 0;
    while (j < 3) {
      logOutput(`While Loop, iteração ${j}`);
      j++;
    }

    // 17 - Criar um map
    const niveis = [1, 2, 3];
    const niveisDuplicados = niveis.map(nivel => nivel * 2);
    logOutput(`Map (Níveis Duplicados): ${niveisDuplicados}`);

    // 18 - Criar um for each
    niveis.forEach(nivel => {
      logOutput(`For Each (Nível): ${nivel}`);
    });

    // 19 - Criar um LOOP FOR IN
    const personagem = { nome: 'Regulus', funcao: 'Guerreiro', nivel: 5 };
    for (let chave in personagem) {
      logOutput(`For In (Personagem), chave: ${chave}, valor: ${personagem[chave]}`);
    }

    // 20 - Criar um ARRAY
    const nomes = ['Regulus', 'Akira', 'Stella'];
    logOutput(`Array (Nomes): ${nomes}`);

    // 21 - Criar um ARRAY DE Objetos
    const personagens = [{ nome: 'Regulus', funcao: 'Guerreiro' }, { nome: 'Akira', funcao: 'Mago' }];
    logOutput(`Array de Objetos (Personagens): ${personagens}`);

    // 22 - Utilizar a função SET
    const nomesUnicos = new Set(['Regulus', 'Akira', 'Stella', 'Regulus']);
    logOutput(`Set (Nomes Únicos): ${Array.from(nomesUnicos)}`);

    // 23 - Realizar uma comparação de objetos
    const obj1 = { nome: 'Regulus' };
    const obj2 = { nome: 'Regulus' };
    const saoObjetosIguais = (JSON.stringify(obj1) === JSON.stringify(obj2));
    logOutput(`Comparação de Objetos (São Iguais): ${saoObjetosIguais}`);

    // 24 - Utilizar craze ` e $ para concatenar uma string
    const nomeExemplo = 'Regulus';
    const saudacao = `Olá, ${nomeExemplo}!`;
    logOutput(`Template String: ${saudacao}`);

    // 25 - Utilizar ?. para exibir uma propriedade de um objeto
    const usuario = { info: { nome: 'Regulus' } };
    logOutput(`Optional Chaining: ${usuario.info?.nome}`);
  }, []);

  return (
    <div>
      <h1>Saídas do console</h1>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>{log}</li>
        ))}
      </ul>
    </div>
  );
};

/* Utilizei o estado do React (useState) e o efeito (useEffect) para armazenar 
e exibir as saídas do console diretamente na interface do usuário. */

export default App;
