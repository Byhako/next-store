'use client'

export default function Error(props: ErrorPageProps) {
  return (
    <div style={{
      display: 'flex',
      margin: '10px auto',
      flexDirection: 'column'
    }}>
      <h1>😭</h1>
      <p>Ha ocurrido un error. Ve a llorar con tu máma.</p>
    </div>
  )
}
