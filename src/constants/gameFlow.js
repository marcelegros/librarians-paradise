

export const gameFlow = [

    {
        type: 'interlude',
        screens: [
            {text: "Hello James... "},
            {text: "... "},
            {text: " James... "},
            {text: " Wake up James... "},
            {
                image: '/resources/welcomeToTwinPeaks.jpg', 
                timer: 2000
            },

            //... would be cool to have discussions possible
        ],
        music: "/audio/twinPeaksTheme.mp3"
    },

    {
        type: 'interlude',
        music: '/audio/JustYouOld.mp3',
        screens: [
            {
                image: 'https://media.giphy.com/media/l1IY2yT4fAo66oDPG/giphy.gif',
                text: "Donna..."
            },
            {
                image: 'https://media.giphy.com/media/l1IY2yT4fAo66oDPG/giphy.gif',
                text: "I wish i was not so weak..."
            }
        ]
    },

    {
        type: 'level',
        levelName: 'Level1',
        introTitle: 'Level One',
        introText: '',
    },

    {


    }



]




