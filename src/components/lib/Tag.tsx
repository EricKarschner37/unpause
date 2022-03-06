import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './Tag.css';

export interface TagProps {
  text: string;
  icon?: IconProp;
  iconIsFiltered?: boolean;
  textIsFiltered?: boolean;
  isFilterable?: boolean;
  onClick?: (filter: string) => void;
}

export const Tag = ({
  icon, 
  text, 
  iconIsFiltered = false, 
  textIsFiltered = false,
  isFilterable = false,
  onClick
}: TagProps) =>
  <div
  onClick={() => onClick && onClick(text)}
  className={`
    ${iconIsFiltered || textIsFiltered ? 'filtered' : ''}
    ${isFilterable ? 'filterable' : ''}
    tag
  `}>
    {icon &&
      <span
        className={`icon ${iconIsFiltered ? 'filtered' : ''}`}
      > 
        <FontAwesomeIcon
        icon={icon} /> 
      </span> 
    }
    <span className={`${textIsFiltered ? 'filtered' : ''}`}>{text}</span>
  </div>
