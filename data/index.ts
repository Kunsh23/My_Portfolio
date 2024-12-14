import { Icon } from "@/components/Approach";
import {
  FaHome,
  FaInfo,
  FaProjectDiagram,
  FaQuoteLeft,
  FaEnvelope,
} from "react-icons/fa";

export const navItems = [
  { name: "Home", link: "/", icon: FaHome },
  { name: "About", link: "#about", icon: FaInfo },
  { name: "Projects", link: "#projects", icon: FaProjectDiagram },
  { name: "Testimonials", link: "#testimonials", icon: FaQuoteLeft },
  { name: "Contact", link: "#contact", icon: FaEnvelope },
];


export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "Currently developing StockFusion ERP for managing stock and expenses.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    name: "Website",
    title: "StockFusion ERP",
    des: "A robust platform for efficient stock and expense management tailored to streamline business operations. (In Progress)",
    img: "/StockFusion.png",
    iconLists: [
      "/figma.svg",
      "/bootstrap.svg",
      "/re.svg",
      "/spring.svg",
      "/mysql.svg",
    ],
    type: "Work In Progress",
  },
  {
    id: 2,
    name: "Website",
    title: "MediPlus",
    des: "An appointment scheduling platform designed to streamline healthcare bookings with ease and efficiency.",
    img: "/MediPlusProject.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://medi-plus-git-main-kunshs-projects-b0b905c5.vercel.app/",
    type: "Check Live Site",
  },
  {
    id: 3,
    name: "Website",
    title: "Umamia | うまみあ",
    des: "A Japanese restaurant landing page offering delivery of sushi, ramen, and drinks, bringing authentic flavors to your door.",
    img: "/UmamiaProject.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg"],
    link: "https://umamia-kunshs-projects-b0b905c5.vercel.app/",
    type: "Check Live Site",
  },
  {
    id: 4,
    name: "Website",
    title: "QuickRide",
    des: "A rental car service offering affordable and convenient transportation solutions for all your travel needs.",
    img: "/QuickRides.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg"],
    link: "https://quick-ride-git-main-kunshs-projects-b0b905c5.vercel.app/",
    type: "Check Live Site",
  },
  {
    id: 5,
    name: "UI",
    title: "Melodix",
    des: "A music discovery app connecting fans with artists, offering personalized playlists and a seamless listening experience.",
    img: "/Melodix.png",
    iconLists: ["/figma.svg"],
    link: "https://www.figma.com/proto/mltYZOIFliun7GZHjby8IG/Music-Player-App?page-id=0%3A1&node-id=73-1547&node-type=canvas&viewport=142%2C-71%2C0.14&t=pZlO32VciIlaqyr6-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=73%3A1547",
    type: "Check Live Prototype",
  },
  {
    id: 6,
    name: "UI",
    title: "Furny",
    des: "A modern furniture store landing page showcasing stylish designs and quality pieces to enhance any space.",
    img: "/Furny.png",
    iconLists: ["/figma.svg"],
    link: "https://www.figma.com/proto/dQ2WAZHnFRU2WJTAf91rkx/Furniture-Store-Website?page-id=0%3A1&node-id=1-4&t=vZ46uOMcXngHkTml-1",
    type: "Check Live Prototype",
  },
];

export const testimonials = [
  {
    quote:
      "I can definitely tell it was great working with Kunsh. He does have the habit of putting thoughts into the idea. At several occasions we just gave him the idea about the functionality of the screen and he took his time to design screens that matched with the current UI, yet was innovative. He did put great effort in trying to match the desired functionality of the screens correctly. I trust he has got a great future ahead of him. All the best.",
    name: "Nishant Kapoor",
    title: "Manager - Customer Success at RARR Technologies",
    image: "/nishant_sir_pic.png",
  },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
];

export const companies = [
  {
    id: 1,
    name: "RARR Technologies",
    img: "/rarrlogo.svg",
    nameImg: "/rarrnamelogo.svg",
  },
  // {
  //   id: 2,
  //   name: "appwrite",
  //   img: "/app.svg",
  //   nameImg: "/appName.svg",
  // },
  // {
  //   id: 3,
  //   name: "HOSTINGER",
  //   img: "/host.svg",
  //   nameImg: "/hostName.svg",
  // },
  // {
  //   id: 4,
  //   name: "stream",
  //   img: "/s.svg",
  //   nameImg: "/streamName.svg",
  // },
  // {
  //   id: 5,
  //   name: "docker.",
  //   img: "/dock.svg",
  //   nameImg: "/dockerName.svg",
  // },
];

export const workExperience = [
  {
    id: 1,
    title: "UI/UX Designer Intern",
    subtitle: "RARR Technologies | Jul'24 - Aug'24",
    desc: "At RARR Technologies, Worked as a UX/UI Designer and Tester, where I was responsible for redesigning and refining user interfaces to enhance usability and improve the overall user experience. I collaborated closely with the development team to align design outputs with technical requirements and conducted unit and functionality testing to ensure seamless performance. As the sole designer, I led all design initiatives, created detailed flowcharts to represent workflows, and delivered user-friendly and visually appealing solutions within tight deadlines.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  // {
  //   id: 2,
  //   title: "Mobile App Dev - JSM Tech",
  //   desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp2.svg",
  // },
  // {
  //   id: 3,
  //   title: "Freelance App Dev Project",
  //   desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp3.svg",
  // },
  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Kunsh23",
  },
  // {
  //   id: 2,
  //   img: "/twit.svg",
  // },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/kunsh-suneja/",
  },
];
