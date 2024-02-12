import opentype from 'opentype.js';
import promiser from './promiser';
import wawoff2 from 'wawoff2';
import { CDN_URL } from '$env/static/private';

async function createSubtextFont(font: ArrayBuffer, text: string): Promise<ArrayBuffer> {
    const [parsedFont, parsedError] = await promiser(opentype.parse(font));
    if (parsedError) {
        console.log('font file is not a TTF');
        throw Error('font file is not a TTF');
    }
    if (!parsedFont) throw Error('font file does not exist');

    const notdefGlyph = parsedFont.glyphs.get(0);
    notdefGlyph.unicode = 0; // Set unicode for .notdef glyph

    const characters = Array.from(new Set(' ' + text));

    // Map characters to glyphs
    const glyphs = characters
        .map((char) => {
            const glyph = parsedFont.charToGlyph(char);
            if (glyph) {
                glyph.unicode = char.codePointAt(0); // Ensure unicode is set for each glyph
            }
            return glyph;
        })
        .filter((glyph) => glyph); // Filter out undefined glyphs

    glyphs.unshift(notdefGlyph);

    const lang = Object.keys(parsedFont.names.fontFamily)[0];
    const subsetFont = new opentype.Font({
        familyName: text,
        styleName: parsedFont.names.fontSubfamily[lang],
        unitsPerEm: parsedFont.unitsPerEm,
        ascender: parsedFont.ascender,
        descender: parsedFont.descender,
        glyphs
    });

    // Generate new .ttf buffer
    return subsetFont.toArrayBuffer();
}

function fontFileSize(buffer: ArrayBuffer) {
    const sizeInBytes = buffer.byteLength;
    const sizeInKilobytes = sizeInBytes / 1024;
    return sizeInKilobytes.toFixed(2) + ' KB';
}

async function ttfToWoff2(fontBuffer: ArrayBuffer): Promise<Uint8Array> {
    return await wawoff2.compress(new Uint8Array(fontBuffer));
}

function createFontAltCSSFile(fontFamily: string): string {
    return `
@font-face {
font-family: '${fontFamily}';
font-style: normal;
font-weight: 400;
font-display: block;
src: url(${fontAltFileURL(fontFamily)}) format('woff2');
}
`;
    // src: url(https://fontalt.b-cdn.net/Astonpoliz.ttf) format('ttf');
}

function fontAltFileURL(fontFamily: string): string {
    return `${CDN_URL}/woff2/${fontAltFileName(fontFamily)}`;
}
function fontAltFileName(fontFamily: string): string {
    return `${fontFamily}-fontalt.woff2`;
}

export {
    createSubtextFont,
    createFontAltCSSFile,
    fontFileSize,
    ttfToWoff2,
    fontAltFileURL,
    fontAltFileName
};
