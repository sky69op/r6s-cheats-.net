import type { ProductLocaleBundle } from './types';

const sharedGoodToKnow =
  'Rainbow Six Siege y BattlEye reciben actualizaciones frecuentes. Confirma la disponibilidad de módulos en el panel de estado en vivo de r6scheats.net antes de comprar o iniciar. El comportamiento del overlay puede variar en partidas personalizadas, repeticiones y modo espectador tras los parches.';

const sharedLimitations =
  'El software de terceros en Rainbow Six Siege puede violar los Términos de uso de Ubisoft y provocar baneos de BattlEye o acciones sobre la cuenta. Usas este software bajo tu propio riesgo. La compatibilidad y disponibilidad pueden cambiar tras actualizaciones del juego, BattlEye o Windows sin previo aviso.';

const r6sSystemRequirements = [
  { icon: 'windows' as const, text: 'Edición de 64 bits de Windows 10 o Windows 11 compatible.' },
  { icon: 'settings' as const, text: 'Cliente actual de Rainbow Six Siege vía Ubisoft Connect con los últimos parches aplicados.' },
  { icon: 'settings' as const, text: 'Acceso de administrador para la instalación del loader y actualizaciones de parches.' },
  { icon: 'wifi' as const, text: 'Conexión a internet estable para acceso al portal y entrega de parches.' },
  { icon: 'cpu' as const, text: 'Un sistema que cumpla los requisitos de hardware publicados de Rainbow Six Siege.' },
];

const acquisitionSteps = [
  {
    num: '01',
    title: 'Revisar el estado actual',
    desc: 'Consulta el banner en vivo en r6scheats.net antes de comprar—especialmente tras una actualización de Rainbow Six Siege o BattlEye.',
  },
  {
    num: '02',
    title: 'Elegir tu nivel de acceso',
    desc: 'Selecciona Lite, Pro, Elite o la utilidad que encaje con tu objetivo. El acceso a módulos varía según el nivel—compara la lista de funciones antes del checkout mediante nuestro checkout seguro.',
  },
  {
    num: '03',
    title: 'Contactar al equipo',
    desc: 'Confirma disponibilidad, plataforma Ubisoft Connect y datos de pago—ten tu email de pedido listo antes del checkout.',
  },
  {
    num: '04',
    title: 'Seguir la configuración guiada',
    desc: 'Usa solo el portal de operadores, el loader de parches y la guía de setup. Prueba en una partida personalizada, carga presets y luego entra a ranked o unranked.',
  },
];

const hwidSpooferAcquisitionSteps = [
  {
    num: '01',
    title: 'Confirma que es un flag de hardware',
    desc: 'Si una cuenta Ubisoft nueva falla al instante en este PC pero funciona en otra máquina, BattlEye probablemente marcó tu hardware ID — no solo una cuenta. Los bans solo de cuenta van por la ruta de apelación UGC.',
  },
  {
    num: '02',
    title: 'Compra y abre el portal',
    desc: 'Paga HWID Spoofer en r6scheats.net y accede al portal de operadores con tu email de entrega. Descarga solo desde el portal — nunca por enlaces aleatorios de Discord.',
  },
  {
    num: '03',
    title: 'Ejecuta la checklist pre-spoof',
    desc: 'Crea un punto de restauración de Windows, cierra Rainbow Six Siege y Ubisoft Connect, elimina spoofers antiguos, añade exclusiones AV para la carpeta del portal y ejecuta el escaneo de compatibilidad antes de cambiar seriales de disco o MAC.',
  },
  {
    num: '04',
    title: 'Aplica, verifica y reinicia en frío',
    desc: 'Sigue el flujo de spoof del portal, reinicia en frío cuando se indique y revisa el informe de diferencias de identificadores. Solo después de verificar, lanza Siege en partida personalizada con cuenta nueva antes del ranked.',
  },
];

const ugcAcquisitionSteps = [
  {
    num: '01',
    title: 'Identifica quién emitió el ban',
    desc: 'Lee el aviso con cuidado: un BattlEye “Global Ban #ID” va a BattlEye Support; sanciones Ubisoft, retenciones de seguridad o penalizaciones de chat van por Ubisoft Help. UGC enruta cada tipo de caso de forma distinta.',
  },
  {
    num: '02',
    title: 'Recopila las pruebas del caso',
    desc: 'Reúne la pantalla o email del ban, Global Ban ID si aparece, usuario de Ubisoft Connect, cronología, lista de software instalado y cualquier prueba de login o compromiso antes del checkout.',
  },
  {
    num: '03',
    title: 'Compra y construye tu workflow',
    desc: 'Paga UGC Unban Tool en r6scheats.net, abre el panel de casos y arma tu apelación con la plantilla correcta — falso positivo, compromiso de cuenta o disputa de restricción.',
  },
  {
    num: '04',
    title: 'Envía una vez y rastrea seguimientos',
    desc: 'Envía una sola apelación por el canal oficial correcto (BattlEye Contact o ticket Ubisoft Help — no chat en vivo). Regístrala en UGC y revisa el email, incluido spam, por respuestas del revisor.',
  },
];

const unlockAllAcquisitionSteps = [
  {
    num: '01',
    title: 'Elige standalone o bundle Elite',
    desc: 'Unlock All está incluido con los trucos Elite. Compra standalone aquí si solo quieres vista previa cosmética local — operadores, skins elite, charms y accesorios — sin módulos de combate.',
  },
  {
    num: '02',
    title: 'Checkout y entrega por portal',
    desc: 'Completa el checkout en r6scheats.net, confirma tu email de pedido y descarga la build Unlock All del portal de operadores cuando se entregue.',
  },
  {
    num: '03',
    title: 'Prepara Siege para vista previa local',
    desc: 'Actualiza Rainbow Six Siege por Ubisoft Connect, lanza el loader Unlock All antes del menú principal y usa partida personalizada o situación de entrenamiento para que los avisos de guardado en la nube no sobrescriban tu sesión de preview.',
  },
  {
    num: '04',
    title: 'Explora, guarda favoritos y exporta',
    desc: 'Busca en el catálogo cosmético, previsualiza operadores y skins elite solo en tu cliente, guarda favoritos y exporta presets de loadout desde el portal. Otros jugadores en tu lobby siguen viendo tu inventario real de Ubisoft.',
  },
];

export const esProductContent: ProductLocaleBundle = {
  lite: {
    overview: {
      title: 'Diseñado para un flujo claro de awareness en R6S',
      paragraphs: [
        'R6S Lite se centra en ESP de jugadores, localizador de gadgets, alertas de drones y overlay de minimapa—todo lo que necesitas para rastrear roamers y control de ronda sin automatización de aimbot. Los módulos están agrupados en el portal para ajustar distancia, colores y modo a prueba de stream antes de tu primera cola.',
        'Lite es la vía de entrada para jugadores ranked y unranked que quieren intel sin riesgo mínimo de reportes. Sin aimbot, sin triggerbot—solo overlays legibles mantenidos en cada parche en r6scheats.net.',
      ],
    },
    about: [
      {
        type: 'p',
        text: 'R6S Lite está pensado para quienes priorizan la intel. En ranked, conocer posiciones enemigas, colocación de gadgets y ubicación de drones gana más rondas que la puntería pura—Lite te da esa ventaja sin automatización de aimbot.',
      },
      { type: 'h2', text: 'Seguro para ranked por diseño' },
      {
        type: 'p',
        text: 'Lite omite por completo los módulos de aimbot y triggerbot. Tu gameplay se ve natural mientras ESP, seguimiento de gadgets y alertas de drones te mantienen informado. El modo a prueba de stream oculta overlays de la captura OBS—ideal para creadores de contenido.',
      },
    ],
    body: [
      { type: 'h2', text: 'Módulos incluidos' },
      {
        type: 'p',
        text: 'ESP de jugadores con distancia y etiquetas de nombre, localizador de gadgets y trampas, alertas de posición de drones y ocultación de overlay segura para stream. Presets para ranked y unranked en el portal—cárgalos antes de tu primera cola.',
      },
      { type: 'h2', text: 'Ruta de mejora' },
      {
        type: 'p',
        text: 'Los titulares de licencia Lite pueden mejorar a Pro o Elite desde el portal sin perder copias de seguridad de config. Compara niveles en la página principal del producto antes del checkout mediante nuestro checkout seguro.',
      },
    ],
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    fullFeatures: [
      'ESP de jugadores y cajas de operadores',
      'Localizador de gadgets y trampas',
      'Alertas de posición de drones',
      'Etiquetas de nombre de operadores',
      'Overlay de minimapa',
      'Modo overlay a prueba de stream',
      'Lecturas de distancia',
      'Filtro de color de equipo',
      'Filtro defensor/atacante',
      'Seguimiento de cooldown de gadgets',
      'Config preset unranked',
      'Config preset ranked',
      'Copia de seguridad de config en la nube',
      'Auto-actualizador de parches',
    ],
    systemRequirements: r6sSystemRequirements,
    acquisitionSteps,
    acquisitionTitle: 'Cómo obtener {name}',
  },
  pro: {
    overview: {
      title: 'Diseñado para un flujo claro de aimbot en R6S',
      paragraphs: [
        'R6S Pro añade aimbot suave, sin retroceso y triggerbot sobre todos los módulos Lite. Perfiles de armas, ajuste de suavizado y teclas de activación en una pestaña de aim—calibrado para lobbies ranked cuando empiezas con presets del portal, no con sliders al máximo.',
        'Pro es el nivel más popular: suficiente potencia de fuego para ranked y unranked sin límites de plazas Elite. Límites de FOV y suavizado te mantienen eficiente en combate mientras la puntería se ve humana con valores por defecto.',
      ],
    },
    about: [
      {
        type: 'p',
        text: 'R6S Pro es el punto ideal para grinders de ranked. Aimbot, sin retroceso y triggerbot te ayudan a ganar duelos sin patrones obvios de bot—cuando ajustas el suavizado con nuestros presets del portal.',
      },
      { type: 'h2', text: 'Puntería + awareness combinados' },
      {
        type: 'p',
        text: 'Pro hereda todos los módulos Lite y añade aimbot suave, control de retroceso, triggerbot y límites de FOV. Ves el combate antes de que empiece y lo ganas con ajustes de puntería que se mantienen humanos en valores por defecto.',
      },
    ],
    body: [
      { type: 'h2', text: 'Puntería y automatización' },
      {
        type: 'p',
        text: 'Aimbot suave, control sin retroceso, triggerbot con límites de FOV y selección de huesos. El suavizado ajusta el timing de la puntería para que los ajustes se vean naturales en ranked. Empieza con presets del portal, no con sliders al máximo.',
      },
      { type: 'h2', text: 'Combinación recomendada' },
      {
        type: 'p',
        text: 'Pro es el nivel más popular en r6scheats.net—suficiente potencia para lobbies de alto rango sin límites de plazas Elite. Lee nuestro hilo de aimbot en los foros antes de tu primera sesión ranked.',
      },
    ],
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    fullFeatures: [
      'Todos los módulos ESP Lite',
      'Aimbot suave',
      'Control sin retroceso',
      'Triggerbot',
      'Selector de FOV y huesos',
      'Perfiles específicos por arma',
      'Reducción de dispersión',
      'Ajuste de suavizado',
      'Perfiles de puntería por operador',
      'Integración de alertas de drones',
      'Presets seguros para ranked por defecto',
      'Perfil de prueba en partida personalizada',
      'Copia de seguridad de config en la nube',
      'Auto-actualizador de parches',
      'Guías de setup del portal',
    ],
    systemRequirements: r6sSystemRequirements,
    acquisitionSteps,
    acquisitionTitle: 'Cómo obtener {name}',
  },
  elite: {
    overview: {
      title: 'Diseñado para un flujo completo de operador en R6S',
      paragraphs: [
        'R6S Elite es el build privado con wallhack completo, hack de drones, Unlock All y entrega prioritaria de parches. Todos los módulos Lite y Pro incluidos—sin límites, sin upsells dentro del loader.',
        'Las plazas Elite son limitadas para mantener ciclos de parches rápidos y builds mantenibles. Soporte directo del dev te ayuda a ajustar perfiles conservadores antes del ranked. Consulta el banner de estado en r6scheats.net antes de comprar.',
      ],
    },
    about: [
      {
        type: 'p',
        text: 'R6S Elite es el build privado para quienes quieren todo—wallhack completo, hack de drones, Unlock All y soporte directo del dev. Plazas limitadas mantienen el build mantenible y los ciclos de parches rápidos.',
      },
      { type: 'h2', text: 'Usa Elite con responsabilidad' },
      {
        type: 'p',
        text: 'El poder de Elite exige perfiles disciplinados. Prueba en partidas personalizadas, empieza con presets conservadores del portal y sube gradualmente en días—no minutos. Las guías de setup Elite te ayudan a ajustar antes de tu primera cola ranked.',
      },
    ],
    body: [
      { type: 'h2', text: 'Suite completa de wallhack e intel' },
      {
        type: 'p',
        text: 'Wallhack completo, hack de drones, Unlock All y módulo speed hack. Prueba en partidas personalizadas antes del ranked—el poder Elite requiere perfiles disciplinados, no ajustes rage.',
      },
      { type: 'h2', text: 'Disponibilidad' },
      {
        type: 'p',
        text: 'Elite aparece como plazas limitadas en el banner de estado. Consulta la página de estado si el checkout está bloqueado—confirma disponibilidad de plazas antes de comprar.',
      },
    ],
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    fullFeatures: [
      'Todos los módulos Lite + Pro',
      'Suite completa de wallhack',
      'Hack de drones',
      'Módulo speed hack',
      'Desbloquear todos los operadores',
      'Cola prioritaria de parches',
      'Soporte directo del dev',
      'Presets conservadores Elite',
      'Copia de seguridad de config en la nube',
      'Auto-actualizador de parches',
      'Acceso a plazas privadas',
    ],
    systemRequirements: r6sSystemRequirements,
    acquisitionSteps,
    acquisitionTitle: 'Cómo obtener {name}',
  },
  'hwid-spoofer': {
    overview: {
      title: 'Diseñado para un flujo claro de recuperación de hardware',
      paragraphs: [
        'El HWID Spoofer ayuda a jugadores de Rainbow Six Siege cuando BattlEye marca el hardware del PC pero la cuenta Ubisoft sigue limpia. Herramientas de perfil de disco y MAC con checklist de punto de restauración, escaneo de compatibilidad y pasos de verificación post-spoof.',
        'Usa esta vía cuando cuentas nuevas fallen al instante en una máquina pero funcionen en otra—no para casos solo de cuenta BattlEye. Tras la verificación, lanza Rainbow Six Siege en partida personalizada con una cuenta Ubisoft nueva—antes del ranked.',
      ],
    },
    body: [
      { type: 'h2', text: 'Cuándo lo necesitas' },
      {
        type: 'p',
        text: 'Úsalo cuando cuentas Ubisoft nuevas fallen al instante en un PC pero funcionen en otro—enforcement clásico de HWID. No lo uses en casos solo de cuenta BattlEye; consulta [UGC](/tools/r6s-cheats/ugc/) en su lugar.',
      },
      { type: 'h2', text: 'Flujo completo' },
      {
        type: 'p',
        text: 'Punto de restauración, limpieza de drivers, aplicación del spoof, reinicio en frío, verificación de identificadores y luego prueba de inicio de sesión en partida personalizada con cuenta Ubisoft nueva. La checklist completa está en el portal y en nuestro hilo del foro HWID.',
      },
    ],
    goodToKnow:
      'Ejecuta el escaneo de compatibilidad en el portal antes de spoofear. Crea primero un punto de restauración de Windows. Verifica que los identificadores cambiaron tras un reinicio en frío antes de iniciar Rainbow Six Siege.',
    limitations:
      'El spoofing no ayuda en casos solo de cuenta BattlEye. Nunca combines dos herramientas de spoof. PCs compartidos o de trabajo pueden no ser adecuados. Asumes todo el riesgo de cambios a nivel de driver.',
    fullFeatures: [
      'Herramientas de perfil de serie de disco',
      'Rotación de dirección MAC',
      'Checklist de punto de restauración',
      'Escaneo de compatibilidad',
      'Detección de conflictos de drivers',
      'Verificación post-spoof',
      'Informe de diferencias de identificadores',
      'Guía de reinicio en frío',
      'Flujo paso a paso en el portal',
      'Soporte de recuperación del portal',
    ],
    systemRequirements: [
      { icon: 'windows', text: 'Windows 10 u 11 de 64 bits con acceso de administrador.' },
      { icon: 'refresh', text: 'Capacidad de crear un punto de restauración del sistema antes de ejecutar.' },
      { icon: 'shield', text: 'Sigue la guía de setup del portal antes de iniciar Rainbow Six Siege tras el spoofing.' },
      { icon: 'wifi', text: 'Conexión estable para herramientas de verificación del portal.' },
    ],
    acquisitionSteps: hwidSpooferAcquisitionSteps,
    acquisitionTitle: 'Cómo obtener {name}',
  },
  ugc: {
    overview: {
      title: 'Diseñado para flujos de recuperación de cuenta y apelación',
      paragraphs: [
        'UGC (Unban & Governance Control) te ayuda a recuperar cuentas restringidas de gaming, redes sociales y marketplaces con flujos de apelación estructurados y automatización—sin garantías de desbaneo instantáneo.',
        'Construye rutas de disputa personalizadas, rastrea el estado del caso y reconstruye tu presencia con herramientas inteligentes de gestión de restricciones. Las guías del portal te acompañan paso a paso cuando necesites ayuda práctica.',
      ],
    },
    body: [
      { type: 'h2', text: 'Qué cubre UGC' },
      {
        type: 'p',
        text: 'UGC (Unban & Governance Control) es un espacio de trabajo de apelaciones para restricciones Ubisoft, baneos BattlEye y flags de seguridad. Crea flujos personalizados, automatiza pasos de disputa y rastrea el estado del caso desde un panel—no es un servicio de desbaneo garantizado.',
      },
      { type: 'h2', text: 'Expectativas realistas' },
      {
        type: 'p',
        text: 'Algunos baneos BattlEye no se pueden revertir. UGC organiza evidencia y seguimientos para revisión Ubisoft. Combina con [HWID Spoofer](/tools/r6s-cheats/hwid-spoofer/) cuando el hardware esté marcado, o una cuenta nueva cuando la reputación esté quemada.',
      },
    ],
    goodToKnow:
      'Reúne email de pedido, datos de cuenta de plataforma y capturas de la restricción antes de abrir un ticket. UGC estructura apelaciones—no evita la revisión de la plataforma.',
    limitations:
      'UGC no garantiza la restauración de la cuenta. Los resultados varían según el tipo de caso. Baneos BattlEye permanentes pueden requerir una cuenta nueva en lugar de apelación.',
    fullFeatures: [
      'Flujos de apelación personalizados',
      'Automatización de disputas por restricción',
      'Plantillas de documentación de casos',
      'Panel de seguimiento de estado',
      'Guía de verificación de identidad',
      'Estructura de carga de evidencia',
      'Rastreador de cronología',
      'Plantillas de respuesta de seguimiento',
      'Soporte multiplataforma',
    ],
    systemRequirements: [
      { icon: 'mail', text: 'Email de pedido usado en el checkout de r6scheats.net.' },
      { icon: 'shield', text: 'Datos de cuenta y notificación de baneo o restricción si está disponible.' },
      { icon: 'wifi', text: 'Acceso a internet para soporte del portal y panel de casos.' },
    ],
    acquisitionSteps: ugcAcquisitionSteps,
    acquisitionTitle: 'Cómo obtener {name}',
  },
  'unlock-all': {
    overview: {
      title: 'Diseñado para un flujo de vista previa cosmética local',
      paragraphs: [
        'Unlock All te permite explorar operadores, skins elite y charms exclusivos de armas localmente en Rainbow Six Siege—catálogo buscable, favoritos y exportación de loadouts sin modificar compras live de Ubisoft.',
        'Los cosméticos se muestran en tu cliente para pruebas y creación de contenido. Otros jugadores ven tu inventario real, no skins de vista previa. Incluido gratis con Elite; disponible por separado para vista previa cosmética sin módulos de combate.',
      ],
    },
    body: [
      { type: 'h2', text: 'Solo vista previa local' },
      {
        type: 'p',
        text: 'Operadores y skins se muestran en tu cliente para pruebas y creación de contenido. Otros jugadores en tu lobby ven tu inventario real, no skins de vista previa.',
      },
      { type: 'h2', text: 'Incluido con Elite' },
      {
        type: 'p',
        text: 'Unlock All viene incluido en el nivel Elite. Cómpralo por separado aquí si quieres vista previa cosmética sin módulos de combate completos.',
      },
    ],
    goodToKnow:
      'Unlock All muestra operadores y skins localmente en tu cliente. Otros jugadores en tu lobby ven tu inventario real—no skins de vista previa. Incluido en el nivel Elite.',
    limitations:
      'Solo vista previa local—no modifica el inventario Ubisoft ni el estado de la tienda. Otros jugadores no pueden ver skins elite u operadores en vista previa.',
    fullFeatures: [
      'Vista previa de desbloqueo de operadores',
      'Vista previa de skins elite',
      'Personalizador de armas y charms',
      'Editor de charms y accesorios',
      'Cambio de tema HUD',
      'Reemplazo de tarjeta de operador',
      'Lista de favoritos',
      'Exportación de loadout',
    ],
    systemRequirements: r6sSystemRequirements,
    acquisitionSteps: unlockAllAcquisitionSteps,
    acquisitionTitle: 'Cómo obtener {name}',
  },
};
