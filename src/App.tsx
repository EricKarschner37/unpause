import {Col, Container, Row} from 'react-bootstrap';
import {Header} from './components/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import {IconProp, library} from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {faAt, faCalculator, faCalendar, faGlobe, faPhoneFlip} from '@fortawesome/free-solid-svg-icons';
import {Section} from './components/Section';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

library.add(fab, faAt, faCalendar, faGlobe, faPhoneFlip, faCalculator);

function App() {
  const contactOptions = [
    {
      displayText: 'erickarschner@gmail.com',
      link: 'mailto:erickarschner@gmail.com',
      icon: 'at' as IconProp
    },
    {
      displayText: 'eric.karschner.studio',
      link: 'https://eric.karschner.studio',
      icon: 'globe' as IconProp
    },
    {
      displayText: 'EricKarschner37',
      link: 'https://github.com/EricKarschner37',
      icon: ['fab', 'github'] as IconProp
    },
    {
      displayText: '(570)-494-6150',
      icon: 'phone-flip' as IconProp
    },
    {
      displayText: 'eric-karschner',
      link: 'https://www.linkedin.com/in/eric-karschner',
      icon: ['fab', 'linkedin'] as IconProp
    }
  ]

  const educationSections = [
    {
      title: "B.S. Computational Mathematics",
      link: {
        display: "Rochester Institute of Technology",
        link: "https://rit.edu",
      },
      dateString: "2019 - 2023",
      tags: [
        { text: "GPA: 3.86" },
      ],
    }
  ]

  const experienceSections = [
    {
      title: "Software Engineering Intern",
      description: "Spearheaded and completed project to overhaul Service Resource page in React app and created unit and synthetics tests to ensure performance.",
      link: {
        display: "Datadog",
        link: "https://datadoghq.com",
      },
      dateString: "Jan 2022 - Apr 2022",
      tags: [
        { text: "React", icon: ['fab', 'js'] as IconProp },
        { text: "Typescript", icon: ['fab', 'js'] as IconProp },
        { text: "Redux", icon: ['fab', 'js'] as IconProp },
        { text: "Javascript", icon: ['fab', 'js'] as IconProp },
      ]
    },
    {
      title: "Android Development Intern",
      description: "Created extensible, reusable disclosure flow, optimized for reuse throughout the Android application. Obtained and visualized relevant metrics, including user feedback.",
      link: {
        display: "Robinhood",
        link: "https://robinhood.com",
      },
      dateString: "May 2021 - August 2021",
      tags: [
        { text: "Android", icon: ['fab', 'android'] as IconProp },
        { text: "Kotlin", icon: ['fab', 'java'] as IconProp },
        { text: "XML", icon: ['fab', 'android'] as IconProp },
        { text: "Dagger/Hilt", icon: ['fab', 'android'] as IconProp },
      ],
    },
    {
      title: "Software Engineering Intern",
      description: "Worked on a variety of research projects, with technologies including deep neural networks, computer vision, and other machine learning models. Developed a model to detect misinformation in images, using BERT and NLP.",
      link: {
        display: "CUBRC, Inc.",
        link: "https://www.cubrc.org",
      },
      dateString: "Jan 2021 - May 2021",
      tags: [
        { text: "Computer Vision" },
        { text: "Neural Networks" },
        { text: "TF-IDF" },
        { text: "BERT" },
        { text: "NLP" },
      ],
    }
  ]

  const projectsSections = [
    {
      title: "Jeopardy!",
      description: "A replication of the classic game show Jeopardy!, with a React frontend, Android application, and Go backend.",
      link: {
        display:
          <>
            <FontAwesomeIcon icon={["fab", "github"]}/> EricKarschner37/Jeopardy
          </>,
        link: "https://github.com/EricKarschner37/Jeopardy",
      },
      tags: [
        { text: "React.JS", icon: ['fab', 'js'] as IconProp },
        { text: "Kotlin", icon: ['fab', 'java'] as IconProp },
        { text: "Go", icon: ['fab', 'golang'] as IconProp },
        { text: "Jetpack Compose", icon: ['fab', 'android'] as IconProp },
        { text: "WebSockets" },
      ],
    },
    {
      title: "CSH AnDrink",
      description: "A replication of the classic game show Jeopardy!, with a React frontend, Android application, and Go backend.",
      link: {
        display:
          <>
            <FontAwesomeIcon icon={["fab", "github"]}/> EricKarschner37/AnDrink
          </>,
        link: "https://github.com/EricKarschner37/AnDrink",
      },
      tags: [
        { text: "Kotlin", icon: ['fab', 'java'] as IconProp },
        { text: "Android Room", icon: ['fab', 'android'] as IconProp },
        { text: "MVVM" },
        { text: "OAuth v2" },
      ],
    }
  ];

  const languagesSubsections = [
    {
      tags: [
        { text: "Kotlin", icon: ['fab', 'java'] as IconProp },
        { text: "Java", icon: ['fab', 'java'] as IconProp },
        { text: "Python", icon: ['fab', 'python'] as IconProp },
        { text: "Rust", icon: ['fab', 'rust'] as IconProp },
        { text: "Javascript", icon: ['fab', 'js'] as IconProp },
        { text: "MATLAB", icon: 'calculator' as IconProp },
      ]
    }
  ]

  const librariesSections = [
    {
      tags: [
        { text: "Matplotlib", icon: ['fab', 'python'] as IconProp },
        { text: "pandas", icon: ['fab', 'python'] as IconProp },
        { text: "numpy", icon: ['fab', 'python'] as IconProp },
        { text: "Tensorflow", icon: ['fab', 'python'] as IconProp },
      ],
    }
  ]

  return (
    <BrowserRouter>
      <Container>
        <Header name="Eric Karschner" contacts={contactOptions} />
        <br/>
        <Row>
          <Col>
            <Section title="Education" subsections={educationSections}/>
          </Col>
          <Col md={4}>
            <Section title="Languages" subsections={languagesSubsections}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <Section title="Experience" subsections={experienceSections} />
          </Col>
          <Col md={4}>
            <Section title="Libraries" subsections={librariesSections} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Section title="Projects" subsections={projectsSections} />
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  )
}

export default App;
