import CiscoLogo from "../assets/Cisco_logo.webp";
import NdgLogo from "../assets/ndg_logo_p.webp";

export const certificateData = [
  {
    title: "IoT Fundamentals",
    image: "../../public/47265670_p0.jpg",
    date: new Date(2023, 8, 9).toLocaleDateString(),
    description:
      "Utilizar sensores de IdC, creación de diagramas Business Canvas, describir el rol de red y computación en la niebla.",
    icons: [CiscoLogo],
  },
  {
    title: "Linux Essentials",
    image: "../../public/47265670_p0.jpg",
    date: new Date(2023, 12, 31).toLocaleDateString(),
    description:
      "Fundamentos de Linux, comandos básicos, administración de usuarios y permisos, y gestión de archivos.",
    icons: [CiscoLogo, NdgLogo],
  },
  {
    title: "CCNAv7: Redes Empresariales",
    image: "../../public/47265670_p0.jpg",
    date: new Date(2023, 8, 9).toLocaleDateString(),
    description:
      "Conceptos avanzados de redes empresariales, configuración de routers y switches, y resolución de problemas de red.",
    icons: [CiscoLogo],
  },
];
