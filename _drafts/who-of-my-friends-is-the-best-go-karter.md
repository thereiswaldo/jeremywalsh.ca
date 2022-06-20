---
layout: single
title: Who of my friends is the best Go-Karter?
date: 2022-06-19 04:00:00 +0000
categories: ''

---
As in all questions in data science, the answer question becomes more vague the more time you spend working on it.

My friends and I recently went Go Karting, and after four 16 minute races we wanted to know who among us was the overall best driver. One method of doing that would be to look at the place we all came in at each race, assign a point value for each place and sum our points up. Importantly that does not take the go karts into account. We were able to drive in different karts for each race, and had the feeling that some karts were better than others. Some karts skidded more easily, and some felt like that had better engines.

### Data Preparation

After each race we were handed the print out of our lap splits.

![](/uploads/img_3186.JPG)

We had 7 drivers in our group over 4 races so I had 28 sheets of lap splits to ingest. I started reading the lap times in with OpenCV, but then pivoted to Microsoft tools to speed-up this on-off process.

Once I had all the pictures converted to csv's I realized I was missing the kart numbers. Thankfully the people at the [Go Kart facility](https://www.hamiltonindoorgokarts.com/) were able to send me all of our kart numbers, and a few of the lap time pictures I was missing.

### Race Result Scoring

#### Driver Scores

![](/uploads/points-summary.png)

Taking the placings from the driver that went the furthest in the fastest time and then applying Mario Kart or F1 scoring gets similar results. The one difference is the first and second drivers are reversed when using F1 Sprint points.

Assigning points for fastest lap in each race sorts the drivers differently.

![](/uploads/fastest-lap-points.png)

If we wanted to know who the fastest driver was we may use this ranking, but it misses the racing portion that finish position can give us. 

All of this is assuming our karts were all equal. The feeling we all had was that each kart was a little different, but was there a difference in the times each kart did?

#### Kart Scoring

The karts were randomly assigned by the workers before each race, and most of us got to use a unique kart for each race, with most karts doing 3-4 races.

![](/uploads/kart-numbers.png)

To determine which karts were fastest I'm just going to look at the fastest lap each kart had.

![](/uploads/kart-fastest-lap.png)

The difference between the fastest kart and slowest was 1.6 seconds, which is 12.5% slower. 

Though this seems like a good case we can't jump to any conclusions yet. The 4 fastest karts were the 4 karts that the top placing driver had. Is that due to the karts being fast, or the driver, or both?

### Multivariate Regression

One way to examine who the best driver was is to do a regression on the kart numbers, drivers, times, and whatever other relevant information we can get our hands on, and examine the feature importance. A model that accurately fits our data can help to tease apart the relationships.

The dataset I used for the regression analysis included:

* Race Number
  * None of us are seasoned go-karters so we improved with each race, especially after the first.
* Start Position
  * On the small track we raced it was very difficult to pass so starting first was expected to have a large advantage.
* Drivers
  * Our names one-hot-encoded interpretation by the algorithm without bias.
* Kart Numbers
  * The kart numbers one-hot-encoded to remove any confusion in the algorithm relating independent kart numbers.
* Fastest Lap
  * This is the dependent variable that I'm trying to predict from the data. It was chosen so as to limit the influence of racing, and because it's model accuracy was higher than using the mean lap (46% vs 98%).

Running a ridge regression against all the data led to a 98% accuracy. The high accuracy is because the model is overfit and would likely do a terrible job predicting future scores. Given the small amount of data available however, the coefficients seen below can give us some insight.

![](/uploads/regression-coefficients-for-fastest-lap.png)  

The features that had the most influence on the fastest lap time have the highest magnitude coefficient. A positive coefficient means that feature influences a slower lap time, while a negative coefficient means that feature causes a faster lap time. 

### Conclusion

This analysis shows that karts have a significant impact on the fastest lap time. It also suggests that Sean is the fastest driver of us all. He was able to get more out of all of his karts. There are enough faults in this analysis however that only more racing will prove who is best.