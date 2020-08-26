## Usage

Install npm modules (once):

```
npm install
```

To download JSON file with all roads in the area that matches your search query:

```
node 0.get-search-query.js Edinburgh
```

To convert it to binary format of a graph:

```
node 1.save-roads-graph.js data/edinburgh.json
```

The graph will be saved in a binary format that is described here: 

https://github.com/anvaka/ngraph.path.demo#storing-a-graph