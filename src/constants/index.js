import {
    mobile,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    git,
    infinity,
    kkis,
    flutter,
    nextjs,
    portfolio,
    taskify,
  } from "../assets";



  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Flutter Developer",
      icon: mobile,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Git",
      icon: git,
    },{
      name: "Flutter",
      icon: flutter,
    },
    {
      name: "NextJs",
      icon: nextjs,
    },
  ];
  
  const experiences = [
    {
      title: "Flutter Developer",
      company_name: "Infinity Tech",
      icon: infinity,
      iconBg: "#E6DEDD",
      date: "July 2021 - 2022",
      points: [
        "Developing and maintaining mobile applications using Flutter framework and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-mobile compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "KKIS SMS",
      description:
        "A school management system where teachers and students can add/edit and view the results respectively.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "laravel",
          color: "green-text-gradient",
        },
      ],
      image: kkis,
      source_code_link: "https://play.google.com/store/apps/details?id=com.infinitytech.kkis_sms_app",
    },
    {
      name: "Taskify",
      description:
        "A simple task management web application with plenty of features including a payment system. (ongoing)",
      tags: [
        {
          name: "NextJs",
          color: "blue-text-gradient",
        },
        {
          name: "Clerk",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: taskify,
      source_code_link: "https://github.com/Dipesh-stha01/Taskify",
    },
    {
      name: "3D Portfolio",
      description:
        "3D effect portfolio containing my all projects and experiences",
      tags: [
        {
          name: "NectJs",
          color: "blue-text-gradient",
        },
        {
          name: "Vire",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/Dipesh-stha01/3d_portfolio",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };