# Natural Language Processing Example

This is a simple website utilising an API to [MeaningCloud](http://www.meaningcloud.com) 

The webapp has the following functionality:

- A textbox to paste text into. 
- A submit button that actions the evaluation of the text
- A section where the text is being copied into after submit, so that the user has a free textbox again
- A section displaying the results from meaningcloud. The API responds with a json file, now the score of the text has a range from negative to positive like 'N+', 'N', ..., 'P+'. This feedback has been _translated_ with a switch statement.
- The API keys are placed in a .env file, which is not pushed to github.

To Do:

