export type Language = "en" | "pt" | "es";

export const languageLabels: Record<Language, { flag: string; name: string }> = {
  en: { flag: "🇺🇸", name: "English" },
  pt: { flag: "🇧🇷", name: "Português" },
  es: { flag: "🇪🇸", name: "Español" },
};

export const t = {
  nav: {
    problem: { en: "Challenge", pt: "Desafio", es: "Desafío" },
    architecture: { en: "Architecture", pt: "Arquitetura", es: "Arquitectura" },
    engineering: { en: "Engineering", pt: "Engenharia", es: "Ingeniería" },
    validation: { en: "Validation", pt: "Validação", es: "Validación" },
    impact: { en: "Impact", pt: "Impacto", es: "Impacto" },
    principles: { en: "Principles", pt: "Princípios", es: "Principios" },
    evolution: { en: "Evolution", pt: "Evolução", es: "Evolución" },
    media: { en: "Media", pt: "Mídia", es: "Medios" },
  },
  hero: {
    role: {
      en: "Industrial Software Engineer",
      pt: "Engenheiro de Software Industrial",
      es: "Ingeniero de Software Industrial",
    },
    title1: {
      en: "From Shop Floor",
      pt: "Do Chão de Fábrica",
      es: "Del Piso de Fábrica",
    },
    title2: {
      en: "to Scalable Systems",
      pt: "a Sistemas Escaláveis",
      es: "a Sistemas Escalables",
    },
    subtitle: {
      en: "Real industrial software built and validated in production environments. Recognized with the highest WCM certification by Professor Hajime Yamashina.",
      pt: "Software industrial real, construído e validado em ambientes de produção. Reconhecido com a mais alta certificação WCM pelo Professor Hajime Yamashina.",
      es: "Software industrial real, construido y validado en entornos de producción. Reconocido con la más alta certificación WCM por el Profesor Hajime Yamashina.",
    },
    cta1: {
      en: "Explore the Case Study",
      pt: "Explorar o Estudo de Caso",
      es: "Explorar el Caso de Estudio",
    },
    cta2: { en: "View Media", pt: "Ver Mídia", es: "Ver Medios" },
  },
  problem: {
    label: {
      en: "The Challenge",
      pt: "O Desafio",
      es: "El Desafío",
    },
    title: {
      en: "A Factory Running Blind on Quality Data",
      pt: "Uma Fábrica Operando às Cegas em Dados de Qualidade",
      es: "Una Fábrica Operando a Ciegas en Datos de Calidad",
    },
    desc: {
      en: "Whirlpool's Rio Claro plant was transitioning from WPS (Whirlpool Production System) to WCM (World Class Manufacturing). The shop floor lacked digital infrastructure for real-time quality tracking, production traceability, and defect correlation — all critical requirements for WCM maturity.",
      pt: "A planta da Whirlpool em Rio Claro estava em transição do WPS (Whirlpool Production System) para o WCM (World Class Manufacturing). O chão de fábrica carecia de infraestrutura digital para rastreamento de qualidade em tempo real, rastreabilidade de produção e correlação de defeitos — requisitos críticos para a maturidade WCM.",
      es: "La planta de Whirlpool en Rio Claro estaba en transición de WPS (Whirlpool Production System) a WCM (World Class Manufacturing). El piso de fábrica carecía de infraestructura digital para seguimiento de calidad en tiempo real, trazabilidad de producción y correlación de defectos — requisitos críticos para la madurez WCM.",
    },
    challenges: {
      en: [
        { title: "No Real-Time Tracking", desc: "Production data was collected manually and entered into spreadsheets hours after events occurred, making real-time decision-making impossible." },
        { title: "Zero Unit-Level Traceability", desc: "No mechanism to identify individual units or correlate defects to specific components, stations, or assembly stages." },
        { title: "Manual Defect Reporting", desc: "Quality issues were logged on paper forms with no integration to line-stop systems, resulting in delayed response and data loss." },
        { title: "Disconnected Systems", desc: "PLCs, vision systems, printers, and MES operated in isolation with no unified data pipeline connecting shop floor to enterprise systems." },
      ],
      pt: [
        { title: "Sem Rastreamento em Tempo Real", desc: "Dados de produção eram coletados manualmente e inseridos em planilhas horas após os eventos, impossibilitando decisões em tempo real." },
        { title: "Zero Rastreabilidade por Unidade", desc: "Nenhum mecanismo para identificar unidades individuais ou correlacionar defeitos a componentes, estações ou estágios de montagem específicos." },
        { title: "Apontamento Manual de Defeitos", desc: "Problemas de qualidade eram registrados em formulários de papel sem integração com sistemas de parada de linha, resultando em resposta atrasada e perda de dados." },
        { title: "Sistemas Desconectados", desc: "CLPs, sistemas de visão, impressoras e MES operavam isoladamente, sem pipeline de dados unificado conectando chão de fábrica aos sistemas corporativos." },
      ],
      es: [
        { title: "Sin Seguimiento en Tiempo Real", desc: "Los datos de producción se recopilaban manualmente y se ingresaban en hojas de cálculo horas después, imposibilitando decisiones en tiempo real." },
        { title: "Cero Trazabilidad por Unidad", desc: "Ningún mecanismo para identificar unidades individuales o correlacionar defectos con componentes, estaciones o etapas de ensamblaje específicas." },
        { title: "Reporte Manual de Defectos", desc: "Los problemas de calidad se registraban en formularios de papel sin integración con sistemas de paro de línea, resultando en respuesta tardía y pérdida de datos." },
        { title: "Sistemas Desconectados", desc: "PLCs, sistemas de visión, impresoras y MES operaban aisladamente, sin pipeline de datos unificado conectando piso de fábrica con sistemas empresariales." },
      ],
    },
    timeline: {
      en: [
        { year: "2018 Q1", text: "Project kickoff — requirements gathering and shop floor assessment" },
        { year: "2018 Q2", text: "Serialization system design and Zebra printer integration" },
        { year: "2018 Q3", text: "Cognex vision system deployment and tablet rollout" },
        { year: "2018 Q4", text: "FPY dashboards live on factory floor TVs" },
        { year: "2019", text: "WCM audit by Professor Yamashina — Gold Medal awarded" },
      ],
      pt: [
        { year: "2018 Q1", text: "Início do projeto — levantamento de requisitos e avaliação do chão de fábrica" },
        { year: "2018 Q2", text: "Design do sistema de serialização e integração de impressoras Zebra" },
        { year: "2018 Q3", text: "Implantação do sistema de visão Cognex e rollout de tablets" },
        { year: "2018 Q4", text: "Dashboards FPY ao vivo nas TVs do chão de fábrica" },
        { year: "2019", text: "Auditoria WCM pelo Professor Yamashina — Medalha de Ouro concedida" },
      ],
      es: [
        { year: "2018 Q1", text: "Inicio del proyecto — levantamiento de requisitos y evaluación del piso de fábrica" },
        { year: "2018 Q2", text: "Diseño del sistema de serialización e integración de impresoras Zebra" },
        { year: "2018 Q3", text: "Despliegue del sistema de visión Cognex y rollout de tablets" },
        { year: "2018 Q4", text: "Dashboards FPY en vivo en las TVs del piso de fábrica" },
        { year: "2019", text: "Auditoría WCM por el Profesor Yamashina — Medalla de Oro otorgada" },
      ],
    },
  },
  architecture: {
    label: {
      en: "Industrial System Architecture",
      pt: "Arquitetura do Sistema Industrial",
      es: "Arquitectura del Sistema Industrial",
    },
    title: {
      en: "Three-Layer Architecture: From PLC to Cloud",
      pt: "Arquitetura em Três Camadas: Do CLP à Nuvem",
      es: "Arquitectura de Tres Capas: Del PLC a la Nube",
    },
    factory: {
      title: { en: "Factory Layer", pt: "Camada de Fábrica", es: "Capa de Fábrica" },
      items: {
        en: [
          "PLCs connected via industrial Ethernet (Rockwell MicroLogix)",
          "Cognex vision systems reading Data Matrix codes at line speed",
          "Zebra industrial printers for real-time serialization labels",
          "Android tablets and industrial PCs for operator input",
          "BK IP-67 StackLights and sensors for station signaling",
        ],
        pt: [
          "CLPs conectados via Ethernet industrial (Rockwell MicroLogix)",
          "Sistemas de visão Cognex lendo códigos Data Matrix na velocidade da linha",
          "Impressoras industriais Zebra para etiquetas de serialização em tempo real",
          "Tablets Android e PCs industriais para entrada do operador",
          "StackLights BK IP-67 e sensores para sinalização de estação",
        ],
        es: [
          "PLCs conectados vía Ethernet industrial (Rockwell MicroLogix)",
          "Sistemas de visión Cognex leyendo códigos Data Matrix a velocidad de línea",
          "Impresoras industriales Zebra para etiquetas de serialización en tiempo real",
          "Tablets Android y PCs industriales para entrada del operador",
          "StackLights BK IP-67 y sensores para señalización de estación",
        ],
      },
    },
    middleware: {
      title: { en: "Middleware Layer", pt: "Camada de Middleware", es: "Capa de Middleware" },
      items: {
        en: [
          "KEPServerEX OPC server collecting PLC signals",
          "SAP PCo handling connectivity and routing",
          "MS SQL Server as persistence layer",
          "Event-based communication between shop floor and applications",
        ],
        pt: [
          "Servidor OPC KEPServerEX coletando sinais dos CLPs",
          "SAP PCo gerenciando conectividade e roteamento",
          "MS SQL Server como camada de persistência",
          "Comunicação baseada em eventos entre chão de fábrica e aplicações",
        ],
        es: [
          "Servidor OPC KEPServerEX recopilando señales de PLCs",
          "SAP PCo gestionando conectividad y enrutamiento",
          "MS SQL Server como capa de persistencia",
          "Comunicación basada en eventos entre piso de fábrica y aplicaciones",
        ],
      },
    },
    application: {
      title: { en: "Application Layer", pt: "Camada de Aplicação", es: "Capa de Aplicación" },
      items: {
        en: [
          "SAP MII for visualization and execution logic",
          "Web interfaces for operator interaction and defect reporting",
          "Real-time FPY dashboards and Andon displays",
          "Traceability queries and production analytics",
        ],
        pt: [
          "SAP MII para lógica de visualização e execução",
          "Interfaces web para interação do operador e apontamento de defeitos",
          "Dashboards FPY em tempo real e displays Andon",
          "Consultas de rastreabilidade e analytics de produção",
        ],
        es: [
          "SAP MII para lógica de visualización y ejecución",
          "Interfaces web para interacción del operador y reporte de defectos",
          "Dashboards FPY en tiempo real y displays Andon",
          "Consultas de trazabilidad y analytics de producción",
        ],
      },
    },
    dataflow: {
      en: "Data flows in real time: PLC signals → OPC Server → SAP PCo → SQL Server → SAP MII → Dashboards & Operator Interfaces",
      pt: "Dados fluem em tempo real: Sinais CLP → Servidor OPC → SAP PCo → SQL Server → SAP MII → Dashboards & Interfaces do Operador",
      es: "Los datos fluyen en tiempo real: Señales PLC → Servidor OPC → SAP PCo → SQL Server → SAP MII → Dashboards & Interfaces del Operador",
    },
  },
  engineering: {
    label: { en: "Engineering & Subsystems", pt: "Engenharia & Subsistemas", es: "Ingeniería & Subsistemas" },
    title: {
      en: "Serialization-Driven Traceability: The System Backbone",
      pt: "Rastreabilidade por Serialização: A Espinha Dorsal do Sistema",
      es: "Trazabilidad por Serialización: La Columna Vertebral del Sistema",
    },
    serialization: {
      title: { en: "Unit-Level Serialization", pt: "Serialização por Unidade", es: "Serialización por Unidad" },
      desc: {
        en: "Every unit received a unique Data Matrix identifier at the first station, printed automatically by Zebra industrial printers triggered by production events. Each subcomponent — drum, cabinet, lid — was individually identified and programmatically associated across stations, creating a hierarchical assembly record.",
        pt: "Cada unidade recebia um identificador Data Matrix único na primeira estação, impresso automaticamente por impressoras industriais Zebra acionadas por eventos de produção. Cada subcomponente — tambor, gabinete, tampa — era identificado individualmente e associado programaticamente entre estações, criando um registro hierárquico de montagem.",
        es: "Cada unidad recibía un identificador Data Matrix único en la primera estación, impreso automáticamente por impresoras industriales Zebra activadas por eventos de producción. Cada subcomponente — tambor, gabinete, tapa — era identificado individualmente y asociado programáticamente entre estaciones, creando un registro jerárquico de ensamblaje.",
      },
    },
    traceability: {
      title: { en: "Full Backward Traceability", pt: "Rastreabilidade Retroativa Completa", es: "Trazabilidad Retroactiva Completa" },
      desc: {
        en: "At the final stage, unit identifiers were linked to the official Whirlpool serial (BWK/ABBNA) and integrated into SAP. This enabled component-level defect correlation, lot tracking per assembly stage, post-sale audit capability, and digital reconstruction of the full assembly path.",
        pt: "No estágio final, identificadores eram vinculados ao serial oficial Whirlpool (BWK/ABBNA) e integrados ao SAP. Isso permitiu correlação de defeitos por componente, rastreamento de lote por estágio de montagem, capacidade de auditoria pós-venda e reconstrução digital do caminho completo de montagem.",
        es: "En la etapa final, los identificadores se vinculaban al serial oficial Whirlpool (BWK/ABBNA) e integrados en SAP. Esto permitió correlación de defectos por componente, seguimiento de lote por etapa de ensamblaje, capacidad de auditoría posventa y reconstrucción digital de la ruta completa de ensamblaje.",
      },
    },
    cognex: {
      title: { en: "Cognex Vision Integration", pt: "Integração de Visão Cognex", es: "Integración de Visión Cognex" },
      desc: {
        en: "Cognex readers at key stations allowed operators to scan any Data Matrix and instantly retrieve the full component history, effectively creating a real-time digital twin of each product unit on the production line.",
        pt: "Leitores Cognex em estações-chave permitiam aos operadores escanear qualquer Data Matrix e recuperar instantaneamente o histórico completo do componente, criando efetivamente um gêmeo digital em tempo real de cada unidade na linha de produção.",
        es: "Lectores Cognex en estaciones clave permitían a los operadores escanear cualquier Data Matrix y recuperar instantáneamente el historial completo del componente, creando efectivamente un gemelo digital en tiempo real de cada unidad en la línea de producción.",
      },
    },
    zebra: {
      title: { en: "Zebra Printer Integration", pt: "Integração de Impressoras Zebra", es: "Integración de Impresoras Zebra" },
      desc: {
        en: "Industrial Zebra printers were integrated as a critical system component. Print commands triggered automatically by production events, synchronized with process state. Labels generated in real time at the correct station via SAP MII middleware — the bridge between digital data and physical product identity.",
        pt: "Impressoras industriais Zebra foram integradas como componente crítico do sistema. Comandos de impressão acionados automaticamente por eventos de produção, sincronizados com o estado do processo. Etiquetas geradas em tempo real na estação correta via middleware SAP MII — a ponte entre dados digitais e identidade física do produto.",
        es: "Impresoras industriales Zebra se integraron como componente crítico del sistema. Comandos de impresión activados automáticamente por eventos de producción, sincronizados con el estado del proceso. Etiquetas generadas en tiempo real en la estación correcta vía middleware SAP MII — el puente entre datos digitales e identidad física del producto.",
      },
    },
    defect: {
      title: { en: "Defect Tracking & Andon", pt: "Rastreamento de Defeitos & Andon", es: "Seguimiento de Defectos & Andon" },
      desc: {
        en: "Real-time defect classification on industrial tablets with Andon integration for immediate line-stop response. Every defect event was tied to specific unit identifiers, enabling root-cause analysis at the component level.",
        pt: "Classificação de defeitos em tempo real em tablets industriais com integração Andon para resposta imediata de parada de linha. Cada evento de defeito era vinculado a identificadores específicos de unidade, permitindo análise de causa raiz ao nível do componente.",
        es: "Clasificación de defectos en tiempo real en tablets industriales con integración Andon para respuesta inmediata de paro de línea. Cada evento de defecto se vinculaba a identificadores específicos de unidad, permitiendo análisis de causa raíz a nivel de componente.",
      },
    },
    fpy: {
      title: { en: "FPY Dashboards", pt: "Dashboards FPY", es: "Dashboards FPY" },
      desc: {
        en: "Live First Pass Yield dashboards displayed on factory-floor TVs, showing per-station quality metrics updated in real time. Color-coded indicators enabled instant visibility of production health across all line segments.",
        pt: "Dashboards de First Pass Yield ao vivo exibidos em TVs no chão de fábrica, mostrando métricas de qualidade por estação atualizadas em tempo real. Indicadores coloridos permitiam visibilidade instantânea da saúde da produção em todos os segmentos da linha.",
        es: "Dashboards de First Pass Yield en vivo mostrados en TVs del piso de fábrica, mostrando métricas de calidad por estación actualizadas en tiempo real. Indicadores de color permitían visibilidad instantánea de la salud de producción en todos los segmentos de línea.",
      },
    },
  },
  deployment: {
    label: { en: "Deployment & Validation", pt: "Implantação & Validação", es: "Despliegue & Validación" },
    title: {
      en: "Validated on the Factory Floor, Recognized at the Highest Level",
      pt: "Validado no Chão de Fábrica, Reconhecido no Mais Alto Nível",
      es: "Validado en el Piso de Fábrica, Reconocido al Más Alto Nivel",
    },
    milestones: {
      en: [
        "Full deployment at Whirlpool Rio Claro plant across multiple production lines",
        "System survived rigorous WCM audit with live production data",
        "Professor Hajime Yamashina personally validated the FPY tracking system",
        "Gold Medal recognition — the highest WCM category achievable",
      ],
      pt: [
        "Implantação completa na planta da Whirlpool Rio Claro em múltiplas linhas de produção",
        "Sistema sobreviveu a rigorosa auditoria WCM com dados de produção ao vivo",
        "Professor Hajime Yamashina validou pessoalmente o sistema de rastreamento FPY",
        "Reconhecimento Medalha de Ouro — a mais alta categoria WCM alcançável",
      ],
      es: [
        "Despliegue completo en la planta de Whirlpool Rio Claro en múltiples líneas de producción",
        "El sistema sobrevivió una rigurosa auditoría WCM con datos de producción en vivo",
        "El Profesor Hajime Yamashina validó personalmente el sistema de seguimiento FPY",
        "Reconocimiento Medalla de Oro — la más alta categoría WCM alcanzable",
      ],
    },
    medal: {
      title: { en: "WCM Gold Medal", pt: "Medalha de Ouro WCM", es: "Medalla de Oro WCM" },
      desc: {
        en: "The highest recognition in World Class Manufacturing, awarded during the official audit by the methodology's creator, Professor Hajime Yamashina.",
        pt: "O mais alto reconhecimento em World Class Manufacturing, concedido durante a auditoria oficial pelo criador da metodologia, Professor Hajime Yamashina.",
        es: "El más alto reconocimiento en World Class Manufacturing, otorgado durante la auditoría oficial por el creador de la metodología, Profesor Hajime Yamashina.",
      },
    },
    quote: {
      text: {
        en: "The system became part of the operational improvements that supported the plant's evolution toward WCM maturity. It was not just a tool — it was evidence that digital transformation on the shop floor delivers measurable, auditable results.",
        pt: "O sistema tornou-se parte das melhorias operacionais que apoiaram a evolução da planta rumo à maturidade WCM. Não era apenas uma ferramenta — era evidência de que a transformação digital no chão de fábrica entrega resultados mensuráveis e auditáveis.",
        es: "El sistema se convirtió en parte de las mejoras operacionales que apoyaron la evolución de la planta hacia la madurez WCM. No era solo una herramienta — era evidencia de que la transformación digital en el piso de fábrica entrega resultados medibles y auditables.",
      },
      source: {
        en: "— Validated during WCM Audit, Whirlpool Rio Claro, 2019",
        pt: "— Validado durante Auditoria WCM, Whirlpool Rio Claro, 2019",
        es: "— Validado durante Auditoría WCM, Whirlpool Rio Claro, 2019",
      },
    },
  },
  impact: {
    label: { en: "Impact & Results", pt: "Impacto & Resultados", es: "Impacto & Resultados" },
    title: {
      en: "Measurable Operational Impact",
      pt: "Impacto Operacional Mensurável",
      es: "Impacto Operacional Medible",
    },
    metrics: {
      en: [
        { value: 95, suffix: "%", label: "FPY Target Achieved", desc: "First Pass Yield reached on key production lines after system deployment" },
        { value: 100, suffix: "%", label: "Traceability Coverage", desc: "Every unit serialized and tracked from first station to final SAP integration" },
        { value: 40, suffix: "%", label: "Defect Response Time", desc: "Reduction in time-to-action through Andon integration and real-time alerting" },
        { value: 8, suffix: "", label: "Production Lines", desc: "Lines instrumented with the full serialization, FPY, and traceability stack" },
      ],
      pt: [
        { value: 95, suffix: "%", label: "Meta FPY Alcançada", desc: "First Pass Yield alcançado em linhas de produção chave após implantação do sistema" },
        { value: 100, suffix: "%", label: "Cobertura de Rastreabilidade", desc: "Cada unidade serializada e rastreada da primeira estação à integração SAP final" },
        { value: 40, suffix: "%", label: "Tempo de Resposta a Defeitos", desc: "Redução no tempo de ação através da integração Andon e alertas em tempo real" },
        { value: 8, suffix: "", label: "Linhas de Produção", desc: "Linhas instrumentadas com o stack completo de serialização, FPY e rastreabilidade" },
      ],
      es: [
        { value: 95, suffix: "%", label: "Meta FPY Alcanzada", desc: "First Pass Yield alcanzado en líneas de producción clave después del despliegue" },
        { value: 100, suffix: "%", label: "Cobertura de Trazabilidad", desc: "Cada unidad serializada y rastreada desde la primera estación hasta la integración SAP" },
        { value: 40, suffix: "%", label: "Tiempo de Respuesta a Defectos", desc: "Reducción en tiempo de acción mediante integración Andon y alertas en tiempo real" },
        { value: 8, suffix: "", label: "Líneas de Producción", desc: "Líneas instrumentadas con el stack completo de serialización, FPY y trazabilidad" },
      ],
    },
  },
  principles: {
    label: { en: "System Design Principles", pt: "Princípios de Design do Sistema", es: "Principios de Diseño del Sistema" },
    title: {
      en: "Built for Replication, Not Just Deployment",
      pt: "Construído para Replicação, Não Apenas Implantação",
      es: "Construido para Replicación, No Solo Despliegue",
    },
    items: {
      en: [
        { title: "Modular Architecture", desc: "Each subsystem — serialization, defect tracking, FPY, Andon — was designed as an independent module that could be deployed or upgraded without affecting the rest." },
        { title: "Reusable Components", desc: "Tablet interfaces, dashboard templates, and printer integrations were built as configurable components, not one-off implementations." },
        { title: "Line-Agnostic Design", desc: "The architecture was replication-ready: deploying on a new production line required configuration, not re-engineering." },
        { title: "Separation of Concerns", desc: "Shop floor logic (PLC signals, sensor events) was cleanly separated from application logic (FPY calculations, defect classification, reporting)." },
      ],
      pt: [
        { title: "Arquitetura Modular", desc: "Cada subsistema — serialização, rastreamento de defeitos, FPY, Andon — foi projetado como módulo independente que podia ser implantado ou atualizado sem afetar o restante." },
        { title: "Componentes Reutilizáveis", desc: "Interfaces de tablet, templates de dashboard e integrações de impressora foram construídos como componentes configuráveis, não implementações pontuais." },
        { title: "Design Agnóstico de Linha", desc: "A arquitetura estava pronta para replicação: implantar em uma nova linha de produção requeria configuração, não reengenharia." },
        { title: "Separação de Responsabilidades", desc: "Lógica de chão de fábrica (sinais CLP, eventos de sensores) era claramente separada da lógica de aplicação (cálculos FPY, classificação de defeitos, relatórios)." },
      ],
      es: [
        { title: "Arquitectura Modular", desc: "Cada subsistema — serialización, seguimiento de defectos, FPY, Andon — fue diseñado como un módulo independiente que podía desplegarse o actualizarse sin afectar el resto." },
        { title: "Componentes Reutilizables", desc: "Interfaces de tablet, templates de dashboard e integraciones de impresora fueron construidos como componentes configurables, no implementaciones únicas." },
        { title: "Diseño Agnóstico de Línea", desc: "La arquitectura estaba lista para replicación: desplegar en una nueva línea de producción requería configuración, no reingeniería." },
        { title: "Separación de Responsabilidades", desc: "Lógica de piso de fábrica (señales PLC, eventos de sensores) estaba claramente separada de la lógica de aplicación (cálculos FPY, clasificación de defectos, reportes)." },
      ],
    },
  },
  factoryToProduct: {
    label: {
      en: "From Factory Execution to Product Thinking",
      pt: "Da Execução na Fábrica ao Pensamento de Produto",
      es: "De la Ejecución en Fábrica al Pensamiento de Producto",
    },
    title: {
      en: "How Real Manufacturing Shaped a Product Mindset",
      pt: "Como a Manufatura Real Moldou uma Mentalidade de Produto",
      es: "Cómo la Manufactura Real Moldeó una Mentalidad de Producto",
    },
    items: {
      en: [
        { title: "Manufacturing Constraints", desc: "Working inside a live factory taught the importance of latency, reliability, and designing for operators who need answers in seconds, not minutes." },
        { title: "Physical-Digital Bridge", desc: "Building systems that bridge physical production processes and digital logic requires thinking beyond software — understanding material flow, station cycles, and failure modes." },
        { title: "Operator-Centric Design", desc: "Industrial interfaces must work for operators wearing gloves, working in noisy environments, and making decisions under time pressure. This shaped a pragmatic approach to UX." },
        { title: "Platform Thinking", desc: "The experience of deploying across multiple lines with different configurations led to early thinking aligned with industrial SaaS platforms and scalable architectures." },
      ],
      pt: [
        { title: "Restrições de Manufatura", desc: "Trabalhar dentro de uma fábrica em operação ensinou a importância de latência, confiabilidade e projetar para operadores que precisam de respostas em segundos, não minutos." },
        { title: "Ponte Físico-Digital", desc: "Construir sistemas que conectam processos físicos de produção e lógica digital requer pensar além do software — entender fluxo de materiais, ciclos de estação e modos de falha." },
        { title: "Design Centrado no Operador", desc: "Interfaces industriais devem funcionar para operadores usando luvas, trabalhando em ambientes ruidosos e tomando decisões sob pressão de tempo. Isso moldou uma abordagem pragmática de UX." },
        { title: "Pensamento de Plataforma", desc: "A experiência de implantar em múltiplas linhas com diferentes configurações levou a um pensamento inicial alinhado com plataformas SaaS industriais e arquiteturas escaláveis." },
      ],
      es: [
        { title: "Restricciones de Manufactura", desc: "Trabajar dentro de una fábrica en operación enseñó la importancia de latencia, confiabilidad y diseñar para operadores que necesitan respuestas en segundos, no minutos." },
        { title: "Puente Físico-Digital", desc: "Construir sistemas que conectan procesos físicos de producción y lógica digital requiere pensar más allá del software — entender flujo de materiales, ciclos de estación y modos de falla." },
        { title: "Diseño Centrado en el Operador", desc: "Interfaces industriales deben funcionar para operadores usando guantes, trabajando en ambientes ruidosos y tomando decisiones bajo presión de tiempo. Esto moldeó un enfoque pragmático de UX." },
        { title: "Pensamiento de Plataforma", desc: "La experiencia de desplegar en múltiples líneas con diferentes configuraciones llevó a un pensamiento inicial alineado con plataformas SaaS industriales y arquitecturas escalables." },
      ],
    },
  },
  evolution: {
    label: { en: "Product Evolution", pt: "Evolução do Produto", es: "Evolución del Producto" },
    title: {
      en: "From Project to Product — The Birth of Rakkun",
      pt: "De Projeto a Produto — O Nascimento da Rakkun",
      es: "De Proyecto a Producto — El Nacimiento de Rakkun",
    },
    spinoff: {
      title: { en: "Product Spin-Off", pt: "Spin-Off de Produto", es: "Spin-Off de Producto" },
      desc: {
        en: "The architecture and patterns validated at Whirlpool became the foundation for Rakkun — a scalable industrial software platform initiative started in 2016-2017, before the Whirlpool deployment.",
        pt: "A arquitetura e padrões validados na Whirlpool tornaram-se a base para a Rakkun — uma iniciativa de plataforma de software industrial escalável iniciada em 2016-2017, antes da implantação na Whirlpool.",
        es: "La arquitectura y patrones validados en Whirlpool se convirtieron en la base para Rakkun — una iniciativa de plataforma de software industrial escalable iniciada en 2016-2017, antes del despliegue en Whirlpool.",
      },
    },
    events: {
      title: { en: "Industry Events", pt: "Eventos da Indústria", es: "Eventos de la Industria" },
      desc: {
        en: "Presented at Siemens HackDay (MindSphere CloudFoundry), connecting with industry leaders and generating early leads for industrial digitalization projects.",
        pt: "Apresentado no Siemens HackDay (MindSphere CloudFoundry), conectando com líderes da indústria e gerando leads iniciais para projetos de digitalização industrial.",
        es: "Presentado en Siemens HackDay (MindSphere CloudFoundry), conectando con líderes de la industria y generando leads iniciales para proyectos de digitalización industrial.",
      },
    },
    business: {
      title: { en: "Business Development", pt: "Desenvolvimento de Negócios", es: "Desarrollo de Negocios" },
      desc: {
        en: "Real production validation opened doors for conversations with other manufacturers seeking digital transformation on their shop floors.",
        pt: "A validação real em produção abriu portas para conversas com outros fabricantes buscando transformação digital em seus chãos de fábrica.",
        es: "La validación real en producción abrió puertas para conversaciones con otros fabricantes buscando transformación digital en sus pisos de fábrica.",
      },
    },
    cta: {
      en: "Rakkun on LinkedIn",
      pt: "Rakkun no LinkedIn",
      es: "Rakkun en LinkedIn",
    },
  },
  media: {
    label: { en: "Media Gallery", pt: "Galeria de Mídia", es: "Galería de Medios" },
    title: { en: "Behind the Scenes", pt: "Bastidores", es: "Tras las Cámaras" },
    photos: { en: "Photos", pt: "Fotos", es: "Fotos" },
    videos: { en: "Videos", pt: "Vídeos", es: "Videos" },
    disclaimer: {
      en: "These videos were recorded for internal team communication during 2018-2019, not for public content creation.",
      pt: "Estes vídeos foram gravados para comunicação interna da equipe durante 2018-2019, não para criação de conteúdo público.",
      es: "Estos videos fueron grabados para comunicación interna del equipo durante 2018-2019, no para creación de contenido público.",
    },
  },
  footer: {
    copyright: {
      en: "Industrial Software Portfolio",
      pt: "Portfólio de Software Industrial",
      es: "Portafolio de Software Industrial",
    },
  },
} as const;
