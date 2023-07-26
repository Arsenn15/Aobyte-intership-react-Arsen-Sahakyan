import generateUUID from "../Hooks";

export const posts = [
    {
        id: generateUUID(),
        title: "Courtois",
        number: 1,
        description: "",
        photoSrc: "/football-players/Courtois.jpg",
        comments: [
            {
                comment: "the best goalkeeper in the world",
                rating: 5,
                id: generateUUID(),
            },
            {
                comment: "He always saves Madrid. Just like our yesterday match",
                rating: 4,
                id: generateUUID(),
            },
            {
                comment: "The legendary goalkeeper ",
                rating: 3,
                id: generateUUID(),
            },
            {
                comment: "he saves real and belgium every time nothing gets past him",
                rating: 5,
                id: generateUUID(),
            },

        ]
    },
    {
        id: 2,
        title: "Carvajal",
        number: generateUUID(),
        photoSrc: "/football-players/Carvajal.jpg",
        comments: [
            {
                comment: "When dani is fit, there is no competition for him.",
                rating: 3,
                id: generateUUID(),
            },
            {
                comment: "My favorit player ",
                rating: 1,
                id: generateUUID(),
            },
            {
                comment: "The only reason I search this up is because of Ronald’s assiast",
                rating: 4,
                id: generateUUID(),
            },
        ]
    },
    {
        id: generateUUID(),
        title: "Militao",
        number: 3,
        photoSrc: "/football-players/Militao.jpg",
        comments: [
            {
                comment: "Everytime I watch this guy play he certainly is something special. His defending is fantastic. Hala Madrid",
                rating: 5,
                id: generateUUID(),
            },
            {
                comment: "Militao never hesitate to put his body on the line for the team",
                rating: 2,
                id: generateUUID(),
            },
            {
                comment: "Real Madrid is always blessed with great defenders. Such a heritage.",
                rating: 1,
                id: generateUUID(),
            },
            {
                comment: "He is the future of the defense",
                rating: 1,
                id: generateUUID(),
            }
        ]
    },
    {
        id: generateUUID(),
        title: "Alaba",
        number: 4,
        photoSrc: "/football-players/Alaba.jpg",
        comments: [
            {
                comment: "probably the most complete footballer.. he can play any position except one",
                rating: 4,
                id: generateUUID(),
            },
            {
                comment: "my favorite defender alongside Raphael varane and matt hummels",
                rating: 5,
                id: generateUUID(),
            },
            {
                comment: "his eye tell me he is very smart",
                rating: 1,
                id: generateUUID(),
            },
        ]
    },
    {
        id: generateUUID(),
        title: "Bellimgham",
        number: 5,
        photoSrc: "/football-players/Bellimgham.jpg",
        comments: [
            {
                comment: "All the best wishes for you in your new club. Good luck ",
                rating: 5,
                id: generateUUID(),
            },
            {
                comment: "Welcome To Real Madrid ",
                rating: 5,
                id: generateUUID(),
            },
            {
                comment: "All the best for his new chapter",
                rating: 2,
                id: generateUUID(),
            },
        ]
    },
    {
        id: generateUUID(),
        title: "Nacho",
        number: 6,
        photoSrc: "/football-players/Nacho.jpg",
        comments: [
            {
                comment: "Always there when you need him. What a legend! ",
                rating: 5,
                id: generateUUID(),
            },
            {
                comment: "Nach is one of Madridista but very few people knows how good he is actually ",
                rating: 2,
                id: generateUUID(),
            },
            {
                comment: "What a legend this man is. The definition of madridismo!",
                rating: 4,
                id: generateUUID(),
            },
        ]
    },
    {
        id: generateUUID(),
        title: "Vini JR.",
        number: 7,
        photoSrc: "/football-players/Vini.jpg",
        comments: [
            {
                comment: "He's going to be a legend at Madrid  ",
                rating: 5,
                id: generateUUID(),
            },
            {
                comment: "He like robinho from skills move and samba ",
                rating: 1,
                id: generateUUID(),
            },
            {
                comment: "Finally a 7 we can proud of after CR7.. VJ7 CRACK ",
                rating: 5,
                id: generateUUID(),
            },
        ]
    },
    {
        id: generateUUID(),
        title: "Kroos",
        number: 8,

        photoSrc: "/football-players/Kroos.jpg",
        comments: [
            {
                comment: "Legendary soccer professor. ",
                rating: 5,
                id: generateUUID(),
            },
            {
                comment: "He play with too much ease ",
                rating: 1,
                id: generateUUID(),
            },
            {
                comment: "Kroos way better than Xavi.",
                rating: 2,
                id: generateUUID(),
            },
        ]
    },

];

export default posts;