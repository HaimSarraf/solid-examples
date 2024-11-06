What is Liskov-Substitutation Principle ?

It says every subclass/derived-class should be substitutable for thier base/parent-class without altering the correctness the app.

when we expect a behavior from a class, its subclasses must comply with that.


now, let's have a look at /app/LSP-App.tsx ,
if we want to calculate the square are in LSP-Violated-mode we need a complex jsx with a chain of ternery operators, even we may make a mistake.

but in LSP-ok-mode as we defined our functions earlier, and type-checked them, we'll catch less mistakes.

