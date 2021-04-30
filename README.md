This is a [Next.js](https://nextjs.org/) project

## Getting Started

> Note that this project was compressed and sent without the node_modules to remove the bulky nature of the project and to encourage data low cost but it does not minimize the importance of node_modules which are definitely need for this project.

First, check if node_modules are present, 
if not, then

```bash
npm install --save

After installation, then, run the development server:

```bash
npm run dev
# or
yarn dev
```
node_modules and the .next files are set up

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Work Objective

Involves creating a react component that displays any arbitrary JSON-string as a tree which is editable.
The resulting json should have a nature of this: 

```
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Johanna",
        "last": "Leis"
      },
    }
  ]
```


## Author

James Gilbert


