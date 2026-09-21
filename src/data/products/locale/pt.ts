import type { ProductLocaleBundle } from './types';

const sharedGoodToKnow =
  'Rainbow Six Siege e BattlEye recebem atualizações frequentes. Confirme a disponibilidade dos módulos no painel de status ao vivo em r6scheats.net antes de comprar ou iniciar. O comportamento do overlay pode variar em jogos personalizados, replays e modo espectador após patches.';

const sharedLimitations =
  'Software de terceiros no Rainbow Six Siege pode violar os Termos de Uso da Ubisoft e levar a bans do BattlEye ou ações na conta. Você usa este software por sua conta e risco. Compatibilidade e disponibilidade podem mudar após atualizações do jogo, BattlEye ou Windows sem aviso prévio.';

const r6sSystemRequirements = [
  { icon: 'windows' as const, text: 'Edição de 64 bits do Windows 10 ou Windows 11 compatível.' },
  { icon: 'settings' as const, text: 'Cliente atual do Rainbow Six Siege via Ubisoft Connect com os patches mais recentes aplicados.' },
  { icon: 'settings' as const, text: 'Acesso de administrador para instalação do loader e atualizações de patch.' },
  { icon: 'wifi' as const, text: 'Conexão estável com a internet para acesso ao portal e entrega de patches.' },
  { icon: 'cpu' as const, text: 'Um sistema que atenda aos requisitos de hardware publicados do Rainbow Six Siege.' },
];

const acquisitionSteps = [
  {
    num: '01',
    title: 'Verificar status atual',
    desc: 'Confira o banner ao vivo em r6scheats.net antes da compra—especialmente após uma atualização do Rainbow Six Siege ou BattlEye.',
  },
  {
    num: '02',
    title: 'Escolher seu plano de acesso',
    desc: 'Selecione Lite, Pro, Elite ou a utilidade que combina com seu objetivo. O acesso aos módulos varia por plano—compare a lista de recursos antes do checkout pelo nosso checkout seguro.',
  },
  {
    num: '03',
    title: 'Contatar a equipe',
    desc: 'Confirme disponibilidade, plataforma Ubisoft Connect e detalhes de pagamento—tenha seu email de pedido pronto antes do checkout.',
  },
  {
    num: '04',
    title: 'Seguir a configuração guiada',
    desc: 'Use apenas o portal de operadores, o loader de patch e o guia de setup. Teste em um jogo personalizado, carregue presets e entre na fila ranked ou unranked.',
  },
];

const hwidSpooferAcquisitionSteps = [
  {
    num: '01',
    title: 'Confirme que é flag de hardware',
    desc: 'Se uma conta Ubisoft nova falha instantaneamente neste PC mas funciona em outra máquina, o BattlEye provavelmente marcou seu hardware ID — não só uma conta. Bans só de conta vão pelo caminho de apelação UGC.',
  },
  {
    num: '02',
    title: 'Compre e abra o portal',
    desc: 'Pague o HWID Spoofer em r6scheats.net e acesse o portal de operadores com seu email de entrega. Baixe apenas do portal — nunca por links aleatórios do Discord.',
  },
  {
    num: '03',
    title: 'Execute a checklist pre-spoof',
    desc: 'Crie um ponto de restauração do Windows, feche Rainbow Six Siege e Ubisoft Connect, remova spoofers antigos, adicione exclusões AV para a pasta do portal e execute a varredura de compatibilidade antes de alterar seriais de disco ou MAC.',
  },
  {
    num: '04',
    title: 'Aplique, verifique e reinicie a frio',
    desc: 'Siga o fluxo de spoof do portal, reinicie a frio quando solicitado e verifique o relatório de diferenças de identificadores. Só depois da verificação, inicie o Siege em jogo personalizado com conta nova — antes do ranked.',
  },
];

const ugcAcquisitionSteps = [
  {
    num: '01',
    title: 'Identifique quem emitiu o ban',
    desc: 'Leia o aviso com atenção: um BattlEye “Global Ban #ID” vai ao BattlEye Support; sanções Ubisoft, retenções de segurança ou penalidades de chat vão pelo Ubisoft Help. O UGC encaminha cada tipo de caso de forma diferente.',
  },
  {
    num: '02',
    title: 'Reúna as provas do caso',
    desc: 'Junte a tela ou email do ban, Global Ban ID se exibido, usuário Ubisoft Connect, linha do tempo, lista de software instalado e qualquer prova de login ou comprometimento antes do checkout.',
  },
  {
    num: '03',
    title: 'Compre e monte seu workflow',
    desc: 'Pague o UGC Unban Tool em r6scheats.net, abra o painel de casos e monte sua apelação com o template certo — falso positivo, comprometimento de conta ou disputa de restrição.',
  },
  {
    num: '04',
    title: 'Envie uma vez e acompanhe follow-ups',
    desc: 'Envie uma única apelação pelo canal oficial correto (BattlEye Contact ou ticket Ubisoft Help — não chat ao vivo). Registre o envio no UGC e monitore o email, incluindo spam, por respostas do revisor.',
  },
];

const unlockAllAcquisitionSteps = [
  {
    num: '01',
    title: 'Escolha standalone ou bundle Elite',
    desc: 'Unlock All está incluído nos cheats Elite. Compre standalone aqui se quiser apenas preview cosmético local — operadores, skins elite, charms e acessórios — sem módulos de combate.',
  },
  {
    num: '02',
    title: 'Checkout e entrega pelo portal',
    desc: 'Conclua o checkout em r6scheats.net, confirme seu email de pedido e baixe a build Unlock All do portal de operadores após a entrega.',
  },
  {
    num: '03',
    title: 'Prepare o Siege para preview local',
    desc: 'Atualize Rainbow Six Siege pelo Ubisoft Connect, inicie o loader Unlock All antes do menu principal e use jogo personalizado ou situação de treino para que avisos de save na nuvem não sobrescrevam sua sessão de preview.',
  },
  {
    num: '04',
    title: 'Navegue, favorite e exporte',
    desc: 'Busque no catálogo cosmético, visualize operadores e skins elite apenas no seu cliente, salve favoritos e exporte presets de loadout do portal. Outros jogadores no lobby ainda veem seu inventário real da Ubisoft.',
  },
];

export const ptProductContent: ProductLocaleBundle = {
  lite: {
    overview: {
      title: 'Feito para um fluxo claro de awareness no R6S',
      paragraphs: [
        'R6S Lite foca em ESP de jogadores, localizador de gadgets, alertas de drone e overlay de minimapa—tudo que você precisa para rastrear roamers e controle de round sem automação de aimbot. Os módulos ficam agrupados no portal para ajustar distância, cores e modo à prova de stream antes da primeira fila.',
        'Lite é a porta de entrada para jogadores ranked e unranked que querem intel com risco mínimo de report. Sem aimbot, sem triggerbot—só overlays legíveis mantidos a cada patch em r6scheats.net.',
      ],
    },
    about: [
      {
        type: 'p',
        text: 'R6S Lite é feito para quem quer intel primeiro. No ranked, saber posições inimigas, colocação de gadgets e localização de drones ganha mais rounds do que mira pura—Lite te dá essa vantagem sem automação de aimbot.',
      },
      { type: 'h2', text: 'Seguro para ranked por design' },
      {
        type: 'p',
        text: 'Lite pula completamente os módulos de aimbot e triggerbot. Seu gameplay parece natural enquanto ESP, rastreamento de gadgets e alertas de drone te mantêm informado. O modo à prova de stream esconde overlays da captura OBS—ideal para criadores de conteúdo.',
      },
    ],
    body: [
      { type: 'h2', text: 'Módulos incluídos' },
      {
        type: 'p',
        text: 'ESP de jogadores com distância e tags de nome, localizador de gadgets e armadilhas, alertas de posição de drone e ocultação de overlay segura para stream. Presets para ranked e unranked no portal—carregue antes da primeira fila.',
      },
      { type: 'h2', text: 'Caminho de upgrade' },
      {
        type: 'p',
        text: 'Titulares de licença Lite podem fazer upgrade para Pro ou Elite pelo portal sem perder backups de config. Compare os planos na página principal do produto antes do checkout pelo nosso checkout seguro.',
      },
    ],
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    fullFeatures: [
      'ESP de jogadores e caixas de operadores',
      'Localizador de gadgets e armadilhas',
      'Alertas de posição de drone',
      'Tags de nome de operadores',
      'Overlay de minimapa',
      'Modo overlay à prova de stream',
      'Leituras de distância',
      'Filtro de cor de time',
      'Filtro defensor/atacante',
      'Rastreamento de cooldown de gadgets',
      'Config preset unranked',
      'Config preset ranked',
      'Backup de config na nuvem',
      'Auto-atualizador de patch',
    ],
    systemRequirements: r6sSystemRequirements,
    acquisitionSteps,
    acquisitionTitle: 'Como obter {name}',
  },
  pro: {
    overview: {
      title: 'Feito para um fluxo claro de aimbot no R6S',
      paragraphs: [
        'R6S Pro adiciona aimbot suave, sem recuo e triggerbot sobre todos os módulos Lite. Perfis de armas, ajuste de suavização e teclas de ativação em uma aba de mira—calibrado para lobbies ranked quando você começa com presets do portal, não sliders no máximo.',
        'Pro é o plano mais popular: potência de fogo suficiente para ranked e unranked sem limites de vagas Elite. Limites de FOV e suavização te mantêm eficiente no combate enquanto a mira parece humana nos valores padrão.',
      ],
    },
    about: [
      {
        type: 'p',
        text: 'R6S Pro é o ponto ideal para grinders de ranked. Aimbot, sem recuo e triggerbot te ajudam a ganhar duelos sem padrões óbvios de bot—quando você ajusta a suavização com nossos presets do portal.',
      },
      { type: 'h2', text: 'Mira + awareness combinados' },
      {
        type: 'p',
        text: 'Pro herda todos os módulos Lite e adiciona aimbot suave, controle de recuo, triggerbot e limites de FOV. Você vê a luta antes de começar e a ganha com ajustes de mira que permanecem humanos nos valores padrão.',
      },
    ],
    body: [
      { type: 'h2', text: 'Mira e automação' },
      {
        type: 'p',
        text: 'Aimbot suave, controle sem recuo, triggerbot com limites de FOV e seleção de ossos. A suavização ajusta o timing da mira para que os ajustes pareçam naturais no ranked. Comece com presets do portal, não sliders no máximo.',
      },
      { type: 'h2', text: 'Combinação recomendada' },
      {
        type: 'p',
        text: 'Pro é o plano mais popular em r6scheats.net—potência suficiente para lobbies de alto rank sem limites de vagas Elite. Leia nossa thread de aimbot nos fóruns antes da primeira sessão ranked.',
      },
    ],
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    fullFeatures: [
      'Todos os módulos ESP Lite',
      'Aimbot suave',
      'Controle sem recuo',
      'Triggerbot',
      'Seletor de FOV e ossos',
      'Perfis específicos por arma',
      'Redução de dispersão',
      'Ajuste de suavização',
      'Perfis de mira por operador',
      'Integração de alertas de drone',
      'Presets seguros para ranked por padrão',
      'Perfil de teste em jogo personalizado',
      'Backup de config na nuvem',
      'Auto-atualizador de patch',
      'Guias de setup do portal',
    ],
    systemRequirements: r6sSystemRequirements,
    acquisitionSteps,
    acquisitionTitle: 'Como obter {name}',
  },
  elite: {
    overview: {
      title: 'Feito para um fluxo completo de operador no R6S',
      paragraphs: [
        'R6S Elite é o build privado com wallhack completo, hack de drone, Unlock All e entrega prioritária de patch. Todos os módulos Lite e Pro incluídos—sem limites, sem upsells dentro do loader.',
        'As vagas Elite são limitadas para manter ciclos de patch rápidos e builds sustentáveis. Suporte direto do dev te ajuda a ajustar perfis conservadores antes do ranked. Confira o banner de status em r6scheats.net antes de comprar.',
      ],
    },
    about: [
      {
        type: 'p',
        text: 'R6S Elite é o build privado para quem quer tudo—wallhack completo, hack de drone, Unlock All e suporte direto do dev. Vagas limitadas mantêm o build sustentável e os ciclos de patch rápidos.',
      },
      { type: 'h2', text: 'Use Elite com responsabilidade' },
      {
        type: 'p',
        text: 'O poder do Elite exige perfis disciplinados. Teste em jogos personalizados, comece com presets conservadores do portal e aumente gradualmente em dias—não minutos. Guias de setup Elite te ajudam a ajustar antes da primeira fila ranked.',
      },
    ],
    body: [
      { type: 'h2', text: 'Suite completa de wallhack e intel' },
      {
        type: 'p',
        text: 'Wallhack completo, hack de drone, Unlock All e módulo speed hack. Teste em jogos personalizados antes do ranked—o poder Elite exige perfis disciplinados, não configurações rage.',
      },
      { type: 'h2', text: 'Disponibilidade' },
      {
        type: 'p',
        text: 'Elite aparece como vagas limitadas no banner de status. Confira a página de status se o checkout estiver bloqueado—confirme a disponibilidade de vagas antes de comprar.',
      },
    ],
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    fullFeatures: [
      'Todos os módulos Lite + Pro',
      'Suite completa de wallhack',
      'Hack de drone',
      'Módulo speed hack',
      'Desbloquear todos os operadores',
      'Fila prioritária de patch',
      'Suporte direto do dev',
      'Presets conservadores Elite',
      'Backup de config na nuvem',
      'Auto-atualizador de patch',
      'Acesso a vagas privadas',
    ],
    systemRequirements: r6sSystemRequirements,
    acquisitionSteps,
    acquisitionTitle: 'Como obter {name}',
  },
  'hwid-spoofer': {
    overview: {
      title: 'Feito para um fluxo claro de recuperação de hardware',
      paragraphs: [
        'O HWID Spoofer ajuda jogadores de Rainbow Six Siege quando o BattlEye marca o hardware do PC mas a conta Ubisoft ainda está limpa. Ferramentas de perfil de disco e MAC com checklist de ponto de restauração, scan de compatibilidade e passos de verificação pós-spoof.',
        'Use este caminho quando contas novas falham instantaneamente em uma máquina mas funcionam em outra—não para casos apenas de conta BattlEye. Após a verificação, inicie Rainbow Six Siege em jogo personalizado com conta Ubisoft nova—antes do ranked.',
      ],
    },
    body: [
      { type: 'h2', text: 'Quando você precisa' },
      {
        type: 'p',
        text: 'Use quando contas Ubisoft novas falham instantaneamente em um PC mas funcionam em outro—enforcement clássico de HWID. Não use em casos apenas de conta BattlEye; veja [UGC](/tools/r6s-cheats/ugc/) em vez disso.',
      },
      { type: 'h2', text: 'Fluxo completo' },
      {
        type: 'p',
        text: 'Ponto de restauração, limpeza de drivers, aplicação do spoof, reinício a frio, verificação de identificadores e depois teste de login em jogo personalizado com conta Ubisoft nova. A checklist completa está no portal e na nossa thread do fórum HWID.',
      },
    ],
    goodToKnow:
      'Execute o scan de compatibilidade no portal antes de spoofar. Crie um ponto de restauração do Windows primeiro. Verifique se os identificadores mudaram após um reinício a frio antes de iniciar o Rainbow Six Siege.',
    limitations:
      'Spoofing não ajuda em casos apenas de conta BattlEye. Nunca combine duas ferramentas de spoof. PCs compartilhados ou de trabalho podem não ser adequados. Você assume todo o risco de alterações em nível de driver.',
    fullFeatures: [
      'Ferramentas de perfil de serial de disco',
      'Rotação de endereço MAC',
      'Checklist de ponto de restauração',
      'Scan de compatibilidade',
      'Detecção de conflitos de drivers',
      'Verificação pós-spoof',
      'Relatório de diferença de identificadores',
      'Guia de reinício a frio',
      'Fluxo passo a passo no portal',
      'Suporte de recuperação do portal',
    ],
    systemRequirements: [
      { icon: 'windows', text: 'Windows 10 ou 11 64 bits com acesso de administrador.' },
      { icon: 'refresh', text: 'Capacidade de criar um ponto de restauração do sistema antes de executar.' },
      { icon: 'shield', text: 'Siga o guia de setup do portal antes de iniciar o Rainbow Six Siege após o spoofing.' },
      { icon: 'wifi', text: 'Conexão estável para ferramentas de verificação do portal.' },
    ],
    acquisitionSteps: hwidSpooferAcquisitionSteps,
    acquisitionTitle: 'Como obter {name}',
  },
  ugc: {
    overview: {
      title: 'Feito para fluxos de recuperação de conta e apelação',
      paragraphs: [
        'UGC (Unban & Governance Control) te ajuda a recuperar contas restritas de gaming, redes sociais e marketplaces com fluxos de apelação estruturados e automação—sem garantias de desban instantâneo.',
        'Construa caminhos de disputa personalizados, acompanhe o status do caso e reconstrua sua presença com ferramentas inteligentes de gestão de restrições. Guias do portal te acompanham passo a passo quando precisar de ajuda prática.',
      ],
    },
    body: [
      { type: 'h2', text: 'O que o UGC cobre' },
      {
        type: 'p',
        text: 'UGC (Unban & Governance Control) é um workspace de apelação para restrições Ubisoft, bans BattlEye e flags de segurança. Crie fluxos personalizados, automatize passos de disputa e acompanhe o status do caso em um painel—não é um serviço de desban garantido.',
      },
      { type: 'h2', text: 'Expectativas realistas' },
      {
        type: 'p',
        text: 'Alguns bans BattlEye não podem ser revertidos. UGC organiza evidências e follow-ups para revisão Ubisoft. Combine com [HWID Spoofer](/tools/r6s-cheats/hwid-spoofer/) quando o hardware estiver marcado, ou uma conta nova quando a reputação estiver queimada.',
      },
    ],
    goodToKnow:
      'Reúna email de pedido, detalhes da conta na plataforma e capturas da restrição antes de abrir um ticket. UGC estrutura apelações—não contorna a revisão da plataforma.',
    limitations:
      'UGC não garante restauração da conta. Resultados variam conforme o tipo de caso. Bans permanentes do BattlEye podem exigir uma conta nova em vez de apelação.',
    fullFeatures: [
      'Fluxos de apelação personalizados',
      'Automação de disputas por restrição',
      'Templates de documentação de casos',
      'Painel de acompanhamento de status',
      'Guia de verificação de identidade',
      'Estrutura de upload de evidências',
      'Rastreador de linha do tempo',
      'Templates de resposta de follow-up',
      'Suporte multiplataforma',
    ],
    systemRequirements: [
      { icon: 'mail', text: 'Email de pedido usado no checkout em r6scheats.net.' },
      { icon: 'shield', text: 'Detalhes da conta e notificação de ban ou restrição, se disponível.' },
      { icon: 'wifi', text: 'Acesso à internet para suporte do portal e painel de casos.' },
    ],
    acquisitionSteps: ugcAcquisitionSteps,
    acquisitionTitle: 'Como obter {name}',
  },
  'unlock-all': {
    overview: {
      title: 'Feito para um fluxo de pré-visualização cosmética local',
      paragraphs: [
        'Unlock All permite explorar operadores, skins elite e charms exclusivos de armas localmente no Rainbow Six Siege—catálogo pesquisável, favoritos e exportação de loadouts sem modificar compras live da Ubisoft.',
        'Cosméticos aparecem no seu cliente para testes e criação de conteúdo. Outros jogadores veem seu inventário real, não skins de pré-visualização. Incluído grátis com Elite; disponível separadamente para pré-visualização cosmética sem módulos de combate.',
      ],
    },
    body: [
      { type: 'h2', text: 'Apenas pré-visualização local' },
      {
        type: 'p',
        text: 'Operadores e skins aparecem no seu cliente para testes e criação de conteúdo. Outros jogadores no seu lobby veem seu inventário real, não skins de pré-visualização.',
      },
      { type: 'h2', text: 'Incluído com Elite' },
      {
        type: 'p',
        text: 'Unlock All vem incluído no plano Elite. Compre separadamente aqui se quiser pré-visualização cosmética sem módulos de combate completos.',
      },
    ],
    goodToKnow:
      'Unlock All pré-visualiza operadores e skins localmente no seu cliente. Outros jogadores no seu lobby veem seu inventário real—não skins de pré-visualização. Incluído no plano Elite.',
    limitations:
      'Apenas pré-visualização local—não modifica inventário Ubisoft nem estado da loja. Outros jogadores não podem ver skins elite ou operadores pré-visualizados.',
    fullFeatures: [
      'Pré-visualização de desbloqueio de operadores',
      'Pré-visualização de skins elite',
      'Personalizador de armas e charms',
      'Editor de charms e acessórios',
      'Troca de tema HUD',
      'Substituição de cartão de operador',
      'Lista de favoritos',
      'Exportação de loadout',
    ],
    systemRequirements: r6sSystemRequirements,
    acquisitionSteps: unlockAllAcquisitionSteps,
    acquisitionTitle: 'Como obter {name}',
  },
};
