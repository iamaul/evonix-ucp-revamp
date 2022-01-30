import { NextSeo, ArticleJsonLd } from "next-seo";

type PostSeoProps = {
  title: string | undefined;
  content: string | undefined;
  createdAt: number | undefined;
  createdBy: string | undefined;
  url: string | undefined;
  image: string | undefined;
};

const PostSeo = ({
  title,
  content,
  createdAt,
  createdBy,
  url,
  image,
}: PostSeoProps) => {
  const date = new Date(createdAt ?? 0).toISOString();

  return (
    <>
      <NextSeo
        title={`${title} - EvoniX - User Control Panel`}
        description={content}
        canonical={url}
        openGraph={{
          type: "article",
          article: {
            publishedTime: date,
          },
          url,
          title,
          description: content,
          images: [
            {
              url: image ?? "",
              width: 2240,
              height: 1260,
              alt: title,
            },
          ],
        }}
      />
      <ArticleJsonLd
        authorName={createdBy ?? ""}
        dateModified={date}
        datePublished={date}
        description={content ?? ""}
        images={[image ?? ""]}
        publisherLogo=""
        publisherName="EvoniX Roleplay"
        title={title ?? ""}
        url={url ?? ""}
      />
    </>
  );
};

export default PostSeo;
