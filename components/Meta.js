import Head from "next/head";

const Meta = ({description, title, keywords}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content= {keywords}/>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    </div>
  );
};

Meta.defaultProps = {
    title: "User List Website",
    description: "lorem ipsum lorem ipsum lorem ipsum.",
    keywords: "next.js, react, javascript",
};
export default Meta
