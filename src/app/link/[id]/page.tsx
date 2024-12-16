'use client';

import { ContentItem, fetchContent } from '@/api/content';
import Link from 'next/link';
import { use, useEffect, useState } from 'react';

export default function LinkPage({ params }: { params: Promise<{ id: number }> }) {
  const [content, setContent] = useState<ContentItem>();
  const linkId = use(params).id;

  useEffect(() => {
    (async () => {
      const result = await fetchContent(linkId);

      setContent(result.data);
    })();
  }, []);

  if (!content) {
    return <>loading...</>;
  }

  const { title, link } = content;

  return (
    <section>
      <div>{title}</div>
      <Link href={link} target="blank">
        {link}
      </Link>
    </section>
  );
}
