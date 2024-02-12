import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import promiser from '$lib/utils/promiser';
import { Redis } from '@upstash/redis';
import { checkFileExists, setFileURL } from '$lib/utils/redis';
import {
    createFontAltCSSFile,
    createSubtextFont,
    fontAltFileName,
    fontAltFileURL,
    ttfToWoff2
} from '$lib/utils/font';
import { addWoff2FontFile, readTTFFontFile } from '$lib/utils/cdn';
import { REDIS_TOKEN, REDIS_URL } from '$env/static/private';
import { createMapFromJson } from '$lib/utils';
import jsonData from '$lib/redis_data.json';

const redis = new Redis({
    url: REDIS_URL,
    token: REDIS_TOKEN
});

// Assumptions
// subset text font is always in woff2
// full font is always in ttf

const map = await createMapFromJson(jsonData as Object);

export const GET: RequestHandler = async ({ url }) => {
    const startTime = performance.now();

    const font = url.searchParams.get('font');
    const text = url.searchParams.get('text');
    if (!font || !text) error(400, 'font or text not query paramater not provided');
    if(font === "null" || text === "null") error(400, 'null passed')

    // const [fileExists, fileExistsError] = await promiser(checkFileExists(redis, font))
    // if(fileExistsError) {
    //     console.log(fileExistsError)
    //     error(500, "Server Error")
    // }

    const [fileExists, fileExistsError] = await promiser(map.has(font));
    if (fileExistsError) {
        console.log(fileExistsError);
        error(500, 'Server Error');
    }

    if (fileExists) {
        // console.log('cache hit');

        // const endTime = performance.now();
        // const processingTime = endTime - startTime;
        // console.log('Processing Time - ', processingTime);
        return new Response(
            // https://fontalt.b-cdn.net/Astonpoliz-subtext.woff2
            createFontAltCSSFile(font),
            {
                headers: {
                    'Content-Type': 'text/css'
                }
            }
        );
    }
    console.log('cache miss');
    console.log('font - ', font);
    console.log('text - ', text);
    const [ttfFile, ttfFileError] = await promiser(readTTFFontFile(`${font}.ttf`));
    if (ttfFileError) {
        console.log(ttfFileError);
        error(500, 'Server Error');
    }
    const [subtextFont, subtextFontError] = await promiser(createSubtextFont(ttfFile, text));
    if (subtextFontError) {
        console.log(subtextFontError);
        error(500, 'Server Error');
    }
    const [woff2FontFile, woff2Error] = await promiser(ttfToWoff2(subtextFont));
    if (woff2Error) {
        console.log(woff2Error);
        error(500, 'Server Error');
    }
    const [_, addedFontFileError] = await promiser(
        addWoff2FontFile(woff2FontFile, fontAltFileName(font))
    );
    if (addedFontFileError) {
        console.log(addedFontFileError);
        error(500, 'Server Error');
    }
    const [__, cacheSetError] = await promiser(setFileURL(redis, font, fontAltFileURL(font)));
    if (cacheSetError) {
        console.log(cacheSetError);
    }

    const endTime = performance.now();
    const processingTime = endTime - startTime;
    console.log('Processing Time - ', processingTime);

    return new Response(
        // https://fontalt.b-cdn.net/Astonpoliz-subtext.woff2
        createFontAltCSSFile(font),
        {
            headers: {
                'Content-Type': 'text/css'
            }
        }
    );
};
