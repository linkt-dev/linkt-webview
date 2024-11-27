import { mockData } from '@/mockData';

export default async function LinkPage({ params }: { params: Promise<{ id: number }> }) {
  const linkId = (await params).id;
  const data = mockData.find((item) => item.id === Number(linkId));

  return <p>{data?.title}</p>;
}
