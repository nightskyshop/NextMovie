import Head from "next/head";

export default function Seo({title}) {
    const titleWord = title + " | Next Movies"
    return(
        <Head>
            <title>{titleWord}</title>
        </Head>
    )
}