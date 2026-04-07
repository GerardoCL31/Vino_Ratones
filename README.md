# **1000 bottles of wine**

Now we’re going to solve a puzzle together. We’re going to think through a few different ways to approach it. This is a well-known puzzle and it’s certainly possible to google the answer. However, we’d suggest: don’t do that - you would steal from yourself the opportunity of learning this important idea.

# **🕹️A long awaited party**

**The King** has stocked his wine cellar with one thousand bottles of wine for his birthday party tomorrow. However, the King’s evil brother, the Duke, has poisoned one of the bottles! The poison is lethal and will kill anyone who takes even one sip within one hour. You, the Butler, must find the poisoned bottle and save the party! But how?

#### **Conditions**

🍾 You have **1000** wine bottles, one of which is poisoned.

🐀 You have **500** rats you can use to test the wine.

⏳ The poison is lethal and will kill within **1** hour.

One way to think of this is to reduce this problem to its simplest case. If you have 2 bottles and 1 rat, you can test the wine by giving the rat a sip from one bottle. Wait one hour. If the rat is alive, the bottle is safe. If the rat is dead, the bottle is poisoned.

With 500 rats, it’s similar, but not the same. Divide the 1000 bottles into 500 groups of 2. In round 1, give each rat a sip from one bottle in each group. Wait one hour. If the rat is alive, the bottle is safe. If the rat is dead, you found the poisoned bottle. If all rats are alive, the poisoned bottle is in the 500 bottles that were not tested. You still have 500 rats, so you can have each rat test the other bottle in their group.

This solution will take a maximum of 2 hours.

#### **New condition**

You now have just **10** rats to test the wine.

🍾 You have **1000** wine bottles, one of which is poisoned.

🐀 You have **10** rats you can use to test the wine.

⏳ The poison is lethal and will kill within **1** hour.

With just 10 rats, we need a way to make our solution more efficient. We can break our problem into 10 smaller problems. Think of it as a search pattern, narrowing down our suspects with each round of testing.

**Round 1**

Let’s divide our 1000 bottles into 10 groups of 100. Each rat tests one *group* : a sip from every bottle in its group of 100. An hour later, with one dead rat, we have narrowed our search to 100 bottles. We’ve saved 900 bottles of wine and we still have 9 rats to help us.

**Round 2** 

Let’s do it again: take our suspicious 100 bottles and create ten groups of ten. Our nine rats each drink from one whole group (and one group goes un-drunk). Our doomed rat perishes again, and after another hour, we’ve found the right group of ten. We now have 8 rats.

**Round 3** 

Now we’re down to just 10 bottles. Eight rats test a bottle each, leaving two untested. If a rat dies, we’ve found the poisoned bottle. If not, we have two bottles left for the last round.

**Round 4: Base case** 

We can use just one rat to test one bottle. If we have a dead rat, it’s the poisoned bottle. If not, the last untasted bottle is the culprit.

Through careful division and patience, we’ve turned an overwhelming search into a manageable investigation. Four hours, and we’ll have our answer.

#### **New condition**

The birthday party is now in **1** hour, so you only have time for one test!

Think about how you can use some of the thinking tools you just learned to solve this problem.

You will need boolean logic, deduction, and binary at least. Here are the constraints again:

🍾 You have **1000** wine bottles, one of which is poisoned.

🐀 You have **10** rats you can use to test the wine.

⏳ The poison is lethal and will kill within **1** hour. 

⌛ You only have **1** hour so can only do **1** round of testing.
