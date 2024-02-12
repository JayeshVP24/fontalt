import { Redis } from '@upstash/redis';
import promiser from '$lib/utils/promiser';
// import { REDIS_TOKEN, REDIS_URL } from '$env/static/private';
import fs from "fs/promises"

const redis = new Redis({
    url: process.env.REDIS_URL!,
    token: process.env.REDIS_TOKEN!,
})

await exportRedisToJson(redis)

async function exportRedisToJson(upstashRedis: Redis) {
    try {
        // Get all keys
        const [keysResponse,keysResponseError] = await promiser(upstashRedis.keys('*'))
        if (keysResponseError) throw keysResponseError;

        const keys = keysResponse;

        // Prepare an object to hold the key-value pairs
        let data: Record<string, string> = {};

        // Iterate over each key to fetch its value
        for (const key of keys) {
            const [valueResponse, valueResponsError] = await promiser(upstashRedis.get<string>(key))
            if (valueResponsError) throw valueResponsError;
            if(valueResponse) {
                data[key] = valueResponse;
            }
        }

        // Convert the object to JSON
        const jsonData = JSON.stringify(data, null, 2);

        await fs.writeFile('./src/lib/redis_data.json', jsonData, 'utf-8');
        console.log('Export completed successfully, data written to redis_data.json');

        // Return JSON data
        return jsonData;
    } catch (error) {
        console.error('Failed to export Redis data to JSON:', error);
        throw error; // Rethrow or handle as needed
    }
}
