import { useState } from 'react';

export default function Accordion({ tabs }) {
  const [tabIndex, setTabIndex] = useState(null);

  const selectTab = (nextIndex) => {
    setTabIndex(nextIndex === tabIndex ? null : nextIndex);
  };

  return (
    <div>
      {tabs.map((tab, index) => (
        <div key={index}>
          <p onClick={() => selectTab(index)}>{tab.title}</p>
          {tabIndex === index && <p>{tab.content}</p>}
        </div>
      ))}
    </div>
  );
}
