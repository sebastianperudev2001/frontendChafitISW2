export class User {
    private static instance: User;
    constructor() {}

    public static getInstance(): User {
        if (!User.instance) {
            User.instance = new User();
        }

        return User.instance;
    }
}
