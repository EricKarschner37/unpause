import {TagProps} from "../../components/lib/Tag";

export interface ResumeItem {
  shouldShowOnPdf?: boolean;
}

export interface SubsectionLink extends ResumeItem {
  display: React.ReactNode;
  link: string;
}

export interface SubsectionProps extends ResumeItem {
  title?: string;
  link?: SubsectionLink;
  description?: string;
  dateString?: string;
  tags?: TagProps[];

  // For sections which just contain tags (i.e. Languages),
  // the tags should not be filtered out when some tags are selected
  contentShouldBeFiltered?: boolean;
}

export interface SectionProps extends ResumeItem {
  title: string;
  subsections: SubsectionProps[];
}
