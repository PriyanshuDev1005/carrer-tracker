import mongoose from 'mongoose'

const MONGODB_URI = 'mongodb+srv://career-tracker:MmD0AETzR6H9HqZu@cluster0.isjtjhy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

if (!MONGODB_URI) {
    throw new Error('Please add your Mongo URI to the file.')
}

let cached = global.mongoose || { conn: null, promise: null }

// export async function connectMongo() {
//     if (cached.conn) return cached.conn

//     if (!cached.promise) {
//         cached.promise = mongoose.connect(MONGODB_URI, {
//             bufferCommands: false,
//         }).then((mongoose) => mongoose)
//     }

//     cached.conn = await cached.promise
//     console.log("connect to database")
//     return cached.conn
// }


export const connectMongo = async () => {
    // if (mongoose.connections[0].readyState) {
    //     console.log('Already connected')
    //     return
    // }

    try {
        await mongoose.connect(MONGODB_URI)
        console.log('MongoDB Connected')
    } catch (error) {
        console.error('MongoDB Connection Failed:', error)
        process.exit(1)
    }
}


