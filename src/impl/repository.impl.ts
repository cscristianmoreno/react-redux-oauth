export interface RepositoryImpl<T> {
    save(data: T): Promise<void>;

    findAll(): Promise<T>;
}