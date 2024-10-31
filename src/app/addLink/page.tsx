'use client';

import { Field } from '@/components/ui/field';
import { Button, Fieldset, Input, Stack } from '@chakra-ui/react';
import { SyntheticEvent, useState } from 'react';
import { FormValueType, ILinkForm } from './type';
import BaseInput from '@/components/ui/input/base-input';

export default function AddLinkPage() {
  const [isUrlValid, setIsUrlValid] = useState<boolean | undefined>();

  const validateUrl = (url: string) => {
    const urlPattern = /^(https?:\/\/)?([\da-z.-]+\.[a-z.]{2,6}|[\d.]+)(:[0-9]{1,5})?(\/[^\s]*)?$/i;
    const isValid = urlPattern.test(url);
    setIsUrlValid(isValid);

    return isValid;
  };
  const submit = (e: SyntheticEvent) => {
    e.preventDefault();
    const { url, title, category } = e.target as typeof e.target & FormValueType<ILinkForm>;
    const isValid = validateUrl(url.value as string);

    if (!isValid) {
      return;
    }

    const body = {
      title: title.value === '' ? '무제' : title.value,
      url: url.value,
      category: category.value,
    };

    console.log(body);
  };

  return (
    <form onSubmit={submit}>
      <Fieldset.Root size="lg" maxW="md">
        <Stack>
          <Fieldset.Legend>링크 추가하기</Fieldset.Legend>
        </Stack>

        <Fieldset.Content>
          <Field label="이름">
            <BaseInput name="title" />
          </Field>

          <Field invalid={isUrlValid === false} label="URL" errorText="올바른 URL 을 입력해주세요." required>
            <BaseInput
              name="url"
              type="url"
              onChange={(e) => {
                validateUrl(e.target.value);
              }}
            />
          </Field>

          <Field label="카테고리">
            <BaseInput name="category" />
          </Field>
        </Fieldset.Content>

        <Button bg="primary.main" type="submit" alignSelf="flex-start">
          추가
        </Button>
      </Fieldset.Root>
    </form>
  );
}
