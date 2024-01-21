# ShouldIMove

<img width="872" alt="Screen Shot 2024-01-21 at 7 00 08 AM" src="https://github.com/malekoa/conuhacksviii_new/assets/70773705/ae265069-ca6e-4a0e-96cb-9a51f08e5427">

## What it does
ShouldIMove provides users with a user-friendly dashboard showcasing statistics for different postal codes. By inputting a specific postal code, users gain access to a rich array of data.

ShouldIMove also doesn't just show traditional metrics, but also details such as the abundance of trees or the availability of electric vehicle chargers, and also insights into various locations of interest. Whether you're interested in the number of bike parking spots or cultural points of interest, ShouldIMove transforms raw data into a visual guide for informed decision-making about Montreal's diverse neighbourhoods.

## How we built it
We first began with the collection and cleaning of data provided by the city of Montreal. Using GPS coordinates, we employed a k-means classifier to organize the data by postal code. Then, we used linear models to identify correlations within the dataset.

To present this information in a user-friendly manner, we built a dashboard using React and Chart.js. This frontend interface simplifies our dataset significantly, allowing users to explore key insights effortlessly.

## Challenges we ran into
We faced some practical challenges during the development of ShouldIMove. One of the issues was finding a cost-effective solution for reverse geocoding—matching latitude and longitude to postal codes. One option was to use an API, but we opted for a k-means classifier, which proved effective and totally free. Locating the relevant postal codes so that we could do this also presented its own set of difficulties, but we eventually located a file that had the necessary information.

Time constraints added to the difficulty. Brainstorming as a team helped refine the concept, and by strategically dividing tasks according to our strengths, we navigated through the challenges more efficiently.

## Accomplishments that we're proud of
We're happy with how the k-means classifier streamlined data organization for ShouldIMove. The user-friendly design and the smooth functionality of the dashboard are also accomplishments we're proud of.

## What we learned
While developing ShouldIMove, we learned that collecting and cleaning data can be quite challenging. These aspects of the project shed light on some of the complexities involved in handling real-world data. Additionally, the experience provided us with valuable insights into the city we live in, deepening our understanding of Montreal and its diverse characteristics.

What's next for ShouldIMove
Looking forward, in the short term, we plan to keep refining the data, exploring additional datasets to offer our users even more detailed and improved information.

In the long term, expansion beyond Montreal and potentially reaching other cities in Quebec or across Canada. This growth would provide our service to a wider audience, making ShouldIMove a helpful tool for people considering relocating to different regions.

## Built With

## Try it out
https://shouldimove.tech

## Previous repository: 
https://github.com/malekoa/conuhacksviii
