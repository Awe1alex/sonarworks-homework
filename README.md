## Setup

In the project directory, you can run:

`npm ci` or `npm install`

and

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Api Suggestions

well content string is not really good idea, because most of frontend frameworks/libraries trying to avoid direct parsing html from string for example i did it with `dangerouslySetInnerHTML` in React. There is also `v-html` tag in Vue

The solution would be to pass data as an array of contents and do it in recursive way for example:

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

## Design suggestions

#### Header

On mobile text route text is wrapping to next line. It looks no really cool the suggestion would be: reduce company name block width.

#### Footer

Footer is okay but it is not realy fuctional and looks empty. The suggestion would be at least center an existing content.

#### Menu

Suggestion: make arrow as separate block and justify it between with text and also align items to center.

#### Text components

I didnt do much styling here just set the color oh content text to gray.

## Other suggestions

There is white `Menu` element rightside from main elements in Figma. Looks like it shouldn't be there :)
