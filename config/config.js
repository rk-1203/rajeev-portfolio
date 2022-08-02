import profile from "./profile.jpeg";
// import {
//   faAppStore,
//   faGithub,
//   faGooglePlay,
// } from "@fortawesome/free-brands-svg-icons";

export const navigation = {
  name: "Rajeev",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Videos",
      link: "#videos",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    },
  ],
};
export const intro = {
  title: "Hey, I'm Rajeev",
  description:
    "Innovative creator, designer, lifestyle vlogger, palmist and face reader",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    // {
    //   title: "Resume",
    //   link: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
    //   isPrimary: false,
    // },
  ],
};

export const about = {
  title: "Who I am",
  description: [
    `I graduated from Patna College with a degree in Psychology, where I was a university topper. But then I decided to pursue fashion design from JDIFT, Mumbai. 
		I kick-started my professional career as a costume designer in a foreign project named Yeshu Masih - a multi-lingual tv serial hosted on television (still available on youtube). 
		Then I also worked as a manager in the pharma and insurance industries.`,
    `I then started working as a government teacher and along with teaching, I started my own restaurant named Hyderabadi Biryani House. 
		Now I have also discovered my new passion in travel & lifestyle vlogging for which I have also created a youtube channel - Rajeev's Mirror.`,
  ],
};

// export const work = {
//   title: "What I do",
//   cards: [
//     {
//       title: "Mobile App Development",
//       description: "I create pixel perfect iOS and Andriod apps using Flutter.",
//       icons: null,
//     },
//     {
//       title: "Web Development",
//       description: "I create responsive static websites using Reactjs.",
//       icons: null,
//     },
//   ],
// };

// export const projects = {
//   title: "Projects",
//   cards: [
//     {
//       title: "StarBook",
//       description:
//         "A digital diary and mood tracking app that helps you in keeping track of your mood and productivity throughout the month/year.",
//       icons: [
//         {
//           icon: faAppStore,
//           link: "https://apps.apple.com/us/app/starbook-journal-ai-diary/id1552418289",
//         },
//         {
//           icon: faGithub,
//           link: "https://github.com/hashirshoaeb/star_book",
//         },
//       ],
//     },
//     {
//       title: "QuranTalk",
//       description:
//         "An emotional well being and mental health app. The app helps people to navigate their emotions in the light of the Quran.",
//       icons: [
//         {
//           icon: faAppStore,
//           link: "https://apps.apple.com/us/app/qurantalk/id1563425149",
//         },
//         {
//           icon: faGooglePlay,
//           link: "https://play.google.com/store/apps/details?id=com.ayahemotion.quran_talk",
//         },
//       ],
//     },
//     {
//       title: "Portfolio",
//       description:
//         "A portfolio website template that helps you showcase your work, projects and skills as a software developer or freelancer.",
//       icons: [
//         {
//           icon: faGithub,
//           link: "https://github.com/hashirshoaeb/portfolio",
//         },
//       ],
//     },
//   ],
// };

export const videos = {
  title: "Videos",
  cards: [
    {
      url: "https://www.youtube.com/embed/Nxxn8QVzKJo",
    },
    {
      url: "https://www.youtube.com/embed/wdT9XEbW79Y",
    },
    {
      url: "https://www.youtube.com/embed/zCQbFHJQMDI",
    },
    {
      url: "https://www.youtube.com/embed/wAS9LAeC_4I",
    },
    {
      url: "https://www.youtube.com/embed/BO-tkw2gJdQ",
    },
    {
      url: "https://www.youtube.com/embed/eTX9a_6pPv4",
    },
    {
      url: "https://www.youtube.com/embed/3HhyvHWnglE",
    },
    {
      url: "https://www.youtube.com/embed/XoTBPLv9VTU",
    },
    {
      url: "https://www.youtube.com/embed/Dd2QPUyhe3I",
    },
  ],
};

export const contact = {
  title: "Get in touch",
  description:
    "Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at rajeevmirror230@gmail.com.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:rajeevmirror230@gmail.com",
      isPrimary: true,
    },
    // {
    //   title: "Schedule Meeting",
    //   link: "",
    //   isPrimary: false,
    // },
  ],
};

// SEARCH ENGINE
export const SEO = {
  // 50 - 60 char
  title:
    "Rajeev Kumar Ranjan | Innovative creator | Designer | Lifestyle vlogger | Palmist | Face Reader",
  description:
    "I am a teacher, gardener, chef and youtuber. I graduated from Patna College with a degree in Psychology, where I was a university topper.",
  image: profile.src,
};

export const links = {
  image: profile.src,
  title: "@rajeev",
  description:
    "Rajeev Kumar Ranjan | Innovative creator | Designer | Lifestyle vlogger | Palmist | Face Reader",
  cards: [
    {
      title: "Youtube",
      link: "https://www.youtube.com/c/RAJEEVSMIROR",
    },
    {
      title: "Instagram",
      link: "https://www.instagram.com/rajiv_mirror/",
    },
    {
      title: "Facebook",
      link: "https://www.facebook.com/RajivsMirror",
    },
  ],
};
