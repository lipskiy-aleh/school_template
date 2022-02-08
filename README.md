My name is Olga. I am 39 years old. I live in Minsk.

## FAQ
* If `yarn lint` command not work in your local PC.  
Go to package.json file change next lines
```
"lint": "eslint '**/*.{js,jsx}'",
"lint:fix": "eslint '**/*.{js,jsx}' --fix",
```
to (remove single brackets inside path regexp)
```
"lint": "eslint **/*.{js,jsx}",
"lint:fix": "eslint **/*.{js,jsx} --fix",
```
