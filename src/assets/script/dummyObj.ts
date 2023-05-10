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
        path: "forms",
        title: "Form Element",
        icon: "align-start",
        description: "This is some text within a card body.",
        subTree: [{
            id: 4,
            key: "input",
            path: "input",
            title: "Inputs",
            description: "This is some text within a card body.",
            data: codeData.filter((f: any) => f.type === 'inputs')[0]?.value
        }, {
            id: 4,
            key: "select",
            path: "select",
            title: "Select",
            description: "This is some text within a card body.",
            data: codeData.filter((f: any) => f.type === 'select')[0]?.value

        }]
    },
    {
        id: 4,
        key: "chart",
        path: "chart",
        title: "Charts",
        icon: "pie-chart-fill",
        description: "This is some text within a card body.",
        subTree: [{
            id: 4,
            key: "pie",
            path: "pie",
            title: "Pie Chart",
            description: "This is some text within a card body.",
            data: codeData.filter((f: any) => f.type === 'pie')[0]?.value

        }, {
            id: 4,
            key: "bar",
            path: "bar",
            title: "Bar Chart",
            description: "This is some text within a card body.",
            data: codeData.filter((f: any) => f.type === 'bar')[0]?.value

        }, {
            id: 4,
            key: "donut",
            path: "donut",
            title: "Donut Chart",
            description: "This is some text within a card body.",
            data: codeData.filter((f: any) => f.type === 'donut')[0]?.value
        }]
    }
]

export default dummyObj
