---
layout: single
title: Predicting Canadian University Cross Country Performances
date: 
categories: ''

---
A project of mine that keeps coming back to me is trying to predict USport/CIS Cross Country results. During my time at McMaster I competed on the cross country team and like many of the competitors, enjoyed guessing how the championship races would play out. Most of the predictions are made at the team level, guessing which university will win the team title, and how the other schools will finish. I was involved in many different predictions, but the one I spent the most time on was a [full individual prediction of every athlete](https://web.archive.org/web/20131105103135/http://www.trackie.com/track-and-field/Forum/cis-and-conference-individual-team-predictor/9714/1/ "CIS and Conference Individual Team Predictor"). The thought process was that in order to better predict each team's performance, I would look at how the individuals should perform against each other and then aggregate to the team level. This worked pretty well, but it relied on some guesswork and some broad assumptions.

Seven years down the road, my data science skills have improved and I wanted to revisit this problem. Predicting cross country results are difficult for many reasons, but before we talk about the roadblocks in our way I'll give a brief overview on the relevant rules of the sport.

## What You Need To Know About Canadian Cross Country

Each September to November (baring global pandemics), Canadian University Cross Country teams participate in meets culminating in a regional and then Canadian championships. Their strictly isn't anything preventing schools from competing in the championship meets, but most schools only send teams that meet some performance criteria. The placing for each team is determined by the score of the top five individuals. Seven runners are allowed to start in the championship meets, and the sixth and seventh runners are considered displacers. The score is based off of the overall place in the race, and the lowest total team score wins (further rules for scoring can be found [here](https://usports.ca/uploads/hq/Playing_Regs/2020-21/200721_Playing_Regulations_Cross_Country_%28W%26M%29_ENG.pdf)). The best possible score would be if one team takes the first 5 positions, resulting a score of 15 (1+2+3+4+5).

![](/uploads/cis2012wxc.gif "CIS Women's XC Championship Start 2012")

## Why is this worth doing?

This is usually a difficult question to ask of a data science project, but like everything I will post on this site, I find this problem fun and interesting.  More broadly though I do think this analysis has value in the running community.

The main reason that is currently motivating me to revisit this project is enhancing the spectator experience. I have family members that would come to my races in university, and they would tell me that having the "insider" knowledge I could provide them about who was expected to win, how our team should perform, and some backstory on some the favourites. For a sport that is not considered very spectator friendly, we should be doing everything we can to educate our fans in an effort to improve their enjoyment.

Another benefit of doing these predictions are the aid they could provide to coaches and athletes. A prediction could be used to give athletes a goal pace to train and race at, as well as show them competitors they should plan to keep up with. Coaches could project how individuals would perform when considering who to enter in the meets, and could analyze the development of their athletes over the years.  

A potential side-benefit of this work is the results database that needs to be constructed. There currently isn't a good place to find Canadian cross country race results. There are websites that host PDF results, but there isn't an easy way to search those results for an athlete or team. Having one large database would be helpful for statistics and further analysis.

## Difficulty in Predicting Places

For many reasons, predicting performances in cross country is very difficult. This is, in my opinion, one of the things that makes guessing how teams or even you individually will perform on any given day. The main difficulties I've come up with are detailed here.

1. **Courses are all different**

Each different course has its own elevation profile, number of turns, and terrain. One weekend a team might be climbing huge hills on muddy trails with many hairpin turns, and the next race could be a flat hard-packed grass loop. These factors have a huge impact on not just the average time, but some runners perform comparatively better on hills or in mud. To complicated further, courses can change from year-to-year.

1. **Race distances can vary**

Over the course of the season, races could be from 5km to 10km in length, and are not expected to be precise. The [current regulations](https://usports.ca/uploads/hq/Playing_Regs/2020-21/200721_Playing_Regulations_Cross_Country_%28W%26M%29_ENG.pdf "USports XC Regulations") for the national meet in USports require the length of the course to be within 25m of the 8000m nominal length. The early races in the season have no such requirement, so even the listed distance could be incorrect.

There are many online calculators for scaling running times from one distance to another (example [1](), [2](https://runsmartproject.com/calculator/), [3](https://lukehumphreyrunning.com/hmmcalculator/race_equivalency_calculator.php)). They work well in the aggregate, but at the individual level, some athletes are better tuned to the short distance, while others are better long distance runners.

1. **Weather**

As the races are done in the in the great outdoors of the Canadian fall, weather of all kinds impacts the runners. Extreme heat, cold, wind, rain, snow and sleet all have a unique effect on the course and the physiology of the runners.

1. **Competitive level/number of runners**

Some meets have very few teams participating while others can have more than 20. Having more runners in the field increases the competitiveness and provides more running  companions. Home meets and championships are often placed as a high priority, with coaches adjusting preparation to have optimal performance, while smaller meets might be used more for a workout.

1. **Time in Season**

Though the season only lasts about 10 weeks, training plans have teams slowly improving throughout the season as they aim to perform there very best at the national championship in November. In other words, we'd expect the same athlete, on the same course, with the same weather, with the same competitors, would perform better on average in November than in September. Therefore, any model we use to predict performance needs to include this time in the season as a feature.

1. **Events in a season**

Most teams compete about every two weeks. Typically they run three or four in-season races, then the regional meet, and finally the canadian championship. Including the regional meet that is at best five data points we have for each runner.

1. **Regions are separated by vast distances**

Canada is a big country, and budgetary constraints mean most teams stay within their region. Eastern and western teams don't meet until nationals. With little head-to-head competition, it is difficult to compare performances.

1. **Injuries and sickness**

The combination of cool weather, start of a school year with interactions of hundreds of other students, the stress of school, and heavy training load leave athletes ripe for injury and illness. Some athletes miss races, others underperform.

1. **Bad days**

Similar, though not necessarily the same as injuries and sickness, are when athletes may underperform. For tangible or intangible reasons like anyone having a bad day, sometimes things don't go your way.

1. **Athlete Individuality**

As I've alluded to, each athlete is unique. Though we may have records of athlete's height and weight, we can't directly measure their preference for long hilly races, or afternoon races instead of morning ones. An athlete in their fifth year generally runs faster than they did in their first year.

1. **Data is gathered**

The data itself is another hurdle. Most meets have a record of the performances stored in a pdf, and most of those have been aggregated on trackie.ca. Unless they are from the same timing company, they come in varying formats, with varying degrees of information. Some may give splits, the weather, and age of the runners, but most just list the place, time, runner name and their team. Compiling every race in the history of Canadian university cross country may be impossible at this point, but even putting the last 10 years into a database is no easy feat.

## Prediction Evaluation

When we reach the end of this blog series I want to be able to prove that I've built a good model. One of the evaluation metrics I would like to hit is outperforming the historical pundit prediction rate.

* show average prediction as a metric for me to shoot for from my google doc. "I would consider it a success if we meet or exceed this rate on average ... "
* Show how my results predicting 2012 or 2019 did in comparison

## First Step - Course Analysis

My current plan is to essentially walk through each problem identified above and build out a solution for each. With each problem addressed I want to combine them into one model, evaluate it's accuracy, and iterate where needed. I hope to post every few weeks with a good-enough solution to each problem, starting with the comparison of each cross country race course.