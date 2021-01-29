/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head';

export default function Header() {
  return (
    <div>
      <Head>
        <title>Quiz - SCRUM - Alura</title>
        <meta itemProp="name" content="Quiz - SCRUM - Alura" />
        <meta itemProp="description" content="Orgulhosamente criado durante a Imersão React da Alura." />
        <meta itemProp="image" content="http://hdev.com.br//img/scrumquiz.png" />

        {/* <!-- Marcações para Twitter Card --> */}
        <meta name="twitter:card" content="Imersão React da Alura" />
        <meta name="twitter:site" content="https://scrumquiz.robsonamendonca.vercel.app/" />
        <meta name="twitter:title" content="Quiz - SCRUM - Alura" />
        <meta name="twitter:description" content="Orgulhosamente criado durante a Imersão React da Alura." />
        <meta name="twitter:creator" content="@robsonamendonca" />
        <meta name="twitter:image" content="http://hdev.com.br//img/scrumquiz.png" />

        {/* <!-- Marcações Open Graph / Facebook --> */}
        <meta property="og:title" content="Quiz - SCRUM - Alura" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://scrumquiz.robsonamendonca.vercel.app/" />
        <meta property="og:image" content="http://hdev.com.br//img/scrumquiz.png" />
        <meta property="og:description" content="Orgulhosamente criado durante a Imersão React da Alura." />
        <meta property="og:site_name" content="Quiz - SCRUM - Alura" />

        <link id="favicon" rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" sizes="194x194" href="/favicon.png" type="image/png" />

      </Head>
    </div>
  );
}
