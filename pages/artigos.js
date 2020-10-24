const { default: next } = require("next");

import Link from 'next/link'

export default function artigos() {

  return (
    <div>
      <Link href="/">Menu inicial</Link>
      {/* <GlobalStyle /> */}
      <h1>Artigos page</h1>

      {/* <RateOfChange /> */}
    </div>
  )
}
