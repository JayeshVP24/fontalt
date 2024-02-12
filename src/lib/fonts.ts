interface Font {
    title: string | null;
    fileName: string | null;
    link: string | null;
}
export interface FontAlt {
    main: Font;
    alternativeOne: Font;
    alternativeTwo: Font;
    alternativeThree: Font;
}

const fonts: FontAlt[] = [
    {
        main: {
            title: 'Circular Std',
            fileName: 'Circular',
            link: 'https://lineto.com/typefaces/circular'
        },
        alternativeOne: {
            title: 'Manrope',
            fileName: 'Manrope-Regular',
            link: 'https://fonts.google.com/specimen/Manrope'
        },
        alternativeTwo: {
            title: 'DM Sans',
            fileName: 'DMSans_24pt-Regular',
            link: 'https://fonts.google.com/specimen/DM+Sans?query=DM+sans'
        },
        alternativeThree: {
            title: 'Plus Jakarta Display',
            fileName: 'PlusJakartaSans-Regular',
            link: 'https://fonts.google.com/specimen/Plus+Jakarta+Sans'
        }
    },
    {
        main: {
            title: 'Inter',
            fileName: 'Inter-Regular',
            link: 'https://fonts.google.com/specimen/Inter'
        },
        alternativeOne: {
            title: 'Geist',
            fileName: 'GeistVariableVF',
            link: 'https://github.com/vercel/geist-font/releases/'
        },
        alternativeTwo: {
            title: 'Rubik',
            fileName: 'Rubik-Regular',
            link: 'https://fonts.google.com/specimen/Rubik'
        },
        alternativeThree: {
            title: 'Instrument Sans',
            fileName: 'InstrumentSans-Regular',
            link: 'https://fonts.google.com/specimen/Instrument+Sans'
        }
    },
    {
        main: {
            title: 'Bebas Neue',
            fileName: 'BebasNeue-Regular',
            link: 'https://fonts.google.com/specimen/Bebas+Neue?query=bebas'
        },
        alternativeOne: {
            title: 'Anton',
            fileName: 'Anton-Regular',
            link: 'https://fonts.google.com/specimen/Anton?query=anton'
        },
        alternativeTwo: {
            title: 'Barlow Condensed',
            fileName: 'BarlowCondensed-Regular',
            link: 'https://fonts.google.com/specimen/Barlow+Condensed?query=barlow'
        },
        alternativeThree: {
            title: 'Champion Gothic',
            fileName: 'ChampionGothic-Lightweight',
            link: 'https://www.typography.com/fonts/champion-gothic/overview'
        }
    },
    {
        main: {
            title: 'Gilroy',
            fileName: 'Gilroy-Regular',
            link: 'https://www.myfonts.com/collections/gilroy-font-radomir-tinkov'
        },
        alternativeOne: {
            title: 'Questrial',
            fileName: 'Questrial-Regular',
            link: 'https://fonts.google.com/specimen/Questrial'
        },
        alternativeTwo: {
            title: 'Urbanist',
            fileName: 'Urbanist-Regular',
            link: 'https://fonts.google.com/specimen/Urbanist?query=Urbanist'
        },
        alternativeThree: {
            title: 'Lexend Deca',
            fileName: 'LexendDeca-Regular',
            link: 'https://fonts.google.com/specimen/Lexend+Deca?query=Lexend+Deca'
        }
    },
    {
        main: {
            title: 'Satoshi',
            fileName: 'Satoshi-Variable',
            link: 'https://www.fontshare.com/fonts/satoshi'
        },
        alternativeOne: {
            title: 'General Sans',
            fileName: 'GeneralSans-Regular',
            link: 'https://www.fontshare.com/fonts/general-sans'
        },
        alternativeTwo: {
            title: 'Basier Circle ',
            fileName: 'BasierCircle-Regular',
            link: 'https://www.atipofoundry.com/fonts/basier'
        },
        alternativeThree: {
            title: null,
            fileName: null,
            link: null
        }
    },
    {
        main: {
            title: 'Poppins',
            fileName: 'Poppins-Regular',
            link: 'https://fonts.google.com/specimen/Poppins'
        },
        alternativeOne: {
            title: null,
            fileName: null,
            link: null
        },
        alternativeTwo: {
            title: null,
            fileName: null,
            link: null
        },
        alternativeThree: {
            title: null,
            fileName: null,
            link: null
        }
    },
    {
        main: {
            title: 'Helvetica',
            fileName: 'Helvetica',
            link: 'https://www.linotype.com/1308886/helvetica-family.html'
        },
        alternativeOne: {
            title: 'Work Sans',
            fileName: 'WorkSans-Regular',
            link: 'https://fonts.google.com/specimen/Work+Sans'
        },
        alternativeTwo: {
            title: 'Inter',
            fileName: 'Inter-Regular',
            link: 'https://fonts.google.com/specimen/Inter?query=inter'
        },
        alternativeThree: {
            title: 'SF Pro Display',
            fileName: 'FontsFree-Net-SFProDisplay-Regular',
            link: 'https://developer.apple.com/fonts/'
        }
    },
    {
        main: {
            title: 'ITC Avant Garde',
            fileName: 'ITCAvantGarde',
            link: 'https://www.myfonts.com/collections/avant-garde-gothic-font-itc'
        },
        alternativeOne: {
            title: 'Filson Pro',
            fileName: 'FilsonPro-Regular',
            link: 'https://www.motyfo.com/font-family/filson-pro/'
        },
        alternativeTwo: {
            title: 'Poppins',
            fileName: 'Poppins-Regular',
            link: 'https://fonts.google.com/specimen/Poppins'
        },
        alternativeThree: {
            title: null,
            fileName: null,
            link: null
        }
    },
    {
        main: {
            title: 'Century Gothic',
            fileName: 'Century Gothic',
            link: 'https://www.myfonts.com/collections/century-gothic-font-monotype-imaging'
        },
        alternativeOne: {
            title: 'Satoshi',
            fileName: 'Satoshi-Variable',
            link: 'https://www.fontshare.com/fonts/satoshi'
        },
        alternativeTwo: {
            title: 'Gilroy',
            fileName: 'Gilroy-Regular',
            link: 'https://www.myfonts.com/collections/gilroy-font-radomir-tinkov'
        },
        alternativeThree: {
            title: 'Twentieth Century',
            fileName: 'TwentiethCenturyforKenmoreMedium',
            link: 'https://www.myfonts.com/collections/twentieth-century-mt-font-monotype-imaging'
        }
    },
    {
        main: {
            title: 'Impact',
            fileName: 'impact',
            link: 'https://www.myfonts.com/collections/impact-font-urw?queryId=c0f0e7fbe4173813a509c001ea2b1f80&index=universal_search_data&objectIDs=8652499001'
        },
        alternativeOne: {
            title: 'Press Gothic',
            fileName: 'PressGothic',
            link: 'https://www.myfonts.com/collections/press-gothic-font-canada-type'
        },
        alternativeTwo: {
            title: 'Anton',
            fileName: 'Anton-Regular',
            link: 'https://fonts.google.com/specimen/Anton'
        },
        alternativeThree: {
            title: null,
            fileName: null,
            link: null
        }
    },
    {
        main: {
            title: 'Futura',
            fileName: 'Futura Book font',
            link: 'https://fonts.adobe.com/fonts/futura-pt'
        },
        alternativeOne: {
            title: 'Avenir',
            fileName: 'Avenir Book',
            link: 'https://www.myfonts.com/collections/avenir-font-linotype'
        },
        alternativeTwo: {
            title: 'Fellix',
            fileName: 'Fellix Regular',
            link: 'https://displaay.net/typeface/fellix/'
        },
        alternativeThree: {
            title: null,
            fileName: null,
            link: null
        }
    },
    {
        main: {
            title: 'Satoshi',
            fileName: 'Satoshi-Variable',
            link: 'https://www.fontshare.com/fonts/satoshi'
        },
        alternativeOne: {
            title: 'Basier Circle',
            fileName: 'BasierCircle-Regular',
            link: 'https://www.atipofoundry.com/fonts/basier'
        },
        alternativeTwo: {
            title: 'SF Pro',
            fileName: 'FontsFree-Net-SFProDisplay-Regular',
            link: 'https://developer.apple.com/fonts/'
        },
        alternativeThree: {
            title: null,
            fileName: null,
            link: null
        }
    },
    {
        main: {
            title: 'Basier Square',
            fileName: 'BasierSquare-Regular',
            link: 'https://www.atipofoundry.com/fonts/basier'
        },
        alternativeOne: {
            title: 'SF Pro',
            fileName: 'FontsFree-Net-SFProDisplay-Regular',
            link: 'https://developer.apple.com/fonts/'
        },
        alternativeTwo: {
            title: 'Sinhala Sangam MN',
            fileName: 'Sinhala Sangam MN',
            link: 'https://eng.m.fontke.com/font/10415856/download/'
        },
        alternativeThree: {
            title: 'Seoulnamsan',
            fileName: null,
            link: null
        }
    },
    {
        main: {
            title: 'Roboto',
            fileName: 'Roboto-Regular',
            link: 'https://fonts.google.com/specimen/Roboto'
        },
        alternativeOne: {
            title: 'Inter',
            fileName: 'Inter-Regular',
            link: 'https://fonts.google.com/specimen/Inter'
        },
        alternativeTwo: {
            title: 'DM Sans',
            fileName: 'DMSans_24pt-Regular',
            link: 'https://fonts.google.com/specimen/DM+Sans?query=DM+Sans'
        },
        alternativeThree: {
            title: 'IBM Plex Sans',
            fileName: 'IBMPlexSans-Regular',
            link: 'https://fonts.google.com/specimen/IBM+Plex+Sans?query=IBM+Plex+Sans'
        }
    },
    {
        main: {
            title: 'Montserrat',
            fileName: 'Montserrat-Regular',
            link: 'https://fonts.google.com/specimen/Montserrat?query=Montserrat'
        },
        alternativeOne: {
            title: 'Work Sans',
            fileName: 'WorkSans-Regular',
            link: 'https://fonts.google.com/specimen/Work+Sans'
        },
        alternativeTwo: {
            title: 'Arimo',
            fileName: 'Arimo-VariableFont_wght',
            link: 'https://fonts.google.com/specimen/Arimo?query=Arimo'
        },
        alternativeThree: {
            title: 'Raleway',
            fileName: 'Raleway-Regular',
            link: 'https://fonts.google.com/specimen/Raleway?query=raleway'
        }
    },
    {
        main: {
            title: 'Nunito',
            fileName: 'Nunito-Regular',
            link: 'https://fonts.google.com/specimen/Nunito?query=Nunito'
        },
        alternativeOne: {
            title: 'Rubik',
            fileName: 'Rubik-Regular',
            link: 'https://fonts.google.com/specimen/Rubik?query=rubik'
        },
        alternativeTwo: {
            title: 'Quicksand',
            fileName: 'Quicksand-Regular',
            link: 'https://fonts.google.com/specimen/Quicksand?query=quicksand'
        },
        alternativeThree: {
            title: null,
            fileName: null,
            link: null
        }
    }
];

export default fonts;
