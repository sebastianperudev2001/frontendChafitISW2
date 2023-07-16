export class Stat {
    gymSet: number;
    gymRep: number;
    weight: number;
    routineExercise_id: number;

    constructor(
        gymSet: number,
        gymRep: number,
        weight: number,
        routineExercise_id: number
    ) {
        this.gymSet = gymSet;
        this.gymRep = gymRep;
        this.weight = weight;
        this.routineExercise_id = routineExercise_id;
    }
}