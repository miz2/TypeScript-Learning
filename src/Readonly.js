var con = {
    endpoint: '<https://api.example.com>',
    apiKey: "abcdef123456"
};
// con.endpoint='<https://api.example.com>' //error
function fetchData(config) {
    console.log("Fetching data from: ".concat(config.endpoint));
    console.log("Using API Key: ".concat(config.apiKey));
}
fetchData(con);
