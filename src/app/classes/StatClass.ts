export class Stat {
    gymSet: number;
    gymRep: number;
    weight: number;
    routineExercise_id: number;
    dateWorkout: Date;

    constructor(
        gymSet: number,
        gymRep: number,
        weight: number,
        routineExercise_id: number,
        dateWorkout: Date

    ) {
        this.gymSet = gymSet;
        this.gymRep = gymRep;
        this.weight = weight;
        this.routineExercise_id = routineExercise_id;
        this.dateWorkout = dateWorkout;
    }
}