## Setup

In the project directory, you can run:

`npm ci` or `npm install`

and

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Api Suggestions

well content string is not really good idea, because most of frontend frameworks/libraries trying to avoid direct parsing html from string for example i did it with

`dangerouslySetInnerHTML`

in React

there is also `v-html` tag in Vue

the solution would be to pass data as an array of contents and do it in recursive way for example:

```
content : [
  {
    title: ‘Cookies’
    paragraphs: [‘some text’]
  },
  {
    title: ‘Use of Cookies’,
    paragraphs: [‘some text’, ‘some text 2’]
    content: {
      title: ‘Functionality Cookies’,
      paragraphs: [‘some text’],
      table: {
        headings: [‘example table’],
        contents: [
        [‘this will be first row’],
        [‘this will be second row’]
        ]
      }
    }
  }
]
```

all you left to do is make components that will render it
