'use client';

import NoData from '@/components/content/NoData';
import useContents from '@/hooks/content/useContents';
import { ContentsTab } from '@/components/content/Tab/ContentsTab';

export default function App() {
  const { contentDates, isContents, contents } = useContents();
  const defaultValue = contents.length > 0 ? contents[0].createdAt : '';

  return isContents ? (
    <ContentsTab.Root defaultValue={defaultValue}>
      <ContentsTab.Triggers contentDates={contentDates} />
      <ContentsTab.Content contents={contents} contentDates={contentDates} />
    </ContentsTab.Root>
  ) : (
    <NoData />
  );
}
