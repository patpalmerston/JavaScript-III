/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// the value of 'this' is set as a window/console object. Use the following code the explore the Global element of 'this'

function happyDays(feeling){
  console.log(this)
  return feeling;
}
happyDays(`fabulous`);

// Principle 2 - is Implicit Binding and it states that when ever a function is called by a preceding dot that object before the dot is 'this'. Depending on the object being passed in there will be a different context for 'this' when we logout the 'this'.
// code example for Implicit Binding
const letsTalk = {
  speak: 'The world is super!!',
  speakYourMind: function(feeling) {
    console.log(`${this.speak} and I feel ${feeling}`);
    console.log(this);
  }
}
letsTalk.speakYourMind('Fabulous');

// Principle 3 - is New Binding and focuses on the concept of constructor functions which is a function that returns an object. It is its own God and creates potentially endless objects. But now we need to add the new Keyword.

// code example for New Binding

function HappyPerson(myFeelings) {
  this.question = 'How are you feeling today? ';
  this.myFeelings = myFeelings;
  this.conversation = function() {
    console.log(`${this.question} + ${this.myFeelings}`);
    console.log(this);
  }
}

const dill = new HappyPerson('Sad');
const sarah = new HappyPerson('Amazing!');
const eden = new HappyPerson('so so');
dill.conversation();
sarah.conversation();
eden.conversation();

// Principle 4 - Now we are looking at Explicit binding which mean that when JS calls or applys a method 'this' is explicity defined. Meaning we can override previous constructors by using the .call and or. apply context.

// code example for Explicit Binding

eden.conversation.apply(sarah);
dill.conversation.call(eden);