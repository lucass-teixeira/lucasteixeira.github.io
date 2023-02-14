export interface Project{
    title: string;
    description: string;
    imgs: Img[] | undefined;
    link: string | undefined;
    githubURL: string | undefined;
    cards: number[];
  }
  
  class Img{
    imgURL!: string;
  }