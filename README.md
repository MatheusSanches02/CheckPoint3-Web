# CheckPoint3-Web
Objetivo:
Construir umconjuntode páginasutilizando HTML5/CSS/JSdentro dos padrões estabelecidos pelo W3C.A estrutura e estilização serão realizadas através demodelos disponibilizados.Toda lógica será feita com base em um arquivo único .JS, que está baseado nos conteúdos ensinados durante as aulas do professor Alexandre.

Regras:
1–Devem ser utilizadas todas as ferramentas disponibilizadas durante a primeira etapa de ensino para a confeção dessas páginasex: VS Code, git e github.
2–Esse checkpoint é em grupo, para isso o utilizem o grupo do Challenge.
3–O projeto deve respeitar as boas práticas de desenvolvimento.
4–É obrigatório a utilização de CSS no desenvolvimento do projeto.
5–Esse checkpoint só pode ter um único arquivo .js, toda e qualquer função deve ser criada neste arquivo.
6-Essa prova começa na aula do professor Alexandreno dia 27/05 e pode ser terminado até o dia 30/05 às 20:00hs.

–Tabela de cores para ser utilizada nas páginas.
Verde #3d9db3
Cinza #333
Cinza #f7f7f7
Amarelo #cbd518
Branco #fff

1) menu:
-Crie um menu onde seja possível a navegação pela páginas.
-Siga o padrão de cores estabelecido para a estilização.
-A página atual deve estar marcada no menu.
-O menu deve estar presente em todas as páginas.

2) index.html:
-Crie um Form que deve conter os campos e-mail e senha
-Os inputs do form devem conter os patterns HTML para padronização de input de dados.
-A estilização deve se parecercom a da imagemabaixo, utilize a tabela de cores na opção 8 para se basear.
-Utilize técnicas que permitam ao HTML realizar a verificação do padrão antes da validação do JS.
-A página deve ser responsiva.
Enviar para o arquivo .JS e a função que irá receber o usuário e senha terá o nome validar:
-Nessa  função  terá  um  ou  dois  vetores,  que  já  estará(ão)  armazenado(s)  os  usuários  e  senhas previamente cadastrados (leia a obsabaixo para tomar a decisão se irá utilizar um ou dois vetores para isso), nesse caso os usuários serão os integrantes do grupo, conforme abaixo:
-O usuário será o seu primeiro nome e a senha a matrícula de cada um na FIAP.
-Após  ter  os  usuários  e  senhas  previamente  armazenadosno  vetor  dentro  do  JS,  quando  na  tela index.html essa função for acionada através do botão com a ação click, deverá verificar se o usuário e senha estão previamente cadastrados, se sim, irá direcionar para a página portal.html.
Obs.:Esse exercício é paravalidar o usuário  e senha no  vetor, e servirá para  testar a  lógica e o que aprenderam  durante  o  semestre,  então  pode  não  ser  uma  realidade  de  uma  validação de  usuário  e senha,  mesmo  porquê,  validar  usuário  e  senha,  tem  como  boa  prática  buscar  usuários  previamente cadastrados e armazenados em um banco de dados. 
Atenção, pois se utilizar apenas um vetor, pensar em como irá armazenar, por exemplo, casa zero e um corresponde a usuário e senha, casa dois e três outro usuário e senha, consequentemente ou pode utilizar dois vetores, sendo por exemplo a mesma posição de cada vetor, para armazenar em um o usuário e outro a senha, crie a melhor lógica possível, exercite, o que importa para esse momento é funcionar e eu envio um feedback da minha análise.
Alexandre –Pontuação 1,25pontos

2) novocadastrologin.html:
-Essa página terá apenas dois campos:-Usuário e senha.
-Os inputs do form devem conter os patterns HTML para padronização de input de dados.
-A estilização deve se parecercom a da imagem abaixo, utilize a tabela de cores na opção 8 para se basear.
-Utilize técnicas que permitam ao HTML realizar a verificação do padrão antes da validação do JS.
-A página deve ser responsiva.
-Adicione esse usuário e senha no vetor que você já criou e constam todos os integrantes do seu grupo, ao final da inserção, mostrar uma frase personalizadainformando o nome do usuário que foi inserido e todos os que já estavam no vetor, masatenção, não mostrar a senha dos usuários, apenas os que estão cadastrados.

3) faleconosco.html:
-Crie um Form que deve conter os campos assunto, nome, email e comentário.
-Os inputs do form devem conter os patterns HTML para padronização de input de dados.
-A estilização deve se parecer com a da imagem abaixo, utilize a tabela de cores na opção 8 para se basear.
-Utilize técnicas que permitam ao HTML realizar a verificação do padrão antes da validação do JS.
-A página deve ser responsiva.

Neste página aplique o JS abaixo, para simular que alguém que esteja no site, consiga enviar uma reclamação ou pedir algo para o responsável da página, mas atenção, não é necessário o envio  de e-mail, estamos utilizando como treino nesse checkpoint:
-A função validardados.js, terá as características abaixo:
-Todos  os  quatro  valores  recebidos  nessa  função  que  foram  enviados  pelo  formulário,  deverão  ser armazenados em variáveis.
-Após verificar se realmente todos os campos estão preenchidos, mesmo que já tenha colocado a regra no formulário dos campos do HTML5:
-Se ao menos um campo está em branco, devolver para o usuário que ao menos um campo está em branco (não é necessário informar qual campo está em branco, caso queira, pode fazer).
-Se nenhum campo estiver em branco, retornar para o usuário a frase no alert “Todos os campos foram preenchidos, essa página ainda não envia e-mail, mas caso enviasse já estaria garantido que os campos foram preenchidos”, após direcionar o usuário para a página portal.html.

4) portal.html:
-A página portal deve conter cardscom a imagem dos integrantes do grupocom seus nomes e RM.
-A estilização deve seguirascores da tabela na opção 8 para se basear.
-A página deve ser responsiva.

5)No arquivo .JS, deverá ter um comentário do tipo de mais de uma linha, utilizando /**/, colocando no comentário no início do arquivo, aonde achar mais adequado, os nomes de todos os integrantes e qualquer outro comentário que achar necessário para o professor Alexandre.
