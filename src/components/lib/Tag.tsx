import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './Tag.css';

export interface TagProps {
  text: string;
  icon?: IconProp;
}

export const Tag = ({icon, text}: TagProps) =>
  <div className="tag">{icon && <><FontAwesomeIcon icon={icon} /> </>}{text}</div>
