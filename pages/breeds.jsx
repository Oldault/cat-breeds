

function Breeds({breeds}) {
  return <div>
    <h1>Breeds : </h1>
    <div>
        {breeds.map(breed => {
            return (
                <div key={breed.id}>
                    <h2>{breed.name}</h2>
                </div>
            )
        })}
    </div>
  </div>;
}

export default Breeds;

export async function getStaticProps() {
  const API_KEY =
    "live_kf1hUqUh2DP3FgxMi7bcy9xlpm00FhYcjSJTBKyLdMrMdpJPOPyi9SqqF517y7v8";
  const breeds = await fetch(
    `https://api.thecatapi.com/v1/breeds?api_key=${API_KEY}`
  ).then((r) => r.json());

  console.log(breeds)

  return {
    props: {breeds},
  };
}
