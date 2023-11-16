Please add any additional notes here…

I was unable to finish the POST api in the allotted time slot. Had I had the chance, I would have created a series of validator methods to ensure that the POST body met the criteria for what an acceptable card could look like so that I could write error tests.

I would validate that the titles were strings and the basePrices were integers. I would validate that the size arrays contained the four appropriate sizes. I would validate that page arrays contained the correctly formatted objects. Furthermore, I would check that the Titles in these objects matched what I assume would have been the list of acceptable page titles and that the templates were both in the right format and existed. I would write each of these as spearate functions and test them. Then, I would add them into one final function.

The GeneralCard static totalCards property was used as although I feel that it wasn't optimal for testing (I had to manually decrease the totalCards count after adding a card before deleting a card), I felt that it would be reliable in production.
In hindsight, I should have added a setter to GeneralCards.totalCards and reset it in the BeforeEach section of the tests. However, I didn't want to change it after the 4-hour mark, so I have left it as it was.

I added code to re-seed the cards.json file before each test. If there was a better approach, I would really appreicate it if it could be included in any feedback.
