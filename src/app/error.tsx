'use client'
import Image from 'next/image'
import { ErrorProps } from '../../types'
import styles from 'app/sass/global-error.module.sass'

export default function GlobalError({ reset }: ErrorProps) {

  return (
    <main className={styles.Error}>
      <h1 className={styles.Error__title}>Ha ocurrido un error</h1>
      <Image
        src='/images/error.png'
        width={500}
        height={500}
        alt='error'
      />

      <p className={styles.Error__mesagge}>Al parecer ha ocurrido un error. La vida es triste.</p>
      <button onClick={reset}  className={styles.Error__button}>Volver a intentar</button>
    </main>
  )
}