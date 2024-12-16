import { Flex } from '@chakra-ui/react';
import BaseButton from '../ui/button/base-button';
import { Dispatch, SetStateAction } from 'react';

const ContentDateFilterButtons = ({
  dates,
  setTargetDate,
}: {
  dates: string[];
  setTargetDate: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <Flex columnGap="8px">
      {dates.map((date, index) => {
        return (
          <BaseButton
            key={`date-button-${index}`}
            onClick={() => {
              setTargetDate(date);
            }}
          >
            {date}
          </BaseButton>
        );
      })}
    </Flex>
  );
};

export default ContentDateFilterButtons;
