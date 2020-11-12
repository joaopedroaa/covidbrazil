// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (request, response) => {
  async function getJson(url) {
    return await fetch(url)
      .then(res => {
        return res.json()
      })
      .catch((_) => {
        response.statusCode = 500
        response.json({
          message: "Unspected error"
        })
      });
  }

  const dataWorld = await getJson("https://covid19.mathdro.id/api")
  const dataBrazil = await getJson("https://covid19-brazil-api.now.sh/api/report/v1")

  response.statusCode = 200
  response.json({
    world: {
      "confirmed": dataWorld.confirmed.value,
      "deaths": dataWorld.deaths.value,
      "recovered": dataWorld.recovered.value,
      "lastUpdate": dataWorld.lastUpdate
    },
    brazil: dataBrazil.data
  })
}
