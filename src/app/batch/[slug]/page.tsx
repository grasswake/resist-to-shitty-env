import { MermaidView } from '@/features/mermaid/components'

export default function Page({ params }: { params: { slug: string } }) {
  return <MermaidView fileName={params.slug} />
}
