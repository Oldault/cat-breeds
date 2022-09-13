import react from "react";
import * as React from "react";
import { useRouter } from "next/router";
import { checkCustomRoutes } from "next/dist/lib/load-custom-routes";
import Image from "next/image";
import styles from "../../styles/Id.module.css"

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
      <div className={styles.content}>
        <img src={`https://cdn2.thecatapi.com/images/${catData.reference_image_id}.jpg`} alt={catData.id} width={500} />
        <h1>{catData.name}</h1>
        <p>{catData.description}</p>
      </div>
    </div>
  );
}

export default ID;
