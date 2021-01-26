import Head from 'next/head'

export default function Header() {
  return (
    <div>
      <Head>
        <title>Quiz - SCRUM - Alura</title>
		<meta property="og:image" content="../src/assets/img/scrumquiz.png"/>
		<link rel="shortcut icon" href="favicon.png" /> 
		<link rel="icon" type="image/png" href="favicon.png" />

      </Head>
    </div>
  )
}