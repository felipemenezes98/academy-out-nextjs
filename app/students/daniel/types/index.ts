export interface Author {

id:number;
name:string;
image:string;
banner:string;
birth:string;
death:string;
summary:string;

genres:{
 [key:string]:string[]
}

}


export interface School{

id:number;
name:string;
description:string;
authors:Author[];

}