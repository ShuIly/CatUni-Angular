import { Question } from "./question";
import { Injectable } from "@angular/core";

@Injectable()
export class QuestionService {
  getAllQuestions(): Question[] {
    return [
      new Question('Do you like cats?', 'cat-love', ['Yes!', 'No!', 'Maybe?']),
      new Question("What's your personality like?", 'personality', ['Shy!', 'Energetic!', 'Why am I doing this?']),
      new Question('Do you like dogs?', 'dog-love', ['No!', 'No!', "Wait, there's only No's?"]),
      new Question('Do you like other people?', 'people-love', ['Only if they like cats!', 'No!', 'Umm, sure?']),
      new Question("What's your favourite food?", 'fav-food', ['Cat food!', 'Pizza!', 'What? Cat food!?']),
      new Question('Do you like cats?', 'dup-cat-love', ['Yes!', 'Yes!', 'You already asked me this!'])
    ]
  }
}