import adobexdicon from "../../assets/icons/adobexdicon.svg";
import canvaicon from "../../assets/icons/canvaicon.svg";
import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import nextjsicon from "../../assets/icons/nextjsicon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
import vuejsicon from "../../assets/icons/vueicon.svg";
import expressicon from "../../assets/icons/expressicon.svg";
import sassscssicon from "../../assets/icons/sassicon.svg";
import trelloicon from "../../assets/icons/trelloicon.svg";
import apiicon from "../../assets/icons/apiicon.svg";
import axiosicon from "../../assets/icons/axiosicon.svg";
import spotifyicon from "../../assets/icons/spotifyicon.svg";
import netlifyicon from "../../assets/icons/netlifyicon.svg"
import rendericon from "../../assets/icons/rendericon.svg";
import jwticon from "../../assets/icons/jwticon.svg";
import wordpressicon from "../../assets/icons/wordpressicon.svg";
import shopifyicon from "../../assets/icons/shopifyicon.svg";
import webflowicon from "../../assets/icons/webflowicon.svg";
import tastyMockup from "../../assets/img/Corporacion.png";
import instorMockup from "../../assets/img/Flujos.png";
import silentmoonMockup from "../../assets/img/Lenguajes.avif";
import profilepicture from "../img/Perfil.jpeg";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";

export const headerIntroData = {
  title: {
    de: "Hola, mi nombre es Douglas Moreno",
    en: "Hi, I'm Douglas Moreno",
  },
  subtitle: "Desarrollador Junior ",
  description: {
    de: "Soy Douglas un desarrollador que ha participado en varios proyectos, me encanta aprender y compartir conocimientos. Aquí presento mis trabajos y mi pasión por el desarrollo web. ¡Vamos a crear soluciones digitales juntos y dar forma al futuro!",
    en: "I'm Douglas a developer who has participated in several projects, I love learning and sharing knowledge. Here I present my work and my passion for web development. Let's create digital solutions together and shape the future!",
  },
  buttons: [
    {
      name: "Contacts",
      label: {
        de: "Contactame",
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        de: "Mis Proyectos",
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "Participación en proyectos",
    description:
      "Participe como Voluntario en la CORPORACION GESTION SOSTENIBLE, en el desarrollo de una aplicación web para la gestión de residuos sólidos, la cual permite a los usuarios registrar sus residuos y a las empresas gestionar la recolección de los mismos.",
    description_EN:
      "participated as a Volunteer in the CORPORACION GESTION SOSTENIBLE, in the development of a web application for the management of solid waste, which allows users to register their waste and companies to manage the collection of the same.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "REST Api", icon: apiicon },
      { name: "React", icon: reacticon },
      { name: "Figma", icon: figmaicon },
      { name: "Canva", icon: canvaicon },
      { name: "Microsoft", icon: "https://www.microsoft.com/es-co" },
      { name: "Trello", icon: trelloicon },
    ],
    image: tastyMockup,
    deploymenturl: "https://gestionsostenible.org/",
    githuburl: "https://gestionsostenible.org/",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Tecnologias usadas",
    description:
      "Currently I handle the following technologies",
    description_EN:
      "Actualmente manejo las siguientes tecnologias",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "PHP", icon: "https://www.php.net/" },
      { name: "React", icon: reacticon },
      { name: "JWT & Bcrypt", icon: jwticon },
      { name: "Axios", icon: axiosicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Node.js", icon: nodejsicon },
      { name: "Figma", icon: figmaicon },
      { name: "Render", icon: rendericon },
    ],
    image: silentmoonMockup,
    deploymenturl: "https://gestionsostenible.org/",
    githuburl:
      "https://gestionsostenible.org/",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "Corporacion Gestion Sostenible",
    description:
      "Trabaje en la Corporacion Gestion Sostenible, estuve en el Desarrollo web Div. 1 Dep 2, aqui realice varias funciones como diseñar la pagina principal lde la corporacion todo mediante Wordpress, ademas de realizar la automatizacion de varios procesos utilizando aplicaciones de Microsoft .",
    description_EN:
      "I worked at the Corporacion Gestion Sostenible, I was in the web development Div. 1 Dep 2, here I performed various functions such as designing the main page of the corporation all through Wordpress, in addition to automating various processes using Microsoft applications.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Wordpress", icon: wordpressicon },
      { name: "Node.js", icon: nodejsicon },
      { name: "Figma", icon: figmaicon },
      { name: "Render", icon: rendericon },
      { name: "Trello", icon: trelloicon },
    ],
    image: instorMockup,
    deploymenturl: "https://gestionsostenible.org/",
    githuburl: "https://gestionsostenible.org/",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
] as const;

export const liveTickerData = {
  content: {
    de: "Mas proyectos en Github",
    en: "More Projects on Github",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "DESARROLLADOR EN:",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Next.js",
        hash: "#Next.js",
        icon: [nextjsicon, nextjsiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },
      {
        title: "Vue.js",
        hash: "#Vue.js",
        icon: vuejsicon,
        color: "#4FC08D",
      },
      {
        title: "WORDPRESS",
        hash: "#WORDPRESS",
        icon: [wordpressicon],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "SASS/SCSS",
        hash: "#SASS/SCSS",
        icon: sassscssicon,
        color: "#CC6699",
      },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Diseñador en:",
    skills: [
      { title: "Figma", hash: "#Figma", icon: figmaicon, color: "#F24E1E" },
      {
        title: "Adobe XD",
        hash: "#Adobe XD",
        icon: adobexdicon,
        color: "#FF61F6",
      },
      { title: "Canva", hash: "#Canva", icon: canvaicon, color: "#00C4CC" },
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "Desarrollador en:",
    skills: [
      {
        title: "WordPress",
        hash: "#WordPress",
        icon: wordpressicon,
        color: "#21759B",
      },
    ],
  },
] as const;

export const navLinks = [
  { de: "Inicio", en: "Home", hash: "#home", icon: GoHome },
  { de: "Habilidades", en: "Skills", hash: "#skills", icon: GoStack },
  { de: "Proyectos", en: "Projects", hash: "#projects", icon: GoProject },
  { de: "Acerca de mi", en: "About me", hash: "#about-me", icon: GoPerson },
  { de: "Contactame", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { de: "Politicas", en: "Politics", hash: "#imprint", data: <Imprint /> },
  { de: "Privacidad", en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:dodalyn3@gmail.com",
  text: "dodalyn3@com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/ddmoreno1/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/ddmoreno1",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:dodalyn3@gmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    de: '"El precio del éxito es trabajo duro, dedicación y la determinación de haber dado lo mejor de nosotros mismos, hayamos vencido o perdido."',
    en: `"The price of success is hard work, dedication to the job at hand, and the determination that whether we win or lose, we have applied the best of ourselves to the task at hand."`,
    author: "Vince Lombardi",
  },
  {
    de: '"Los lenguajes de programación permiten a todos los dispositivos , interpretar códigos que hacen posible crear sitios web, apps, apps web."',
    en: `"Programming languages allow all devices to interpret codes that make it possible to create websites, apps, web apps."`,
  },
] as const;

export const aboutMeData = {
  title: "Acerca de mi",
  title_EN: "Acerca de mi",
  description: "Soy un desarrollador enfocado en el ambito tecnologico dispuesto a poner en practica mis conocimientos y habilidades en el desarrollo de aplicaciones web, me encanta aprender y compartir conocimientos. Aquí presento mis trabajos y mi pasión por el desarrollo web. ¡Vamos a crear soluciones digitales juntos y dar forma al futuro!",
  description_EN: "I am a developer focused on the technological field willing to put my knowledge and skills into practice in the development of web applications, I love learning and sharing knowledge. Here I present my work and my passion for web development. Let's create digital solutions together and shape the future!",
  paragraphs_DE: [
    {
      title: "La razon de Programar",
      description:
        "La programación es una de las habilidades más valiosas que puedes aprender. No importa si estás construyendo una carrera en tecnología o simplemente quieres automatizar tareas repetitivas, aprender a programar te dará una ventaja en la vida.",
      icon: hardwareicon,
    },
    {
      title: "Web",
      description:
        "Un buen desarrollador de software trabaja con disciplina y constancia desde el primer día",
      icon: caricon,
    },
    {
      title: "Motivo",
      description:
        "Si puedes imaginarlo, puedes Programarlo.",
      icon: travelicon,
    },
  ],
  paragraphs_EN: [
    {
      title: "The Reason for Programming",
      description:
        "Programming is one of the most valuable skills you can learn. Whether you're building a career in technology or just want to automate repetitive tasks, learning to program will give you an advantage in life.",
      icon: hardwareicon,
    },
    {
      title: "Web",
      description:
        "A good software developer works with discipline and perseverance from day one.",
      icon: caricon,
    },
    {
      title: "Reason",
      description:
        "If you can imagine it, you can program it.",
      icon: travelicon,
    },
  ],
};

export const contactData = {
  title: {
    de: "Contactame",
    en: "Contact",
  },
  description: {
    de: "Escribeme un mensaje y me pondré en contacto contigo.",
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        de: "Tu Nombre",
        en: "Your Name",
      },
      type: "text",
      validation: {
        de: "Por favor ingresa tu nombre",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        de: "Tu E-Mail",
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        de: "Por favor ingresa tu E-Mail",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        de: "Tu Asunto",
        en: "Your Subject",
      },
      type: "text",
      validation: {
        de: "Por favor ingresa tu asunto",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      de: "Tu Mensaje",
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      de: "Por favor ingresa tu mensaje",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      de: "Enviar",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      de: "Yo acepto que Douglas puede usar mis datos personales (nombre y dirección de correo electrónico) para ponerse en contacto conmigo.",
      en: "I agree that Douglas may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      de: "Al enviar esta solicitud, aceptas que has leído la Política de Privacidad",
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    de: "🦄 La vida demos se abrirá en breve. Iniciando servidores...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    de: "🦄 Gracias por tu email. Me pondré en contacto contigo lo antes posible",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    de: "🦄 Desafortunadamente el envío de tu email no funcionó. Por favor intenta de nuevo más tarde",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    de: "Por favor ingresa tu nombre",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    de: "ES",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
