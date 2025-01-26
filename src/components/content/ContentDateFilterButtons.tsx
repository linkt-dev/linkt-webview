import { Flex } from '@chakra-ui/react';
import BaseButton from '../ui/button/base-button';
import { Dispatch, SetStateAction } from 'react';

const ContentDateFilterButtons = ({
  dates,
  setTargetDate,
  targetDate,
}: {
  dates: string[];
  setTargetDate: Dispatch<SetStateAction<string>>;
  targetDate: string;
}) => {
  return (
    <Flex columnGap="8px">
      {dates.map((date, index) => {
        const current = date === targetDate;
        return (
          <BaseButton
            key={`date-button-${index}`}
            onClick={() => {
              if (current) {
                setTargetDate('');
                return;
              }
              setTargetDate(date);
            }}
            bg={current ? 'primary.main' : 'grey.100'}
          >
            {date}
          </BaseButton>
        );
      })}
    </Flex>
  );
};

export default ContentDateFilterButtons;
