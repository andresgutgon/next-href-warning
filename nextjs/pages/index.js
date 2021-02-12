import Link from 'next/link'

export default function Home() {
  return (
    <div style={{ width: '100vw', height: '40vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Link href='/'>Just a link</Link>
    </div>
  )
}
