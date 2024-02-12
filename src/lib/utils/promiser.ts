interface PromiseError {
    error: any;
    message: string;
}
async function promiser<T>(promise: Promise<T> | T): Promise<[T, null] | [null, PromiseError]> {
    try {
        const data = await promise;
        return [data, null];
    } catch (error: any & { message: string }) {
        return [
            null,
            {
                error,
                message: error.message ?? 'Some Error has occured'
            }
        ];
    }
}

export default promiser;
