type Params = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return [
    { slug: "post-1" },
    { slug: "post-2" },
    { slug: "post-3" },
  ];
}

export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
}

export default function Page({ params }: Params) {
  return (
    <div>
      <h1>Slug: {params.slug}</h1>
    </div>
  );
}
