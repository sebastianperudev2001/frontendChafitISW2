import { RoutinesServicesService } from "../services/routines-services.service";
import { Exercise } from "./ExerciseClass";
import { Routine } from "./RoutineClass";

export class RoutineBuilder {

    public routine_id: number;
    public user_id: number;
    public routine_name: string;
    public exercises: Exercise[];

    setRoutineId(routine_id: number): RoutineBuilder {
        this.routine_id = routine_id;
        return this;
    }

    setUserId(user_id: number): RoutineBuilder {
        this.routine_id = user_id;
        return this;
    }

    setName(routine_name: string): RoutineBuilder {
        this.routine_name = routine_name;
        return this;
    }

    setExercises(exercises: Exercise[]): RoutineBuilder {
        this.exercises = exercises;
        return this;
    }

    build(): Routine {
        return new Routine(this.routine_id, this.user_id, this.routine_name, this.exercises);
    }
}
