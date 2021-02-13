import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
type LayoutProps = {
  title?: string
}
const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children, title }) => {
    const router = useRouter()

    React.useEffect(() => {
        if(router && router.pathname === '/') router.push('/people');
    }, []);

return (
  <div style={layoutStyle}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/people">
          <a>People</a>
        </Link>{' '}
        |{' '}
        <Link href="/planets">
          <a>Planets</a>
        </Link>{' '}
        |{' '}
        <Link href="/species">
          <a>Species</a>
        </Link>{' '}
        |{' '}
      </nav>
    </header>
    {children}
  </div>
)}
export default Layout