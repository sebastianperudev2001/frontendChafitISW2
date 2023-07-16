export class Exercise {
    exercise_id: number;
    name: string;
    muscle_id: number;

    constructor(exercise_id: number, name: string, muscle_id: number) {
        this.exercise_id = exercise_id;
        this.name = name;
        this.muscle_id = muscle_id;
    }
}
