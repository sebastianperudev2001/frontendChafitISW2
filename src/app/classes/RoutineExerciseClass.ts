class RoutineExercise {
    public routine_id: number;
    public exercise_id: number;
    public routineExercise_id: number;
    public dateWorkout: Date;

    constructor(
        routine_id: number,
        exercise_id: number,
        routineExercise_id: number,
        dateWorkout: Date
    ) {
        this.routine_id = routine_id;
        this.exercise_id = exercise_id;
        this.routineExercise_id = routineExercise_id;
        this.dateWorkout = dateWorkout;
    }
}
 