---
layout: single
title: Predicting Canadian University Cross Country Performances
date: 
categories: ''

---
A project of mine that keeps coming back to me is trying to predict USport/CIS Cross Country results. During my time at McMaster I competed on the cross country team and like many of the competitors, enjoyed guessing how the championship races would play out. Most of the predictions are made at th team level, guessing which university will win the team title, and how the other schools will finish. I was involved in many different predictions, but the one I spent the most time on was a [full individual prediction of every athlete](https://web.archive.org/web/20131105103135/http://www.trackie.com/track-and-field/Forum/cis-and-conference-individual-team-predictor/9714/1/ "CIS and Conference Individual Team Predictor"). The thought process was that in order to better predict each team's performance, I would look at how the individuals should perform against each other and then aggregate to the team level. This worked pretty well, but it relied on some guesswork and some broad assumptions. 

Seven years down the road, my data science skills have improved and I wanted to revisit this problem. For several reasons 

## What You Need To Know About Canadian Cross Country

Each September to November (baring global pandemics), Canadian University Cross Country teams participate in meets culminating in a regional and then Canadian championships. Their strictly isn't anything preventing schools from committing in the championship meets, but most schools only send teams that meet some performance criteria. The placing for each team is determined by the score of the top 5 individuals. Seven runners are allowed to start in the championship meets, and the sixth and seventh runners are considered displacers. The score is based off of the overall place in the race, and the lowest total team score wins (further rules for scoring can be found [here](https://usports.ca/uploads/hq/Playing_Regs/2020-21/200721_Playing_Regulations_Cross_Country_%28W%26M%29_ENG.pdf)). The best possible score would be if one team takes the first 5 positions, resulting a score of 15 (1+2+3+4+5).

## Difficulty in Predicting Places

For more 

1. Courses are all different

Each different course has it's own elevation profile, number of turns, and terrain. 

2. Race distances can vary

Over the course of the season, races could be from 5km to 10km in length, and are not expected to be precise.

3. Weather
4. Competitive level/number of runners
5. Time in season
6. Participation of all members

some only do that last 3 races

 7. Regions are seperated by vast distances
 8. Injuries/sickness
 9. bad days
10. weight and height of atheltes
11. effort level and general coach strategy
12. Data is gathered