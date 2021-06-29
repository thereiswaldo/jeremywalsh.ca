---
layout: single
title: Predicting Canadian University Cross Country Performances - Course Analysis
date: 2021-06-13 04:00:00 +0000
categories: ''

---
Before we can do detailed predictions for cross country races we need to build a dataset. This dataset is going to be primarily filled with the race results, but we also want to add other exogenous features to improve the accuracy of our model. As anyone who has a run a race before could tell you, your name and the race distance alone aren't enough to accurately predict your finish time. Other factors like the weather and the time in season play a large impact on an individuals finish time. For this post I want to abstract exogenous features that I think will play a large role in our model, the race course.

Cross country courses are all unique. Most in Canada are a series of loops over a hilly, grassy area. The size and number of hills, and turns in the course are completely up to the race directors, and usually a function of what is available.

#### insert two same distance course profiles from tableau (satellite image, elevation profile, course records, avg times, avg entrants)

In order for us to make accurate predictions we want to be able to compare different courses so we can translate a performance on one course to another. To do that we want to boil the measurable differences between the courses down to individual numbers that we can train our model on. We'll do this by analyzing three features:

* Elevation profile
* The number and degree of turns
* The heading throughout the course

For each of these features we want a single parameter that quantifies their effect on race times. This post is concerned with developing several options for these parameters, and later when we begin modelling we will select the ones that are most predictive on our dataset.

## Course GPS Data

The basis for the course data is it's gps file. Each course gps file contains latitude, longitude and elevation at each recorded point, while some also include the timestep. I've collected 21 courses (17 Canadian, 4 USA) in my current database from a mix of sources. Some are from gps recordings I've made, while others are pulled from Garmin Connect. Most of the data comes from other athlete's Strava recordings. As long as the athlete has a public profile, [we can download the gps file as a gpx](https://support.strava.com/hc/en-us/articles/216918447-Downloading-a-GPX-Route-from-other-Athlete-s-Activities). Finding the athletes that chose to wear a gps watch and post the results is a difficult process so I don't currently have all the courses Canadian teams compete on. If you have one I'm missing, please feel free to send the gpx file or Strava url.

With the course data collected, the next step is to analyze it and aggregate some features from the key features that classify a cross country course, so that we can compare courses in our final prediction model. We'll pull out several parameters for now and then prune down to the most predictive features when we do our final modelling.

## Elevation

The simplest of the concepts to understand it's impact is elevation. Running uphill is difficult and slows runners, while running downhill is generally easier. The core reason for this is the simple physics that climbing a hill requires an investment of potential energy to overcome gravity (PE=mgh). The more elevation in a course, the more work that needs to be done to overcome gravity, the slower the course is to run. This brings us to our first feature, elevation gain

### Elevation Gain

Elevation gain is the most common metric to describe hilly races.

Because human bodies aren't frictionless wheels, there isn't a simple relationship between hills and pace, particularly for downhills.

The true relationship was first explored in a small study by [Minetti et al. (2002)](https://doi.org/10.1152/japplphysiol.01177.2001). The popular activity tracking app Strava looked at all of their data to develop a Grade Adjusted Pace (GAP) for their platform. The method to derive the current version of GAP calculation is detailed [in this blog post](https://medium.com/strava-engineering/an-improved-gap-model-8b07ae8886c3), and the plot they derived is shown here:

![](https://miro.medium.com/max/3088/1*_TwofsNS872wbUS12ykKPQ.png "Grade Adjusted Pace by Strava")

There are other rules of thumbs posted online, but most follow this trend. The steeper the thill the slower the pace, with downhills being a little more complex. A very steep downhill puts a lot of stress on the body, and can be difficult to maintain pace. I'm expecting that the competitive athletes in these 5km-10km cross country races line up closer to the Minetti model on downhills, as the sample group for the Strava model likely utilized more recreational efforts where one may be more careful on a downhill. Either way I will utilize both models and see which fits the data better.

![Interpolated GAP Function Around 0% Gradient](/uploads/interpolated-gap-function.png "Interpolated GAP Function Around 0% Gradient")

\~\~\~ we want to take the gradients from the races and apply this translation to see how there time should be affected

* 
* turniness
  * explain effect from looking at world records for indoor and outdoor of different distances. Look at how they change iwth distance (is it mostly speed based/forces on the body?)
* 1m vectored directions, use for when get wind direction determine distance into the wind, distance tailwind, distance perpendicular to use for drag. Would eventually cross the wind direction and distance travelled in a drag formula.