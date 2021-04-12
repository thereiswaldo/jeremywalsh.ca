---
layout: single
title: League of Legends - Analyzing Champion Basic Stats
date: 2021-03-25 04:00:00 +0000
categories: Leauge of Legends, LoL, Data Visualization

---
My friends and I recently started playing League of Legends. It's a 5v5 MOBA (Multiplayer Online Battle Arena) game where you play one of 154 champions and work together with your team to destroy the enemy's base. As my friends and I are new the to the game I thought I would take a look at some of the data the api makes available in order to help understand it better. First up is understanding the base statistics and categories of the champions. (If you want to follow along I have a jupyter notebook on my github you can use).

In general each champion has their health (hp), their magic resource (mana/mp), armour, chance for critical hits (crit), attack damage, attack speed, all of which have a partner stat for the amount they increase each time the character levels up. Additionally there is move speed and attack range which remain constant as the characters level.![League of Legends Champion Stat Histogram](/uploads/histogram.png "Champion Stat Histogram")

As we can see from the histogram of each of the basic stats for all the champions, they generally follow a normal distribution, but as we will see, a game with this many characters there are many the buck any general rules.

League of Legends has 6 classes that can be used to identify differences in the champions. Mage, Support, Marksman, Fighter, Tank, Assassin. My assumption as a new player is that Tank's would have the highest hp and armour values and they would gain the most in these stats as they level.

![](/uploads/hp-and-armour-lvl-1.png)

![](/uploads/hp-and-armour-lvl-18.png)

Plotting the hp and armour at level 1 and the max level 18 for each primary class doesn't totally validate this theory. It is important to note that I'm only using their primary class. 116 of the 154 champions have a secondary class listed that we are ignoring here for simplicity. Due to the complexity of the game our goal isn't to fully understand every detail of the champions, just enough that at a glance I can look at a champion with Tank as a Primary Class and safely assume they will have one of the highest hp and armour in the game. One way of doing this is looking at the effective hp:

![](/uploads/average-effective-hp-by-primary-class.png)

Put simply effective health is the amount of raw burst physical or magical damage a champion can receive before dying. Physical damage output by other champions can be mitigated with the defending champion's armour and health. Similarly magic damage is mitigated by magic block and health. [(For more on effective health you can look here).](https://leagueoflegends.fandom.com/wiki/Health#Effective_health) Taking the mean of all champions in each class gets us the above graph. Tank's and figters at the top and squishy mage's at the bottom. Mage's notably deal the most magic damage have the best natural defences to magic despite a low health pool.

The classes then seem like an easy first pass to telling us how survivable a champion will be. Tanks take more damage to kill, and mages less. What if we wanted to group the champions by something other than their class?

We could use a Principle Component Analysis (PCA) and see what groups of champions appear. PCA is used here to extract the most important features in the dataset and boil them down to just 2 general parameters. For a detailed explanation of PCA I would [highly recommed this youtube video.](https://www.youtube.com/watch?v=fkf4IBRSeEc)

![](/uploads/champion-stat-principle-component-analysis.png)

We can see 3 somewhat distinct gropus here. I don't know enough of the champions at a glance to understand what the groupings are so we want to look at what features were important in getting us here. If we plot the relative importance of each feature on the graph we get this graph:

![](/uploads/champion-stat-principle-component-analysis.png)