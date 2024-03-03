import OpenAI from 'openai'
import { OPENAI_API_KEY } from '../config/index.mjs'

const openai = new OpenAI({
    apiKey: OPENAI_API_KEY, // This is the default and can be omitted
});

export const createEmbedding = async (text) => {
    const embeddingResponse = await openai.embeddings.create({
        model: "text-embedding-ada-002",
        input: text
    })
    // console.log(embeddingResponse);
    const [{ embedding }] = embeddingResponse?.data

    // console.log('embedding', embedding)

    return embedding
}



