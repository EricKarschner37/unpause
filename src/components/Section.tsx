import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import {useContext} from 'react';
import {getIconFilter, normalizeFilterString, placeBetween, tagIconIsFiltered, tagIsFiltered, tagTextIsFiltered} from '../lib/util';
import {PageResumeContext} from '../pages/PageResume/page-resume-store';
import {Tag, TagProps} from './lib/Tag';
import './Section.css';

const SectionDivider = () => 
  <div
    style={{
      marginBottom: '12px',
      height: '3px',
      width: '100%',
      backgroundColor: 'SlateBlue'}}
  />

interface SectionProps {
  title: string;
  subsections: SubsectionProps[];
}

interface SubsectionLink {
  display: React.ReactNode;
  link: string;
}

interface SubsectionProps {
  title?: string;
  link?: SubsectionLink;
  description?: string;
  dateString?: string;
  tags?: TagProps[];

  // For sections which just contain tags (i.e. Languages),
  // the tags should not be filtered out when some tags are selected
  contentShouldBeFiltered?: boolean;
}

const DateDisplay = ({text: dateString}: {text: string}) => (
  <>
    <FontAwesomeIcon style={{'marginLeft': '12px', 'marginRight': '6px'}} icon='calendar' />
    {dateString}
  </>
)

const Subsection = ({description, title, link, dateString, tags, contentShouldBeFiltered = true}: SubsectionProps) => {
  const { filters, addFilter, removeFilter } = useContext(PageResumeContext);

  const onTagClick = (filter: string) => {
    if (filters.has(normalizeFilterString(filter))) {
      removeFilter(normalizeFilterString(filter))
    } else {
      addFilter(normalizeFilterString(filter))
    }
  }

  const sortTags = React.useCallback((a: TagProps, b: TagProps) => {
    if (tagTextIsFiltered(a, filters) && tagTextIsFiltered(b, filters)) {
      return a.text.localeCompare(b.text);
    } else if (tagTextIsFiltered(a, filters)) {
      return -1;
    } else if (tagTextIsFiltered(b, filters)) {
      return 1;
    } else if (tagIconIsFiltered(a, filters) && tagIconIsFiltered(b, filters)) {
      return a.text.localeCompare(b.text);
    } else if (tagIconIsFiltered(a, filters)) {
      return -1;
    } else if (tagIconIsFiltered(b, filters)) {
      return 1;
    } else {
      return a.text.localeCompare(b.text);
    }
  }, [filters]);

  const buildTagWithFilters = (tag: TagProps) => {
    const iconIsFiltered = tagIconIsFiltered(tag, filters);
    const textIsFiltered = tagTextIsFiltered(tag, filters);
    return (
      <Tag {...tag}
        iconIsFiltered={iconIsFiltered}
        textIsFiltered={textIsFiltered}
        onClick={tag.isFilterable ? onTagClick : undefined}
        isFilterable={tag.isFilterable}
      />
    )
  }

  return (
    <div className="subsection">
      <span className="subsection-title">
        { title }
        { link && <a href={link.link} target="_blank" rel="noreferrer"> | {link.display}</a> }
        { dateString && <DateDisplay text={dateString} /> }
      </span>
      { (title || link || dateString) && <br/> }
      {description && <span className="subsection-description">{description}<br/></span>}
      {(contentShouldBeFiltered ? tags?.sort(sortTags) : tags)?.map(tag => buildTagWithFilters(tag))}
    </div>
  )
}

const subsectionShouldRender = (subsection: SubsectionProps, filters: Set<string>) =>
  !subsection.contentShouldBeFiltered
|| !subsection.tags
|| filters.size === 0
|| subsection.tags.find(tag => !tag.isFilterable || tagIsFiltered(tag, filters))

export const Section = ({title, subsections}: SectionProps) => {
  const { filters } = useContext(PageResumeContext);
  return (
    <div className="section">
      <h3 className="title">{title}</h3>
      <SectionDivider />
      {placeBetween(subsections.filter(item => subsectionShouldRender(item, filters)).map(item => <Subsection {...item} />), <hr/>)}
    </div>
  )
}
