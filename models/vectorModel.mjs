import { Schema, model } from "mongoose"

const vectorSchema = new Schema({
    text: String,
    embedding: [Number]
})

export const Vector = model("vector", vectorSchema)