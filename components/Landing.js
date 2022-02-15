import styles from '../styles/Landing.module.scss';

export default function Landing() {
    return (
        <section className="flex-center">
            <div>
                <div className="flex-center">
                    <img
                        className={styles['main-logo']}
                        src="/images/logo-big.png"
                        alt=""
                    />
                </div>
                <div className={styles['main-title']}>
                    <h1>
                        McGill AI <span>Learnathon</span>
                    </h1>
                    <h2>March 12th, 2022</h2>
                </div>
            </div>
        </section>
    );
}
