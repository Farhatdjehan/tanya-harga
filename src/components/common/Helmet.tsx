import Head from "next/head";

interface HelmetProps {
  pageTitle: string;
}

export default function Helmet(props: HelmetProps) {
  const { pageTitle } = props;
  return (
    <>
      <Head>
        <title>Tanya Harga | {pageTitle}</title>
        <meta name="description" content="Tanya Harga" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}
