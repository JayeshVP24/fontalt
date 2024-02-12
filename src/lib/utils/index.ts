import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { cubicOut } from 'svelte/easing';
import type { TransitionConfig } from 'svelte/transition';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

type FlyAndScaleParams = {
    y?: number;
    x?: number;
    start?: number;
    duration?: number;
};

export const flyAndScale = (
    node: Element,
    params: FlyAndScaleParams = { y: -8, x: 0, start: 0.95, duration: 150 }
): TransitionConfig => {
    const style = getComputedStyle(node);
    const transform = style.transform === 'none' ? '' : style.transform;

    const scaleConversion = (
        valueA: number,
        scaleA: [number, number],
        scaleB: [number, number]
    ) => {
        const [minA, maxA] = scaleA;
        const [minB, maxB] = scaleB;

        const percentage = (valueA - minA) / (maxA - minA);
        const valueB = percentage * (maxB - minB) + minB;

        return valueB;
    };

    const styleToString = (style: Record<string, number | string | undefined>): string => {
        return Object.keys(style).reduce((str, key) => {
            if (style[key] === undefined) return str;
            return str + `${key}:${style[key]};`;
        }, '');
    };

    return {
        duration: params.duration ?? 200,
        delay: 0,
        css: (t) => {
            const y = scaleConversion(t, [0, 1], [params.y ?? 5, 0]);
            const x = scaleConversion(t, [0, 1], [params.x ?? 0, 0]);
            const scale = scaleConversion(t, [0, 1], [params.start ?? 0.95, 1]);

            return styleToString({
                transform: `${transform} translate3d(${x}px, ${y}px, 0) scale(${scale})`,
                opacity: t
            });
        },
        easing: cubicOut
    };
};

const loadedFonts: string[] = [];

export async function applyFont(fontName: string, fileName: string) {
    if (loadedFonts.includes(fontName)) return;
    const response = await fetch(`/font?font=${fileName}&text=${fontName}`);
    if (!response.ok) {
        console.log(`HTTP error! Status: ${response.status}`);
        return;
    }
    const fontBlob = await response.blob();
    const fontUrl = URL.createObjectURL(fontBlob);
    const newFontFace = new FontFace(fontName, `url(${fontUrl})`);
    newFontFace
        .load()
        .then((loadedFontFace) => {
            document.fonts.add(loadedFontFace);
            const elements = document.getElementsByClassName(
                fontName
            ) as HTMLCollectionOf<HTMLElement>;
            for (const element of elements) {
                element.style.fontFamily = `${fontName}, sans-serif`;
            }
            loadedFonts.push(fontName);
            // document.body.style.fontFamily = `${fontName}, sans-serif`;
        })
        .catch((error) => {
            console.error('Error applying font:', error);
        });
}

export function selectRandomItems<T>(arr: T[], numberOfItems: number): T[] {
    // If the requested number of items is greater than the array length, return the original array
    if (arr.length <= numberOfItems) {
        return arr;
    } else {
        let result = [];
        let indicesSelected = new Set(); // To keep track of selected indices
        while (result.length < numberOfItems) {
            let randomIndex = Math.floor(Math.random() * arr.length);
            // Check if this index was already selected
            if (!indicesSelected.has(randomIndex)) {
                indicesSelected.add(randomIndex);
                result.push(arr[randomIndex]);
            }
        }
        return result;
    }
}

export async function createMapFromJson(jsonData: Object): Promise<Map<string, string>> {
    console.log('start start');
    // const jsonData = await fs.readFile(fileName, 'utf-8');
    // console.log("file read - ", jsonData)
    // const mapArray = JSON.parse(jsonData);
    return new Map(Object.entries(jsonData));
}
