import dotenv from "dotenv"

// Load env variables
dotenv.config()

export const sendMail = (data: JSON) => {
  console.log(`Got your data: ${data}`)
  return data
}
