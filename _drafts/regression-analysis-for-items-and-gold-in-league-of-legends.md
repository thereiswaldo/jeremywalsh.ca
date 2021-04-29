---
layout: ''
title: Regression Analysis for Items and Gold in League of Legends
date: 2021-04-29 00:00:00 +0000
categories: ''

---
Continuing my analysis on League of Legends ([first post here](http://jeremywalsh.ca/2021/04/15/league-of-legends-analyzing-champion-basic-stats.html)), I want to talk about items in the game. As a new player one of the things that I feel isn't well communicated is the importance of getting gold to build items. Items have many effects in the game, but here I'm going to focus on how they alter the base stats of the champions.

## How much do items improve base stats?

As discussed in my [previous post,](http://jeremywalsh.ca/2021/04/15/league-of-legends-analyzing-champion-basic-stats.html) there are various classes each champion is typed into. The simplest that we will look at first is the Tank. They are generally designed to be your front liners that jump into battle first and absorb as much of the enemies damage as possible to save their squishy teammates. A few minutes into the game a tank might go back to the shop to buy some items. The cheapest item that provides health is called a Ruby Crystal. For 400 gold it boosts the owner's health (HP) by 150. If we take all the champions in the game that have Tank as their primary or secondary class and average their HP at level 3 plus this cheap item we get this breakdown:

![LoL Tank Level 3 HP Pie Chart](/uploads/tank-build-level-3-hp.png "Tank Champion First Item HP Breakdown")

17% of their HP just from a relatively cheap item. Certainly a noticeable increase, and one that could alone have significant impact on the next few minutes of game play. 

As the game progresses, gold is accumulated and so are levels. At the end of long enough game we can look at what the average level capped (18) tank's HP is alongside a full item build. League of Legends allows you to equip 6 items, one of them is typically a pair of boots to increase move speed, so we will consider 5 typically purchased items and look at the breakdown again.

![LoL Tank Level 18 HP Pie Chart](/uploads/tank-build-level-18-hp.png "Tank Champion Level 18 HP Breakdown")

We can see nearly half of the average level 18 tank's HP is now coming directly from items. The Knight's Vow with it's 400 HP increase being the most significant in this build.

If we look at the attack damage that Marksman class does we can see a similar trend of importance of items.

As a player you gain gold for killing enemy creeps, champions, buildings, or neutral monsters. There is also a mechanism for passive gold generation and assisting in kills.