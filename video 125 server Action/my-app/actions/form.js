"use server"
import fs from "fs/promises"
export const submitAction = async (e) => {
  console.log(e.get("name"), e.get("add"))
  let a = await fs.writeFile("gaurav.txt", `My anme is ${e.get("name")} and my address is ${e.get("add")}`)
}