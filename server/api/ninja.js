// /api/ninja

export default defineEventHandler(async (event) => {

  // // handle query params
  // const { name } = getQuery(event)

  // // handle post data
  // const { age } = await readBody(event)

  //api call with private key
  const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=b4uV3OfvFFmCCnGa0OIVVirAp1LMO6KNrpWv2nbg')

  return data

 

})