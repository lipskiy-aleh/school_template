## Template for repositories with home works of pro course students

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
