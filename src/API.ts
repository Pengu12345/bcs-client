const address = "http://192.168.42.236:8000"

type ArticleType = {
  id : string
}

const buildHeader = (method:string, body : any) => {
  return({
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({body})
  });

}

const getAddress = () => {
    return address;
}

const getArticle = async (id : number) => {
  const response = await fetch(`${address}/items/`);
  const list =  await response.json()

  for(const item in list) {
  }
}

const getArticles = async () => {
  const response = await fetch(`${address}/items/`);
  const list =  await response.json()

  // console.log(list)

  return list
}


export const API = {
  getAddress,
  getArticle,
  getArticles
}