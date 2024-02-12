import { e as error } from "../../../chunks/index.js";
import { Redis } from "@upstash/redis";
import opentype from "opentype.js";
import wawoff2 from "wawoff2";
import { c as createMapFromJson } from "../../../chunks/index3.js";
async function promiser(promise) {
  try {
    const data = await promise;
    return [data, null];
  } catch (error2) {
    return [
      null,
      {
        error: error2,
        message: error2.message ?? "Some Error has occured"
      }
    ];
  }
}
async function setFileURL(redis2, key, value) {
  const [data, setError] = await promiser(redis2.set(key, value));
  if (setError) {
    throw Error(setError.message);
  }
  if (!data) {
    throw Error("Failed to set cache");
  }
  return data;
}
const CDN_URL = "https://fontalt.b-cdn.net";
const CDN_API_KEY = "e80d6c6c-d9ac-4381-ae3bd0f0a6eb-1d44-472d";
const CDN_STROAGE_ZONE_NAME = "fontalt";
const CDN_BASE_HOSTNAME = "storage.bunnycdn.com";
const REDIS_URL = "https://blessed-yak-31019.upstash.io";
const REDIS_TOKEN = "AXkrASQgMmFmNjBkNmQtMDI4MS00Yjk3LWI0ZDItOWRmZmEyMGZkMjBjNTE3NjA4Yzk1OTk5NGJlNjhjMGViYWJlNDlhYWRlMzI=";
async function createSubtextFont(font, text) {
  const [parsedFont, parsedError] = await promiser(opentype.parse(font));
  if (parsedError) {
    console.log("font file is not a TTF");
    throw Error("font file is not a TTF");
  }
  if (!parsedFont)
    throw Error("font file does not exist");
  const notdefGlyph = parsedFont.glyphs.get(0);
  notdefGlyph.unicode = 0;
  const characters = Array.from(new Set(" " + text));
  const glyphs = characters.map((char) => {
    const glyph = parsedFont.charToGlyph(char);
    if (glyph) {
      glyph.unicode = char.codePointAt(0);
    }
    return glyph;
  }).filter((glyph) => glyph);
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
  return subsetFont.toArrayBuffer();
}
async function ttfToWoff2(fontBuffer) {
  return await wawoff2.compress(new Uint8Array(fontBuffer));
}
function createFontAltCSSFile(fontFamily) {
  return `
@font-face {
font-family: '${fontFamily}';
font-style: normal;
font-weight: 400;
font-display: block;
src: url(${fontAltFileURL(fontFamily)}) format('woff2');
}
`;
}
function fontAltFileURL(fontFamily) {
  return `${CDN_URL}/woff2/${fontAltFileName(fontFamily)}`;
}
function fontAltFileName(fontFamily) {
  return `${fontFamily}-fontalt.woff2`;
}
async function addWoff2FontFile(font, fileName) {
  const cdnURL = new URL(`https://${CDN_BASE_HOSTNAME}`);
  console.log("access key", CDN_API_KEY);
  const options = {
    method: "PUT",
    headers: {
      AccessKey: CDN_API_KEY,
      "Content-Type": "text/html; charset=utf-8",
      "Content-Disposition": `attachment; filename="${fileName}"; filename*=UTF-8''${fileName}`
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
    throw Error("File Upload Failed");
  }
  return "File Upload Successful";
}
async function readTTFFontFile(fileName) {
  const [ttfResponse, ttfError] = await promiser(fetch(`${CDN_URL}/ttf/${fileName}`));
  if (ttfError) {
    throw Error(ttfError.message);
  }
  if (!ttfResponse.ok) {
    throw Error("File Not Found");
  }
  return await ttfResponse.arrayBuffer();
}
const Circular = "https://fontalt.b-cdn.net/woff2/Circular-fontalt.woff2";
const GeistVariableVF = "https://fontalt.b-cdn.net/woff2/GeistVariableVF-fontalt.woff2";
const Helvetica = "https://fontalt.b-cdn.net/woff2/Helvetica-fontalt.woff2";
const ITCAvantGarde = "https://fontalt.b-cdn.net/woff2/ITCAvantGarde-fontalt.woff2";
const PressGothic = "https://fontalt.b-cdn.net/woff2/PressGothic-fontalt.woff2";
const TwentiethCenturyforKenmoreMedium = "https://fontalt.b-cdn.net/woff2/TwentiethCenturyforKenmoreMedium-fontalt.woff2";
const impact = "https://fontalt.b-cdn.net/woff2/impact-fontalt.woff2";
const jsonData = {
  "Anton-Regular": "https://fontalt.b-cdn.net/woff2/Anton-Regular-fontalt.woff2",
  "Arimo-VariableFont_wght": "https://fontalt.b-cdn.net/woff2/Arimo-VariableFont_wght-fontalt.woff2",
  "Avenir Book": "https://fontalt.b-cdn.net/woff2/Avenir Book-fontalt.woff2",
  "BarlowCondensed-Regular": "https://fontalt.b-cdn.net/woff2/BarlowCondensed-Regular-fontalt.woff2",
  "BasierCircle-Regular": "https://fontalt.b-cdn.net/woff2/BasierCircle-Regular-fontalt.woff2",
  "BasierSquare-Regular": "https://fontalt.b-cdn.net/woff2/BasierSquare-Regular-fontalt.woff2",
  "BebasNeue-Regular": "https://fontalt.b-cdn.net/woff2/BebasNeue-Regular-fontalt.woff2",
  "Century Gothic": "https://fontalt.b-cdn.net/woff2/Century Gothic-fontalt.woff2",
  "ChampionGothic-Lightweight": "https://fontalt.b-cdn.net/woff2/ChampionGothic-Lightweight-fontalt.woff2",
  Circular,
  "DMSans_24pt-Regular": "https://fontalt.b-cdn.net/woff2/DMSans_24pt-Regular-fontalt.woff2",
  "Fellix Regular": "https://fontalt.b-cdn.net/woff2/Fellix Regular-fontalt.woff2",
  "FilsonPro-Regular": "https://fontalt.b-cdn.net/woff2/FilsonPro-Regular-fontalt.woff2",
  "FontsFree-Net-SFProDisplay-Regular": "https://fontalt.b-cdn.net/woff2/FontsFree-Net-SFProDisplay-Regular-fontalt.woff2",
  "Futura Book font": "https://fontalt.b-cdn.net/woff2/Futura Book font-fontalt.woff2",
  GeistVariableVF,
  "GeneralSans-Regular": "https://fontalt.b-cdn.net/woff2/GeneralSans-Regular-fontalt.woff2",
  "Gilroy-Regular": "https://fontalt.b-cdn.net/woff2/Gilroy-Regular-fontalt.woff2",
  Helvetica,
  "IBMPlexSans-Regular": "https://fontalt.b-cdn.net/woff2/IBMPlexSans-Regular-fontalt.woff2",
  ITCAvantGarde,
  "InstrumentSans-Regular": "https://fontalt.b-cdn.net/woff2/InstrumentSans-Regular-fontalt.woff2",
  "Inter-Regular": "https://fontalt.b-cdn.net/woff2/Inter-Regular-fontalt.woff2",
  "LexendDeca-Regular": "https://fontalt.b-cdn.net/woff2/LexendDeca-Regular-fontalt.woff2",
  "Manrope-Regular": "https://fontalt.b-cdn.net/woff2/Manrope-Regular-fontalt.woff2",
  "Montserrat-Regular": "https://fontalt.b-cdn.net/woff2/Montserrat-Regular-fontalt.woff2",
  "Nunito-Regular": "https://fontalt.b-cdn.net/woff2/Nunito-Regular-fontalt.woff2",
  "PlusJakartaSans-Regular": "https://fontalt.b-cdn.net/woff2/PlusJakartaSans-Regular-fontalt.woff2",
  "Poppins-Regular": "https://fontalt.b-cdn.net/woff2/Poppins-Regular-fontalt.woff2",
  PressGothic,
  "Questrial-Regular": "https://fontalt.b-cdn.net/woff2/Questrial-Regular-fontalt.woff2",
  "Quicksand-Regular": "https://fontalt.b-cdn.net/woff2/Quicksand-Regular-fontalt.woff2",
  "Raleway-Regular": "https://fontalt.b-cdn.net/woff2/Raleway-Regular-fontalt.woff2",
  "Roboto-Regular": "https://fontalt.b-cdn.net/woff2/Roboto-Regular-fontalt.woff2",
  "Rubik-Regular": "https://fontalt.b-cdn.net/woff2/Rubik-Regular-fontalt.woff2",
  "Satoshi-Variable": "https://fontalt.b-cdn.net/woff2/Satoshi-Variable-fontalt.woff2",
  "Sinhala Sangam MN": "https://fontalt.b-cdn.net/woff2/Sinhala Sangam MN-fontalt.woff2",
  TwentiethCenturyforKenmoreMedium,
  "Urbanist-Regular": "https://fontalt.b-cdn.net/woff2/Urbanist-Regular-fontalt.woff2",
  "WorkSans-Regular": "https://fontalt.b-cdn.net/woff2/WorkSans-Regular-fontalt.woff2",
  impact
};
const redis = new Redis({
  url: REDIS_URL,
  token: REDIS_TOKEN
});
const map = await createMapFromJson(jsonData);
const GET = async ({ url, fetch: fetch2 }) => {
  const startTime = performance.now();
  const font = url.searchParams.get("font");
  const text = url.searchParams.get("text");
  if (!font || !text)
    error(400, "font or text not query paramater not provided");
  const [fileExists, fileExistsError] = await promiser(map.has(font));
  if (fileExistsError) {
    console.log(fileExistsError);
    error(500, "Server Error");
  }
  if (fileExists) {
    console.log("cache hit");
    const endTime2 = performance.now();
    const processingTime2 = endTime2 - startTime;
    console.log("Processing Time - ", processingTime2);
    return new Response(
      // https://fontalt.b-cdn.net/Astonpoliz-subtext.woff2
      createFontAltCSSFile(font),
      {
        headers: {
          "Content-Type": "text/css"
        }
      }
    );
  }
  console.log("cache miss");
  console.log("font - ", font);
  console.log("text - ", text);
  const [ttfFile, ttfFileError] = await promiser(readTTFFontFile(`${font}.ttf`));
  if (ttfFileError) {
    console.log(ttfFileError);
    error(500, "Server Error");
  }
  const [subtextFont, subtextFontError] = await promiser(createSubtextFont(ttfFile, text));
  if (subtextFontError) {
    console.log(subtextFontError);
    error(500, "Server Error");
  }
  const [woff2FontFile, woff2Error] = await promiser(ttfToWoff2(subtextFont));
  if (woff2Error) {
    console.log(woff2Error);
    error(500, "Server Error");
  }
  const [_, addedFontFileError] = await promiser(addWoff2FontFile(woff2FontFile, fontAltFileName(font)));
  if (addedFontFileError) {
    console.log(addedFontFileError);
    error(500, "Server Error");
  }
  const [__, cacheSetError] = await promiser(setFileURL(redis, font, fontAltFileURL(font)));
  if (cacheSetError) {
    console.log(cacheSetError);
  }
  const endTime = performance.now();
  const processingTime = endTime - startTime;
  console.log("Processing Time - ", processingTime);
  return new Response(
    // https://fontalt.b-cdn.net/Astonpoliz-subtext.woff2
    createFontAltCSSFile(font),
    {
      headers: {
        "Content-Type": "text/css"
      }
    }
  );
};
export {
  GET
};
