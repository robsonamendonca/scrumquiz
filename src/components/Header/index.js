import Head from 'next/head'

export default function Header() {
  return (
    <div>
      <Head>
      <title>Quiz - SCRUM - Alura</title>
      <meta name="viewport" content="width=device-width"/>
      <meta name="description" content="Orgulhosamente criado durante a Imersão React da Alura."/>
      <meta name="og:description" content="Orgulhosamente criado durante a Imersão React da Alura."/>
      <meta name="og:url" content="https://scrumquiz.robsonamendonca.vercel.app"/>
      <meta name="og:title" content="Quiz - SCRUM - Alura"/>
      <meta name="og:image" content="../src/assets/img/scrumquiz.png"/>
      <link id="favicon" rel="shortcut icon" href="/favicon.png" type="image/png"/>
      <link rel="apple-touch-icon" sizes="194x194" href="/favicon.png" type="image/png"/>
	  
      </Head>
    </div>
  )
}