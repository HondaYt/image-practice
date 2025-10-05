import styles from './page.module.css';



export default function Page() {
    return (
        <img
            className={styles.image}
            src={'/sample.png'}
            alt='かわいい猫'
        />
    );
}