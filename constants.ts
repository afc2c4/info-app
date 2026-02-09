
import { Question } from './types';

export const QUIZ_DATABASE: Question[] = [
  // --- MICROSOFT WORD ---
  {
    id: 'w1',
    topic: 'Word',
    question: 'Qual é a finalidade principal do Microsoft Word no ecossistema de produtividade?',
    options: [
      'Estruturação de dados relacionais e execução de scripts de automação contábil.',
      'Gerenciamento de fluxos de trabalho e compilação de códigos de baixo nível.',
      'Processamento de texto, criação de documentos e editoração eletrônica básica.',
      'Desenvolvimento de apresentações gráficas com suporte a transições dinâmicas.',
      'Edição linear de trilhas sonoras e renderização de projetos audiovisuais.'
    ],
    correctAnswer: 2,
    explanation: 'O Microsoft Word é focado primordialmente na criação e edição de documentos textuais.'
  },
  {
    id: 'w4',
    topic: 'Word',
    question: 'Qual recurso do Word permite a criação em massa de documentos personalizados para diferentes destinatários?',
    options: [
      'Geração Automática de Sumários e Índices Remissivos.',
      'Mala Direta vinculada a uma fonte de dados externa ou interna.',
      'Revisão Ortográfica e Gramática com suporte a IA generativa.',
      'Gerenciador de Layouts de Página para impressão em grande escala.',
      'Editor de Macros VBA para automação de tarefas repetitivas.'
    ],
    correctAnswer: 1,
    explanation: 'A Mala Direta (Mail Merge) integra uma base de dados (como Excel) ao documento Word.'
  },
  {
    id: 'w5',
    topic: 'Word',
    question: 'O recurso "Pincel de Formatação" atua especificamente na:',
    options: [
      'Inserção de formas vetoriais e elementos gráficos inteligentes.',
      'Aplicação de máscaras de transparência em imagens importadas.',
      'Replicação de estilos de caractere e parágrafo de um trecho para outro.',
      'Verificação de integridade e remoção de metadados ocultos do arquivo.',
      'Alteração dinâmica do espaçamento entre caracteres em tempo real.'
    ],
    correctAnswer: 2,
    explanation: 'O Pincel copia a estética (fonte, cor, tamanho) e a aplica em novos textos.'
  },

  // --- MICROSOFT EXCEL ---
  {
    id: 'e1',
    topic: 'Excel',
    question: 'Qual é a finalidade técnica primordial do Microsoft Excel?',
    options: [
      'Renderização de elementos visuais para apresentações executivas.',
      'Ambiente de desenvolvimento integrado para linguagens de marcação.',
      'Manipulação de planilhas eletrônicas, cálculos e análise de dados.',
      'Navegação em redes distribuídas e acesso a servidores remotos.',
      'Gerenciamento de comunicações assíncronas e protocolos de e-mail.'
    ],
    correctAnswer: 2,
    explanation: 'O Excel é focado em cálculos, lógica matemática e organização de dados em grade.'
  },
  {
    id: 'e4',
    topic: 'Excel',
    question: 'O formato de arquivo CSV é amplamente utilizado no ambiente Excel para:',
    options: [
      'Criação de visualizações gráficas tridimensionais complexas.',
      'Intercâmbio de dados tabulares simples estruturados por delimitadores.',
      'Criptografia de algoritmos de segurança para proteção de células.',
      'Armazenamento de sequências de slides com transições automáticas.',
      'Definição de fórmulas matriciais que não permitem edição manual.'
    ],
    correctAnswer: 1,
    explanation: 'CSV (Comma Separated Values) é um formato leve para troca de dados entre sistemas.'
  },
  {
    id: 'e9',
    topic: 'Excel',
    question: 'O recurso "Alça de Preenchimento" é utilizado para:',
    options: [
      'Formatação condicional baseada em gradientes de cores sólidas.',
      'Extensão de séries lógicas e replicação de fórmulas por arraste manual.',
      'Otimização de hardware para processamento de arquivos pesados.',
      'Identificação e exclusão de registros redundantes em tabelas oficiais.',
      'Importação de objetos OLE originados em aplicações externas à suíte.'
    ],
    correctAnswer: 1,
    explanation: 'A alça automatiza a criação de sequências (1, 2, 3...) ou copia fórmulas adjacentes.'
  },

  // --- MICROSOFT POWERPOINT ---
  {
    id: 'p4',
    topic: 'PowerPoint',
    question: 'No contexto do PowerPoint, como se define tecnicamente a "Transição"?',
    options: [
      'Movimentação individual de objetos dentro da área útil do slide.',
      'Efeito visual aplicado à mudança de estado entre um slide e o próximo.',
      'Configuração de hiperlinks que conectam arquivos de diferentes pastas.',
      'Transformação de dados brutos em infográficos dinâmicos automáticos.',
      'Deslocamento lateral de janelas flutuantes durante a edição do projeto.'
    ],
    correctAnswer: 1,
    explanation: 'Transições ocorrem entre slides; Animações ocorrem dentro do slide.'
  },
  {
    id: 'p6',
    topic: 'PowerPoint',
    question: 'O recurso "Slide Mestre" tem como objetivo principal:',
    options: [
      'Remover permanentemente os slides duplicados de uma apresentação.',
      'Padronizar elementos visuais, fontes e layouts em toda a estrutura do arquivo.',
      'Designar o slide de maior importância hierárquica para fins de SEO.',
      'Integrar streams de vídeo em alta definição via protocolos de rede.',
      'Sincronizar a fala do apresentador com o tempo de exibição do slide.'
    ],
    correctAnswer: 1,
    explanation: 'O Slide Mestre controla a identidade visual global da apresentação.'
  },

  // --- TEORIA MICROSOFT 365 ---
  {
    id: 't365_1',
    topic: 'Teoria Microsoft 365',
    question: 'Conceitualmente, como o Microsoft 365 é classificado no material de estudo?',
    options: [
      'Interface de usuário proprietária para dispositivos móveis de baixo custo.',
      'Ecossistema integrado de produtividade e colaboração baseado em nuvem.',
      'Unidade de processamento gráfico otimizada para cálculos estatísticos.',
      'Portal de busca indexado com foco em segurança cibernética local.',
      'Repositório estático de arquivos legados sem suporte a edição simultânea.'
    ],
    correctAnswer: 1,
    explanation: 'O 365 é um serviço por assinatura que integra apps e serviços inteligentes na nuvem.'
  },
  {
    id: 't365_2',
    topic: 'Teoria Microsoft 365',
    question: 'A característica "Multiplataforma" do Microsoft 365 implica que:',
    options: [
      'O software requer hardware específico da Microsoft para inicialização.',
      'O sistema exige a execução simultânea de múltiplos sistemas operacionais.',
      'A experiência de uso é agnóstica ao dispositivo (Desktop, Web e Mobile).',
      'É necessário adquirir licenças separadas para cada tipo de monitor usado.',
      'A aplicação converte automaticamente todos os textos para linguagem braile.'
    ],
    correctAnswer: 2,
    explanation: 'Multiplataforma significa que o serviço está disponível em diversos ambientes de forma coesa.'
  },
  {
    id: 't365_11',
    topic: 'Teoria Microsoft 365',
    question: 'De acordo com as boas práticas, para qual tarefa o Word NÃO é recomendado?',
    options: [
      'Redação de Relatórios Corporativos e Ensaios Acadêmicos.',
      'Elaboração de Currículos Profissionais e Cartas de Apresentação.',
      'Design Gráfico de Layouts Complexos ou Fechamento de Arquivos de Revista.',
      'Formalização de Contratos Legais com suporte a revisão controlada.',
      'Criação de Manuais de Treinamento com estrutura de capítulos longos.'
    ],
    correctAnswer: 2,
    explanation: 'O Word não possui ferramentas de precisão gráfica para editoração profissional de revistas.'
  },

  // --- MICROSOFT ACCESS ---
  {
    id: 'acc_1',
    topic: 'Microsoft Access',
    question: 'Qual é a definição técnica do Microsoft Access conforme o guia teórico?',
    options: [
      'Ferramenta de manipulação estética de fotografias em alta definição.',
      'Sistema de Gerenciamento de Banco de Dados Relacional (SGBD) desktop.',
      'Módulo de substituição para transições complexas do PowerPoint.',
      'Provedor de serviços de internet para navegação anônima criptografada.',
      'Plataforma de comunicação unificada para troca de mensagens instantâneas.'
    ],
    correctAnswer: 1,
    explanation: 'O Access organiza dados em tabelas que se relacionam entre si (modelo relacional).'
  },
  {
    id: 'acc_2',
    topic: 'Microsoft Access',
    question: 'Qual a vantagem competitiva do Access sobre o Excel em cenários de dados robustos?',
    options: [
      'O Access apresenta custos de manutenção significativamente inferiores.',
      'O Access assegura integridade referencial e permite construir apps customizados.',
      'O Excel opera exclusivamente em ambientes offline sem suporte a rede local.',
      'O Access desativa funções de cálculo para focar apenas em exibição de texto.',
      'Não existem diferenças estruturais, sendo ambos aplicativos de planilhas.'
    ],
    correctAnswer: 1,
    explanation: 'O Access impede dados inconsistentes através de regras de relacionamento e validação.'
  },

  // --- NAVEGAÇÃO DEFENSIVA & SEGURANÇA ---
  {
    id: 'n2',
    topic: 'Navegação Defensiva',
    question: 'O que o protocolo HTTPS e o ícone de cadeado validam tecnicamente?',
    options: [
      'Que o conteúdo do site é verídico e livre de informações falsas.',
      'Que a sessão de comunicação entre cliente e servidor está criptografada.',
      'Que o domínio acessado pertence obrigatoriamente a uma entidade estatal.',
      'Que o dispositivo físico está imune a qualquer tipo de intrusão externa.',
      'Que o acesso ao site não consome pacotes de dados da rede móvel.'
    ],
    correctAnswer: 1,
    explanation: 'O HTTPS garante confidencialidade e integridade dos dados em trânsito.'
  },
  {
    id: 's1',
    topic: 'Segurança & Malware',
    question: 'Como se define o comportamento de um "Ransomware"?',
    options: [
      'Software projetado para exibir propagandas persistentes e não solicitadas.',
      'Código malicioso que restringe o acesso a arquivos e exige um pagamento.',
      'Utilitário de sistema que otimiza o registro do Windows para maior performance.',
      'Protocolo de hardware utilizado para realizar backups em mídias físicas.',
      'Navegador customizado que oculta a identidade do usuário em redes públicas.'
    ],
    correctAnswer: 1,
    explanation: 'Ransomware sequestra os dados criptografando-os e pedindo um valor pelo resgate.'
  }
];
