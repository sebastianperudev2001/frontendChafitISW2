import { Component } from '@angular/core';
import { OpenaiService } from '../services/openai.service';

export class textResponse {
  sno: number = 1;
  text: string = '';
  response: any = '';
  attempts: number = 1; // Number of attempts made for this text
}

@Component({
  selector: 'app-chatgpt',
  templateUrl: './chatgpt.component.html',
  styleUrls: ['./chatgpt.component.css']
})
export class ChatgptComponent {
  textList: textResponse[] = [{ sno: 1, text: '', response: '', attempts: 1 }];

  constructor(private openaiService: OpenaiService) { }

  generateText(data: textResponse) {
    this.openaiService.generateText(data.text, data.attempts).then(text => {
      data.response = text;
      if (this.textList[this.textList.length - 1] === data && data.response !== '') {
        const newSno = data.sno + 1;
        this.textList.push({ sno: newSno, text: '', response: '', attempts: 1 });
      }
    });
  }
}
