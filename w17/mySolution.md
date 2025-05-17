Challenge: Identify the amount of waste that you recycle. If you do not recycle, then add 24 points to your score. However, if you do recycle, then start with 24 points and subtract 4 points for each type of item that you recycle. You can subtract four points for each of the following recycling categories:[5]
Glass
Plastic
Paper
Aluminum
Steel
Food waste (composting)

Solution:
I would implement a boolean input type, asking if they recycle.
- If yes, then I will write code to render the next questions of what they recycle: glass, aluminum, paper etc. And I will set each's value to 4. I will use a select of type multiple. In the main.js, for every 
one they selected I will total the points. Or I can just set each's value to 1, and when I count how many selected multiply that by 4. 
In the FP.js I would subtract that from the 24 (I will set to default in the constructor value for recycle).
- If no, then I will just go to fp.js and add the default 2 points. 