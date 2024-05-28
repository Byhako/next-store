export default function Layout({ children }: { children: React.ReactNode}) {
  return (
    <main>
      <nav>
        Navegacion de Categorias
      </nav>
      {children}
    </main>
  )
}
