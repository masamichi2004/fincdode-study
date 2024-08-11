import { config } from "dotenv";
config();

 
const API_KEY = `Bearer ${process.env.SECRET_API_KEY}`;
const BASE_URL = "https://api.test.fincode.jp";
const DATA = {
  pay_type: "Directdebit",
  job_code: "CAPTURE",
  amount: "500",
}; 

main();
 
function main() {
  const endpoint = "/v1/payments";
  fetch(BASE_URL+endpoint, 
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: API_KEY,
      },
      body: JSON.stringify(DATA),
    })    
    .then((res) => res.json())
    .then((json) => console.log(json))
}