

export const project = [
  {
    title: "UPFIM SICD",
    image: "/upfim-web.png",
    description:
      "Sistema integral para la gestión de talleres, docentes y alumnos, desarrollado como parte de un proyecto universitario. Este reto marcó nuestra primera experiencia seria con tecnologías backend como Node.js, Express y MySQL. Implementamos autenticación segura con JWT y cookies de sesión, control de acceso por roles, y un sistema de tokens con refresh.Se diseñó con principios de clean code, bajo metodología SCRUM. En la base de datos trabajamos con procedimientos almacenados, triggers para auditoría y lógica de negocio, y soft deletes mediante campos ENUM, evitando eliminaciones físicas.Del lado frontend, usamos React con componentes reutilizables, TailwindCSS, Material UI y Axios para consumo de APIs RESTful. Incluimos documentación con Swagger y pruebas automatizadas básicas con Playwright. El control de versiones y colaboración se gestionaron en GitHub, utilizando issues y pull requests",
    tags: [
      "React",
      "Tailwind",
      "Node.js",
      "Express",
      "MySQL",
      "JWT",
      "Swagger",
      "Playwright"
    ],
    category: ["Backend", "Frontend"],
    link: "https://github.com/ronalmoctz/UPFIM-DEV.2"
  },
  {
    title: "Modelo DB (MySQL)",
    image: "/db-chart.png",
    description:
      "Este proyecto representa el diseño lógico y estructural de la base de datos utilizada en el sistema SICD. Se elaboró un diagrama E-R detallado aplicando principios de normalización (1FN, 2FN y 3FN) para garantizar la integridad referencial, escalabilidad y eficiencia en las consultas SQL. El modelado fue realizado con herramientas como ChartDB y Write.io, lo que facilitó la documentación técnica y visual para el equipo. Además, se definieron claramente las claves primarias, foráneas, relaciones 1:N y N:M, así como restricciones y convenciones de nombres, sentando una base sólida para la implementación en MySQL. Este esquema fue clave para implementar procedimientos almacenados, triggers, y una lógica de soft deletes eficiente en el backend.",
    tags: ["MySQL", "Modelado DB", "Diagramas E-R", "Normalizacion", "Documentacion"],
    category: ["Backend"],
    link: "https://app.chartdb.io/diagrams/wguggaas2vuv",
  },
  {
    title: "Maqueta para Hackaton",
    image: "/Hacktaon-img.png",
    description:
      "Diseño de una interfaz centrada en el usuario para una aplicación que automatiza y optimiza el transporte público en el Estado de Hidalgo. Durante el hackathon, se priorizó la creación de wireframes funcionales, accesibles y con una experiencia de usuario limpia e intuitiva. El enfoque fue mobile-first, con componentes reutilizables y una estructura visual basada en principios de diseño minimalista, contrastes adecuados, y jerarquía clara para mejorar la navegabilidad. Se emplearon herramientas como Figma, aplicando patrones de UI modernos y accesibilidad WCAG para asegurar un diseño inclusivo. Este diseño sirvió como base para un prototipo navegable utilizado en las fases de presentación del proyecto ante jurados técnicos y UX reviewers.",
    tags: ["Figma", "UI/UX", "Wireframes", "Prototipos"],
    category: ["Figma"],
    link: "https://www.figma.com/design/DsM3yqFBGh6PpBLLwgBCGx/Hackaton-UI%2FUX?node-id=0-1",
  },
  {
    title: "Coleccion Cisco",
    image: "/cisco-simulation.png",
    description:
      "Repositorio que reúne una serie de prácticas y simulaciones de redes desarrolladas en Cisco Packet Tracer, orientadas a la implementación de topologías funcionales, automatización de tareas y simulación de dispositivos IoT. Se trabajaron configuraciones de routing dinámico y estático (RIP, OSPF), segmentación mediante VLANs, NAT, DHCP, así como scripts básicos de automatización para escenarios comunes. Este conjunto de simulaciones sirvió para consolidar habilidades en infraestructura de redes, diseño lógico, troubleshooting y uso de CLI en dispositivos virtuales. El repositorio está organizado por niveles de complejidad e incluye diagramas y anotaciones para facilitar el aprendizaje y la reutilización de las prácticas.",
    tags: ["Cisco", "Redes", "Packet Tracer", "Automatizacion", "IoT"],
    category: ["Redes"],
    tecs: ["../icons/CiscoIcon.astro"],
    link: "https://github.com/ronalmoctz/IoT-Practica",
  },
  {
    title: "Granajas Rodriz Figma",
    image: "/granjas-figma.png",
    description:
      "Diseño completo de la interfaz para Granjas Rodriz, una plataforma orientada al sector agroalimentario. Este prototipo fue elaborado en Figma, enfocándose en una experiencia de usuario limpia y accesible, con wireframes estructurados, jerarquía visual clara y prototipos interactivos para simular el flujo de navegación. El diseño contempla componentes reutilizables, integra principios de usabilidad y accesibilidad para públicos no técnicos. Se priorizó la escalabilidad visual y la legibilidad para dispositivos de bajo rendimiento. Este proyecto refleja la aplicación de una buena UI/UX, diseño responsivo y estructuración de interfaces orientadas a producto real.",
    tags: ["Figma", "UI/UX", "Wireframes", "Prototipos"],
    category: ["Figma"],
    link: "https://www.figma.com/design/WiI4cp2OCDrvVOtqEpp74W/granjas_rodri?node-id=0-1&m=dev&t=7BAkrUNIaOnFVv1f-1",
  },
  {
    title: "Granjas Rodriz Web",
    image: "/granjas-web.png",
    description:
      "Landing page desarrollada con Astro y TailwindCSS, optimizada para alto rendimiento y tiempos de carga mínimos. El diseño es completamente responsivo, pensado tanto para escritorio como móviles, manteniendo una estética limpia y profesional. Este sitio fue construido con especial atención en la optimización SEO, uso mínimo de JavaScript en cliente y principios de accesibilidad. El objetivo fue brindar presencia digital a una PIME dedicada a la producción porcina, integrando contenido claro y visualmente atractivo que refleje la identidad de marca. Se aplicaron buenas prácticas de frontend moderno, con estructura escalable y lista para despliegue continuo.",
    tags: ["Astro", "Tailwind", "SEO", "Web Design"],
    category: ["Frontend"],
    link: "https://granjas-rodriz.vercel.app/",
  },
  {
    title: "API-Books",
    image: "/api-integration.webp",
    description:
      "Desarrollo completo de una API RESTful robusta y segura para la gestión de libros, construida con Bun, Express y TypeScript, siguiendo principios de arquitectura limpia y escalable. La API permite operaciones CRUD, subida de portadas a Cloudinary mediante Multer, validaciones estrictas y uso de PostgreSQL como motor relacional alojado en Neon Vercel. Se implementaron middlewares personalizados para manejo de errores, protección CORS, logging, validación de inputs, y arquitectura por capas con services, repositories, y DTOs.",
    tags: ["Bun", "Express", "TypeScript", "Neon", "Multer", "Cloudinary", "Vercel", "PostgreSQL"],
    category: ["Backend"],
    link: "https://book-api-lac.vercel.app/api/books",
  },
  {
    title: "WEB-Books",
    image: "/web-books.png",
    description:
      "Desarrollo del frontend completo para una aplicación de gestión de libros, consumiendo una API REST construida con Bun . Este cliente fue creado con React, utilizando Shadcn/UI, cmdk, y TailwindCSS para construir una UI moderna, accesible. La interfaz permite registrar libros, subir imágenes a través de Cloudinary, realizar búsquedas, validaciones visuales y mostrar feedback interactivo. Se diseñó pensando en rendimiento, buenas prácticas y experiencia de usuario fluida. El proyecto hace uso de hooks personalizados, manejo de estado limpio, integración con formularios dinámicos y separación de componentes reutilizables.",
    tags: ["React", "Tailwind", "ShadcnUI", "cmdk"],
    category: ["Frontend"],
    link: "https://book-ronal.vercel.app/",
  },
  {
    title: "Nueva UI/UX para Hotel Quinta Rivera",
    image: "/quita_rivera.png",
    description:
      "Rediseño integral de la interfaz y experiencia de usuario para el Hotel Quinta Rivera, centrado en mejorar la usabilidad, accesibilidad y navegación. El proyecto incluyó la creación de wireframes detallados y prototipos interactivos en Figma, optimizando la estructura de las secciones para facilitar la consulta de información relevante y mejorar la interacción del usuario con la plataforma. El enfoque estuvo en diseñar una experiencia intuitiva y atractiva, alineada con las necesidades del cliente y sus usuarios finales, garantizando coherencia visual y una navegación fluida.",
    tags: ["Figma", "UI/UX", "Wireframes"],
    category: ["Figma"],
    link: "https://www.figma.com/design/p8k1VAjGtDZF8x62NoUBgM/Hotel-Quinta-Rivera?node-id=0-1&t=1TXb7i1XrbtgIdKc-1",
  },
];
