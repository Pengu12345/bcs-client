const address = "http://172.16.20.182:8000"

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

const getArticle = (id : number) => {
    //const response = await fetch(`${address}/items`)
}


export const API = {
  getAddress,
  getArticle
}