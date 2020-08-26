## Usage

Install npm modules (once):

```
npm install
```

To generate a search query that matches all roads in an area:

```
node 0.get-search-query.js Edinburgh
```

Run the query on https://overpass-turbo.eu/

Export the results as .JSON using "raw data directly from Overpass API"

To convert it to the binary format of a graph (use --max-old-space-size=4096 for big graphs):

```
node --max-old-space-size=4096 1.save-roads-graph.js data/edinburgh.json
```

The graph will be saved in a binary format that is described here: 

https://github.com/anvaka/ngraph.path.demo#storing-a-graph