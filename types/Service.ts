enum ServicesList{
    getUser = '/lmao'
}

export interface Config {
  url: string,
  method: 'GET' | 'POST',
  header: object,
  data: object
}

export default ServicesList;