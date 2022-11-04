# @auser/payload-plugin-markdown-field

Uses [@auser/payload-plugin-markdown-field](https://www.npmjs.com/package/payload-plugin-markdown-field) to add markdown fields to [PayloadCMS](https://payloadcms.com/).

## Installation

```
yarn add @auser/payload-plugin-markdown-field
```

or

```
npm i @auser/payload-plugin-markdown-field
```

## Usage

Implementation:

```js
import { markdownField } from '@auser/payload-plugin-markdown-field'

fields: [
    markdownField(
        {
            name: 'content', // required
        }
    )
]
```

You can add any options that TextField accepts and any options that [uiwjs/react-md-editor](https://github.com/uiwjs/react-md-editor) accepts.

For example, adding autoFocus

```js
fields: [
 markdownField(
  {
   name: 'content', // required
   label: 'Content',
   required: true,
  },
  { autoFocus: true }
 )
]
```

Check out [uiwjs/react-md-editor](https://github.com/uiwjs/react-md-editor) for more details.

## Notes
