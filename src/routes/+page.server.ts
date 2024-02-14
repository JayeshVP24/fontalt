// import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import fonts from '$lib/fonts';
// import { selectRandomItems } from '$lib/utils';

export const load: PageServerLoad = async ({ fetch }) => {
    // const randomFonts = selectRandomItems(fonts, 10);
    async function getCss() {
        let cssText = '';
        for (const font of fonts) {
            const onlyFonts = [
                font.main,
                font.alternativeOne,
                font.alternativeTwo,
                font.alternativeThree
            ];
            for (const onlyFont of onlyFonts) {
                const response = await fetch(
                    `/font?font=${onlyFont.fileName}&text=${onlyFont.title}`
                );
                if (response.ok) {
                    cssText += `\n ${await response.text()} \n`;
                }
            }
        }
        return cssText;
    }
    return {
        cssText: getCss(),
        randomFonts: fonts
    };
};
