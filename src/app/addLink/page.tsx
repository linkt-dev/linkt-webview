'use client';

import { Field } from '@/components/ui/field';
import { Button, Fieldset, Stack } from '@chakra-ui/react';
import { SyntheticEvent, useState } from 'react';
import { FormValueType } from './type';
import BaseInput from '@/components/ui/input/base-input';
import { Content, createContent } from '@/api/content';
import Form from 'next/form';
import { handleApiError } from '@/utils/handleApiError';

export default function AddLinkPage() {
  const [isUrlValid, setIsUrlValid] = useState<boolean | undefined>();

  const validateUrl = (url: string) => {
    const linkPattern = /^(https?:\/\/)?([\da-z.-]+\.[a-z.]{2,6}|[\d.]+)(:[0-9]{1,5})?(\/[^\s]*)?$/i;
    const isValid = linkPattern.test(url);
    setIsUrlValid(isValid);

    return isValid;
  };
  const submit = async (e: SyntheticEvent) => {
    // e.preventDefault();
    try {
      const { link, title, category } = e.target as typeof e.target & FormValueType<Content>;
      const isValid = validateUrl(link.value as string);

      if (!isValid) {
        return;
      }

      const body = {
        title: title.value as string,
        link: link.value as string,
        category: category.value as string,
      };

      await createContent(body);
    } catch (e: unknown) {
      const { errorMessage } = handleApiError(e);

      alert(errorMessage);
    }
  };

  return (
    <Form action="/" onSubmit={submit}>
      <Fieldset.Root size="lg" maxW="md">
        <Stack>
          <Fieldset.Legend>링크 추가하기</Fieldset.Legend>
        </Stack>

        <Fieldset.Content>
          <Field label="이름">
            <BaseInput name="title" type="text" />
          </Field>

          <Field invalid={isUrlValid === false} label="URL" errorText="올바른 URL 을 입력해주세요." required>
            <BaseInput
              name="link"
              type="url"
              onChange={(e) => {
                validateUrl(e.target.value);
              }}
            />
          </Field>

          <Field label="카테고리">
            <BaseInput name="category" type="text" />
          </Field>
        </Fieldset.Content>

        <Button bg="primary.main" type="submit" alignSelf="flex-start">
          추가
        </Button>
      </Fieldset.Root>
    </Form>
  );
}
