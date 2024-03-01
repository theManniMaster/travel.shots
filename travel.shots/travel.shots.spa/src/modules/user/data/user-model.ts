/**
 * User data model.
 */
class UserModel {
    /**
     * First name.
     */
    firstName: string | null;

    /**
     * Last name.
     */
    lastName: string | null;

    /**
     * Email id.
     */
    email: string;

    /**
     * Password. Used for creating a new account.
     */
    password: string | null;

    /**
     * Is user logged in.
     */
    isLoggedIn: boolean;

    /**
     * Default constructor.
     */
    constructor() {
        this.firstName = null;
        this.lastName = null;
        this.email = "";
        this.password = null;
        this.isLoggedIn = false;
    };

    /**
     * Updates user's first name.
     * @param firstName First name.
     * @returns User model.
     */
    setFirstName(firstName: string) {
        this.firstName = firstName;

        return this;
    };

    /**
     * Updates user's last name.
     * @param lastName Last name.
     * @returns User model.
     */
    setLastName(lastName: string) {
        this.lastName = lastName;

        return this;
    };

    /**
     * Updates user's email id.
     * @param email Email id.
     * @returns User Model.
     */
    setEmail(email: string) {
        this.email = email;

        return this;
    };

    /**
     * Updates user's password. Only used for creating an account.
     * @param password Password.
     * @returns User Model.
     */
    setPassword(password: string) {
        this.password = password;

        return this;
    };

    /**
     * Updates user's logged in state.
     * @param isLoggedIn Is user logged in.
     * @returns User Model.
     */
    setIsLoggedIn(isLoggedIn: boolean) {
        this.isLoggedIn = isLoggedIn;

        return this;
    };
};

export default UserModel;