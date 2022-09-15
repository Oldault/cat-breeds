import react from "react";
import * as React from "react";
import { useRouter } from "next/router";
import { checkCustomRoutes } from "next/dist/lib/load-custom-routes";
import Image from "next/image";
import styles from "../../styles/Id.module.css";
import Head from "next/head";

function ID() {
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = React.useState();

  const getData = React.useCallback(async () => {
    const API_KEY =
      "live_kf1hUqUh2DP3FgxMi7bcy9xlpm00FhYcjSJTBKyLdMrMdpJPOPyi9SqqF517y7v8";
    const results = await fetch(
      `https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=${id}&api_key=${API_KEY}`
    ).then((r) => r.json());

    setData(results[0]);
  }, [id]);

  React.useEffect(() => {
    async function check() {
      if (id) {
        return getData();
      } else {
        return;
      }
    }
    check();
  }, [getData, id]);

  console.log(data);

  if (data === undefined) return null;

  const catData = data.breeds[0];
  return (
    <div className={styles.box}>
      <Head>
        <title>{catData.name}</title>
      </Head>
      <div className={styles.content}>
        <div className={styles.left_side}>
          <div className={styles.left_side_text}>
            <div className={styles.top_text}>
              <div className={styles.title}>
                <h1>{catData.name}</h1>
                <div className={styles.black_line}></div>
              </div>
              <div className={styles.gen_info}>
                <div className={styles.desc}>
                  <p>{catData.description}</p>
                </div>
                <div className={styles.details}>
                  <p>
                    Originiated from : <em>{catData.origin}</em>.
                  </p>
                  <p>
                    Average life span is around <em>{catData.life_span}</em>{" "}
                    years.
                  </p>
                  <p>
                    Inteligence is <em>{catData.intelligence} / 5</em>!
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.bottom_text}>
              <h6>
                <em>
                  <a
                    href={catData.vcahospitals_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Read more here
                  </a>
                </em>
              </h6>
            </div>
          </div>
        </div>
        <div className={styles.right_side}>
          <img
            src={`https://cdn2.thecatapi.com/images/${catData.reference_image_id}.jpg`}
            alt={catData.id}
            width={500}
          />
          <div className={styles.right_side_text}>
            <h4>Temperments are:</h4>
            <p>{catData.temperament}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ID;
