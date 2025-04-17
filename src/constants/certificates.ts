import CiscoLogo from "../assets/Cisco_logo.webp";
import NdgLogo from "../assets/ndg_logo_p.webp";

export const certificateData = [
  {
    title: "IoT Fundamentals",
    image: "/cisco-iot.png",
    date: new Date(2023, 8, 9).toLocaleDateString(),
    description:
      "Utilizar sensores de IdC, creación de diagramas Business Canvas, describir el rol de red y computación en la niebla.",
    icons: [CiscoLogo],
  },
  {
    title: "Linux Essentials",
    image: "/linux-cisco.png",
    date: new Date(2023, 12, 31).toLocaleDateString(),
    description:
      "Fundamentos de Linux, comandos básicos, administración de usuarios y permisos, y gestión de archivos.",
    icons: [CiscoLogo, NdgLogo],
  },
  {
    title: "Redes Empresariales",
    image: "/ccna-empresarial.png",
    date: new Date(2023, 7, 29).toLocaleDateString(),
    description:
      "Conceptos avanzados de redes empresariales, configuración de routers y switches, y resolución de problemas de red.",
    icons: [CiscoLogo],
  },
  {
    title: "Python Essentials",
    image: "/python-cisco.png",
    date: new Date(2023, 12, 15).toLocaleDateString(),
    description:
      "Fundamentos de Python, sintaxis básica, estructuras de datos y principios de programación.",
    icons: [CiscoLogo],
  },
  {
    title: "Cyber Security Introduction",
    image: "/secusity-cisco.png",
    date: new Date(2024, 9, 19).toLocaleDateString(),
    description:
      "Principios básicos de ciberseguridad, identificación de amenazas, y medidas de protección.",
    icons: [CiscoLogo],
  },
  {
    title: "Introduction to Networking",
    image: "/intro-ccna.png",
    date: new Date(2022, 9, 31).toLocaleDateString(),
    description:
      "Conceptos fundamentales de redes, topologías de red,  protocolos de comunicación mode OSI y VLANs.",
    icons: [CiscoLogo],
  },
];
