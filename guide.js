introJs().setOptions({
    steps: [{
        title: 'Welcome',
        intro: '<img src="./assets/logos/Image Lab full logo.png" height="80px"> <p style="line-height=20px">Welcome to Image lab! 👋 \n Let\'s recognize our interface step by step...</p>',
    },
    {
        element: document.querySelector('.playground-pane'),
        title: 'Playground',
        intro: 'This  is the workspace where you can use blocksto do the process youu want to do on your picture.',
        playground: 'left',
    },
    {
        element: document.querySelector('.preview-pane'),
        title: 'Preview area',
        intro: 'This is the area where your processed image is shown',
        playground: 'left',
    },
    {
        element: document.querySelector('.properties-pane'),
        title: 'Properties area',
        intro: 'Here, you can modify properies of the block of operation you choose.',
        playground: 'left',
    },
    {
        element: document.querySelector('.information-pane'),
        title: 'Block definition',
        intro: 'This part shows a brief about the operation of the block you choose.',
        playground: 'left',
    },
    {
        title: 'Enjoy!',
        intro: 'Let\'s do great things!',
    },
    ]
}).start();