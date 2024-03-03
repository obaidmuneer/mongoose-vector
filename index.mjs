import { Vector } from './models/vectorModel.mjs';
import { createEmbedding } from './utils/openai.mjs';
import connectDB from './db/mongodb.mjs';

connectDB()

const createVectors = async () => {
    const data = await Vector.create({
        text: "hello world"
    })
    console.log(data);
}
// createVectors()

const readVectors = async (text) => {
    const embedding = await createEmbedding(text)

    const agg = [
        {
            '$vectorSearch': {
                'index': 'vector_index',
                'path': 'embedding',
                'queryVector': embedding,
                'numCandidates': 20,
                'limit': 10
            }
        },
        {
            '$project': {
                '_id': 0,
                'text': 1,
                'score': {
                    '$meta': 'vectorSearchScore'
                }
            }
        }
    ];

    const data = await Vector.aggregate(agg)
    console.log(data);

}
// readVectors("hello")
