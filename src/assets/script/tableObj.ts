import codeData from "./codeData"

let tableObj: any = [
    {
        id: 3,
        key: "basic",
        path: "basic",
        title: "Basic",
        icon: null,
        description: "This is some text within a card body.",
        data: codeData.filter((f: any) => f.type === 'table')[0]?.value
    },
    {
        id: 3,
        key: "pagination",
        path: "pagination",
        title: "Pagination",
        icon: null,
        description: "This is some text within a card body.",
        data: codeData.filter((f: any) => f.type === 'table')[0]?.value
    }
]

export default tableObj
