import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { activityDetails } from '@/data/activityDetails';
import ActivityDetailView from '@/app/components/activity/ActivityDetailView';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export const generateStaticParams = () => activityDetails.map(({ slug }) => ({ slug }));

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const detail = activityDetails.find((d) => d.slug === slug);
  return detail ? { title: `${detail.title} 제작 과정 | 정영준`, description: detail.summary } : {};
}

// 이력서에서는 슬라이드 패널로 열리고, 주소로 바로 들어오면 이 페이지가 같은 내용을 보여 준다.
export default async function ActivityDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const detail = activityDetails.find((d) => d.slug === slug);
  if (!detail) notFound();

  return <ActivityDetailView detail={detail} />;
}
