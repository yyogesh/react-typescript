export interface IState {
    peoples: IPeople[];
}

export interface IPeople {
    name: string;
    age: number;
    img: string;
    note?: string;
}

// export interface IState {
//     people: {
//         name: string;
//         age: number;
//         img: string;
//         note?: string;
//     }[]
// }
