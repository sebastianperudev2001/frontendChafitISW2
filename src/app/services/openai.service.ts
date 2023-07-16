import { Injectable } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {
  private openai: OpenAIApi;
  configuration = new Configuration({
    apiKey: "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",
    //organization: "personal_sebas",
  });

  conversation: any[] = []; // Conversation history

  constructor() {
    this.configuration.baseOptions.headers = {
      Authorization: "Bearer " + "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",
    };
    this.openai = new OpenAIApi(this.configuration);
  }

  generateText(prompt: string, attempts: number): Promise<string | undefined> {
    const generateNextAttempt = (attempt: number): Promise<string | undefined> => {
      // Add the user message to the conversation
      this.conversation.push({ role: 'user', content: prompt });

      const payload = {
        model: "text-davinci-003",
        prompt: this.buildPrompt(),
        max_tokens: 1000
      };

      return this.openai.createCompletion(payload).then(response => {
        // Add the assistant's response to the conversation
        const assistantResponse = response.data.choices[0].text;

        this.conversation.push({ role: 'assistant', content: assistantResponse });

        return assistantResponse;
      }).catch(error => {
        return '';
      });
    };

    const generateAttempts = (attempt: number): Promise<string | undefined> => {
      if (attempt > attempts) {
        return Promise.resolve(''); // No more attempts, resolve with empty response
      }

      return generateNextAttempt(attempt).then(response => {
        if (response) {
          return response; // If response is not empty, resolve with the response
        } else {
          // Retry with the next attempt
          return generateAttempts(attempt + 1);
        }
      });
    };

    return generateAttempts(1);
  }

  private buildPrompt(): string {
    let prompt = '';

    for (const message of this.conversation) {
      prompt += `${message.role}: ${message.content}\n`;
    }

    return prompt;
  }
}
