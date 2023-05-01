import codeData from "./codeData"

let dummyObj: any = [

    {
        id: 1,
        key: "spinner",
        path: "spinners",
        title: "Loaders",
        icon: "octagon-half",
        description: "This is some text within a card body.",
        data: codeData.filter((f: any) => f.type === 'spinner')[0]?.value 

    },
    {
        id: 2,
        key: "card",
        path: "cards",
        title: "UI Cards",
        icon: "0-circle",
        description: "This is some text within a card body.",
        data: codeData.filter((f: any) => f.type === 'card')[0]?.value 

    },
    {
        id: 3,
        key: "table",
        path: "tables",
        title: "Dynamic Tables",
        icon: "table",
        description: "This is some text within a card body.",
        data: codeData.filter((f: any) => f.type === 'table')[0]?.value 

    },
    {
        id: 4,
        key: "form",
        path: "Forms",
        title: "Form Element",
        icon: "align-start",
        description: "This is some text within a card body.",
        data: codeData.filter((f: any) => f.type === 'form')[0]?.value 

    }

]



export default dummyObj
