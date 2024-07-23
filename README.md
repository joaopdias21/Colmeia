Para chegar ao código de automatizações, é só seguir esse caminho entre as pastas que estão aqui no git cypress\e2e\Testes Colmeia. Na pasta Testes Colmeia já consegue enxergar os testes.

Para rodar os testes precisa de alguns pré requisitos como:

O aplicativo Visual Studio Code, caso não tenha, basta acessar o link https://code.visualstudio.com/download e seguir o passo a passo para realizar o download. O Git, você pode verificar se já tem o git instalado em sua máquina usando, abrindo o terminal e escrevendo "git --version", caso não tenha, basta acessar https://git-scm.com/downloads e realizar o download

Após a instalação dos aplicativos você criará uma pasta onde deseja colocar seus projetos, abrindo o aplicativo visual studio code, e na opção "Arquivo - Abrir pasta" você colocará a pasta criada.

Após abrir a pasta no código VS, na opção "View - Terminal" ou teclando 'CTRL+', você abrirá o terminal. Abrindo o terminal você irá digitar "git clone https://github.com/joaopdias21/Colmeia " que isso ira clonar o projeto em sua maquina.

Após clonar o projeto, se você não tiver o cypress instalado na maquina, no terminal digite "npm install cypress --save-dev" e espere instalar o cypress.

Após instalado o cypress, basta dar o comando "npx cypress open", que vai abrir a interface gráfica do cypress em modo interativo. Após o comando deve aparecer essa tela: ![image](https://github.com/user-attachments/assets/16709a09-f649-4577-92f0-0a8d4ad13c96)
, clicando em E2E Testing, você escolhe o navegador que deseja realizar o teste (OS TESTES FORAM REALIZADOS NO NAVEGADOR CHROME). Após escolher o navegador de sua preferência, você abrirá os arquivos de teste para realizar a automação, com isso, basta clicar no arquivo que deseja rodar a automação, que irá rodar.

OBS: Caso ao abrir o cypress e não encontrar os arquivos de teste:

Após abrir o cypress com o comando "npx cypress open" você deve escolher E2E Testing e irá aparecer uma tela ![image](https://github.com/user-attachments/assets/3bf1bc54-2e76-4f70-ab41-496eb78ec8f3)


Clicando em "Scaffold example specs" deverá aparecer a seguinte tela ![image](https://github.com/user-attachments/assets/15957dbd-afcd-4088-9e7d-040e6b15dac9)
, basta clicar em OK.

Após isso em seu IDE, deverá aparecer outra pasta chamada cypress, dessa forma ![image](https://github.com/user-attachments/assets/17bea6fd-e9f9-4fb3-aec7-393c43159b8d)
. 
Após aparecer a pasta, basta mover os arquivos de teste para este caminho cypress\e2e\1-getting-started. Após os arquivos movidos voce ja o enxerga na tela do cipreste para rodar os testes.

Além disso, você pode acessar o vídeo através do drive mostrando o passo a passo: https://drive.google.com/file/d/1BTR0DEuzf-aw5LRQ-cNbJeo1tiubU3ur/view?usp=sharing
