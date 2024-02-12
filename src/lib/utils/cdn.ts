import {
    CDN_API_KEY,
    CDN_BASE_HOSTNAME,
    CDN_REGION,
    CDN_STROAGE_ZONE_NAME,
    CDN_URL
} from '$env/static/private';
import promiser from './promiser';

async function addWoff2FontFile(font: Uint8Array, fileName: string): Promise<string> {
    const cdnURL = CDN_REGION
        ? new URL(`https://${CDN_REGION}.${CDN_BASE_HOSTNAME}`)
        : new URL(`https://${CDN_BASE_HOSTNAME}`);
    console.log('access key', CDN_API_KEY);
    const options: RequestInit = {
        method: 'PUT',
        headers: {
            AccessKey: CDN_API_KEY,
            'Content-Type': 'text/html; charset=utf-8',
            'Content-Disposition': `attachment; filename="${fileName}"; filename*=UTF-8''${fileName}`
        },
        body: font
    };
    cdnURL.pathname = `/${CDN_STROAGE_ZONE_NAME}/woff2/${fileName}`;
    console.log(cdnURL);
    const [response, responseError] = await promiser(fetch(`${cdnURL}`, options));
    if (responseError) {
        console.log(responseError);
        throw Error(responseError.message);
    }
    const [resJson, resJsonError] = await promiser(response.json());
    if (resJsonError) {
        console.log(resJsonError);
        throw Error(resJsonError.message);
    }
    console.log(resJson);
    if (!response.ok) {
        throw Error('File Upload Failed');
    }
    return 'File Upload Successful';
}

async function readTTFFontFile(fileName: string) {
    const [ttfResponse, ttfError] = await promiser<Response>(fetch(`${CDN_URL}/ttf/${fileName}`));
    if (ttfError) {
        throw Error(ttfError.message);
    }
    if (!ttfResponse.ok) {
        throw Error('File Not Found');
    }
    return await ttfResponse.arrayBuffer();
}

export { addWoff2FontFile, readTTFFontFile };
