SOLID has it's own capabilities & constrains,
in small projects(like this example) it may increase the complexity of codes, specially for begginers. But in Larger apps , which most of them need to be refactored or more-developed  periodically it helps us to better read & underestand the codes.

Well,

In the file "OCR-Violated" we have a function which conditionally renders different jsx-elements. Adding this condition (loading) to our function, disregards the OCR, because we have to MODIFY the TEXT function and add new behavior to it. Notice that, It's now a wrong function cause it works, it just desregards the Open-Close_Principle.

Then, In the file "OCR-Ok" we define a new function(Loading()) in which we can implement our required behavior. that helps us to prevent modifying our main function(ShowText()). when we need to add more abilities to our entire code, we just can combine this two seperate functions in the target. It may harder the code reviewing, but in future allow us to find the specific role of each component.