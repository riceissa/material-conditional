% Understanding the material conditional
% Issa Rice
% April 18, 2023

## Introduction and audience for this piece

In this essay I will explain the truth table of the [material
conditional](https://en.wikipedia.org/wiki/Material_conditional) (i.e.,
the "if ..., then ..." statement used in math). Students first learning
formal logic or getting started with writing mathematical proofs are
introduced to the idea of truth tables along with the usual logical
connectives like $\lnot$ ("not"), $\land$ ("and"), and $\lor$ ("or").
Everything goes well until the logical connective $\rightarrow$
("if ..., then ...") for the material conditional is introduced. Why
does a false statement imply anything? Almost everywhere this is
explained poorly. For instance, in terms of promises: the sentence "if
the Moon is made of cheese, then $1+1=3$" is interpreted as the promise
that $1+1=3$ as long as the Moon is made of cheese; but since the Moon
is not made of cheese, we can't say that the promise was broken, and so
we say that the promise was kept. In this way, a false antecedent (the
part of the conditional appearing after "if ...") means the condition of
the promise never arises, so one automatically keeps the promise.

As a beginner to math, I spent many _years_ being confused about this.
Just to give one aspect of my confusion, the explanation in terms of
promises didn't make sense because while it is true that one didn't
break the promise when the antecedent is false, it's also not clear that
one has actually kept the promise, or that one _would have_ kept the
promise. Indeed, because the consequent (the part appearing after
"then ...") is false, it seemed clear that no such promise about $1+1=3$
could have been kept. It also seemed suspicious that we were picking one
specific way in which "if ..., then ..." was used in natural language
and ignoring all the others. Why were we allowed to pick one specific
meaning to use for the "if ..., then ..." in mathematics? But then
again, I didn't have the same problem with the logical "or" connective:
it always meant the [inclusive
"or"](https://mathworld.wolfram.com/InclusiveDisjunction.html) in math,
and I was fine to accept that. So why was I so confused about the
material conditional? It seemed like I was not only confused about the
truth table, but also, inside my own mind, confused about _why_ I was
confused---I had trouble articulating my own confusion.

Like many students of mathematics, I eventually decided to accept the
usual truth table without understanding it because it just seemed to
work: it seemed to produce correct proofs, and in any case vacuous
conditionals don't show up all that much. Many years later, I eventually
hit upon the core of my confusion, and also a way to resolve this
confusion. This is what I'd like to explain in this essay.

In keeping with the above, the audience for this essay is someone who
has written some proofs before and has seen propositional logic and
truth tables, but who still feels confused why the truth table for the
material conditional is the way it is. In other words, it's someone who
is itching to get started with proof-based math, but just finds the
truth table for the conditional plain confusing. This means that I won't
be explaining all of formal logic from scratch. I'll only be explaining
the conceptually tricky parts that are not covered in most books.

Also, because this essay is intended for people pursuing mathematics, I
will only be discussing how the "if ..., then ..." statement is used in
math, rather than in ordinary English. "If ..., then ..." statements in
ordinary English deal with a lot of complexity (such as causality,
counterfactuals, interrogatives, and commands) that are not relevant
when doing most mathematics.

A small terminological note: in this essay I use "material conditional"
and "conditional" interchangeably. In some contexts people distinguish
the _material_ conditional from other kinds of conditionals, and in such
places these terms can't be used interchangeably, but we will not be
encountering any other conditionals in this essay, so it is safe to
switch around if one term sounds more natural than the other. Some
authors also distinguish between a conditional and an implication. We
won't be needing the concept of (what some authors call) implication in
this essay, so to avoid confusion, we will refer to conditionals only,
not implications. Also, throughout the essay we use "statement",
"sentence", and "proposition" interchangeably.

Finally, I know how difficult it is to learn _and retain_ math, so I
have prepared some short questions for you to answer throughout this
essay to check your understanding. If you sign up with your email
address, you will get email reminders to review these questions in the
future. Since the reminder emails will get more infrequent over time as
your understanding becomes more durable (this is known as [spaced
repetition](https://en.wikipedia.org/wiki/Spaced_repetition)), this
allows you to efficiently retain your understanding of the ideas in this
essay. I highly recommend signing up with your email so that you
remember these important ideas forever. The short review questions
appear in boxes like the following:

## What makes the conditional different from other logical connectives?

So why does the conditional statement $P \rightarrow Q$ have the truth
table that it does? In order to answer this question, it's instructive
to think about what makes the conditional different from the other
logical connectives like "not", "and", and "or". After all, we have no
problem with the other connectives so there must be _some_ difference we
can identify. It must be this difference that makes people so
uncomfortable with the truth table for the conditional. If you feel so
inclined, I think this is a good exercise to attempt before reading on.
It will give you practice peering into your own mind and trying to
pinpoint a subtle distinction your mind is already making. Pause reading
here and give it a try!

Now, for a logical connective like "or", there is no debate about
whether it can be represented as a binary operation on the truth values
of sentences. Sure, we might debate whether our "or" should be inclusive
or exclusive, but in either case, it is clear that this concept can be
represented as one of two columns in a truth table:

  $P$   $Q$   $P$ inclusive-or $Q$   $P$ exclusive-or $Q$
  ----- ----- ---------------------- ----------------------
  T     T     T                      F
  T     F     T                      T
  F     T     T                      T
  F     F     F                      F

The same cannot be said for the conditional statement! It is true that
"if $P$, then $Q$" is a statement involving $P$ and $Q$, which we
presume has some definite truth value. But is this statement really a
function of the _truth values_ of $P$ and $Q$? Or could it depend on the
_contents_ of $P$ and $Q$?

Let me stress this point by bringing in an unrelated, somewhat
artificial example: Consider two functions, $f$ and $g$, both defined on
pairs of real numbers. We define $f(x,y) = \operatorname{sgn}(xy)$,
where $\operatorname{sgn}$ is the [sign
function](https://en.wikipedia.org/wiki/Sign_function) that returns $1$
when a number is positive, $0$ when it is the number $0$, and $-1$ when
a number is negative. In other words, $f(x,y)$ is the sign of the
product of the two numbers. Similarly, we define $g(x,y) =
\operatorname{sgn}(x+y)$ to be the sign of the sum of the two numbers.
Thus for example $f(-2,3) = -1$ and $g(-2,3) = 1$. It can be shown that
$\operatorname{sgn}(xy) = \operatorname{sgn}(x)\operatorname{sgn}(y)$,
so the value of $f$ depends only on the sign of the inputs. This is
analogous to how the "or" connective depends only on the truth values of
the input statements. (This is sometimes expressed by saying that the
"or" connective is _truth-functional_. The term "truth-functional" comes
from the fact that the connective is a function of the truth values,
i.e., depends only on the truth values.) On the other hand, the value of
$g$ depends on the actual values of the inputs, not just the sign. To
see this, consider how $g(-2,3) = 1$ but $g(-3,2) = -1$; if $g$ depended
only on the sign of the inputs, both of these would be the same value.
This behavior of $g$ is despite the fact that $g$ only takes on values
in "sign space", i.e., the set $\{-1,0,1\}$. In an analogous way, a
compound statement involving two other statements may depend on just the
truth values of the input statements, or it may depend more specifically
on the contents of the input statements---what those statements are
actually _saying_---despite the fact that the compound statement itself
has a definite truth value.

A logical connective can only be represented in a truth table if it
depends solely on the truth values of the inputs. This is because the
rows of the truth table alternate between all the permutations of _truth
values_ that the input sentences can have, without reference to what
those sentences are saying. So at the moment it is not clear whether the
conditional statement can actually be represented in a truth table.

We can make the above point in a slightly different way: As humans, we
tend to _conflate_ similar-seeming things in order to simplify our
thinking. But in math, it is important to pay attention to one's mental
representations of things and to not conflate things that are actually
meaningfully distinct. This sort of thing happens in mathematics all the
time. We might, for example, introduce a relation called $\leq$ on some
class of objects. But just because it looks like an inequality, we
cannot assume that it is reflexive or transitive or has any of the
properties we normally associate with an inequality relation! A
mathematician has to think very carefully to avoid this kind of
conflation.

Looking at the statement "if $P$, then $Q$", we currently have two
different mental models of it:

1.  The mysterious new meaning textbooks are forcing on us: the logical
    connective $\rightarrow$, which takes two sentences and turns them
    into a third sentence with a specific truth value, as governed by
    the truth table.
2.  A much more familiar meaning: a statement governed by certain rules
    of inference. In particular, the way we use "if $P$, then $Q$" is
    that if we know that "if $P$, then $Q$" is true and $P$ is true,
    then we are allowed to also say that $Q$ is true (this is called
    [_modus ponens_](https://en.wikipedia.org/wiki/Modus_ponens)).
    Furthermore, the way we show that "if $P$, then $Q$" is true is by
    supposing that $P$ is true, then doing some deductions to show that
    $Q$ is true (this is called a [conditional
    proof](https://en.wikipedia.org/wiki/Conditional_proof)).

Intuitively---as well as when writing mathematical proofs---we think of
(and interact with) "if $P$, then $Q$" in the sense (2) given above.
That is, a conditional statement is something that we create via a
conditional proof and make use of via _modus ponens_. _A priori_, this
has very little to do with the statement $P \rightarrow Q$ as defined by
the truth table! This is just another way of stating that we aren't sure
yet whether our intuitive notion of "if $P$, then $Q$" can be
represented in a truth table.

This is the core of what makes the material conditional far more
confusing than the other logical connectives, so let me emphasize the
point by saying: the only reason you find the material conditional hard
to grok is that you _already have opinions about it_. If we had defined
an entirely new connective called $\star$ and said that $P\star Q$ is
false if $P$ is true and $Q$ is false and is true otherwise, you might wonder
why $\star$ is an interesting connective to study, but you wouldn't be
thinking it is _unintuitive_. To put it another way, something can only
be _unintuitive_ when you already have pre-existing intuitions about the
thing. The goal here is to pinpoint this intuition (as we have done
above) and to compare it with the new definition.

So, _are_ these two meanings of "if $P$, then $Q$" related? It turns
out, there is a very satisfying but surprising connection: they are
exactly the same. That's right, our intuitive notion of "if $P$, then
$Q$" coincides perfectly with the truth-table definition of the
conditional!

"Huh?" you might say. "How could our intuitive notion coincide with the
truth table one? Didn't we go on at length in the introduction about how
unintuitive the conditional statement is? How can it be both intuitive
and unintuitive?" This is a good point, and we will come back to it
[soon](#conclusion)! But first, I will make a few points about logic and
then we will try to prove this result.
