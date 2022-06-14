export interface IPost {
    id?: number | string,
    title: string,
    createAt?: string | number,
    categoryPostId: number | string,
    short_desc?: string,
    description: string
}