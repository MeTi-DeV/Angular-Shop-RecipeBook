// comment 1 : create class and objects 
export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
