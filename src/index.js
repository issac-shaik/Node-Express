import dotenv from "dotenv"
import connectDB from "./db/index.js"

dotenv.config({
    path: './env'
})


connectDB()
.then(() => {
    app.on("error", (error) => {
        console.log('ERROR: ', error);
        throw error;
    })
    app.listen(process.env.PORT || 8000, () => {
        const port = process.env.PORT;
        console.log(`Server is running at port: ${port}`)
    })
})
.catch((err) => {
    console.log("MONGODB connection failed!", err)
})