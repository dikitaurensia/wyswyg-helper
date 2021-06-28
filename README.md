
# wyswyg-helper

A collection of functions to help programmers in coding.

## Installation 

Install wyswyg-helper with npm

```bash 
  npm install wyswyg-helper
```
    
## Features

- makeKey(lengthWord)
- terbilang(value)
- searchArray(nameKey, valueKey, listArray)

  
## Usage/Examples

```javascript
import wyswyg from 'wyswyg-helper'

const sampleData = [{name:"Diki", value:10},{name:"Aileen", value:100}]

console.log(wyswyg.makeKey(10));
console.log(wyswyg.terbilang(1000));

let data = wyswyg.searchArray("name","Diki", sampleData);
console.log(data.urut);


```

  