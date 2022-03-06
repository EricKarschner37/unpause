import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Header} from "../../components/Header";
import {Section} from "../../components/Section";
import {PageResumeContext} from "./page-resume-store";

export const PageResume = () => {

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
        { text: "React", icon: ['fab', 'js'] as IconProp, isFilterable: true },
        { text: "Typescript", icon: ['fab', 'js'] as IconProp, isFilterable: true },
        { text: "Redux", icon: ['fab', 'js'] as IconProp, isFilterable: true },
        { text: "Javascript", icon: ['fab', 'js'] as IconProp, isFilterable: true },
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
        { text: "Android", icon: ['fab', 'android'] as IconProp, isFilterable: true },
        { text: "Kotlin", icon: ['fab', 'java'] as IconProp, isFilterable: true },
        { text: "XML", icon: ['fab', 'android'] as IconProp, isFilterable: true },
        { text: "Dagger/Hilt", icon: ['fab', 'android'] as IconProp, isFilterable: true },
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
        { text: "Computer Vision", isFilterable: true },
        { text: "Neural Networks", isFilterable: true },
        { text: "TF-IDF", isFilterable: true },
        { text: "BERT", isFilterable: true },
        { text: "NLP", isFilterable: true },
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
        { text: "React.JS", icon: ['fab', 'js'] as IconProp, isFilterable: true },
        { text: "Kotlin", icon: ['fab', 'java'] as IconProp, isFilterable: true },
        { text: "Go", icon: ['fab', 'golang'] as IconProp, isFilterable: true },
        { text: "Jetpack Compose", icon: ['fab', 'android'] as IconProp, isFilterable: true },
        { text: "WebSockets", isFilterable: true },
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
        { text: "Kotlin", icon: ['fab', 'java'] as IconProp, isFilterable: true },
        { text: "Android Room", icon: ['fab', 'android'] as IconProp, isFilterable: true },
        { text: "MVVM", isFilterable: true },
        { text: "OAuth v2", isFilterable: true },
      ],
    }
  ];

  const languagesSubsections = [
    {
      tags: [
        { text: "Kotlin", icon: ['fab', 'java'] as IconProp, isFilterable: true },
        { text: "Java", icon: ['fab', 'java'] as IconProp, isFilterable: true },
        { text: "Python", icon: ['fab', 'python'] as IconProp, isFilterable: true },
        { text: "Rust", icon: ['fab', 'rust'] as IconProp, isFilterable: true },
        { text: "Javascript", icon: ['fab', 'js'] as IconProp, isFilterable: true },
        { text: "MATLAB", icon: 'calculator' as IconProp, isFilterable: true },
      ],
      contentShouldBeFiltered: false
    }
  ]

  const librariesSections = [
    {
      tags: [
        { text: "Matplotlib", icon: ['fab', 'python'] as IconProp, isFilterable: true },
        { text: "pandas", icon: ['fab', 'python'] as IconProp, isFilterable: true },
        { text: "numpy", icon: ['fab', 'python'] as IconProp, isFilterable: true },
        { text: "Tensorflow", icon: ['fab', 'python'] as IconProp, isFilterable: true },
      ],
      contentShouldBeFiltered: false
    }
  ]

  const [filters, setFilters] = React.useState(new Set<string>());

  const addFilter = React.useCallback((filter: string) => setFilters(new Set(filters).add(filter)), [filters]);
  const removeFilter = React.useCallback((filter: string) => {setFilters(() => {
    const next = new Set(filters);
    next.delete(filter);
    return next;
  })}, [filters, setFilters]);

  return (
    <PageResumeContext.Provider value={{filters, addFilter, removeFilter}}>
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
    </PageResumeContext.Provider>
  )
}
