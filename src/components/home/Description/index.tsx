'use client'

import { useState } from 'react'
import Image from 'next/image'
import classNames from 'classnames/bind'
import styles from './styles.module.sass'

const PLACEHOLDER = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACGAIYDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAECAwX/xAAXEAEBAQEAAAAAAAAAAAAAAAAAAREC/8QAFwEBAQEBAAAAAAAAAAAAAAAAAQIAA//EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8A5oMKYgAqJBwGQcVExUTSZiHiaoErCSU0qqpqoE1KqVXAQAIPCUHNSQYVARwHCDipCi5BWEisEipE0pwYvCwFFibGliLDGZ1NXU1UCQAWXgMOakkolRgcJUUlUVIUXAxyKkEipACwsXhWAosRY0sR0zMqitOkUsgAEtSMIUmkdBjA4SopKo0iI05YKi4mLgAKmKGRWfTSo6YsumdadM6WQACWpGVQoqR0jGM4lUUGnK+WcacsGkXGcXAlRUFQxVn0us+mZn0z6X0zpKaAGK9Gp0algC0tUVKiJTlJaxpKxlaSgNZVSs5VShK9FqdFrAWs+qq1n1WZPTOq6RSUgBmGjU6NYaejU6NZUVqpUacpU1lXKylVKGbSqlZSqlAaaVqdLQk7UWnai0sVqKdqaQQIFk6Wlo0o09NIC4pUqFQLi5VSoipQppKeolPQF6NTpawO1NotKlJWpp1NUACBDMAMiAwGdIZwALioqAJqlQwEsZAMmkVAVE1NIBUSQALP/9k='


export const Description = () => {
  const [hasBorder, setHasBorder] = useState(false)

  const handleClick = () => {
    setHasBorder(!hasBorder)
  }

  const cx = classNames.bind(styles)

  const buttonStyles = cx('Description__button', {
    'Description__button--border': hasBorder
  })

  return (
    <section className={styles.Description}>
      <button type="button" className={buttonStyles} onClick={handleClick}>
        <picture className={styles.Description_imageContainer}>
          <Image
            src="/images/description.jpeg"
            alt="products marketplace"
            fill
            placeholder='blur'
            blurDataURL={PLACEHOLDER}
          />
        </picture>
      </button>
      <div className={styles.Description__text}>
        <h2>Bring the future today</h2>
        <p>Future World: Your Gateway to Tomorrow´s Tech! Dive into a world of cutting-edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us.</p>
      </div>



    </section>
  )
}
