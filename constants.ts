
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
      '.xlsx (formato padrão de planilhas modernas baseadas em XML).',
      '.xlsm (formato que suporta a execução de scripts em linguagem VBA).',
      '.csv (formato de texto simples separado por vírgulas ou ponto-e-vírgula).',
      '.pdf (formato de documento portátil focado exclusivamente em leitura).',
      '.exe (formato executável que roda a planilha de forma independente).'
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
  }
];
