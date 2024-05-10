# GoogleFormFiller
This will autofill google form if the question match or include in the array of text


# Usage
You can either use javascript choice that you want to use or use Tampermonkey template.

# Configuation
## Line 4 - 6 
### checkboxToClick
`Allow value = positive int`

Checkbox in this case is square checkbox. Insert the number according to the form. Start from 0

### radioToClick
`Allow value = positive int`

Radio box is the circle one and usage are same as checkbox


If the form have total of 10 checkbox and you want to check the first one and the 6 , 7 , 8 one.
You can do [0,5,6,7]


### autoSubmit 
`Allow value = boolean (true,false)`


## Custom line between line 19 and 32

You can increase number of question and answer as you want just copy the whole if section

```
if (['foo1','foo2','foo3'].some(keyword => question.includes(keyword))) {
        answer = 'bar';
    }
```

<hr>
Insert every possible question in the array to increase the correction of the question.

In the example for question that ask for Surname

```
if (['ast', 'urname', 'สกุล'].some(keyword => question.includes(keyword))) {
        answer = 'This goes the last name';
    }
```

the reason I don't put the keyword `last` in the array is because it is possible for the form creator that might use lowercase or uppercase L
So list every possible thing inside the array to confirm the question.

# Precaution

If question description also contain the keyword the answer will also be send.

Example

![image](https://github.com/Kirize14/GoogleFormFiller/assets/31198445/0b27eef1-0291-47e3-a0e4-69ac49ff7d25)

In this case the question asking for First name and Last name

but the description also contain the word `passport`

In this case if the custom line have the keyword `passport` then it will also include the answer for passport
