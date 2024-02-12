import { type Redis } from '@upstash/redis';
import promiser from './promiser';

async function setFileURL(redis: Redis, key: string, value: string): Promise<string> {
    const [data, setError] = await promiser(redis.set(key, value));
    if (setError) {
        throw Error(setError.message);
    }
    if (!data) {
        throw Error('Failed to set cache');
    }
    return data;
}

async function getFileURL(redis: Redis, key: string): Promise<string> {
    const [data, setError] = await promiser(redis.get<string>(key));
    if (setError) {
        throw Error(setError.message);
    }
    if (!data) {
        throw Error('Failed to get cache');
    }
    return data;
}

async function checkFileExists(redis: Redis, key: string): Promise<boolean> {
    const [data, setError] = await promiser(redis.exists(key));
    if (setError) {
        throw Error(setError.message);
    }
    if (!data) {
        return false;
        // throw Error('Failed to get cache');
    }
    return data === 0 ? false : true;
}

export { setFileURL, getFileURL, checkFileExists };
