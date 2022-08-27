# Atividade03-Processo-Seletivo-C3C-Software
Essa atividade tem como objetivo testar seus conhecimento em desenvolvimento com Javascript!  A atividade é INDIVIDUAL :)  A prova será liberada por um dia inteiro, começando 23:59 da quinta (25/08) e finalizando 23:59 da sexta (26/08).  A organização do seu código(formatação, nomes de variáveis, identação...) será considerada na avaliação!  A entrega será, obrigatoriamente, por um link para um repositório no github. É bem simples criar um repositório e subir o seu código das questões, sugiro pesquisar no youtube como fazer.  Não serão aceitos repositórios com o conteúdo editado após a data de término da atividade!

# Questão 01 - Tipos de Triângulo
Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:<br> 

.Equilátero: Os três lados são iguais.<br>
.Isósceles: Dois lados iguais.<br>
.Escaleno: Todos os lados são diferentes.<br>

Crie um código JS que receba os comprimentos dos lados de um triângulo através de inputs e retorne sua classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo)<br><br>

# Questão 02 - Bhaskara
Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto, elabore um método em JS cujo objetivo é resolver a fórmula de Bhaskara.<br> 

Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3, -5, 12.<br> 

Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo que os resultados sejam iguais.<br>

Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase: “Delta é negativo”.<br><br>

# Questão 03 - Sistema de Notas
Construa um código JS que receba uma valor através de um input para um sistema de notas de uma instituição que possui a seguinte política de classificação:<br> 

* Todo aluno recebe uma nota de 0 a 100.<br> 
* Alunos com nota abaixo de 40 são reprovados.<br> 
* As notas possuem a seguinte regra de arredondamento:<br> 
	* Se a diferença entre a nota e o próximo múltiplo de 5 for menor que 3, arredondar a nota para esse próximo múltiplo de 5.<br> 
	* Se a nota for abaixo de 38, não é feito nenhum arredondamento pois esta nota resulta na reprovação do aluno.<br> 

Por exemplo, a nota 84 será arredondada para 85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou seja, que evite a reprovação do aluno.<br>
No caso de a nota ser 38, o arredondamento é possível pois atingirá 40 e o aluno será aprovado.<br><br>

# Questão 04 - LuidyMoura
Criar um método que irá receber um valor inteiro como argumento e retornar um array com uma contagem até o argumento como limite.<br>

Quando o número for divisível por 5, deve-se substituir o número pela String “ Luidy” e caso o número seja divisível por 9, deve-se substituir o número por  “Moura”.
Se o número for divisível por ambos deve-se colocar “LuidyMoura”.<br>

Exemplo de retorno:<br>

Entrada:<br>
45<br>

Saída:<br>
1, 2, 3, 4, Luidy, 6, 7, 8, Moura, Luidy, 11, 12, 13, 14, Luidy, 16, 17, Moura, 19, Luidy, 21, 22, 23, 24, Luidy, 26, Moura, 28, 29, Luidy, 31, 32, 33, 34, Luidy, Moura, 37, 38, 39, Luidy, 41, 42, 43, 44, LuidyMoura.