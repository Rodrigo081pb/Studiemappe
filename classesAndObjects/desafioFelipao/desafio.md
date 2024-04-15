**O que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e objetos

## Objetivo :

Criar uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades

- nome
- idade
- tipo (ex: mago, monge, guerreiro, ninja)

Além disso, deve ter um método chamado atacar que deve atender os seguintes requisitos:

- Exibir a mensagem: "O {tipo} atacou usando {ataque}"

- Aonde o {tipo} deve ser concatenando o tipo que está na propriedade classe

- E no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> No ataque deve exibir (usou magia)
se guerreiro -> no ataque deve exibir (usou espada)
e monge -> no ataque deve exibir (usou artes marciais)
se ninha -> no ataque deve exibir (usou shuriken)

## Saída

"O {tipo}" atacou usando { ataque}

ex: mago atacou usando magia
guerreiro atacou usando espada
