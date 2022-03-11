---
layout: single
title: Pacing Strategy for Running Around the Bay
date: 2022-03-12 05:00:00 +0000
categories: ''

---
A friend was wondering how to pace themselves at the Around the Bay 30km road race on March 27th. The race has a unique elevation profile of several significant hills in the last 10km.

> insert course profile here

For a runner hoping to meet a specific time it begs the question of whether they should start the race faster than their goal race pace, anticipating slowing down on the hills near the end of the race. Conventional running wisdom is to run "even splits", which is running the same pace for the entirety of a race.  I want to look at what is optimal for the Around the Bay course. I'll do that by comparing how well popular heuristics and models align with historical results at Around the Bay. First let's review the methods we'll compare.

### Pacing Heuristics

The simplests of the pacing heuristics are even pace, and even effort. Even pacing simple means to run the same pace through the whole race. It's a good strategy for a flat course, but can be near impossible to replicate on a hilly course. The solution is then to switch to an even effort, where a exertion is kept constant, and pace is slowed on uphills and increased on downhills. This is a good simple heuristic, but can be difficult to follow in a race. Unless one is diligently heart rate or power training, it's difficult to start and maintain a heart rate or power throughout a race.

At a slightly higher complexity level are the rules developed from two of the most infamous studies on the subject.

#### Jack Daniels

> +12-15s/mile/% gradient incline
>
> \-8s/mile/% gradient decline

The legendary coach Jack Daniels is heavily quoted for a [comment he (jtupper) made online](https://www.letsrun.com/forum/flat_read.php?thread=197366) referencing a study he performed on the subject. The post suggested that 12 to 15 seconds should be added per mile per increase in gradient percent. A downhill subtracts 8 seconds per mile per decline in gradient percent.

#### John Kellogg

> +9.2s/mile/% gradient incline

John Kellogg made similar online posts, which have been [summarized in this document](https://docs.google.com/file/d/0B_zzkn1-wR0dRFNLT0tXTVlUN3FyZGpiVWRBNld0dw/edit?resourcekey=0-4GUJ056H30C6KtvbjGxmCA). His number was a more conservative 9.2 seconds should be added per mile per increase in gradient percent, which he further generalized to 1.74s for each 10ft elevation gain regardless of distance covered ([Source](https://docs.google.com/file/d/0B_zzkn1-wR0dRFNLT0tXTVlUN3FyZGpiVWRBNld0dw/edit?resourcekey=0-4GUJ056H30C6KtvbjGxmCA)).

### Models

#### Grade Adjusted Pace

Strava has a model they apply for all subscribers on their platform called Grade Adjusted Pace. I'll discuss it further in an upcoming post about cross country courses. [This blog post](https://medium.com/strava-engineering/an-improved-gap-model-8b07ae8886c3) details the model and compares it with a study from a [2002 paper](https://pubmed.ncbi.nlm.nih.gov/12183501/) on the matter.

![](https://miro.medium.com/max/1400/1*_TwofsNS872wbUS12ykKPQ.png)

[blog](https://support.strava.com/hc/en-us/articles/216917067-Grade-Adjusted-Pace-GAP-)

#### Normalized Graded Pace

TrainingPeaks has a similar metric called [Normalized Graded Pace](https://www.trainingpeaks.com/learn/articles/what-is-normalized-graded-pace/#:\~:text=Normalized%20Graded%20Pace%20(NGP)%20is%20the%20adjusted%20pace%20reported%20from,of%20running%20on%20varied%20terrain.), but there is less information on how it is calculated so I won't be investigating it here.

## Data Mining

#### Results

Most of the data for this analysis is scraped from results posted on [https://www.sportstats.ca/](https://www.sportstats.ca/ "https://www.sportstats.ca/"). They have included for the races from **2015**-2019 the 10km, 15km, 20km, and finish splits for each athlete. Splits from earlier years are accessible, but more difficult to obtain and the 4 years captured have shown to be sufficient for our purposes. 

#### GPS

To analyze at a more granular level, the gps data from some athletes was downloaded from public posts on [https://www.strava.com/](https://www.strava.com/ "https://www.strava.com/"). I reviewed the results for athletes who ran close my desired time, searched for them on strava, and when available, downloaded the gps of their race.

## Data Exploration

* basic plots
* general trends
* comparison of the heuristics (even pace, JD, JK) with all the data
* maybe show comparison of pace profile with boston or another marathon (toronto?)

## Model Development

* filtering for just people who pb'ed, is there a trend in their pace, or elite athletes
* filter for people in my target time

## Prescription

* how should an athlete pace themselves?
* How am I going to pace myself (not too seriously, struggle with counting the seconds, but will allow myself to start a little quick, but I'll set a hard limit to prevent going out too hard)