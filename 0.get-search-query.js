var searchQuery = process.argv[2];

if (!searchQuery) {
  console.error('Please enter the search query city name');
  process.exit(1);
}

if (searchQuery[0] !== '"') searchQuery = `"${searchQuery}"`;

console.info('Here is your search query for ', searchQuery);
console.info("------------------");
console.info(getQuery());
console.info("------------------");
console.log("Enter the query @ http://overpass-turbo.eu/");

function getQuery() {

  return `
[out:json];

area[name="${searchQuery}"];
(way["highway"~"motorway|motorway_link|trunk|trunk_link|primary|primary_link|secondary|secondary_link|tertiary|tertiary_link|unclassified|unclassified_link|residential|residential_link|service|service_link|living_street|pedestrian|road"](area);
node(w);
);
out skel;
  `
}