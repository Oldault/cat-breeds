import Link from "next/link";
import styles from "../../styles/Home.module.css";
import Head from "next/head";

function Breeds({ breeds }) {
  return (
    <div className={styles.app}>
      <div className={styles.page}>
        <Head>
          <title>Which cat breed?</title>
        </Head>
        {breeds.map((cat) => {
          return (
            <div key={cat.id} className={styles.cat_card}>
              <Link href={"/varieties/" + cat.id}>
                <div className={styles.link}>
                    <div className={styles.image}>
                      <img
                        src={cat?.image?.url}
                        alt={`${cat.name} breed picture`}
                      />
                    </div>
                    <div className={styles.text}>
                      <div className={styles.top_text}>
                        <div className={styles.title}>
                          <h1>{cat.name}</h1>
                        </div>
                        <div className={styles.info}>
                          <ul>
                            <li>
                              <p>Lives around {cat.life_span} years.</p>
                            </li>
                            <li>
                              <p>{cat.weight.metric} kgs</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className={styles.bottom_text}>
                        <p>{cat.description}</p>
                      </div>
                    </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Breeds;

export async function getStaticProps() {
  const API_KEY =
    "live_kf1hUqUh2DP3FgxMi7bcy9xlpm00FhYcjSJTBKyLdMrMdpJPOPyi9SqqF517y7v8";
  const breeds = await fetch(
    `https://api.thecatapi.com/v1/breeds?api_key=${API_KEY}`
  ).then((r) => r.json());

  return {
    props: { breeds },
  };
}
