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
