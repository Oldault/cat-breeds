function Norw({ data }) {
    return (
        <div>
            <h1>{data.breeds[0].name}</h1>
            <h2>NORW</h2>
            <img src={ data.url } alt="cat" />
        </div>
    );
}

export async function getStaticProps(){

    const API_KEY =
    "live_kf1hUqUh2DP3FgxMi7bcy9xlpm00FhYcjSJTBKyLdMrMdpJPOPyi9SqqF517y7v8";
    const BREED_ID = "norw"
    const results = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=${BREED_ID}&api_key=${API_KEY}`
      ).then((r) => r.json());

      console.log(results[0])

    return {
        props:{
            data: results[0]
        }
    }
}

export async function getStaticPaths() {

    const breeds = await fetch(`https://api.thecatapi.com/v1/breeds`)

    console.log(breeds)
    return {
        paths: breeds.map(breed => {
            params: {
                breedId: breed.name
            }
        }),
        fallback: false
    }
}



export default Norw;