
import { Question } from './types';

export const QUIZ_DATABASE: Question[] = [
  // --- MICROSOFT WORD (10 Questões) ---
  {
    id: 'w1',
    topic: 'Word',
    question: 'Qual é a finalidade técnica primordial do Microsoft Word no fluxo de trabalho corporativo?',
    options: [
      'Compilação de códigos-fonte e depuração de scripts em ambiente de baixo nível.',
      'Processamento de texto de alta complexidade e editoração de documentos formais.',
      'Estruturação de bancos de dados relacionais com suporte a chaves primárias.',
      'Desenvolvimento de planilhas de cálculo financeiro com suporte a tabelas dinâmicas.',
      'Gerenciamento de tráfego de rede e monitoramento de protocolos de comunicação.'
    ],
    correctAnswer: 1,
    explanation: 'O Word é um processador de texto focado na criação, edição e formatação de documentos.'
  },
  {
    id: 'w2',
    topic: 'Word',
    question: 'O recurso "Mala Direta" é utilizado tecnicamente para qual finalidade?',
    options: [
      'Envio automático de arquivos pesados via protocolos de transferência FTP.',
      'Criação em lote de documentos personalizados usando uma base de dados.',
      'Sincronização de calendários entre diferentes usuários de uma rede local.',
      'Criptografia de documentos confidenciais para proteção contra intrusos.',
      'Correção automática de erros de sintaxe em códigos de programação web.'
    ],
    correctAnswer: 1,
    explanation: 'A Mala Direta integra dados (como nomes e endereços) a um modelo de documento fixo.'
  },
  {
    id: 'w3',
    topic: 'Word',
    question: 'Qual a diferença conceitual entre uma "Quebra de Página" e uma "Quebra de Seção"?',
    options: [
      'A quebra de página encerra o arquivo, enquanto a de seção inicia um novo.',
      'A quebra de página apenas pula de folha; a de seção permite layouts distintos.',
      'A quebra de seção apaga a formatação anterior e a de página mantém o estilo.',
      'Ambas realizam a mesma função técnica sem qualquer distinção de processamento.',
      'A quebra de seção é usada exclusivamente para inserir imagens em alta resolução.'
    ],
    correctAnswer: 1,
    explanation: 'Quebras de seção permitem aplicar margens, orientações e cabeçalhos diferentes no mesmo arquivo.'
  },
  {
    id: 'w4',
    topic: 'Word',
    question: 'O recurso "Pincel de Formatação" realiza qual ação no processamento do documento?',
    options: [
      'Desenha formas vetoriais sobre o texto para fins de destaque visual.',
      'Replica atributos estéticos de um texto selecionado para outro trecho.',
      'Verifica a integridade ortográfica de parágrafos em diferentes idiomas.',
      'Altera a cor do fundo da página sem modificar a estrutura das fontes.',
      'Insere marcas d\'água dinâmicas baseadas nos metadados do proprietário.'
    ],
    correctAnswer: 1,
    explanation: 'O Pincel copia a formatação (fonte, tamanho, cor) e a aplica onde o usuário clicar.'
  },
  {
    id: 'w5',
    topic: 'Word',
    question: 'Como se define tecnicamente o recurso "Controlar Alterações"?',
    options: [
      'Um firewall interno que impede edições por usuários não autorizados.',
      'Um registro histórico que marca todas as adições e exclusões no texto.',
      'Uma ferramenta de busca que localiza sinônimos para palavras repetidas.',
      'Um algoritmo de compressão que reduz o tamanho final do arquivo .docx.',
      'Um sistema de backup que salva versões do documento a cada cinco segundos.'
    ],
    correctAnswer: 1,
    explanation: 'O controle de alterações permite que revisores vejam o que foi modificado no original.'
  },
  {
    id: 'w6',
    topic: 'Word',
    question: 'Para gerar um "Sumário Automático" de forma eficiente, o usuário deve:',
    options: [
      'Digitar manualmente os nomes dos capítulos e as respectivas páginas.',
      'Aplicar "Estilos de Título" hierárquicos nos tópicos de todo o documento.',
      'Utilizar a ferramenta de busca para indexar palavras em negrito e itálico.',
      'Habilitar a macro de numeração que identifica parágrafos curtos no texto.',
      'Converter o arquivo para o formato PDF antes de iniciar a indexação física.'
    ],
    correctAnswer: 1,
    explanation: 'O Word constrói o sumário baseado na estrutura de Estilos (Título 1, Título 2, etc).'
  },
  {
    id: 'w7',
    topic: 'Word',
    question: 'Qual a principal diferença entre os formatos de arquivo .docx e .dotx?',
    options: [
      'O .docx é um arquivo de imagem e o .dotx é um arquivo de texto simples.',
      'O .docx é um documento comum; o .dotx é um modelo de documento base.',
      'O .dotx possui criptografia de nível militar e o .docx é de acesso público.',
      'O .docx permite o uso de macros e o .dotx bloqueia qualquer script interno.',
      'Ambos são idênticos, mudando apenas a compatibilidade com sistemas Linux.'
    ],
    correctAnswer: 1,
    explanation: '.dotx (Word Template) serve como base para criar novos documentos .docx com formatação pronta.'
  },
  {
    id: 'w8',
    topic: 'Word',
    question: 'O comando "Recuar Parágrafo" no Word atua especificamente sobre:',
    options: [
      'Aumentar o tamanho da fonte para que ela ocupe toda a largura da linha.',
      'O distanciamento entre a margem da página e o início do conteúdo textual.',
      'A remoção de espaços duplos entre as palavras de uma mesma sentença.',
      'O alinhamento vertical do texto em relação ao topo e ao rodapé da folha.',
      'A inserção de colunas estilo jornalístico em seções específicas da página.'
    ],
    correctAnswer: 1,
    explanation: 'O recuo define a posição do texto em relação às margens esquerda e direita.'
  },
  {
    id: 'w9',
    topic: 'Word',
    question: 'A ferramenta "Referência Cruzada" serve fundamentalmente para:',
    options: [
      'Traduzir o documento automaticamente para mais de 60 idiomas distintos.',
      'Vincular dinamicamente um item do texto a outro local dentro do documento.',
      'Comparar dois arquivos diferentes para identificar plágios ou duplicatas.',
      'Baixar referências bibliográficas diretamente de servidores da internet.',
      'Substituir palavras complexas por termos mais simples em todo o arquivo.'
    ],
    correctAnswer: 1,
    explanation: 'Permite citar um número de página ou título que se atualiza sozinho se o item mudar de lugar.'
  },
  {
    id: 'w10',
    topic: 'Word',
    question: 'Qual o comportamento padrão do Word ao utilizar a tecla "Tab" no início de um parágrafo?',
    options: [
      'Insere um caractere de espaço rígido que impede a quebra automática de linha.',
      'Aplica um recuo de primeira linha conforme as configurações da régua visual.',
      'Cria automaticamente uma nova seção com formatação de página em modo paisagem.',
      'Ativa o modo de revisão ortográfica para o parágrafo selecionado no momento.',
      'Move o cursor para o final do documento para agilizar a inserção de anexos.'
    ],
    correctAnswer: 1,
    explanation: 'A tecla Tab é o atalho padrão para aplicar o recuo de primeira linha nos parágrafos.'
  },

  // --- MICROSOFT EXCEL (10 Questões) ---
  {
    id: 'e1',
    topic: 'Excel',
    question: 'Qual é o conceito fundamental de uma "Célula" no Microsoft Excel?',
    options: [
      'Uma unidade de memória utilizada para armazenar cache do processador.',
      'O ponto de interseção entre uma coluna vertical e uma linha horizontal.',
      'Um arquivo individual dentro de uma pasta de trabalho criptografada.',
      'Um comando de voz utilizado para automatizar a inserção de dados.',
      'A menor parte de uma imagem inserida em uma planilha de cálculos.'
    ],
    correctAnswer: 1,
    explanation: 'Células são identificadas pela combinação de letra (coluna) e número (linha).'
  },
  {
    id: 'e2',
    topic: 'Excel',
    question: 'Para fixar uma referência de célula e impedir que ela mude ao arrastar uma fórmula, utiliza-se:',
    options: [
      'O símbolo de porcentagem (%) antes da identificação da linha e da coluna.',
      'O símbolo de cifrão ($) para criar uma chamada referência absoluta.',
      'Colchetes triplos ao redor do endereço da célula selecionada na grade.',
      'O prefixo "FIX" antes de cada coordenada de célula dentro da função.',
      'A tecla "Ctrl" pressionada simultaneamente ao clique do mouse na célula.'
    ],
    correctAnswer: 1,
    explanation: '$A$1 trava tanto a coluna quanto a linha durante a cópia de fórmulas.'
  },
  {
    id: 'e3',
    topic: 'Excel',
    question: 'Qual a finalidade técnica da função "PROCV" (VLOOKUP)?',
    options: [
      'Proteger células sensíveis contra edições por usuários não administradores.',
      'Pesquisar um valor na primeira coluna de uma tabela e retornar um dado lateral.',
      'Promover a conversão de textos simples em valores numéricos decimais.',
      'Projetar gráficos de dispersão baseados em variáveis temporais complexas.',
      'Programar macros que executam tarefas de limpeza de dados em lote.'
    ],
    correctAnswer: 1,
    explanation: 'PROCV busca verticalmente um valor e retorna informações de colunas à direita.'
  },
  {
    id: 'e4',
    topic: 'Excel',
    question: 'O recurso "Tabela Dinâmica" é utilizado primordialmente para:',
    options: [
      'Alterar a cor das células baseando-se em condições lógicas pré-definidas.',
      'Resumir, analisar e explorar grandes volumes de dados de forma interativa.',
      'Criar animações fluidas para apresentações de resultados financeiros.',
      'Conectar a planilha a servidores de jogos online para processamento gráfico.',
      'Gerar senhas aleatórias para proteção de diretórios no sistema operacional.'
    ],
    correctAnswer: 1,
    explanation: 'Tabelas Dinâmicas permitem agrupar e totalizar dados rapidamente sem fórmulas manuais.'
  },
  {
    id: 'e5',
    topic: 'Excel',
    question: 'No Excel, o erro "#VALOR!" geralmente indica que:',
    options: [
      'A fórmula faz referência a uma célula que foi excluída do arquivo.',
      'O tipo de dado usado na fórmula é incompatível com a operação solicitada.',
      'A célula de destino não possui largura suficiente para exibir o resultado.',
      'A função utilizada não existe na versão atual do software instalado.',
      'Ocorreu uma divisão matemática por zero, o que é logicamente impossível.'
    ],
    correctAnswer: 1,
    explanation: 'Acontece, por exemplo, ao tentar somar um número com uma célula que contém texto.'
  },
  {
    id: 'e6',
    topic: 'Excel',
    question: 'A ferramenta "Formatação Condicional" permite ao usuário:',
    options: [
      'Definir quais usuários podem visualizar o conteúdo de cada célula.',
      'Alterar a aparência de células automaticamente com base em regras lógicas.',
      'Instalar plugins externos que aumentam a velocidade de cálculo do Excel.',
      'Configurar a impressora para usar menos tinta em planilhas muito grandes.',
      'Mudar o idioma das fórmulas de português para inglês em tempo real.'
    ],
    correctAnswer: 1,
    explanation: 'Permite, por exemplo, deixar células em vermelho se o valor for negativo.'
  },
  {
    id: 'e7',
    topic: 'Excel',
    question: 'O recurso "Congelar Painéis" serve fundamentalmente para:',
    options: [
      'Bloquear a edição da planilha para evitar alterações acidentais.',
      'Manter linhas ou colunas visíveis enquanto o restante da planilha é rolado.',
      'Suspender o cálculo automático de fórmulas para economizar memória RAM.',
      'Ocultar planilhas inteiras que contêm cálculos de suporte confidenciais.',
      'Interromper a conexão de dados com fontes externas em tempo de execução.'
    ],
    correctAnswer: 1,
    explanation: 'Útil para manter o cabeçalho sempre visível ao navegar em tabelas extensas.'
  },
  {
    id: 'e8',
    topic: 'Excel',
    question: 'A extensão de arquivo padrão para pastas de trabalho habilitadas para macros é:',
    options: [
      '.xlsx',
      '.xlsm',
      '.csv',
      '.pdf',
      '.exe'
    ],
    correctAnswer: 1,
    explanation: 'Arquivos .xlsx não salvam macros por segurança; deve-se usar .xlsm.'
  },
  {
    id: 'e9',
    topic: 'Excel',
    question: 'Qual a principal diferença entre "Filtrar" e "Classificar" dados no Excel?',
    options: [
      'Filtrar remove os dados permanentemente; Classificar apenas os esconde.',
      'Filtrar exibe apenas dados específicos; Classificar organiza a ordem deles.',
      'Classificar altera a cor das células; Filtrar altera o valor das fórmulas.',
      'Ambos realizam a mesma função de organização, mudando apenas o ícone.',
      'Filtrar exige o uso de macros complexas; Classificar é uma função básica.'
    ],
    correctAnswer: 1,
    explanation: 'Classificar organiza (A-Z ou 0-9); Filtrar oculta o que não atende ao critério.'
  },
  {
    id: 'e10',
    topic: 'Excel',
    question: 'A função "SOMA(A1:A10)" no Excel realiza qual operação técnica?',
    options: [
      'Soma exclusivamente os valores contidos nas células A1 e A10.',
      'Soma todos os valores numéricos presentes no intervalo de A1 até A10.',
      'Conta quantas células entre A1 e A10 possuem qualquer tipo de conteúdo.',
      'Multiplica os valores de A1 e A10 e divide o resultado por dez.',
      'Verifica se os valores em A1 e A10 são idênticos e retorna um booleano.'
    ],
    correctAnswer: 1,
    explanation: 'Os dois pontos (:) indicam um intervalo contínuo de células.'
  },

  // --- MICROSOFT POWERPOINT (10 Questões) ---
  {
    id: 'p1',
    topic: 'PowerPoint',
    question: 'Como se define tecnicamente o "Slide Mestre" no Microsoft PowerPoint?',
    options: [
      'O primeiro slide da apresentação, obrigatoriamente contendo o título.',
      'O slide hierárquico que armazena informações sobre o tema e layouts.',
      'Um slide oculto que serve apenas para armazenar anotações do orador.',
      'Uma ferramenta de inteligência artificial que gera slides automaticamente.',
      'O slide final da apresentação que contém os créditos e agradecimentos.'
    ],
    correctAnswer: 1,
    explanation: 'Alterações no Slide Mestre repercutem em todos os slides que seguem aquele layout.'
  },
  {
    id: 'p2',
    topic: 'PowerPoint',
    question: 'Qual a distinção técnica entre "Transição" e "Animação"?',
    options: [
      'Transição ocorre entre slides; Animação ocorre em objetos dentro do slide.',
      'Animação altera a cor do slide; Transição altera a ordem das páginas.',
      'Transição é automática; Animação exige obrigatoriamente o clique do mouse.',
      'Não há diferença técnica, sendo termos sinônimos na suíte de escritório.',
      'Animação é usada apenas para vídeos; Transição é usada apenas para fotos.'
    ],
    correctAnswer: 0,
    explanation: 'Transições afetam a mudança de slide. Animações afetam textos, imagens e formas.'
  },
  {
    id: 'p3',
    topic: 'PowerPoint',
    question: 'O recurso "Anotações do Orador" tem como finalidade principal:',
    options: [
      'Exibir legendas automáticas para o público durante a apresentação.',
      'Fornecer textos de apoio visíveis apenas para quem está apresentando.',
      'Imprimir o conteúdo integral dos slides em formato de lista de tópicos.',
      'Traduzir a fala do apresentador para outros idiomas em tempo real.',
      'Gravar o áudio da apresentação para futura exportação em formato MP3.'
    ],
    correctAnswer: 1,
    explanation: 'As notas aparecem no Modo de Exibição do Apresentador, mas não no telão.'
  },
  {
    id: 'p4',
    topic: 'PowerPoint',
    question: 'Para organizar visualmente fluxogramas e processos complexos, recomenda-se:',
    options: [
      'Desenhar manualmente cada linha e quadrado usando a ferramenta de pincel.',
      'Utilizar o recurso SmartArt para criar diagramas lógicos e estruturados.',
      'Importar tabelas do Excel e converter cada célula em uma imagem isolada.',
      'Inserir caixas de texto soltas e alinhá-las usando apenas a percepção visual.',
      'Utilizar macros de animação que geram desenhos aleatórios na tela.'
    ],
    correctAnswer: 1,
    explanation: 'SmartArt é a ferramenta ideal para representar graficamente listas e processos.'
  },
  {
    id: 'p5',
    topic: 'PowerPoint',
    question: 'O "Classificador de Slides" é um modo de exibição útil para:',
    options: [
      'Editar minuciosamente os detalhes de uma imagem em alta resolução.',
      'Visualizar miniaturas de todos os slides e reorganizar sua sequência.',
      'Corrigir erros gramaticais em todos os textos da apresentação de uma vez.',
      'Aplicar senhas de proteção em slides específicos que contenham dados.',
      'Transmitir a apresentação ao vivo para uma audiência remota via web.'
    ],
    correctAnswer: 1,
    explanation: 'Este modo exibe uma grade com todos os slides, facilitando a reorganização por arraste.'
  },
  {
    id: 'p6',
    topic: 'PowerPoint',
    question: 'O formato de arquivo .ppsx diferencia-se do .pptx pois:',
    options: [
      'O .ppsx é um arquivo de som e o .pptx é um arquivo de vídeo digital.',
      'O .ppsx inicia a apresentação direto; o .pptx abre no modo de edição.',
      'O .pptx permite apenas 10 slides, enquanto o .ppsx permite ilimitados.',
      'O .ppsx é um formato antigo e o .pptx é o formato exclusivo da nuvem.',
      'Ambos são idênticos, mudando apenas a capacidade de compressão de dados.'
    ],
    correctAnswer: 1,
    explanation: '.ppsx (PowerPoint Show) é focado na exibição direta, sem passar pelo editor.'
  },
  {
    id: 'p7',
    topic: 'PowerPoint',
    question: 'A ferramenta "Testar Intervalos" permite ao usuário:',
    options: [
      'Verificar se há vírus ou malwares escondidos dentro do arquivo de slides.',
      'Praticar a fala e registrar o tempo gasto em cada slide para automação.',
      'Configurar o tempo de descanso que o computador deve ter entre as edições.',
      'Medir a velocidade da conexão de internet durante uma reunião online.',
      'Avaliar a qualidade das cores para garantir uma boa projeção no telão.'
    ],
    correctAnswer: 1,
    explanation: 'O PowerPoint grava o tempo de cada slide para que a apresentação corra sozinha depois.'
  },
  {
    id: 'p8',
    topic: 'PowerPoint',
    question: 'O recurso "Álbum de Fotografias" serve especificamente para:',
    options: [
      'Pesquisar imagens de domínio público em repositórios da Microsoft na web.',
      'Criar automaticamente uma sequência de slides a partir de arquivos de imagem.',
      'Aplicar filtros de tratamento fotográfico similares aos de redes sociais.',
      'Reduzir a resolução de todas as fotos para diminuir o tamanho do arquivo.',
      'Converter slides de texto em imagens estáticas para evitar edições futuras.'
    ],
    correctAnswer: 1,
    explanation: 'Agiliza a criação de apresentações baseadas inteiramente em fotos.'
  },
  {
    id: 'p9',
    topic: 'PowerPoint',
    question: 'Em uma animação, qual a função do "Painel de Animação"?',
    options: [
      'Escolher cores mais vibrantes para os objetos que se movem na tela.',
      'Gerenciar a ordem, o tempo e o gatilho de cada efeito aplicado no slide.',
      'Desenhar trajetórias complexas que os objetos devem seguir na página.',
      'Bloquear a execução de animações em computadores com pouco hardware.',
      'Sincronizar a música de fundo com o aparecimento de novos parágrafos.'
    ],
    correctAnswer: 1,
    explanation: 'No painel, você define se a animação começa "Ao Clicar", "Com a Anterior" ou "Após a Anterior".'
  },
  {
    id: 'p10',
    topic: 'PowerPoint',
    question: 'A função "Hiperlink" no PowerPoint pode ser vinculada a:',
    options: [
      'Apenas endereços de sites externos que utilizem o protocolo de segurança SSL.',
      'Páginas da web, outros slides do mesmo arquivo ou documentos externos.',
      'Exclusivamente arquivos de vídeo armazenados na pasta raiz do sistema.',
      'Comandos de voz que executam ações pré-programadas pelo usuário final.',
      'Teclas específicas do teclado que mudam a cor do slide durante a fala.'
    ],
    correctAnswer: 1,
    explanation: 'Hiperlinks são versáteis e permitem navegar tanto interna quanto externamente.'
  },
  
  // --- NAVEGAÇÃO DEFENSIVA (10 Questões) ---
  {
    id: 'nd1',
    topic: 'Navegação Defensiva',
    question: 'Qual é o principal indicativo visual de que uma conexão web está utilizando criptografia de ponta a ponta via SSL/TLS?',
    options: [
      'A presença de um ícone de escudo verde na barra de tarefas inferior do Windows.',
      'O prefixo "https://" acompanhado por um ícone de cadeado fechado no navegador.',
      'A exibição de uma marca d\'água animada no fundo de todas as páginas acessadas.',
      'O carregamento automático de um plugin de segurança antes de abrir o site.',
      'A mudança da cor do cursor do mouse para indicar uma zona de navegação segura.'
    ],
    correctAnswer: 1,
    explanation: 'O HTTPS garante que os dados trocados entre o navegador e o servidor sejam cifrados.'
  },
  {
    id: 'nd2',
    topic: 'Navegação Defensiva',
    question: 'A prática de "Phishing" consiste fundamentalmente em qual técnica de ataque?',
    options: [
      'Invasão direta de servidores de arquivos usando força bruta de senhas adm.',
      'Uso de mensagens fraudulentas para induzir o usuário a revelar dados sensíveis.',
      'Monitoramento de tráfego de rede para capturar pacotes de dados não cifrados.',
      'Sobrecarga de um site com acessos simultâneos para causar indisponibilidade.',
      'Instalação de hardware físico malicioso nas portas USB de computadores públicos.'
    ],
    correctAnswer: 1,
    explanation: 'Phishing é um tipo de engenharia social que "pesca" dados através de comunicações falsas.'
  },
  {
    id: 'nd3',
    topic: 'Navegação Defensiva',
    question: 'Ao utilizar redes Wi-Fi públicas em locais como aeroportos, a prática mais segura é:',
    options: [
      'Acessar livremente contas bancárias, já que estas possuem segurança própria.',
      'Evitar o acesso a dados críticos e utilizar uma VPN para cifrar o tráfego.',
      'Acreditar que o nome da rede (ex: "Wi-Fi Grátis") garante a sua legitimidade.',
      'Desativar o firewall do sistema para melhorar a velocidade de conexão local.',
      'Compartilhar pastas de rede para facilitar a troca de arquivos com terceiros.'
    ],
    correctAnswer: 1,
    explanation: 'Redes públicas são inseguras; a VPN cria um túnel seguro de comunicação.'
  },
  {
    id: 'nd4',
    topic: 'Navegação Defensiva',
    question: 'A "Autenticação de Dois Fatores" (2FA) adiciona qual camada de segurança ao usuário?',
    options: [
      'Exige que o usuário digite a senha duas vezes seguidas para evitar erros.',
      'Solicita uma segunda forma de verificação além da senha tradicional de acesso.',
      'Bloqueia o acesso à internet caso o usuário erre a senha por três vezes.',
      'Criptografa o disco rígido do computador sempre que o navegador é aberto.',
      'Permite que dois usuários acessem a mesma conta simultaneamente de locais distintos.'
    ],
    correctAnswer: 1,
    explanation: 'O 2FA usa "algo que você sabe" (senha) e "algo que você tem" (token/celular).'
  },
  {
    id: 'nd5',
    topic: 'Navegação Defensiva',
    question: 'Qual é a função primordial dos "Cookies" de terceiros no contexto da navegação?',
    options: [
      'Armazenar senhas de forma segura para agilizar logins futuros em sites oficiais.',
      'Rastrear o comportamento do usuário entre diferentes sites para fins de perfil.',
      'Aumentar a velocidade de download de arquivos pesados via cache de disco.',
      'Protejer o computador contra scripts maliciosos injetados por pop-ups.',
      'Identificar o modelo físico da placa de vídeo para otimizar gráficos web.'
    ],
    correctAnswer: 1,
    explanation: 'Cookies de terceiros são frequentemente usados para publicidade direcionada e rastreamento.'
  },
  {
    id: 'nd6',
    topic: 'Navegação Defensiva',
    question: 'No contexto de segurança digital, o termo "Engenharia Social" refere-se a:',
    options: [
      'Desenvolvimento de algoritmos que otimizam as interações em redes sociais.',
      'Manipulação psicológica de pessoas para obter informações confidenciais.',
      'Manutenção técnica de servidores que hospedam perfis de usuários corporativos.',
      'Criação de interfaces de usuário que seguem padrões de acessibilidade universal.',
      'Estudo estatístico da demografia de usuários que acessam sites governamentais.'
    ],
    correctAnswer: 1,
    explanation: 'A engenharia social foca no "elo mais fraco" da segurança: o ser humano.'
  },
  {
    id: 'nd7',
    topic: 'Navegação Defensiva',
    question: 'O "Modo Incógnito" ou "Janela Anônima" do navegador tem como principal efeito:',
    options: [
      'Ocultar o endereço IP do usuário do servidor do site que está sendo visitado.',
      'Não salvar histórico, cookies e dados de formulários localmente no dispositivo.',
      'Criptografar toda a comunicação entre o roteador e o provedor de internet.',
      'Impedir que o provedor de internet saiba quais sites o usuário está acessando.',
      'Instalar automaticamente um antivírus temporário durante a sessão de uso.'
    ],
    correctAnswer: 1,
    explanation: 'A janela anônima protege a privacidade local (no PC), mas não a privacidade na rede.'
  },
  {
    id: 'nd8',
    topic: 'Navegação Defensiva',
    question: 'Um "Ataque Homógrafo" em URLs utiliza qual técnica para enganar usuários?',
    options: [
      'Substitui o domínio principal por uma sequência de números aleatórios de IP.',
      'Usa caracteres visualmente similares de outros alfabetos para falsificar links.',
      'Aumenta o tamanho da fonte da URL para dificultar a leitura rápida do endereço.',
      'Redireciona o tráfego para servidores proxy que comprimem imagens do site.',
      'Altera a cor da barra de endereços para imitar a identidade visual de bancos.'
    ],
    correctAnswer: 1,
    explanation: 'Ex: usar um "o" cirílico que parece um "o" latino para criar sites falsos idênticos.'
  },
  {
    id: 'nd9',
    topic: 'Navegação Defensiva',
    question: 'Qual a recomendação ideal para o gerenciamento de senhas em ambientes corporativos?',
    options: [
      'Utilizar a mesma senha em todos os sistemas para facilitar a memorização.',
      'Anotar as senhas em post-its colados no monitor para acesso rápido e fácil.',
      'Utilizar um gerenciador de senhas para criar e armazenar chaves únicas e fortes.',
      'Usar sequências simples como "123456" ou o nome da própria empresa/setor.',
      'Trocar a senha anualmente, mantendo o padrão da senha anterior com um dígito a mais.'
    ],
    correctAnswer: 2,
    explanation: 'Gerenciadores permitem ter senhas complexas e diferentes para cada serviço.'
  },
  {
    id: 'nd10',
    topic: 'Navegação Defensiva',
    question: 'O recurso de "Filtro de Conteúdo" em navegadores serve para:',
    options: [
      'Remover anúncios que utilizam excessivamente a memória RAM do computador.',
      'Bloquear o acesso a sites conhecidos por hospedar malwares ou conteúdos impróprios.',
      'Traduzir termos técnicos complexos para uma linguagem mais acessível ao leigo.',
      'Ajustar o contraste das cores do site para melhorar a leitura em ambientes escuros.',
      'Organizar os favoritos do usuário baseando-se na frequência de acesso diário.'
    ],
    correctAnswer: 1,
    explanation: 'Ferramentas como Safe Browsing protegem o usuário de cair em domínios perigosos.'
  },

  // --- SEGURANÇA & MALWARE (10 Questões) ---
  {
    id: 'sm1',
    topic: 'Segurança & Malware',
    question: 'O "Ransomware" é um tipo de código malicioso que se caracteriza por:',
    options: [
      'Exibir propagandas excessivas e não solicitadas na tela do usuário infectado.',
      'Criptografar arquivos do usuário e exigir um resgate para fornecer a chave.',
      'Monitorar silenciosamente as teclas digitadas para capturar senhas bancárias.',
      'Excluir permanentemente o sistema operacional após 24 horas de infecção ativa.',
      'Utilizar o hardware do computador para minerar criptomoedas sem autorização.'
    ],
    correctAnswer: 1,
    explanation: 'O sequestro de dados (Ransom) é a principal marca desse tipo de malware.'
  },
  {
    id: 'sm2',
    topic: 'Segurança & Malware',
    question: 'Conceitualmente, qual a principal diferença entre um "Vírus" e um "Worm"?',
    options: [
      'Vírus são inofensivos; Worms são projetados para destruir componentes físicos.',
      'Vírus precisam de um hospedeiro; Worms se propagam sozinhos pela rede.',
      'Worms infectam apenas arquivos de imagem; Vírus infectam arquivos executáveis.',
      'Não há diferença técnica, sendo ambos nomes comerciais para o mesmo software.',
      'Vírus agem apenas em servidores; Worms agem apenas em dispositivos móveis.'
    ],
    correctAnswer: 1,
    explanation: 'Worms exploram vulnerabilidades de rede para se espalharem sem interação humana.'
  },
  {
    id: 'sm3',
    topic: 'Segurança & Malware',
    question: 'Um "Cavalo de Troia" (Trojan Horse) atua de qual forma no sistema?',
    options: [
      'Protege o computador contra outros vírus simulando ser um firewall potente.',
      'Disfarça-se de um software legítimo para realizar ações maliciosas ocultas.',
      'Aumenta a velocidade do processador através de overclocking não autorizado.',
      'Organiza os arquivos do sistema para que o antivírus não consiga escaneá-los.',
      'Desliga o computador subitamente sempre que o usuário tenta abrir o navegador.'
    ],
    correctAnswer: 1,
    explanation: 'O Trojan parece algo útil (como um jogo ou utilitário), mas carrega uma carga maliciosa.'
  },
  {
    id: 'sm4',
    topic: 'Segurança & Malware',
    question: 'O malware do tipo "Spyware" tem como objetivo primordial:',
    options: [
      'Destruir a partição de inicialização do disco para impedir o uso do PC.',
      'Coletar informações sobre o usuário e enviá-las a terceiros sem consentimento.',
      'Substituir o papel de parede por mensagens de cunho político ou ativista.',
      'Bloquear o acesso às portas USB para impedir a cópia de dados corporativos.',
      'Emular o comportamento de um usuário real para clicar em anúncios pagos.'
    ],
    correctAnswer: 1,
    explanation: 'Spywares agem silenciosamente espionando atividades, logins e preferências.'
  },
  {
    id: 'sm5',
    topic: 'Segurança & Malware',
    question: 'Qual a função técnica de um "Firewall" em uma estrutura de rede?',
    options: [
      'Realizar o backup automático de todos os arquivos modificados recentemente.',
      'Controlar o tráfego de dados entre redes com base em regras de segurança.',
      'Aumentar o sinal de Wi-Fi através de algoritmos de compressão de ondas.',
      'Criptografar as pastas de documentos pessoais para evitar o acesso local.',
      'Limpar fisicamente os componentes de hardware para evitar superaquecimento.'
    ],
    correctAnswer: 1,
    explanation: 'O Firewall atua como uma barreira que decide o que entra e o que sai da rede.'
  },
  {
    id: 'sm6',
    topic: 'Segurança & Malware',
    question: 'O que caracteriza a técnica de detecção por "Heurística" em antivírus modernos?',
    options: [
      'Busca por uma sequência exata de bytes que identifica um vírus conhecido.',
      'Análise do comportamento e características do código para identificar ameaças novas.',
      'Exclusão automática de qualquer arquivo que não possua uma assinatura digital.',
      'Envio de todos os arquivos suspeitos para a nuvem para análise por humanos.',
      'Comparação do nome do arquivo com uma lista negra de softwares proibidos.'
    ],
    correctAnswer: 1,
    explanation: 'A heurística permite identificar malwares novos (Zero-day) que ainda não têm assinatura.'
  },
  {
    id: 'sm7',
    topic: 'Segurança & Malware',
    question: 'Uma "Botnet" pode ser definida tecnicamente como:',
    options: [
      'Uma rede social exclusiva para profissionais da área de robótica e IA.',
      'Uma rede de computadores infectados controlados remotamente para ataques.',
      'Um sistema de armazenamento em nuvem que utiliza robôs para organizar dados.',
      'Um conjunto de cabos de fibra óptica que ligam diferentes data centers mundiais.',
      'Uma ferramenta de chat automático utilizada por empresas para suporte técnico.'
    ],
    correctAnswer: 1,
    explanation: 'Computadores zumbis (bots) são usados em massa para ataques como o DDoS.'
  },
  {
    id: 'sm8',
    topic: 'Segurança & Malware',
    question: 'O termo "Rootkit" refere-se a um conjunto de ferramentas maliciosas que:',
    options: [
      'Aumentam o brilho da tela para consumir a bateria de notebooks rapidamente.',
      'Buscam esconder a presença de invasores e malwares no nível mais profundo do SO.',
      'Traduzem automaticamente mensagens de erro do sistema para outros idiomas.',
      'Instalam versões de teste de softwares pagos para induzir a compra futura.',
      'Recuperam arquivos que foram excluídos acidentalmente da lixeira do Windows.'
    ],
    correctAnswer: 1,
    explanation: 'Rootkits operam no núcleo (kernel) do sistema, sendo extremamente difíceis de detectar.'
  },
  {
    id: 'sm9',
    topic: 'Segurança & Malware',
    question: 'Um "Keylogger" é uma ferramenta de espionagem que atua:',
    options: [
      'Tirando fotos da webcam do usuário a cada minuto de forma oculta.',
      'Registrando todas as sequências de teclas pressionadas no teclado físico.',
      'Gravando o áudio ambiente através do microfone embutido no dispositivo.',
      'Alterando as cores das teclas virtuais para confundir a digitação de senhas.',
      'Enviando e-mails falsos em nome do usuário para todos os seus contatos.'
    ],
    correctAnswer: 1,
    explanation: 'É muito usado para roubar senhas conforme elas são digitadas.'
  },
  {
    id: 'sm10',
    topic: 'Segurança & Malware',
    question: 'Qual a recomendação primordial após a detecção de uma infecção por Malware?',
    options: [
      'Desligar o monitor imediatamente para impedir que o vírus veja o usuário.',
      'Isolar o dispositivo da rede e executar uma varredura completa com antivírus.',
      'Reiniciar o computador repetidamente até que o vírus seja removido pelo sistema.',
      'Apagar manualmente a pasta "System32" para eliminar o núcleo da infecção.',
      'Instalar cinco antivírus diferentes simultaneamente para garantir a limpeza.'
    ],
    correctAnswer: 1,
    explanation: 'Isolar da rede impede que o malware se propague ou receba comandos remotos.'
  },

  // --- TEORIA MICROSOFT 365 (10 Questões - Baseadas no Guia Visual) ---
  {
    id: 'm365_1',
    topic: 'Teoria Microsoft 365',
    question: 'Conceitualmente, o que define a "Liberdade Digital" no ecossistema Multiplataforma do Microsoft 365?',
    options: [
      'A gratuidade vitalícia de todos os softwares para usuários domésticos.',
      'A capacidade de usar a ferramenta em qualquer hardware (Desktop, Web ou Mobile).',
      'O bloqueio de hardware específico para impedir a pirataria de arquivos.',
      'A obrigatoriedade de ter o Windows instalado em todos os dispositivos da rede.',
      'A remoção de senhas de acesso para agilizar a produtividade em trânsito.'
    ],
    correctAnswer: 1,
    explanation: 'Multiplataforma significa que a experiência de uso não está presa a um único hardware.'
  },
  {
    id: 'm365_2',
    topic: 'Teoria Microsoft 365',
    question: 'O recurso "Pick up where you left off" (Continuar de onde parou) foca tecnicamente em:',
    options: [
      'Recuperar arquivos que foram excluídos acidentalmente da lixeira local.',
      'Garantir a continuidade e o estado sincronizado do documento entre dispositivos.',
      'Impedir que outros usuários editem o arquivo enquanto o autor principal está offline.',
      'Traduzir o texto automaticamente para o idioma do novo dispositivo detectado.',
      'Aumentar a resolução das imagens sempre que o arquivo é aberto em um tablet.'
    ],
    correctAnswer: 1,
    explanation: 'O estado do documento é preservado e sincronizado instantaneamente na nuvem.'
  },
  {
    id: 'm365_3',
    topic: 'Teoria Microsoft 365',
    question: 'Quais serviços são descritos como os "motores invisíveis" (Espinha Dorsal) da nuvem do 365?',
    options: [
      'O Bloco de Notas e a Calculadora do Windows.',
      'O OneDrive e o SharePoint.',
      'O Windows Explorer e o Gerenciador de Tarefas do sistema.',
      'O Prompt de Comando e o Editor de Registro do Windows.',
      'A Lixeira e a Central de Ações do sistema operacional.'
    ],
    correctAnswer: 1,
    explanation: 'OneDrive e SharePoint garantem que a "verdade" do arquivo esteja na nuvem.'
  },
  {
    id: 'm365_4',
    topic: 'Teoria Microsoft 365',
    question: 'No design centrado no usuário, o que é a "Descoberta Progressiva"?',
    options: [
      'Um tutorial obrigatório que o usuário deve completar ao abrir o app.',
      'Recursos complexos que só aparecem quando são pertinentes à tarefa atual.',
      'A atualização automática do software conforme novas funções são criadas.',
      'O aumento gradual da velocidade de processamento conforme o uso do PC.',
      'A identificação automática de erros de digitação conforme o texto progride.'
    ],
    correctAnswer: 1,
    explanation: 'Evita sobrecarregar o usuário, mostrando apenas o que é necessário no momento.'
  },
  {
    id: 'm365_5',
    topic: 'Teoria Microsoft 365',
    question: 'O Fluent Design System unifica a experiência baseando-se em quais princípios?',
    options: [
      'Cor, Brilho, Saturação, Contraste e Matiz.',
      'Luz, Profundidade, Movimento, Material e Escala.',
      'Fonte, Tamanho, Negrito, Itálico e Sublinhado.',
      'Velocidade, Memória, Disco, Rede e Processamento.',
      'Entrada, Saída, Processamento, Armazenamento e Controle.'
    ],
    correctAnswer: 1,
    explanation: 'Luz cria foco, Profundidade separa camadas e Material dá sensação física.'
  },
  {
    id: 'm365_6',
    topic: 'Teoria Microsoft 365',
    question: 'Por que a "Ribbon" (Faixa de Opções) reduz a curva de aprendizado?',
    options: [
      'Porque ela esconde todos os comandos para deixar a tela limpa.',
      'Pela padronização visual consistente entre Word, Excel e PowerPoint.',
      'Por ser um menu circular que gira conforme o movimento do mouse.',
      'Por traduzir automaticamente os ícones para emojis simplificados.',
      'Porque ela exige o uso de comandos de voz para ser operada.'
    ],
    correctAnswer: 1,
    explanation: 'Se você sabe usar o Word, já sabe navegar nos outros apps pela consistência.'
  },
  {
    id: 'm365_7',
    topic: 'Teoria Microsoft 365',
    question: 'O conceito de "Reflow" (Refluxo) na interface adaptativa serve para:',
    options: [
      'Trocar as cores do documento para economizar bateria no celular.',
      'Ajustar o texto à largura da tela para leitura confortável sem zoom manual.',
      'Enviar o documento automaticamente para a impressora mais próxima.',
      'Reduzir a qualidade das fotos para acelerar o carregamento em redes 3G.',
      'Ordenar os parágrafos por ordem alfabética automaticamente.'
    ],
    correctAnswer: 1,
    explanation: 'O conteúdo sofre "reflow" para se adaptar ao contexto de uso (ex: Mobile).'
  },
  {
    id: 'm365_8',
    topic: 'Teoria Microsoft 365',
    question: 'Como a IA (Copilot/Designer) eleva a intuitividade do sistema?',
    options: [
      'Bloqueando o acesso do usuário caso ele cometa erros de digitação.',
      'Adivinhando a intenção do usuário através de comandos em linguagem natural.',
      'Lendo em voz alta todos os menus para quem não quer olhar para a tela.',
      'Desligando o computador após 8 horas de trabalho para evitar fadiga.',
      'Substituindo completamente a necessidade de usar o teclado ou o mouse.'
    ],
    correctAnswer: 1,
    explanation: 'O usuário pode simplesmente digitar: "Transforme esses dados em tabela".'
  },
  {
    id: 'm365_9',
    topic: 'Teoria Microsoft 365',
    question: 'Na colaboração sem atrito, o que são os "Flagged Cursors" (Cursores Coloridos)?',
    options: [
      'Sinalizações de erros ortográficos graves detectados pelo Editor.',
      'Indicadores visuais de colegas editando o mesmo documento em tempo real.',
      'Marcadores de páginas que o usuário salvou como favoritos na nuvem.',
      'Ícones que indicam que o arquivo está protegido por uma senha forte.',
      'Ponteiros do mouse que mudam de cor conforme a temperatura do processador.'
    ],
    correctAnswer: 1,
    explanation: 'Ver quem está editando elimina a confusão de versões e o conflito de edições.'
  },
  {
    id: 'm365_10',
    topic: 'Teoria Microsoft 365',
    question: 'Qual a relação entre Acessibilidade e Intuitividade no Microsoft 365?',
    options: [
      'Nenhuma, são conceitos distintos que não se cruzam no software.',
      'Uma interface só é intuitiva se for inclusiva para todos (contraste, leitura, foco).',
      'Acessibilidade serve apenas para usuários com hardware muito antigo.',
      'Intuitividade é focada apenas em jovens, e acessibilidade em idosos.',
      'A acessibilidade aumenta a complexidade da interface, reduzindo a intuitividade.'
    ],
    correctAnswer: 1,
    explanation: 'Ferramentas como Alto Contraste e Foco Imersivo tornam a interface verdadeiramente intuitiva.'
  },

  // --- MICROSOFT ACCESS (10 Questões - Baseadas no Conteúdo) ---
  {
    id: 'acc_1',
    topic: 'Microsoft Access',
    question: 'Tecnicamente, o Microsoft Access é classificado como um:',
    options: [
      'Processador de Planilhas de Cálculo Flexível e Rápido.',
      'Sistema de Gerenciamento de Banco de Dados Relacional (SGBD).',
      'Editor de Imagens Vetoriais para Design Gráfico Profissional.',
      'Navegador de Internet com foco em Segurança e Privacidade.',
      'Servidor de E-mails com suporte a criptografia assimétrica.'
    ],
    correctAnswer: 1,
    explanation: 'O Access serve para armazenar grandes volumes de dados que se relacionam entre si.'
  },
  {
    id: 'acc_2',
    topic: 'Microsoft Access',
    question: 'Qual a principal vantagem do Access sobre o Excel em termos de integridade?',
    options: [
      'O Access é mais colorido e possui ícones mais modernos que o Excel.',
      'O Access garante a integridade dos dados e previne erros de duplicação.',
      'O Excel é capaz de armazenar mais linhas que um banco de dados Access.',
      'O Access funciona sem necessidade de energia elétrica ou bateria.',
      'Não há vantagem, o Excel é tecnicamente superior em todos os cenários.'
    ],
    correctAnswer: 1,
    explanation: 'Bancos de dados relacionais usam chaves e regras para evitar dados inválidos.'
  },
  {
    id: 'acc_3',
    topic: 'Microsoft Access',
    question: 'A ferramenta "Tabelas" no Access tem a função primordial de:',
    options: [
      'Gerar gráficos de pizza baseados em dados estatísticos globais.',
      'Armazenamento estruturado e relacional dos dados brutos.',
      'Filtrar mensagens de spam em contas de e-mail corporativas.',
      'Criar interfaces de usuário com botões e menus coloridos.',
      'Traduzir o banco de dados para o formato de áudio MP3.'
    ],
    correctAnswer: 1,
    explanation: 'Tabelas são onde os dados realmente residem em um formato estruturado.'
  },
  {
    id: 'acc_4',
    topic: 'Microsoft Access',
    question: 'O recurso de "Consultas" (Queries) permite ao usuário realizar:',
    options: [
      'A impressão física de todos os registros em papel de alta gramatura.',
      'Filtragem e manipulação complexa de dados através de linguagem SQL.',
      'O desenho de formas geométricas para ilustrar o banco de dados.',
      'A gravação de vídeos explicativos sobre como preencher as tabelas.',
      'A alteração da senha de login do Windows através do Access.'
    ],
    correctAnswer: 1,
    explanation: 'Consultas permitem extrair exatamente a informação necessária do mar de dados.'
  },
  {
    id: 'acc_5',
    topic: 'Microsoft Access',
    question: 'Qual a utilidade técnica dos "Formulários" no ambiente do Access?',
    options: [
      'Criptografar o banco de dados para envio via redes sociais.',
      'Oferecer interfaces amigáveis para a entrada e visualização de dados.',
      'Calcular fórmulas matemáticas complexas usando apenas o mouse.',
      'Substituir a necessidade de ter um sistema operacional instalado.',
      'Gerar modelos de contratos legais prontos para assinatura digital.'
    ],
    correctAnswer: 1,
    explanation: 'Formulários facilitam a vida de quem insere os dados, evitando erros.'
  },
  {
    id: 'acc_6',
    topic: 'Microsoft Access',
    question: 'Os "Relatórios" do Access são projetados especificamente para:',
    options: [
      'Enviar mensagens de erro automáticas para a equipe de suporte.',
      'Gerar documentos prontos para impressão baseados nos dados coletados.',
      'Compactar o banco de dados para caber em um disquete antigo.',
      'Esconder dados sensíveis de usuários que não possuem permissão.',
      'Verificar se o computador possui atualizações de hardware pendentes.'
    ],
    correctAnswer: 1,
    explanation: 'Relatórios transformam dados crus em informações organizadas para leitura.'
  },
  {
    id: 'acc_7',
    topic: 'Microsoft Access',
    question: 'Em qual cenário o uso do Access é mais indicado que o do Excel?',
    options: [
      'Para fazer uma lista de compras rápida para o final de semana.',
      'Gestão de Estoque Complexo relacionando produtos, fornecedores e vendas.',
      'Para criar uma apresentação visual de slides para uma reunião.',
      'Para escrever uma carta formal de demissão ou apresentação.',
      'Para realizar projeções financeiras simples do tipo "e se?".'
    ],
    correctAnswer: 1,
    explanation: 'O Access brilha quando há necessidade de relacionamentos complexos entre dados.'
  },
  {
    id: 'acc_8',
    topic: 'Microsoft Access',
    question: 'O suporte a "Multi-usuários" no Access em rede local permite que:',
    options: [
      'Apenas uma pessoa edite o arquivo por vez para evitar conflitos.',
      'Várias pessoas insiram dados simultaneamente no mesmo banco.',
      'O banco de dados seja deletado automaticamente se dois usuários logarem.',
      'O sistema divida a tela em quatro partes iguais para cada usuário.',
      'A velocidade da internet seja triplicada durante a inserção de dados.'
    ],
    correctAnswer: 1,
    explanation: 'Diferente do Excel comum, bancos de dados lidam bem com acessos concorrentes.'
  },
  {
    id: 'acc_9',
    topic: 'Microsoft Access',
    question: 'Quando NÃO se deve utilizar o Microsoft Access segundo o guia?',
    options: [
      'Para gerenciar o histórico de pedidos de milhares de clientes.',
      'Para Listas Simples, cálculos flexíveis ou projeções financeiras rápidas.',
      'Sempre que houver necessidade de integridade de dados absoluta.',
      'Em empresas que possuem mais de cinco funcionários no setor de TI.',
      'Sempre que o usuário quiser usar a cor vermelha em sua interface.'
    ],
    correctAnswer: 1,
    explanation: 'Para coisas simples e rápidas, o Excel é muito mais eficiente.'
  },
  {
    id: 'acc_10',
    topic: 'Microsoft Access',
    question: 'Para aplicações web globais massivas, a recomendação técnica é preferir:',
    options: [
      'Continuar usando o Access, pois ele suporta bilhões de usuários simultâneos.',
      'SQL Server ou outros bancos de dados robustos de classe empresarial.',
      'Salvar o banco de dados em formato de texto e subir no site.',
      'Utilizar o PowerPoint como servidor de banco de dados para a web.',
      'Migrar todos os dados para o Word e habilitar o modo de leitura web.'
    ],
    correctAnswer: 1,
    explanation: 'O Access é excelente para redes locais e complexidade média, não para escala global massiva.'
  }
];
