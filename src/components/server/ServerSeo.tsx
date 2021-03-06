import { ArticleJsonLd, NextSeo } from "next-seo";

type ServerSeoProps = {
  hostname: string | undefined;
  address: string | undefined;
  gamemode: string | undefined;
  mapname: string | undefined;
  maxplayers: number | undefined;
  online: number | undefined;
};

const ServerSeo = ({
  hostname,
  address,
  gamemode,
  mapname,
  maxplayers,
  online,
}: ServerSeoProps) => {
  const date = new Date().toISOString();

  return (
    <>
      <NextSeo
        title={`${hostname} - EvoniX - User Control Panel`}
        description={`Total online players ${online} of ${maxplayers}. Map playing ${mapname}, feel the experience of our roleplay environment at ${address} or play.evonix-rp.com! Current version: ${gamemode}`}
        canonical={`samp://${address}`}
        openGraph={{
          type: "article",
          url: `samp://${address}`,
          title: hostname,
          description: `Total online players ${online} of ${maxplayers}. Map playing ${mapname}, feel the experience of our roleplay environment at ${address} or play.evonix-rp.com! Current version: ${gamemode}`,
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_SITE_URL}/static/images/icons.png`,
              width: 2240,
              height: 1260,
              alt: hostname,
            },
          ],
        }}
      />
      <ArticleJsonLd
        authorName="EvoniX Roleplay"
        dateModified={date}
        datePublished={date}
        description={`Total online players ${online} of ${maxplayers}. Map playing ${mapname}, feel the experience of our roleplay environment at ${address} or play.evonix-rp.com! Current version: ${gamemode}`}
        images={[`${process.env.NEXT_PUBLIC_SITE_URL}/static/images/icons.png`]}
        publisherLogo=""
        publisherName="EvoniX Roleplay"
        title={hostname ?? ""}
        url={`samp://${address}`}
      />
    </>
  );
};

export default ServerSeo;
