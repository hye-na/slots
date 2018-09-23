#SLOTS

![wireframes](img/wireframes.jpg)

### Wireframes:

Desktop and mobile version.
Mobile is viewed horizontally for readibility and swiping function.



### User Stories:

**The User would…** 

1. place a bet by clicking on the button (tapping if mobile)

2. click on the button to start spinning the game

3.  see the 3-reel slot machine automatically spin

4. (Optional) If matches, the user gains more winnings and animation is triggered during winnings



### Pseudocode:

* Initiate by showing 3 blank slot reels wrapped inside a container

* After button is clicked (event listener), each slot would spin, stopping consecutively in a row from left to right with random timing OR around the same time, with one screen spinning in the opposite direction (i.e. center reel flows from bottom to top and the other two from top to bottom)
    * click to trigger spin
    * animate spin and sound
    * set interval for counting down to stop spinning

* Matching tiles would trigger win/loss by acculumating or losing points.
    * random tiles selected (may use .math.random)
    * winning combos are 3 of the following:
        - doge : 100 pts 
        - alpaca: 80 pts
        - bear : 60 pts
        - otter : 40 pts
        - grumpy : 20 pts
    * the probility of getting 3 doges is the lowest
    * If you get all 3 grumpy cats, you lose EVERYTHING. Maybe make 1-2 grumpy cats lose a few points?

* Winning match triggers win event (animations/sound)
    otherwise it does nothing

* Not really a full reset, as user's points either accumulates or decreases. 