import Head from 'next/head'

export default function Header() {
  return (
    <div>
      <Head>
        <title>Quiz - SCRUM - Alura</title>
		<meta property="og:image" content="../src/assets/img/scrumquiz.png"/>
		<meta property="og:image:type" content="image/png">
		<meta property="og:image:width" content="400">
		<meta property="og:image:height" content="400">
		<meta property="og:type" content="website">		
		<link rel="shortcut icon" href="favicon.png" /> 
		<link rel="icon" type="image/png" href="favicon.png" />

      </Head>
    </div>
  )
}