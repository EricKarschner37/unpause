import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {placeBetween} from '../lib/util';
import {Tag, TagProps} from './lib/Tag';
import './Section.css';

const SectionDivider = () => 
  <div style={{marginBottom: '12px', height: '3px', width: '100%', backgroundColor: 'SlateBlue'}} />

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
}

const DateDisplay = ({text: dateString}: {text: string}) => (
  <>
    <FontAwesomeIcon style={{'marginLeft': '12px', 'marginRight': '6px'}} icon='calendar' />
    {dateString}
  </>
)

const Subsection = ({description, title, link, dateString, tags}: SubsectionProps) => (
  <div className="subsection">
    <span className="subsection-title">
      { title }
      { link && <a href={link.link} target="_blank"> | {link.display}</a> }
      { dateString && <DateDisplay text={dateString} /> }
    </span>
    { (title || link || dateString) && <br/> }
    {description && <span className="subsection-description">{description}<br/></span>}
    {tags?.map(tag => <Tag {...tag} />)}
  </div>
)

export const Section = ({title, subsections}: SectionProps) => (
  <div className="section">
    <h3 className="title">{title}</h3>
    <SectionDivider />
    {placeBetween(subsections.map(item => <Subsection {...item} />), <hr/>)}
  </div>
)
