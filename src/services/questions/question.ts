export class Question {
  title: string;
  name: string;
  answers: Array<string>;

  constructor(title: string, name: string, answers: Array<string>) {
    this.title = title;
    this.name = name;
    this.answers = answers;
  }
}