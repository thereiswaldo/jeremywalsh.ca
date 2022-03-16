---
layout: single
title: Pacing Strategy for Running Around the Bay
date: 2022-03-12 05:00:00 +0000
categories: ''

---
A friend was wondering how to pace themselves at the Around the Bay 30km road race on March 27th. The race has a unique elevation profile, with several significant hills in the last 10km.

![](/uploads/around-the-bay-course-profile.png)

For a runner hoping to meet a specific time it begs the question of whether they should start the race faster than their goal race pace or not. A faster starting pace in anticipation for slowing down on the hills near the end of the race makes sense, but begs the question of how much faster? Conventional running wisdom is to run "even splits", which is running the same pace for the entirety of a race. As I'm going to be running the race this year, I want to know what the optimal pacing strategy for the Around the Bay course is. I'll do that by comparing how well popular heuristics and models align with historical results at Around the Bay. First let's review the methods that will be compared.

### Pacing Heuristics

#### Even Pace/Even Effort

The simplest of the pacing heuristics are even pace, and even effort. Even pacing simple means to run the same pace through the whole race. It's a good strategy for a flat course, but can be near impossible to replicate on a hilly course. The solution is then to switch to an even effort, where an exertion level is kept constant, as pace is slowed on uphills and increased on downhills. This is a good simple heuristic, but can be difficult to follow in a race. Unless one is diligently heart rate or power training, it's difficult to start and maintain an effort throughout a race.

At a slightly higher complexity level are the rules developed from two of the most infamous studies on the subject.

#### Jack Daniels

> +12-15s/mile/% gradient incline
>
> \-8s/mile/% gradient decline

The legendary coach Jack Daniels is heavily quoted for a [comment he (jtupper) made online](https://www.letsrun.com/forum/flat_read.php?thread=197366) referencing a study performed on the subject. The post suggested that 12 to 15 seconds should be added per mile per increase in gradient percent. The study also suggested that a downhill subtracts 8 seconds per mile per decline in gradient percent.

#### John Kellogg

> +9.2s/mile/% gradient incline

John Kellogg made similar online posts, which have been [summarized in this document](https://docs.google.com/file/d/0B_zzkn1-wR0dRFNLT0tXTVlUN3FyZGpiVWRBNld0dw/edit?resourcekey=0-4GUJ056H30C6KtvbjGxmCA). His number was a more conservative 9.2 seconds should be added per mile per increase in gradient percent, which he further generalized to 1.74s for each 10ft elevation gain regardless of distance covered. John never specified the effect of the downhills so we won't use his numbers in our analysis.

Jack and John both expressed that there formulas are merely guidelines, that seemed accurate on average for the people they studied. Since the studies were on runners of relatively similar ability to myself they should have some good information for me. Their guidelines don't scale with pace, so they won't be as accurate for runners much slower than 4min/km.  For a more general tool we need a model.

### Models

#### Grade Adjusted Pace

Strava has a model they apply for all subscribers on their platform called Grade Adjusted Pace. I'll discuss it further in an upcoming post about cross country courses. [This blog post](https://medium.com/strava-engineering/an-improved-gap-model-8b07ae8886c3) details the model and compares it with a study from a [2002 paper](https://pubmed.ncbi.nlm.nih.gov/12183501/) on the matter. For our comparison we will use both the Strava and Minetti curves.

![](https://miro.medium.com/max/1400/1*_TwofsNS872wbUS12ykKPQ.png)

#### Normalized Graded Pace

TrainingPeaks has a similar metric called [Normalized Graded Pace](https://www.trainingpeaks.com/learn/articles/what-is-normalized-graded-pace/#:\~:text=Normalized%20Graded%20Pace%20(NGP)%20is%20the%20adjusted%20pace%20reported%20from,of%20running%20on%20varied%20terrain.), but there is less information on how it is calculated so I won't be investigating it here.

## Data Mining

#### Results

Most of the data for this analysis is scraped from results posted on [https://www.sportstats.ca/](https://www.sportstats.ca/ "https://www.sportstats.ca/"). For the races from 2016-2019 the 10km, 15km, 20km, and finish splits for each athlete are available. Splits from earlier years are accessible, but more difficult to obtain, and the 4 years captured have shown to be sufficient for our purposes.

#### GPS

To get the course elevation profile I've used the gps recordings from my own previous runs on the course. The gps files are parsed into a pandas dataframe for easy calculations and plotting.

## Data Exploration

The results for the four years from 2016-19 were all combined. With all the splits we can begin to look at the data for insights. The split time distributions show the predictable widening of the distribution as the race spreads out over time, and a small deviation from normal distribution as athletes who went out too fast cause a long tail to the final distributions.

![](/uploads/2019-around-the-bay-split-times.png)

The raw data only has the running time for each athlete at each distance (10km, 15km, 20km, 30km), but we want to look at the pace they ran for each of the segments (0-10km, 10-15km, 15-20km, 20-30km). Calculating these gives us these averages.

![](/uploads/2016-19-average-pace-per-segment.png)

As we expected, the final 10km of the race are slowest. On average the first 10km is 40s/km faster than the last. A slow finish is fairly common for most road races as  most runners are optimistic with their pacing strategy. Since I am going to plan for success, I'll have to remove some of these outliers.

## Model Development

Keeping my filtering as simple as possible I've selected two comparison criteria. The first is to only look at runners that have previously run the race in my dataset. The thought is these multiple finishers will know the course well and how they should pace themselves. Dropping each runners first performance in the dataset leaves in a wide distribution of times and keeps 4622 performances (26% of the 17440 in the dataset).

![](/uploads/multiple-finishers-30km-time-distribution.png)

The other, more relevant to me filter is just for those athletes who ran faster than two hours. Though the definition of elite is up for debate, this the top 1.6% of all finishers, and leaves just 279 performances which is enough for me to feel confident about the aggregated data.

![](/uploads/elites-30km-time-distribution.png)

Being the leading end of the distribution, most of the times are near the 2 hour mark.

With these filters in place we can take each runners pace for each segment and divide that by the average pace for the entire race to get a percentage.Model DevelopmentModel Development

![](/uploads/around-the-bay-pacing-form-2016-19.png)

The different filters are plotted along the course profile and compared with the even pace heuristic (constant 100% pace). Each group ran faster (pace <100%) for the first 20km of the race, and slower for the last 10km. This feels right since the first two-thirds of the race are downhill or flat, and the last third is very hilly. All the runners combined highlights the suboptimal pacing of the average Around the Bay runner as they tend to go out significantly faster than they finish. The elite runners tend to run much closer to even splits, while the multi-finishers sit in-between, but close to the average.

This is informative, but hasn't completely answered the question about what pacing strategy is optimal. It could be that these elite athletes are doing something wrong. In attempt to validate their performance we'll include the other pacing models. 

To include the Gradient Adjusted Pace models I calculated the gradient throughout the course and applied each model. I then averaged the percentage pace over each segment. 

To use the Jack Daniels equation I entered my goal pace (3:36min/km), and calculated the amount of time gained or lost at each point. I then summed this on the segment level and then converted it to a percentage of pace by dividing by the   was applied similarly, but required a pace

![](/uploads/around-the-bay-pacing-comparison.png)

## Prescription

The simplified takeaway from this is that runners at Around the Bay should average the first half of the race at around 1% faster than their goal pace. For me that's about two to three seconds per kilometer faster than my goal pace. Speaking from experience (and common sense), the last 10 kilometers is no longer about holding yourself back with proper pacing. Instead you are pushing yourself to the finish line as hard as you can. Running this section slow is to be expected, and maintaining a pace 2-3% slower than goal pace in this section is something to be extremely happy with.