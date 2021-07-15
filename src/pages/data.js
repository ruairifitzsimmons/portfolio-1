const phone = <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 transform -rotate-12 filter drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
</svg>

const fingerprint = <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 filter drop-shadow-md" viewBox="0 0 20 20" fill="currentColor">
<path fillRule="evenodd" d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z" clipRule="evenodd" />
<path fillRule="evenodd" d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z" clipRule="evenodd" />
<path fillRule="evenodd" d="M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z" clipRule="evenodd" />
</svg>

const mouse = <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 filter drop-shadow-md" viewBox="0 0 20 20" fill="currentColor">
<path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
</svg>

export const serviceOne = {
    subHeading: 'BRAND IDENTITY',
    heading: 'Stand out from the crowd.',
    description: 'Utility classes help you work within the constraints of a system instead of littering your stylesheets with arbitrary values. They make it easy to be consistent with color choices, spacing, typography, shadows, and everything else that makes up a well-engineered design system.',
    buttonLabel: 'Learn more',
    fromColorOne: 'from-bloodorange-1',
    toColorTwo: 'to-bloodorange-2',
    colorThree: 'bloodorange-3',
    textColorOne: 'text-bloodorange-1',
    textColorTwo: 'text-bloodorange-2',
    textColorThree: 'text-bloodorange-3',
    icon: fingerprint
};

export const serviceTwo = {
    subHeading: 'SOCIAL NOISE',
    heading: 'Maximize your presence online.',
    description: 'Because Tailwind is so low-level, it never encourages you to design the same site twice. Even with the same color palette and sizing scale, it\'s easy to build the same component with a completely different look in the next project.',
    buttonLabel: 'Get started',
    fromColorOne: 'from-cyan-1',
    toColorTwo: 'to-cyan-2',
    colorThree: 'cyan-3',
    textColorOne: 'text-cyan-1',
    textColorTwo: 'text-cyan-2',
    textColorThree: 'text-cyan-3',
    icon: phone
};

export const serviceThree = {
    subHeading: 'YOUR HOMEPAGE',
    heading: 'Something simple, unique to you.',
    description: 'Tailwind automatically removes all unused CSS when building for production, which means your final CSS bundle is the smallest it could possibly be. In fact, most Tailwind projects ship less than 10kB of CSS to the client.',
    buttonLabel: 'Learn more',
    fromColorOne: 'from-limegreen-1',
    toColorTwo: 'to-limegreen-2',
    colorThree: 'limegreen-3',
    textColorOne: 'text-limegreen-1',
    textColorTwo: 'text-limegreen-2',
    textColorThree: 'text-limegreen-3',
    icon: mouse
};