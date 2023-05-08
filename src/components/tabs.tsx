'use client';

import { useState, useMemo } from 'react';
import { cn } from '@/lib/utils';
import { homepageConfig } from '@/config/homepage';
import { Icons } from '@/components/ui/icons';

interface TabsListProps {
  label: string;
  activeList: string;
  setActiveList: React.Dispatch<React.SetStateAction<string>>;
  isRounded: { top: boolean; bottom: boolean };
}

const TabsList: React.FC<TabsListProps> = ({
  label,
  activeList,
  setActiveList,
  isRounded,
}) => {
  const activeListStyle =
    activeList === label
      ? 'rounded-l-sm border-primary bg-primary'
      : 'border-light hover:bg-dark/90';
  const roundedTopStyle = isRounded.top ? 'rounded-t-sm' : '';
  const roundedBottomStyle = isRounded.bottom ? 'rounded-b-sm' : '';

  return (
    <div
      onClick={() => setActiveList(label)}
      className={cn(
        'cursor-pointer border-l-4 bg-dark px-4 py-2 text-light transition-colors duration-300 ease-out lg:border-l-4',
        activeListStyle,
        roundedTopStyle,
        roundedBottomStyle
      )}
    >
      <p>{label}</p>
    </div>
  );
};

type TabContentProps = Omit<EduContent, 'label'>;

const TabContent: React.FC<TabContentProps> = ({
  title,
  timePeriod,
  achievedSkills,
}) => {
  return (
    <div className="relative mt-2 flex flex-col">
      <h3 className="text-lg font-semibold xs:text-xl sm:text-2xl">{title}</h3>
      <p className="mb-6 text-sm">{timePeriod}</p>
      <ul className="flex flex-col gap-4">
        {achievedSkills.map(item => (
          <li key={item} className="flex items-start gap-3">
            <Icons.Star size={16} className="mt-1 shrink-0 text-primary" />
            <span className="leading-snug">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface TabsProps {
  content: EduContent[];
}

export const Tabs: React.FC<TabsProps> = ({ content }) => {
  const [activeList, setActiveList] = useState('University');

  const activeContent = useMemo(
    () => content.find(tab => tab.label === activeList),
    [activeList, content]
  );

  const isRounded = useMemo(
    () => (index: number) => ({
      top: index === 0,
      bottom: index === content.length - 1,
    }),
    [content.length]
  );

  return (
    <div className="flex flex-col items-start gap-4 sm:gap-10 lg:flex-row">
      <div className="flex w-full shrink-0 flex-col sm:w-fit sm:flex-row sm:gap-2 lg:flex-col lg:gap-0">
        {homepageConfig.eduTabs.map((item, i) => (
          <TabsList
            key={item.label}
            label={item.label}
            activeList={activeList}
            setActiveList={setActiveList}
            isRounded={isRounded(i)}
          />
        ))}
      </div>
      {activeContent && (
        <TabContent
          title={activeContent.title}
          timePeriod={activeContent.timePeriod}
          achievedSkills={activeContent.achievedSkills}
        />
      )}
    </div>
  );
};
