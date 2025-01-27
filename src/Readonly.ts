// The Readonly utility type in TypeScript is used to make all properties of a given type read-only. 
// This means that once an object of this type is created,
//  its properties cannot be reassigned. 
interface Config {
    endpoint: string;
    apiKey: string;
  }
const con:Readonly<Config>={
    endpoint:'<https://api.example.com>',
    apiKey:"abcdef123456"
}
// con.endpoint='<https://api.example.com>' //error
function fetchData(config: Readonly<Config>) {
    console.log(`Fetching data from: ${config.endpoint}`);
    console.log(`Using API Key: ${config.apiKey}`);
  }
  
  fetchData(con);