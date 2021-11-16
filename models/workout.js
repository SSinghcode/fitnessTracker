const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ftracker = new Schema({

    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter type of exercise"
            },
            name: {
                type: String,
                trim: true,
                required: "Enter name of the execise"
            },
            duration: {
                type: Number,

                required: "Enter time of the duration of the exercise"
            },
            weight: {
                type: Number,

            },
            reps: {
                type: Number,

            },
            sets: {
                type: Number,

            },
            distance: {
                type: Number,

            }
        }
    ],

    day: {
        type: Date,
        default: Date.now
    },
},
{
    toJSON: {
        // virtuals: true,
        getters: true
    }
}
);

ftracker.virtual('totalDuration').get(function() {
    let totalDur = 0;
    for(let i= 0; i< this.exercises.length; i++){
        totalDur += this.exercises[i].duration
    }

    return totalDur
})

const Workout = mongoose.model("Workout", ftracker);

module.exports = Workout;
