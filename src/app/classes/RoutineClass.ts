import { Exercise } from "./ExerciseClass";

export class Routine {
    routine_id: number;
    user_id: number;
    routine_name: string;
    exercises: Exercise[];

    constructor(routine_id: number, user_id: number, routine_name: string, exercises: Exercise[]) {
        this.routine_id = routine_id;
        this.user_id = user_id;
        this.routine_name = routine_name;
        this.exercises = exercises;
    }
}