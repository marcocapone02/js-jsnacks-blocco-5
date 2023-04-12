const bikes = [
    {
        name: "City",
        weight: 10,
    },
    {
        name: "Mountain",
        weight: 13,
    },
    {
        name: "Race",
        weight: 9,
    },
    {
        name: "Electric",
        weight: 20,
    },
    {
        name: "Ibrid",
        weight: 19,
    },
    {
        name: "Endurance",
        weight: 14,
    },
    {
        name: "BMX",
        weight: 7,
    },
    {
        name: "Tandem",
        weight: 22,
    },
];

const minWeight = bikes.reduce((a, b) => a.weight < b.weight ? a : b);

console.log(minWeight);