export abstract class Token {
    

    static save(token: string | null): void {
        if (!token) {
            return;
        }

        window.localStorage.setItem("token", token);
    }

    static load(): string | null {
        return window.localStorage.getItem("token");
    }


    static clear(): void {
        window.localStorage.removeItem("token");
    }
}
