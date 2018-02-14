export class videoComment {
    public name: string;
    public comment: string;
    public belongingVid: string;
    

    constructor(name: string, comment: string, belongingVid: string){
    this.name = name;
    this.comment = comment;
    this.belongingVid = belongingVid;
}
}