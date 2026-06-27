import { Helmet } from "react-helmet-async";
import { site } from "../data/site";

interface SeoProps {
  title?: string;
  description?: string;
  image?: string;
}

export default function Seo({ title, description, image }: SeoProps) {
  const fullTitle = title ? `${title} — ${site.name}` : site.seo.title;
  const desc = description ?? site.seo.description;
  const img = image ?? site.seo.image;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={img} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}
