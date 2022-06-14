export interface IProject {
    id?:number | string,
    name: string,
    image: string,
    createAt: string | number,
    categoryProjectId: number | string,
    shortDesc: string,
    desc: string
}