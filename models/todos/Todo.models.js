import mongoose from 'mongoose';

const toDoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "userSchema",
        },
    },
    {
        timestamps: true,
    }
)

export const Todo = mongoose.model('Todo' , toDoSchema); 