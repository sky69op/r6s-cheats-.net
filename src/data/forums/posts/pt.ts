import type { ForumPostFull } from '../types';

/** Os tópicos do fórum seguem a estrutura de instruções de cheats da WarDogs — apenas conteúdo Rainbow Six Siege. */
export const forumPosts: ForumPostFull[] = [
  {
    tag: 'Guia',
    featured: true,
    title: 'Melhores R6 Cheats 2026 — Lite vs Pro vs Elite',
    slug: 'best-r6-cheats-2026',
    desc: 'Comparativo best R6 cheats 2026 para Rainbow Six Siege PC — aimbot, ESP wallhack, HWID spoofer, unlock all e velocidade de patches BattlEye. Como Lite, Pro e Elite do r6scheats.net se comparam a listagens típicas de revendedores.',
    date: 'Sep 18, 2026',
    readTime: '6 min de leitura',
    body: [
      {
        type: 'p',
        text: 'Buscar **best R6 cheats 2026** costuma levar a sites de revendedores que relistam os mesmos loaders com markup e notas de patch mais lentas. r6scheats.net vende direto — um loader, três tiers, mais **HWID spoofer** e **unlock all** avulsos quando você precisa de recuperação de hardware ou preview cosmético fora de uma assinatura de cheat.',
      },
      { type: 'h2', text: 'Escolha rápida de tier' },
      {
        type: 'ul',
        items: [
          '**Lite** — ESP, gadget wallhack, radar 2D; sem **aimbot**',
          '**Pro** — Lite mais **aimbot**, soft aim, triggerbot e no recoil',
          '**Elite** — build privada com **unlock all**, drone hack e reloads BattlEye prioritários',
        ],
      },
      { type: 'h2', text: 'Comparativo best R6 cheats 2026' },
      {
        type: 'table',
        headers: ['Recurso', 'Lite', 'Pro', 'Elite', 'Revendedor típico'],
        rows: [
          ['ESP / wallhack', 'Sim', 'Sim', 'Completo', 'Varia por listing'],
          ['Aimbot / soft aim', 'Não', 'Sim', 'Sim', 'Builds frequentemente desatualizadas'],
          ['Unlock all', 'Não', 'Não', 'Sim', 'Raramente incluído'],
          ['Caminho HWID spoofer', 'Link do portal', 'Link do portal', 'Suporte prioritário', 'Normalmente não mencionado'],
          ['Velocidade patch BattlEye', 'Banner de status ao vivo', 'Banner de status ao vivo', 'Reload prioritário', 'Notas de revendedor atrasadas'],
          ['Suporte direto', 'Padrão', 'Padrão', 'Elite dev Discord', 'Apenas ticket de terceiros'],
        ],
      },
      { type: 'h2', text: 'Escolha de tier aimbot em 2026' },
      {
        type: 'p',
        text: 'BattlEye em 2026 flagga rapidamente comportamento óbvio de **aimbot** com FOV aberto. Pro e Elite incluem soft aim seguro para ranked com visible check ativado por padrão — não modos snap brutos. Primeira configuração: [Aimbot Setup](/forums/r6s-aimbot-setup/). Escolha **Lite** se quiser apenas intel ESP e recusar módulos **aimbot** por completo.',
      },
      { type: 'h2', text: 'HWID e unlock all — o que revendedores omitem' },
      {
        type: 'p',
        text: 'A maioria das páginas **best R6 cheats 2026** de revendedores ignora recuperação **HWID**. Quando contas Ubisoft novas falham instantaneamente em um PC, você precisa de um workflow **HWID spoofer** — não outra chave de cheat. Guia: [HWID Spoofer Guide](/forums/r6s-hwid-spoofer-guide/). **Unlock all** para preview local de operadores e skins elite vem no Elite; revendedores raramente incluem. Guia: [Unlock All Guide](/forums/r6s-unlock-all-guide/).',
      },
      { type: 'h2', text: 'Antes de comprar de um revendedor' },
      {
        type: 'ol',
        items: [
          'Confirme se o vendedor é direto ou revendedor com markup — a velocidade de patch difere',
          'Verifique suporte a **aimbot**, **HWID spoofer** e **unlock all** antes do checkout',
          'Leia o banner de status ao vivo no r6scheats.net após cada patch do Siege ou BattlEye',
          'Compare tiers oficiais: [Lite](/cheats/lite/), [Pro](/cheats/pro/), [Elite](/cheats/elite/)',
        ],
      },
      { type: 'h2', text: 'Nossas escolhas 2026' },
      {
        type: 'p',
        text: '**Best R6 cheats 2026 para a maioria no ranked:** **Pro** — ESP mais **aimbot** sem limites de slots Elite. **Melhor bundle premium:** **Elite** quando você quer **unlock all**, drone hack e reloads mais rápidos. **Só intel:** **Lite** se não vai usar **aimbot** de forma alguma.',
      },
    ],
  },
  {
    tag: 'Configuração',
    title: 'Configuração de antivírus para cheats R6S',
    slug: 'r6s-antivirus-setup',
    desc: 'O Windows Defender e antivírus de terceiros costumam sinalizar loaders R6s Cheats para Rainbow Six Siege porque se conectam a um processo protegido pelo BattlEye. Este guia r6scheats.net orienta exclusões de pastas no Windows 10 e 11 para seu loader instalar limpo e injetar antes da fila.',
    date: 'Sep 14, 2026',
    readTime: '4 min de leitura',
    body: [
      {
        type: 'p',
        text: 'Loaders de cheats para Rainbow Six Siege costumam ser sinalizados como suspeitos porque injetam em um jogo protegido pelo BattlEye. Isso nem sempre significa que o arquivo é malicioso — mas você ainda deve baixar apenas do e-mail de entrega do r6scheats.net e nunca de links aleatórios do Discord.',
      },
      { type: 'h2', text: 'Exclusões do Windows Defender' },
      {
        type: 'ol',
        items: [
          'Abra **Segurança do Windows → Proteção contra vírus e ameaças → Gerenciar configurações**',
          'Role até **Exclusões → Adicionar uma exclusão → Pasta**',
          'Adicione a pasta onde você extraiu o loader (não a pasta de instalação do Siege)',
          'Repita para o `.exe` do loader se o Defender já colocou em quarentena — restaure primeiro e depois exclua',
        ],
      },
      { type: 'h2', text: 'Antivírus de terceiros' },
      {
        type: 'p',
        text: 'Avast, AVG, Bitdefender e Norton costumam bloquear injetores com mais força que o Defender. Desative o escudo em tempo real brevemente na primeira instalação, ou adicione a mesma exclusão de pasta. Reative a proteção depois que o loader estiver na lista branca.',
      },
      { type: 'h2', text: 'Por que o BattlEye dispara scans de antivírus' },
      {
        type: 'p',
        text: 'O BattlEye monitora injeção em memória no Rainbow Six Siege — loaders legítimos R6s Cheats usam as mesmas técnicas de baixo nível que a heurística do antivírus marca como suspeitas. Builds oficiais do r6scheats.net são escaneadas antes do release; verifique seu hash no portal de entrega se o Defender continuar em quarentena após exclusões. Caminho completo de setup: [Configuração de cheats](/forums/r6s-cheat-setup/).',
      },
      { type: 'h2', text: 'Antes de injetar' },
      {
        type: 'p',
        text: 'Conclua as exclusões primeiro e siga [Configuração de cheats de Rainbow Six Siege](/forums/r6s-cheat-setup/). Se o loader ainda falhar, veja [Erros do loader](/forums/r6s-loader-errors/).',
      },
    ],
  },
  {
    tag: 'Configuração',
    title: 'Configuração de cheats R6S',
    slug: 'r6s-cheat-setup',
    desc: 'Instalação passo a passo de R6s Cheats para Rainbow Six Siege — Lite ESP, Pro aimbot, Elite unlock all. E-mail de entrega r6scheats.net até a primeira injeção e menu no jogo no PC Windows com builds compatíveis com BattlEye.',
    date: 'Sep 14, 2026',
    readTime: '5 min de leitura',
    body: [
      { type: 'h2', text: 'Obtenha sua licença' },
      {
        type: 'p',
        text: 'Após a confirmação do pagamento, sua licença chega por e-mail. Guarde o ID do pedido para suporte. **Lite** habilita apenas ESP; **Pro** adiciona módulos **aimbot**; **Elite** inclui **unlock all** e todos os recursos de combate. Compare tiers em [Cheats de Rainbow Six Siege](/cheats/) ou leia [Melhores R6 Cheats 2026](/forums/best-r6-cheats-2026/).',
      },
      { type: 'h2', text: 'Instale o loader' },
      {
        type: 'p',
        text: 'Baixe o loader do seu e-mail de entrega. Execute como administrador no PC com Windows. Cole sua chave de licença quando solicitado. Se o Windows bloquear o arquivo, conclua a [Configuração de antivírus](/forums/r6s-antivirus-setup/) antes de tentar de novo.',
      },
      { type: 'h2', text: 'Primeiro início' },
      {
        type: 'p',
        text: 'Clique em injetar ou iniciar no loader, depois abra Rainbow Six Siege pelo Ubisoft Connect. Abra o menu de cheats com **INSERT** (ou sua tecla atribuída). Próximo: [Como usar cheats de Rainbow Six Siege](/forums/how-to-use-r6s-cheats/) e a lista de [Atalhos](/forums/r6s-cheat-hotkeys/).',
      },
      { type: 'h2', text: 'Ordem de lançamento no Ubisoft Connect' },
      {
        type: 'p',
        text: 'Injete pelo loader r6scheats.net **antes** do Siege chegar ao menu principal — o BattlEye inicializa cedo na sequência de boot. Nunca inicie o Siege primeiro nem injete tarde. Conflitos de overlay Steam/Ubisoft são raros, mas feche launchers desnecessários se a injeção travar. Ajuste de recursos: [Como usar cheats Rainbow Six Siege](/forums/how-to-use-r6s-cheats/).',
      },
      { type: 'h2', text: 'Se a configuração falhar' },
      {
        type: 'p',
        text: 'Veja [Erros do loader](/forums/r6s-loader-errors/). Se toda conta Ubisoft nova falhar neste PC, o BattlEye pode ter flaggado seu **HWID** — veja [HWID Spoofer Guide](/forums/r6s-hwid-spoofer-guide/). Entre em contato com suporte com ID do pedido e texto de erro.',
      },
    ],
  },
  {
    tag: 'Instruções',
    title: 'Como usar cheats R6S',
    slug: 'how-to-use-r6s-cheats',
    desc: 'Como rodar R6s Cheats no Rainbow Six Siege — injeção do loader, aimbot, ESP, unlock all e módulos in-game por partida. Ranked e unranked no PC Windows via r6scheats.net.',
    date: 'Sep 14, 2026',
    readTime: '4 min de leitura',
    body: [
      {
        type: 'p',
        text: 'Use um ou dois módulos por vez até saber como eles se comportam no Siege. Jogadores de ranked costumam começar só com ESP e depois adicionar **aimbot** (soft aim no Pro/Elite) ou no recoil após testes unranked. Preview **unlock all** fica em custom games — não na sua primeira fila ranked.',
      },
      { type: 'h2', text: 'Fluxo típico de sessão' },
      {
        type: 'ol',
        items: [
          'Inicie o loader como admin e injete antes do Siege chegar ao menu principal',
          'Abra o menu (**INSERT** por padrão) e carregue um perfil salvo ou use os padrões',
          'Ative **ESP** para intel na fase de drones — segure ângulos, não prefira cada parede',
          'Ative **aimbot** / soft aim ou **no recoil** apenas quando estiver pronto para automação de tiroteios',
          'Desative recursos pesados entre rounds se estiver gravando ou fazendo stream',
        ],
      },
      { type: 'h2', text: 'Disciplina na fase de drones' },
      {
        type: 'p',
        text: 'Use ESP do r6scheats.net na fase de prep para rastrear roamers, não para prefirar cada parede fraca — reports sobem quando o feed de kills parece impossível. Marque rotações mentalmente e desative módulos de mira pesados até a fase de ação. Referência do menu: [Guia do menu de cheats](/forums/r6s-cheat-menu-guide/).',
      },
      { type: 'h2', text: 'Hábitos no ranked' },
      {
        type: 'p',
        text: 'Confira o banner de status do site antes de entrar na fila após um patch do Siege ou BattlEye. FOV e suavização conservadores valem mais que configuração máxima no primeiro dia. Detalhes do menu: [Guia do menu de cheats](/forums/r6s-cheat-menu-guide/).',
      },
    ],
  },
  {
    tag: 'Solução de problemas',
    title: 'Guia de reconstrução após patch R6S',
    slug: 'r6s-patch-rebuild-guide',
    desc: 'Quando a Ubisoft patcha Rainbow Six Siege ou o BattlEye atualiza, builds antigas do loader R6s Cheats param de injetar. Siga esta checklist r6scheats.net para obter a build mais recente compatível com BattlEye antes de voltar ao ranked.',
    date: 'Sep 15, 2026',
    readTime: '4 min de leitura',
    body: [
      {
        type: 'p',
        text: 'Quando a Ubisoft lança um patch sazonal ou o BattlEye atualiza, o loader de ontem pode parar de injetar. Não entre na fila ranked até o status do site mostrar verde para o seu tier.',
      },
      { type: 'h2', text: 'Checklist pós-patch' },
      {
        type: 'ol',
        items: [
          'Atualize Rainbow Six Siege completamente pelo Ubisoft Connect',
          'Leia o banner de status no r6scheats.net para Lite, Pro ou Elite',
          'Baixe a build mais recente do loader pelo seu portal ou anúncio no Discord',
          'Carregue perfis conservadores — reteste FOV de **aimbot**, soft aim estreito, alcance de ESP reduzido',
          'Jogue uma Quick Match antes do ranked',
        ],
      },
      { type: 'h2', text: 'Verifique o status r6scheats.net primeiro' },
      {
        type: 'p',
        text: 'O banner na página inicial do r6scheats.net atualiza em horas após um patch do Siege ou BattlEye — verde significa que seu tier está liberado para Quick Match e ranked. Não rode o loader de ontem esperando que ainda funcione; injetar build obsoleta é um vetor comum de ban pós-patch. Correções detalhadas: [Erros do loader](/forums/r6s-loader-errors/).',
      },
      { type: 'h2', text: 'Status amarelo ou vermelho' },
      {
        type: 'p',
        text: '**Amarelo** — utilizável com ressalvas; leia as notas do Discord. **Vermelho** — aguarde instruções da equipe para recarregar. Injetar com status vermelho é a forma mais rápida de contas serem flagadas.',
      },
    ],
  },
  {
    tag: 'Instruções',
    title: 'Guia do menu de cheats R6S',
    slug: 'r6s-cheat-menu-guide',
    desc: 'Menu R6s Cheats para Rainbow Six Siege aba por aba — aimbot, ESP, unlock all, radar, misc e perfis salvos para que o primeiro início do r6scheats.net não seja chute.',
    date: 'Sep 15, 2026',
    readTime: '5 min de leitura',
    body: [
      { type: 'h2', text: 'Aba Aimbot / Aim' },
      {
        type: 'p',
        text: 'Módulos **aimbot** no Pro e Elite: soft aim, triggerbot, FOV, suavização, visible check e prioridade de osso. Combine com no recoil para operadores de entrada. Primeiro início: [Aimbot Setup](/forums/r6s-aimbot-setup/). Ajuste: [Configurações de soft aim](/forums/r6s-soft-aim-settings/).',
      },
      { type: 'h2', text: 'Aba Unlock All (Elite)' },
      {
        type: 'p',
        text: 'O painel **unlock all** pré-visualiza operadores, skins elite e charms localmente — outros jogadores ainda veem seu inventário real. Não no Lite nem Pro. Guia completo: [Unlock All Guide](/forums/r6s-unlock-all-guide/).',
      },
      { type: 'h2', text: 'Aba Visuals / ESP' },
      {
        type: 'p',
        text: 'Caixas de jogadores, ESP de gadgets, info da bomba, marcadores de drones, opacidade do wallhack e cores de time. Detalhes: [Configurações de ESP](/forums/r6s-esp-settings/).',
      },
      { type: 'h2', text: 'Aba Radar' },
      {
        type: 'p',
        text: 'Radar 2D estilo minimapa para operadores fora do campo de visão da câmera. Alcance, zoom e tamanho dos ícones. Detalhes: [Configurações de radar](/forums/r6s-radar-settings/).',
      },
      { type: 'h2', text: 'Aba Misc' },
      {
        type: 'ul',
        items: [
          'Alternar overlay à prova de stream',
          'Salvar/carregar config na nuvem',
          'Perfis de no recoil por arma',
          'Atalhos para reatribuir teclas',
        ],
      },
      { type: 'h2', text: 'Overlay à prova de stream' },
      {
        type: 'p',
        text: 'Ative stream-proof na aba Misc ao clipar ranked ou fazer stream — overlays r6scheats.net ficam ocultos da captura OBS e Discord por padrão nos tiers Pro e Elite. ESP e radar ainda renderizam só no seu monitor. Layout de teclas: [Atalhos](/forums/r6s-cheat-hotkeys/).',
      },
      { type: 'h2', text: 'Perfis' },
      {
        type: 'p',
        text: 'Salve configs separadas para ranked, sem ranking e partidas personalizadas. Nomeie por função — entry, anchor, flex — para não ajustar no meio da sessão.',
      },
    ],
  },
  {
    tag: 'Solução de problemas',
    title: 'Erros do loader R6S',
    slug: 'r6s-loader-errors',
    desc: 'Corrija erros do loader R6s Cheats para Rainbow Six Siege — chaves inválidas, bloqueios BattlEye, flags de hardware HWID, verificações de integridade e quarentena de antivírus — antes de abrir ticket no r6scheats.net.',
    date: 'Sep 15, 2026',
    readTime: '5 min de leitura',
    body: [
      { type: 'h2', text: 'Licença inválida ou expirada' },
      {
        type: 'p',
        text: 'Copie a chave exatamente do seu e-mail — sem espaços no final. Confirme que o tier da assinatura corresponde à build que você baixou. Chaves Lite não desbloqueiam módulos Pro.',
      },
      { type: 'h2', text: 'Injeção falhou / bloqueio do BattlEye' },
      {
        type: 'p',
        text: 'Normalmente significa que Siege ou BattlEye atualizou. Siga o [Guia de reconstrução após patch](/forums/r6s-patch-rebuild-guide/). Inicie o Siege vanilla uma vez para confirmar que o jogo abre antes de reinjetar.',
      },
      { type: 'h2', text: 'Não foi possível verificar a integridade do jogo' },
      {
        type: 'p',
        text: 'Repare Rainbow Six Siege no Ubisoft Connect, reinicie o PC e teste sem o loader. Esse erro costuma ser instalação do jogo corrompida — não detecção de cheat.',
      },
      { type: 'h2', text: 'Antivírus excluiu o loader' },
      {
        type: 'p',
        text: 'Restaure da quarentena e adicione exclusões em [Configuração de antivírus](/forums/r6s-antivirus-setup/). Baixe de novo se o arquivo estiver corrompido.',
      },
      { type: 'h2', text: 'Inicie Siege vanilla primeiro' },
      {
        type: 'p',
        text: 'Após qualquer atualização do BattlEye, inicie Rainbow Six Siege sem o loader r6scheats.net uma vez para confirmar que o Ubisoft Connect completa a verificação de arquivos. Se Siege vanilla falhar, repare o jogo antes de culpar a build do cheat — a maioria dos tickets de "injeção falhou" são loaders desatualizados ou instalação quebrada. Fluxo pós-patch: [Guia de reconstrução](/forums/r6s-patch-rebuild-guide/).',
      },
      { type: 'h2', text: 'Hardware ban / contas falham na hora' },
      {
        type: 'p',
        text: 'Quando toda conta Ubisoft nova falha em um PC mas funciona em outro, o BattlEye provavelmente flaggou seu **HWID** — não é bug do loader. Siga [HWID Spoofer Walkthrough](/forums/r6s-hwid-spoofer-guide/) e a [ferramenta HWID Spoofer](/tools/r6s-cheats/hwid-spoofer/) antes de comprar outra chave de cheat.',
      },
      { type: 'h2', text: 'Ainda travado?' },
      {
        type: 'p',
        text: 'Abra um ticket de suporte com ID do pedido, versão do Windows, número da build do Siege e um print do texto exato do erro. Mencione se já executou um workflow de **HWID spoofer**.',
      },
    ],
  },
  {
    tag: 'Recursos',
    title: 'Configurações de radar R6S',
    slug: 'r6s-radar-settings',
    desc: 'Configure o radar 2D R6s Cheats para Rainbow Six Siege — alcance, zoom, tamanho de ícones e posição do HUD no ranked. O radar r6scheats.net complementa ESP para timing de flanco sem poluir seu overlay seguro para BattlEye.',
    date: 'Sep 16, 2026',
    readTime: '4 min de leitura',
    body: [
      {
        type: 'p',
        text: 'O radar complementa o ESP — use para timing de flanco em mapas como Clubhouse e Border onde o som vertical é barulhento. Não substitui disciplina na fase de drones.',
      },
      { type: 'h2', text: 'Preset inicial' },
      {
        type: 'ul',
        items: [
          '**Alcance** — 25–35 m no ranked; mais amplo só em partidas personalizadas',
          '**Zoom** — médio para o radar continuar legível ao lado do minimapa',
          '**Tamanho do ícone** — pequeno; pontos grandes bloqueiam espaço da mira em 1080p',
          '**Cores do time** — combine com as cores do ESP para callouts consistentes',
        ],
      },
      { type: 'h2', text: 'Combine radar com cores ESP' },
      {
        type: 'p',
        text: 'Alinhe as cores de time do radar r6scheats.net com sua paleta ESP para callouts de flanco consistentes no meio do round — defensores azul, atacantes laranja é a divisão padrão do Siege. Cores desalinhadas fazem você hesitar em executes de site. Ajuste ESP: [Configurações de ESP](/forums/r6s-esp-settings/).',
      },
      { type: 'h2', text: 'Notas por mapa' },
      {
        type: 'p',
        text: 'Oregon e Clubhouse: aumente levemente o alcance vertical para trocas de andar. Bank e Chalet, corredores longos: reduza o alcance para evitar ruído de roamers distantes que você não consegue atirar mesmo.',
      },
    ],
  },
  {
    tag: 'Recursos',
    title: 'Configurações de soft aim R6S',
    slug: 'r6s-soft-aim-settings',
    desc: 'Configurações de aimbot e soft aim para R6s Cheats no Rainbow Six Siege — FOV, suavização, visible check e perfis por operador que permanecem críveis sob BattlEye no ranked.',
    date: 'Sep 16, 2026',
    readTime: '5 min de leitura',
    body: [
      {
        type: 'p',
        text: 'Tiroteios no Siege são baseados em peek — soft aim **aimbot** deve ajudar o tracking, não dar snap através de paredes. Este é o modo **aimbot** seguro para ranked no Pro e Elite. Comece em unranked antes de ativar no ranked. Novo em módulos aim? Primeiro [Aimbot Setup](/forums/r6s-aimbot-setup/).',
      },
      { type: 'h2', text: 'Perfil base aimbot para ranked' },
      {
        type: 'ul',
        items: [
          '**FOV** — 3–8°; aperte no ranked, nunca use FOV aberto em lobbies de alto elo',
          '**Suavização** — alta em monitores 144Hz+ para flicks parecerem naturais',
          '**Visible check** — ativado para peeks junto a paredes',
          '**Osso** — peito padrão; cabeça só para holds com Glaz/Kali',
          '**Link no recoil** — ative para entradas com Ash R4-C e Zofia M762',
        ],
      },
      { type: 'h2', text: 'Visible check é inegociável' },
      {
        type: 'p',
        text: 'Mantenha visible check ativado no ranked em builds Pro e Elite do r6scheats.net — tracking através de paredes fracas é o caminho mais rápido para reports mesmo que o BattlEye não flague na hora. FOV estreito mais suavização alta parece natural em rotas entry de Ash e Zofia. Menu aim completo: [Guia do menu de cheats](/forums/r6s-cheat-menu-guide/).',
      },
      { type: 'h2', text: 'Salvamentos por operador' },
      {
        type: 'p',
        text: 'Salve perfis separados para entry (Ash), anchor (Smoke MP5) e roamer (Caveira). Entry quer suavização um pouco menor; anchors querem triggerbot opcional só em portas.',
      },
    ],
  },
  {
    tag: 'Recursos',
    title: 'Configurações de ESP R6S',
    slug: 'r6s-esp-settings',
    desc: 'Setup mínimo de ESP R6s Cheats para Rainbow Six Siege ranked — caixas de jogadores, marcadores de gadgets e info de bomba sem poluir a tela. Tiers Lite e Elite r6scheats.net explicados para intel seguro para BattlEye na fase de drones e execute.',
    date: 'Sep 16, 2026',
    readTime: '5 min de leitura',
    body: [
      {
        type: 'p',
        text: 'ESP ganha rounds mostrando rotações e gadgets antes de você se comprometer. Toggles demais poluem a tela e deixam seu jogo óbvio.',
      },
      { type: 'h2', text: 'Set inicial tier Lite' },
      {
        type: 'ul',
        items: [
          'Caixas de jogadores + distância abaixo de 25 m',
          'ESP de gadgets: câmeras, claymores, Gu mines, armadilhas de Kapkan',
          'Indicador de portador da bomba / desarmador',
          'Opacidade do wallhack ~40%',
        ],
      },
      { type: 'h2', text: 'Extras Elite' },
      {
        type: 'p',
        text: 'ESP de drones para drones atacantes e feeds de Yokai/Maestro defensores. Ative só depois que o ESP Lite parecer natural — marcadores de drone mais caixas de jogador podem sobrepor na fase de prep. Elite também inclui preview de operadores **unlock all** — veja [Unlock All Guide](/forums/r6s-unlock-all-guide/).',
      },
      { type: 'h2', text: 'ESP de gadgets salva rounds' },
      {
        type: 'p',
        text: 'ESP de gadgets r6scheats.net para câmeras, claymores, Gu mines e armadilhas Kapkan evita mortes grátis na rotação — ative marcadores de gadgets antes das caixas de jogador se a tela parecer cheia. Ícones de desarmador e portador de bomba importam mais no match point. Combo radar: [Configurações de radar](/forums/r6s-radar-settings/).',
      },
      { type: 'h2', text: 'Jogue mais inteligente, não mais barulhento' },
      {
        type: 'p',
        text: 'Use intel para **segurar** ângulos e chamar rotações. Prefire cada parede fraca gera reports. Ative stream-proof se clipar rounds ou fizer stream de ranked.',
      },
    ],
  },
  {
    tag: 'Instruções',
    title: 'Atalhos de cheats R6S',
    slug: 'r6s-cheat-hotkeys',
    desc: 'Atalhos padrão R6s Cheats para Rainbow Six Siege — menu, ESP, soft aim, no recoil, radar e desligar tudo. Reatribua no painel in-game r6scheats.net para teclas nunca conflitarem com binds de gadgets do Siege.',
    date: 'Sep 16, 2026',
    readTime: '3 min de leitura',
    body: [
      { type: 'h2', text: 'Atribuições padrão' },
      {
        type: 'table',
        headers: ['Ação', 'Tecla padrão'],
        rows: [
          ['Abrir / fechar menu', 'INSERT'],
          ['Alternar ESP', 'F1'],
          ['Alternar soft aim', 'F2'],
          ['Alternar no recoil', 'F3'],
          ['Alternar radar', 'F4'],
          ['Desligar tudo (pânico)', 'F12'],
        ],
      },
      { type: 'h2', text: 'Dicas de reatribuição' },
      {
        type: 'p',
        text: 'Evite teclas que o Siege usa para gadgets, ping ou voz. Botões laterais do mouse funcionam bem para desligar tudo. Salve perfis após reatribuir para layouts de ranked e sem ranking ficarem separados.',
      },
      { type: 'h2', text: 'Pratique desligar tudo (F12)' },
      {
        type: 'p',
        text: 'Atribua desligar tudo a um botão lateral do mouse em perfis r6scheats.net que você leva ao ranked — F12 desativa todos os módulos na hora se um clip, glitch de overlay ou pausa de espectador te deixar nervoso no meio do round. Teste o bind em partida personalizada antes da fila BattlEye ranked. Guia de uso: [Como usar cheats Rainbow Six Siege](/forums/how-to-use-r6s-cheats/).',
      },
      { type: 'h2', text: 'Antes do ranked' },
      {
        type: 'p',
        text: 'Teste cada tecla atribuída em partida personalizada — desligar tudo mal atribuído no meio do round é pior que não ter cheats. Mapa completo do menu: [Guia do menu de cheats](/forums/r6s-cheat-menu-guide/).',
      },
    ],
  },
  {
    tag: 'Instruções',
    title: 'Configuração do aimbot R6S',
    slug: 'r6s-aimbot-setup',
    desc: 'Primeira configuração do aimbot R6s Cheats Pro e Elite em Rainbow Six Siege — ativar soft aim com segurança, FOV, suavização, vincular no recoil e testar em unranked antes do ranked nos builds r6scheats.net.',
    date: '17 de set. de 2026',
    readTime: '5 min de leitura',
    body: [
      {
        type: 'p',
        text: 'Módulos de aimbot existem apenas nos tiers Pro e Elite. Usuários Lite: pule este tópico e use [Configurações de ESP](/forums/r6s-esp-settings/). Conclua [Setup de cheats](/forums/r6s-cheat-setup/) e [Antivírus](/forums/r6s-antivirus-setup/) primeiro.',
      },
      { type: 'h2', text: 'Abrir a aba Aim' },
      {
        type: 'p',
        text: 'Injete pelo loader r6scheats.net, inicie Siege, **INSERT** e aba **Aim**. Carregue **Ranked Safe** se for novo — a equipe envia defaults conservadores após cada patch BattlEye.',
      },
      { type: 'h2', text: 'Checklist da primeira sessão' },
      {
        type: 'ol',
        items: [
          'Ative **visible check** antes de tudo',
          '**FOV** 5–8° nos primeiros testes; aperte depois no ranked',
          'Aumente **smoothing** até flicks parecerem naturais no seu monitor',
          'Osso **chest** por padrão; head só em holds longos',
          'Vincule **no recoil** para armas entry (Ash R4-C, Zofia M762)',
          'Uma partida unranked só com soft aim — sem triggerbot ainda',
        ],
      },
      { type: 'h2', text: 'Soft aim vs aimbot completo' },
      {
        type: 'p',
        text: 'Comece com **soft aim** — ajuda tracking em peeks em vez de snap através de cobertura. Modos aimbot completos só em custom games. Ajuste fino: [Configurações soft aim](/forums/r6s-soft-aim-settings/).',
      },
      { type: 'h2', text: 'Antes do ranked' },
      {
        type: 'p',
        text: 'Confira o banner de status em r6scheats.net após patches do Siege. Status amarelo: leia notas da equipe antes de aim no ranked. Tecla panic (**F12** padrão): [Atalhos](/forums/r6s-cheat-hotkeys/).',
      },
    ],
  },
  {
    tag: 'Instruções',
    title: 'Walkthrough HWID Spoofer R6S',
    slug: 'r6s-hwid-spoofer-guide',
    desc: 'Passo a passo do HWID spoofer para hardware bans BattlEye em Rainbow Six Siege — ponto de restauração, download do portal, verificação de identificadores e primeiro launch do Siege após spoof do r6scheats.net.',
    date: '17 de set. de 2026',
    readTime: '6 min de leitura',
    body: [
      {
        type: 'p',
        text: 'Use o HWID spoofer quando contas Ubisoft novas falham na hora em um PC mas funcionam em outro — BattlEye geralmente flaggou o hardware, não a conta. Bans só de conta: [UGC](/tools/r6s-cheats/ugc/). Produto: [HWID Spoofer](/tools/r6s-cheats/hwid-spoofer/).',
      },
      { type: 'h2', text: 'Antes do spoof' },
      {
        type: 'ol',
        items: [
          'Crie um **ponto de restauração** Windows — obrigatório',
          'Feche Rainbow Six Siege, Ubisoft Connect e outros jogos anti-cheat',
          'Baixe o spoofer apenas do portal de entrega r6scheats.net',
          'Execute primeiro o **scan de compatibilidade** do portal',
        ],
      },
      { type: 'h2', text: 'Fluxo de spoof' },
      {
        type: 'p',
        text: 'Siga a checklist do portal em ordem: perfil serial disco → rotação MAC → passo GPU se listado. Não empilhe um segundo spoof tool. Ao terminar, **cold reboot** (desligamento completo, não reinício rápido).',
      },
      { type: 'h2', text: 'Verificar mudança de identificadores' },
      {
        type: 'p',
        text: 'Após reboot, execute o relatório **identifier diff** do portal. Disk e MAC devem diferir do snapshot pre-spoof. Se nada mudou, não inicie Siege — reabra o guia do portal ou contate suporte com order ID.',
      },
      { type: 'h2', text: 'Primeiro launch do Siege após spoof' },
      {
        type: 'p',
        text: 'Inicie Rainbow Six Siege vanilla pelo Ubisoft Connect uma vez antes de injetar cheats. Confirme o menu principal. Depois perfil **conservador** r6scheats.net — só ESP na primeira sessão. Erros do loader: [Erros do loader](/forums/r6s-loader-errors/).',
      },
      { type: 'h2', text: 'O que o spoof não corrige' },
      {
        type: 'p',
        text: 'HWID spoof não remove strikes de reputação nem garante lift de BattlEye Global Ban. PCs compartilhados, notebooks de trabalho e VMs podem falhar no scan — suporte orienta antes de tools driver-level.',
      },
    ],
  },
  {
    tag: 'Instruções',
    title: 'Guia Unlock All R6S',
    slug: 'r6s-unlock-all-guide',
    desc: 'Como usar Unlock All R6s Cheats em Rainbow Six Siege — navegar operadores e skins elite localmente, favoritos, export de loadout e notas de segurança no ranked para Elite no r6scheats.net.',
    date: '17 de set. de 2026',
    readTime: '4 min de leitura',
    body: [
      {
        type: 'p',
        text: 'Unlock All pré-visualiza operadores, skins elite, charms e attachments **localmente no seu client**. Outros jogadores no lobby veem seu inventário real Ubisoft — preview cosmético, não unlock da loja. Incluso no [Elite](/cheats/elite/); página: [Unlock All](/tools/r6s-cheats/unlock-all/).',
      },
      { type: 'h2', text: 'Abrir Unlock All no menu' },
      {
        type: 'p',
        text: 'Injete Elite (ou build Unlock All standalone), inicie Siege e abra o menu. O painel **Unlock All** lista operadores, skins elite e charms em catálogo pesquisável. Use favoritos para loadouts em custom games.',
      },
      { type: 'h2', text: 'Fluxo recomendado' },
      {
        type: 'ol',
        items: [
          'Navegue operadores e skins primeiro em **custom match** ou treino',
          'Salve favoritos para loadouts entry, anchor e flex',
          'Exporte JSON de loadout do painel se trocar de PC',
          'Desative overlays pesados de preview antes do ranked — ESP mínimo',
          'Não assuma que o time vê skins preview na fase de drones',
        ],
      },
      { type: 'h2', text: 'Segurança no ranked' },
      {
        type: 'p',
        text: 'Unlock All não modifica servidores Ubisoft, mas módulos extra de preview no ranked carregam overlays. A equipe recomenda preview só no menu ou custom games, depois módulos de combate (ESP, soft aim) no ranked. Mapa do menu: [Guia do menu](/forums/r6s-cheat-menu-guide/).',
      },
      { type: 'h2', text: 'Lembrete bundle Elite' },
      {
        type: 'p',
        text: 'Se já tem Elite, Unlock All está no mesmo loader — sem segunda compra. Compare tiers em [Rainbow Six Siege Cheats](/cheats/) antes de Unlock All standalone.',
      },
    ],
  },
];
