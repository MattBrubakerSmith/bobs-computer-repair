import { BobJob } from "./bob-job";

export const BOBJOBS: BobJob[] = [
    {
        id: 0,
        name: "Password Reset", 
        url: "password-reset",
        icon: "security",
        type: "software", 
        description: "Bob will personally reset your password to \"bob\". Changing a password to anything else will cost an additional sum, to be determined by Bob through an elaborate quoting process.", 
        price: 39.99
    },
    {
        id: 1,
        name: "Spyware Removal", 
        url: "spyware-removal", 
        type: "software", 
        icon: "warning",
        description: "Bob will remove any spyware you may have on your computer and swap it with his own spyware for complex technical reasons you wouldn't understand.", 
        price: 99.99
    },
    {
        id: 2,
        name: "RAM Upgrade", 
        url: "ram-upgrade", 
        type: "hardware",
        icon: "desktop_windows",
        description: "Bob will literally RAM upgrades into your machine.", 
        price: 129.99 
    },
    {
        id: 3,
        name: "Software Installation", 
        url: "software-installation",
        icon: "file_download",
        type: "software",
        description: "Bob will install some software on your computer. Choosing the software he adds will incur an additional fee to be determined by Bob on a date determined by Bob.",
        price: 49.99
    },
    {
        id: 4,
        name: "Tune-up",
        url: "toon-up",
        icon: "music_note",
        type: "hardware?",
        description: "Bring in your car or computer or whatever and Bob will TUNE. IT. UP. Ain't that the truth!",
        price: 89.99
    },
    {
        id: 5,
        name: "Keyboard Cleaning",
        url: "clean-that-nasty-keyboard",
        icon: "keyboard",
        type: "hardware",
        description: "\"Bob has no qualms with your nasty palms\" is something Bob's mom (Mob?) always said to people while Bob was growing up. He never knew why, until he started cleaning keyboards. \"If you're a slob, Bob's on the job!\" -Bob, Sr. His dad also said things.",
        price: 45.00
    },
    {
        id: 6,
        name: "Disk Clean-up",
        url: "clean-that-diskusting-disk-see-what-i-did-there",
        icon: "disc_full",
        type: "hardware",
        description: "CD, hard drive, floppy, flippy, frisbee... IT DOESN'T MATTER. NONE OF IT MATTERS. Bring in a disk and Bob will make it SPARKLE. Discus, Discman™, discomBOBulation...", 
        price: 149.99
    }
]