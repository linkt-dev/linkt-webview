import { Field } from '@/components/ui/field';
import { Button, Fieldset, Input, Stack } from '@chakra-ui/react';

export default function AddLinkPage() {
  return (
    <form>
      <Fieldset.Root size="lg" maxW="md">
        <Stack>
          <Fieldset.Legend>링크 추가하기</Fieldset.Legend>
        </Stack>

        <Fieldset.Content>
          <Field label="이름">
            <Input name="title" />
          </Field>

          <Field label="URL">
            <Input name="url" type="url" />
          </Field>

          <Field label="카테고리">
            <Input name="category" />
          </Field>
        </Fieldset.Content>

        <Button bg="#FFBF1F" type="submit" alignSelf="flex-start">
          추가
        </Button>
      </Fieldset.Root>
    </form>
  );
}
