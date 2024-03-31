## Setting up ESLint, Prettier, and Husky in your Next.js project

The agreed coding standards can be enforced by running linting and test scripts for each git-commit action. To ensure that the rules are enforced, we need this to be automated. For efficiency, we also want the scripts to only be run on staged files — files with actual changes.

**Required dependencies and their purpose:**

- [ESLint](https://eslint.org/): to ensure code consistency
- [Prettier](https://prettier.io/docs/en/): to ensure that code is properly formatted according to the rules defined
- [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier): prevents any code formatting conflicts between `ESLint` and `Prettier`. As we know, `ESLint` handles both code quality and code formatting. This package disables the rule in `ESLint` that formats code so that `ESLint` only focuses on ensuring code quality.
- [Husky](https://www.npmjs.com/package/husky): helps you hook into gits’ pre-commit and post-commit lifecycle, i.e. it makes it possible to run scripts in our `package.json` file on git lifecycle hooks.
- [lint-staged](https://www.npmjs.com/package/lint-staged): runs defined scripts on only staged files (git)

### ** ESLint **

[Next.js ](https://nextjs.org/) already has `ESLint` preconfigured. The only thing you’ll need to do is to extend `.eslintrc.json` file with `Prettier`(see below).

### ** Prettier and eslint-config-prettier **

#### Installation and setup

- install npm packages:

```bash
npm install --save-dev prettier eslint-config-prettier
```

- create a `.prettier.json` file and add [Prettier options](https://prettier.io/docs/en/options.html):

```bash
{
  "trailingComma": "es5",
  "semi": true,
  "bracketSpacing": true,
  "printWidth": 80,
  "tabWidth": 2,
  "singleQuote": true,
  "arrowParens": "always"
}
```

- create a ` .prettierignore` file; here, pass in the folders and files `Prettier` should avoid when formatting your code, e.g.:

```
node_modules
.next
build
dist
```

- configure `.eslintrc.json` file:

```bash
{
  "extends": ["next/core-web-vitals", "prettier"]
}
```

### ** Husky **

#### [Installation and setup](https://typicode.github.io/husky/getting-started.html)

### ** lint-staged **

#### [Installation and setup](https://www.npmjs.com/package/lint-staged#installation-and-setup)

- inside `.husky/pre-commit` replace `npm test` with `npx lint-staged`; your file should look as follows:

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
```

The `npx lint-staged` command will run the `lint-staged `script in the `package.json` file when committing which ensures that code is formatted according to the rules defined and that the code is free from any linting issues.
