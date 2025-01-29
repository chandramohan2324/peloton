// components/ExpandableView.tsx

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import styles from './ExpandableView.module.css';

interface ExpandableViewProps {
  title: string;
  children: React.ReactNode;
}

const ExpandableView: React.FC<ExpandableViewProps> = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.expandableWrapper}>
      <div className={styles.expandableHeader} onClick={toggleExpand}>
        <span>{title}</span>
        <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} />
      </div>
      {isExpanded && (
        <div className={styles.expandableContent}>
          {children}
        </div>
      )}
    </div>
  );
};

export default ExpandableView;
