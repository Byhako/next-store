import styles from './styles.module.sass'

export const Description = () => {

  return (
    <section className={styles.Description}>
      <picture>
        <img loading="lazy" src="/images/description.jpeg" alt="products marketplace" />
      </picture>
      <div className={styles.Description__text}>
        <h2>Bring the future today</h2>
        <p>Future World: Your Gateway to Tomorrow´s Tech! Dive into a world of cutting-edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us.</p>
      </div>
    </section>
  )
}
