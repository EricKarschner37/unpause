import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const contactOptions = [
  {
    displayText: "erickarschner@gmail.com",
    link: "mailto:erickarschner@gmail.com",
    icon: "at" as IconProp,
  },
  {
    displayText: "eric.karschner.studio",
    link: "https://eric.karschner.studio",
    icon: "globe" as IconProp,
  },
  {
    displayText: "EricKarschner37",
    link: "https://github.com/EricKarschner37",
    icon: ["fab", "github"] as IconProp,
  },
  {
    displayText: "(570)-494-6150",
    icon: "phone-flip" as IconProp,
  },
  {
    displayText: "eric-karschner",
    link: "https://www.linkedin.com/in/eric-karschner",
    icon: ["fab", "linkedin"] as IconProp,
  },
];

export const educationSections = [
  {
    title: "B.S. Computational Mathematics",
    link: {
      display: "Rochester Institute of Technology",
      link: "https://rit.edu",
    },
    dateString: "2019 - 2023",
    tags: [{ text: "GPA: 3.86" }],
  },
];

export const experienceSections = [
  {
    title: "Software Engineering Intern",
    description:
      "Spearheaded and completed project to overhaul Service Resource page in React app and created unit and synthetics tests to ensure performance. Conducted an experiment to evaluate and measure performance of WebAssembly usage.",
    link: {
      display: "Datadog",
      link: "https://datadoghq.com",
    },
    dateString: "Jan 2022 - Aug 2022",
    tags: [
      { text: "React", icon: ["fab", "js"] as IconProp, isFilterable: true },
      {
        text: "Typescript",
        icon: ["fab", "js"] as IconProp,
        isFilterable: true,
      },
      { text: "Redux", icon: ["fab", "js"] as IconProp, isFilterable: true },
      {
        text: "Javascript",
        icon: ["fab", "js"] as IconProp,
        isFilterable: true,
      },
      { text: "Go", icon: ["fab", "golang"] as IconProp, isFilterable: true },
      {
        text: "WebAssembly",
      },
    ],
  },
  {
    title: "Android Development Intern",
    description:
      "Created extensible, reusable disclosure flow, optimized for reuse throughout the Android application. Obtained and visualized relevant metrics, including user feedback.",
    link: {
      display: "Robinhood",
      link: "https://robinhood.com",
    },
    dateString: "May 2021 - August 2021",
    tags: [
      {
        text: "Android",
        icon: ["fab", "android"] as IconProp,
        isFilterable: true,
      },
      {
        text: "Kotlin",
        icon: ["fab", "java"] as IconProp,
        isFilterable: true,
      },
      {
        text: "XML",
        icon: ["fab", "android"] as IconProp,
        isFilterable: true,
      },
      {
        text: "Hilt",
        icon: ["fab", "android"] as IconProp,
        isFilterable: true,
      },
      {
        text: "Dagger",
        icon: ["fab", "android"] as IconProp,
        isFilterable: true,
      },
    ],
  },
  {
    title: "Software Engineering Intern",
    description:
      "Worked on a variety of research projects, with technologies including deep neural networks, computer vision, and other machine learning models. Developed a model to detect misinformation in images, using BERT and NLP.",
    link: {
      display: "CUBRC, Inc.",
      link: "https://www.cubrc.org",
    },
    dateString: "Jan 2021 - May 2021",
    tags: [
      {
        text: "Tensorflow",
        isFilterable: true,
        icon: ["fab", "python"] as IconProp,
      },
      { text: "Computer Vision", isFilterable: true },
      { text: "Neural Networks", isFilterable: true },
      { text: "TF-IDF", isFilterable: true },
      { text: "BERT", isFilterable: true },
      { text: "NLP", isFilterable: true },
    ],
  },
  {
    title: "Software Engineering Extern",
    description:
      "Worked with a team to develop a mobile application to improve communication and information retention for the 101st division of the US Army.",
    link: {
      display: "Major League Hacking",
      link: "https://www.mlh.io",
    },
    dateString: "Oct 2020 - Dec 2020",
    tags: [
      {
        text: "React Native",
        isFilterable: true,
        icon: ["fab", "js"] as IconProp,
      },
      { text: "Expo", isFilterable: true, icon: ["fab", "js"] as IconProp },
      {
        text: "Javascript",
        isFilterable: true,
        icon: ["fab", "js"] as IconProp,
      },
    ],
  },
];

export const projectsSections = [
  {
    title: "Jeopardy!",
    description:
      "A replication of the classic game show Jeopardy!, with a React frontend, Android application, and Go backend.",
    link: {
      display: (
        <>
          <FontAwesomeIcon icon={["fab", "github"]} /> EricKarschner37/Jeopardy
        </>
      ),
      link: "https://github.com/EricKarschner37/Jeopardy",
    },
    tags: [
      {
        text: "React",
        icon: ["fab", "js"] as IconProp,
        isFilterable: true,
      },
      {
        text: "Kotlin",
        icon: ["fab", "java"] as IconProp,
        isFilterable: true,
      },
      { text: "Go", icon: ["fab", "golang"] as IconProp, isFilterable: true },
      {
        text: "Jetpack Compose",
        icon: ["fab", "android"] as IconProp,
        isFilterable: true,
      },
      { text: "WebSockets", isFilterable: true },
    ],
  },
  {
    title: "CSH AnDrink",
    description:
      "An Android Client for the Computer Science House on-floor networked vending machines, using the MVVM architecture, the Android Room library for data persistence, and the Fuel library for making network calls.",
    link: {
      display: (
        <>
          <FontAwesomeIcon icon={["fab", "github"]} /> EricKarschner37/AnDrink
        </>
      ),
      link: "https://github.com/EricKarschner37/AnDrink",
    },
    tags: [
      {
        text: "Kotlin",
        icon: ["fab", "java"] as IconProp,
        isFilterable: true,
      },
      {
        text: "Android Room",
        icon: ["fab", "android"] as IconProp,
        isFilterable: true,
      },
      { text: "MVVM", isFilterable: true },
      { text: "OAuth v2", isFilterable: true },
    ],
  },
];

export const languagesSubsections = [
  {
    tags: [
      {
        text: "Kotlin",
        icon: ["fab", "java"] as IconProp,
        isFilterable: true,
      },
      { text: "Java", icon: ["fab", "java"] as IconProp, isFilterable: true },
      {
        text: "Python",
        icon: ["fab", "python"] as IconProp,
        isFilterable: true,
      },
      { text: "Rust", icon: ["fab", "rust"] as IconProp, isFilterable: true },
      {
        text: "Javascript",
        icon: ["fab", "js"] as IconProp,
        isFilterable: true,
      },
      { text: "Go", icon: ["fab", "golang"] as IconProp, isFilterable: true },
      { text: "MATLAB", icon: "calculator" as IconProp, isFilterable: true },
    ],
    contentShouldBeFiltered: false,
  },
];

export const librariesSections = [
  {
    tags: [
      {
        text: "Matplotlib",
        icon: ["fab", "python"] as IconProp,
        isFilterable: true,
      },
      {
        text: "pandas",
        icon: ["fab", "python"] as IconProp,
        isFilterable: true,
      },
      {
        text: "numpy",
        icon: ["fab", "python"] as IconProp,
        isFilterable: true,
      },
      {
        text: "scipy",
        icon: ["fab", "python"] as IconProp,
        isFilterable: true,
      },
      {
        text: "Tensorflow",
        icon: ["fab", "python"] as IconProp,
        isFilterable: true,
      },
      {
        text: "React",
        icon: ["fab", "js"] as IconProp,
        isFilterable: true,
      },
      {
        text: "React Native",
        icon: ["fab", "js"] as IconProp,
        isFilterable: true,
      },
      {
        text: "Redux",
        icon: ["fab", "js"] as IconProp,
        isFilterable: true,
      },
      {
        text: "Retrofit",
        icon: ["fab", "android"] as IconProp,
        isFilterable: true,
      },
      {
        text: "Hilt",
        icon: ["fab", "android"] as IconProp,
        isFilterable: true,
      },
      {
        text: "Dagger",
        icon: ["fab", "android"] as IconProp,
        isFilterable: true,
      },
      {
        text: "Jetpack Compose",
        icon: ["fab", "android"] as IconProp,
        isFilterable: true,
      },
      {
        text: "Android Room",
        icon: ["fab", "android"] as IconProp,
        isFilterable: true,
      },
    ],
    contentShouldBeFiltered: false,
  },
];

export const activitiesSections = [
  {
    title: "R&D Director",
    description:
      "Responsible for aiding, encouraging, and evaluating member participation in technical projects.",
    dateString: "Dec 2020 - Dec 2021",
    link: {
      display: (
        <>
          <FontAwesomeIcon icon={"globe" as IconProp} /> Computer Science House
        </>
      ),
      link: "https://csh.rit.edu",
    },
  },
  {
    title: "System Administrator",
    description:
      "Assisted in maintaining and moderating critical infrastucture, including Ceph storage servers.",
    dateString: "April 2021 - Present",
    link: {
      display: (
        <>
          <FontAwesomeIcon icon={"globe" as IconProp} /> Computer Science House
        </>
      ),
      link: "https://csh.rit.edu",
    },
  },
];
