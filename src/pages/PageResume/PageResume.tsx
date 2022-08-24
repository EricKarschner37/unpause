import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { PageResumeContext } from "./page-resume-store";
import * as Data from "./data";

export const PageResume = () => {
  const [filters, setFilters] = React.useState(new Set<string>());

  const addFilter = React.useCallback(
    (filter: string) => setFilters(new Set(filters).add(filter)),
    [filters]
  );

  const removeFilter = React.useCallback(
    (filter: string) => {
      setFilters(() => {
        const next = new Set(filters);
        next.delete(filter);
        return next;
      });
    },
    [filters, setFilters]
  );

  //  ReactPDF.render(<PdfRenderer />, 'resume.pdf');

  return (
    <PageResumeContext.Provider value={{ filters, addFilter, removeFilter }}>
      <Container>
        <Header name="Eric Karschner" contacts={Data.contactOptions} />
        <br />
        <Row>
          <Col>
            <Section title="Education" subsections={Data.educationSections} />
          </Col>
          <Col md={4}>
            <Section
              title="Languages"
              subsections={Data.languagesSubsections}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Section title="Experience" subsections={Data.experienceSections} />
          </Col>
          <Col md={4}>
            <Section title="Libraries" subsections={Data.librariesSections} />
            <Section title="Activities" subsections={Data.activitiesSections} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Section title="Projects" subsections={Data.projectsSections} />
          </Col>
        </Row>
      </Container>
    </PageResumeContext.Provider>
  );
};
