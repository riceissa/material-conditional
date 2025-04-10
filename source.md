% Understanding the material conditional
% Issa Rice
% April 18, 2023

## Introduction and audience for this piece

<!-- FIXME: re-read some hofstadter to imbibe his style. he has a nice
  serious-yet-humorous and clear writing style. -->

In this essay I will explain the truth table of the [material
conditional](https://en.wikipedia.org/wiki/Material_conditional) (i.e.,
the "if ..., then ..." statement used in math). Students first learning
formal logic or getting started with writing mathematical proofs are
introduced to the idea of truth tables along with the usual logical
connectives like $\lnot$ ("not"), $\land$ ("and"), and $\lor$
("or").[^connectives_notation]
Everything goes well until the logical connective $\rightarrow$
("if ..., then ...") for the material conditional is introduced. Why
does a false statement imply anything? Almost everywhere this is
explained poorly. For instance, it is often explained
in terms of promises: the sentence "if
the Moon is made of cheese, then $1+1=3$" is interpreted as the promise
that $1+1=3$ as long as the Moon is made of cheese; but since the Moon
is not made of cheese, we can't say that the promise was broken, and so
we say that the promise was kept. In this way, a false antecedent (the
_antecedent_ is the
part of the conditional appearing after "if ...") means the condition of
the promise never arises, so one automatically keeps the promise.

As a beginner to proof-based math, I spent
many _years_ being confused about this.
Just to give one aspect of my confusion, the explanation in terms of
promises didn't make sense because while it is true that one didn't
break the promise when the antecedent is false, it's also not clear that
one has actually kept the promise, or that one _would have_ kept the
promise. Indeed, because the consequent (the _consequent_ is the
part appearing after
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
conditionals don't show up all that much when doing regular mathematics.
Many years later, I eventually
hit upon the core of my confusion, and also a way to resolve this
confusion. This is what I'd like to explain in this essay.

<!-- FIXME: somewhere around here, explain how if one were to learn this
  stuff in school, there is an expectation for the course to just move
  along to the next topic, so you are not given time to think about these
things in depth. If you don't get it, you are left behind. and you may
also think everyone else understands it because they are going along with
the course. on the other hand, it can be fine to provisionally accept
something even if you don't understand it, as long as it is a flagged
spot in your mind. but eventually, you DO want to deeply understand it,
and it is important to always be honest to yourself about how much you
REALLY understand something. -->

In keeping with the above, the audience for this essay is someone who
has written some proofs before and has seen propositional logic and
truth tables, but who still feels confused why the truth table for the
material conditional is the way it is. In other words, it's someone who
is itching to get started with proof-based math, but just finds the
truth table for the conditional plain confusing. This means that I won't
be explaining all of formal logic from scratch. I'll only be explaining
the conceptually and philosophically tricky parts that are not covered in most books.

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
not implications.[^implication] Also, throughout the essay we use "statement",
"sentence", and "proposition" interchangeably.

Finally, I know how difficult it is to learn _and retain_ math, so I
have prepared some short questions for you to answer throughout this
essay to check your understanding. If you sign up with your email
address, you will get email reminders to review these questions in the
future. Since the reminder emails will get more infrequent over time as
your understanding becomes more durable (this is known as [spaced
repetition](https://en.wikipedia.org/wiki/Spaced_repetition)), this
allows you to efficiently retain your understanding of the ideas in this
essay. I highly recommend signing up with your email---don't let all
the hard work you put into understanding this essay go to waste by
forgetting what you learned soon after!
The short review questions
appear in boxes like the following:

```{=html}
<orbit-reviewarea debug color="cyan">
  <orbit-prompt
    question="Why is an explanation of the material conditional in terms of promises not convincing?"
    answer="There are many potential answers, but here are two:

1. It's not entirely clear that the promise has been (or would have been) kept if the condition never arises.
2. It's not clear why we are allowed to take one specific ordinary usage of “if&nbsp;&hellip;, then&nbsp;&hellip;” while ignoring all the others."
  ></orbit-prompt>
  <orbit-prompt
    question="Which kind of logical “or” is the default in math?"
    answer="inclusive or"
  ></orbit-prompt>
</orbit-reviewarea>
```

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
pairs of real numbers. We define $f(x,y) = \mathrm{sgn}(xy)$,
where $\mathrm{sgn}$ is the [sign
function](https://en.wikipedia.org/wiki/Sign_function) that returns $1$
when a number is positive, $0$ when it is the number $0$, and $-1$ when
a number is negative. In other words, $f(x,y)$ is the sign of the
product of the two numbers. Similarly, we define $g(x,y) =
\mathrm{sgn}(x+y)$ to be the sign of the sum of the two numbers.
Thus for example $f(-2,3) = -1$ and $g(-2,3) = 1$.

It can be shown that
$\mathrm{sgn}(xy) = \mathrm{sgn}(x)\mathrm{sgn}(y)$,
so the value of $f$ depends only on the sign of the inputs.[^dependence] This is
analogous to how the "or" connective depends only on the truth values of
the input statements. This is sometimes expressed by saying that the
"or" connective is _truth-functional_. The term "truth-functional" comes
from the fact that the connective is a function of the truth values,
i.e., depends only on the truth values.

On the other hand, the value of
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

<!-- FIXME: I'm not sure how I feel about this conflation paragraph.
  feels gimmicky.

  The part about "simplify our thinking" feels handwavy. I think it's
  more like, it reduces working memory load and helps to come up with a
better (i.e. occam'd) model of reality most of the time.
-->
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

## Three rules of logic

To follow along with the proof in the next section, it will be important
to be familiar with a few rules of logic. In fact, you may already be
familiar with these rules. These are not the only rules of logic, but
they are the ones that are particularly important for understanding the
rest of this essay.

The first is called the _law of excluded middle_. It states that every
sentence is either true or false (there's not third truth value or "middle" option). In other words, given any statement $P$, we
can claim $P \lor \lnot P$. While in natural language there are many
sentences (such as questions or commands) that don't have a truth value,
it is reasonable to say that at least in mathematics, all sentences are
either true or false. That being said, this law is somewhat
controversial even within the mathematical community; the thought goes that perhaps a
statement may be neither true nor false, and its truth or falsity may be
forever unknown. Despite this, most mathematicians accept this law, and
I hope you find it at least more acceptable than the truth table of the
material conditional.

The second is called _proof by contradiction_. This rule says that when
trying to prove a statement $P$, it is valid to suppose that $P$ is
false, and see what happens. If you happen to reach a contradiction
(that is, you show that $Q \land \lnot Q$ for some statement $Q$), then
you get to say that the assumption that $P$ is false was in error, and
conclude that $P$ must be true after all. This rule makes sense given
the law of excluded middle: either $P$ is true or $P$ is false, and we
just showed that $P$ cannot be false, so it must be true.

The third is called the _principle of explosion_. This rule states that
if we ever show that some statement $P$ is both true and false, i.e., if
we ever show $P \land \lnot P$, then we can conclude anything at all,
for instance, some arbitrary statement $Q$. To
see why this is a reasonable rule, suppose that both $P$ and $\lnot P$
are true. We will show that an arbitrary statement $Q$ must be true.
Since $P$ is true, it must be the case that at least one of $P$ or $Q$
is true, i.e., $P \lor Q$ is true. But since $\lnot P$ is also true,
that is, $P$ is false, the first alternative in $P \lor Q$ cannot hold,
so we conclude that $Q$ is true. This argument may seem ridiculous
(What do you mean "the first alternative cannot hold"? We just said
that $P$ is true!), but
it is ridiculous only because our starting assumption, that $P$ is both
true and false, was itself ridiculous. Logic should be thought of as a
machine that never _introduces_ errors; but if you start out by assuming
some erroneous notion, then logic won't help you become less wrong. The
moral here is that if your logical system ever derives a contradiction,
then it is worthless because it can then prove anything at all.


```{=html}
<orbit-reviewarea debug color="cyan">
  <orbit-prompt
    question="Which rule of logic says that for any sentence $P$, we have $P \lor \lnot P$?"
    answer="law of excluded middle"
  ></orbit-prompt>
  <orbit-prompt
    question="Which rule of logic says that it is valid to suppose some proposition, reach a contradiction, then conclude the opposite of the original proposition?"
    answer="proof by contradiction

(*reductio ad absurdum* is also a correct answer)"
  ></orbit-prompt>
  <orbit-prompt
    question="Which rule of logic says that if we ever find a sentence $P$ such that $P \land \lnot P$, then we can conclude any sentence at all?"
    answer="principle of explosion

(*ex falso quodlibet* is also a correct answer)"
  ></orbit-prompt>
</orbit-reviewarea>
```

## Proving that the conditional has the usual truth table

Now we are finally ready to prove that the two meanings of "if $P$, then
$Q$" coincide. To prevent us from conflating the two meanings of the
conditional, let's use $\lnot P \lor Q$ instead of $P \rightarrow Q$. By
inspecting the truth table, we see that the two are the same:

   $P$   $Q$   $\lnot P$   $\lnot P \lor Q$   $P \rightarrow Q$
  ----- ----- ----------- ------------------ -------------------
   T     T     F           T                  T
   T     F     F           F                  F
   F     T     T           T                  T
   F     F     T           T                  T

<!-- FIXME: I don't like the phrasing "intuitive meaning of 'if P then
  Q'". It should be "'if P, then Q' is true according to our intuitive
  interpretation" or something. -->
To summarize, the result we are trying to show is the following: Our
intuitive meaning of "if $P$, then $Q$" (i.e., a sentence obeying both
_modus ponens_ and conditional proof) is true if and only if the
material conditional $P \rightarrow Q$ (which is equivalent to $\lnot P
\lor Q$) is true.[^intuitive] If you feel excited at this point, I think it's a good
idea to try to prove this result yourself. Pause reading here if you
want to attempt a proof.

Let's first suppose that our intuitive meaning of "if $P$, then $Q$" is
true. We want to show that $\lnot P \lor Q$ is true. By the law of
excluded middle, we have two cases, $P$ or $\lnot P$. Suppose first that
$P$ is true. Then by _modus ponens_, we are allowed to derive $Q$. Since
we know that $Q$ is true, we know that at least one of $Q$ or $\lnot P$
is true, so $\lnot P \lor Q$ is true. Next suppose that $\lnot P$ is
true. This case is even simpler: since $\lnot P$ is already true, we
know that at least one of $\lnot P$ or $Q$ is true, so $\lnot P \lor Q$
is true. In either case, we have shown that $\lnot P \lor Q$ is true.
This completes the first direction of the proof.

Next we show that if $\lnot P \lor Q$ is true, then our intuitive
meaning of "if $P$, then $Q$" is true. So suppose that $\lnot P \lor Q$
is true. To show that "if $P$, then $Q$" is true, we will assume that
$P$ is true and then (through a chain of deductions) show that $Q$ is
true. In other words, we will do a conditional proof. So let's suppose
that $P$ is true. Our goal now is to show that $Q$ is true. Can $Q$ be
false? Suppose for the sake of contradiction that $Q$ is false. Then we
have both $P$ and $\lnot Q$. This contradicts $\lnot P \lor Q$, which
states that at least one of $\lnot P$ or $Q$ is true. This contradiction
shows that our assumption that $Q$ is false was in error, so $Q$ must be
true. By conditional proof, this shows that "if $P$, then $Q$" is true.
This completes the other direction of the proof, and hence we have the
result.

The above result justifies calling $\rightarrow$ the "if ..., then ..."
or conditional connective, and treating the sentence $P \rightarrow Q$
the same as we would the claim that "if $P$, then $Q$". In a way, it is
amazing that "if $P$, then $Q$" can be captured by a logical connective!
The statement "if $P$, then $Q$" at first seems much more fuzzy,
something we use in an argument but that can't be formalized so
simply---something that we would expect depends on the _meanings_ of the
sentences and not just their truth values.[^rigid]

Another way to view the result we proved is that if we add an initially
meaning-less symbol "$\rightarrow$" to our notation and all we know is
that it obeys _modus ponens_ and conditional proof, then our new symbol
_must_ be truth-functional, and its truth table is that of the material
conditional.

## An alternative proof

There is an alternative, more hands-on proof. I'd like to explain it
because I think it makes the especially counter-intuitive rows of the
truth table make more sense.

We want to show that "if $P$, then $Q$" is true if and only if $\lnot P
\lor Q$ is true. We have four cases, corresponding to the four rows of
the truth table:

1.  Suppose first that both $P$ and $Q$ are true. In this case, $\lnot P
    \lor Q$ is true, so we want to show that "if $P$, then $Q$" is also
    true. We do this via conditional proof. Suppose that $P$ is true;
    our goal is to show that $Q$ is also true. But by assumption, $Q$ is
    true! So this concludes the conditional proof and shows that "if
    $P$, then $Q$" is true.
2.  Now suppose that $P$ is true and $Q$ is false. In this case, $\lnot
    P \lor Q$ is false, so we must show that "if $P$, then $Q$" is also
    false. To do this, we will do a proof by contradiction. Suppose for
    the sake of contradiction that "if $P$, then $Q$" is true. Then
    since $P$ is true, by _modus ponens_ we would have $Q$. But this is
    absurd, since $Q$ is by assumption false. This contradiction shows
    that in fact "if $P$, then $Q$" must be false.
3.  Now suppose that $P$ is false and $Q$ is true. In this case, $\lnot
    P \lor Q$ is true, so we will show that "if $P$, then $Q$" is also
    true. We use conditional proof. Suppose that $P$ is true. By
    assumption, $Q$ is true. So this shows that "if $P$, then $Q$".
4.  Finally, suppose that both $P$ and $Q$ are false. Here, $\lnot P
    \lor Q$ is true, so we must show that "if $P$, then $Q$" is also
    true. We again use conditional proof. Suppose that $P$ is true. But
    we assumed at the start that $P$ is false. So $P$ is both true and
    false, and by the principle of explosion, we have $Q$. (It does not
    matter that we know $Q$ to be false from the beginning.) This
    completes the conditional proof, and we conclude that "if $P$, then
    $Q$" is true.

In all cases, we have shown that $\lnot P \lor Q$ and "if $P$, then $Q$"
have the same truth value, so this shows that they are identical.

You may find the proof unconvincing. For instance, in cases (1) and (3),
while we did suppose that $P$ is true and then go on to demonstrate that
$Q$ is true, it's not as if $Q$ was true _because of_ $P$. Instead, $Q$
was already true by assumption from the start! So perhaps you are
doubting whether conditional proofs are valid.
<!-- FIXME: explain this. i think it's best to say some
  combination of the following:
- as discussed in 'principle of explosion' section, the main thing
logic needs to do is to not *introduce* any errors. Conditional
proofs don't need to track "relations/relevance" between sentences
in order to do this.  If you start out with some sentence, and
then just conclude a thing you already knew, well, that doesn't
introduce any errors. It possibly shows you are doing something
silly or inefficient, but does not mean your argument is
*invalid*.

- there's a trade-off between simplicity and convincingness.
If we were to try to formalize 'conditional proof, but you can't
conclude something you already know', then we run into problems
like alternative proofs for results. if we've already proved
something using one method, then in the second proof, we would not
be able to conclude the result because we already know that the
result is true. so we further need to complicate the rule by
saying that it's ok to conclude something you already know, as
long as that thing follows from the previous steps inside the
conditional proof, or something. but there's probably ways in
which that rule doesn't make sense either. the whole thing becomes
as mess as you try to complicate it.
-->

This proof may seem tedious to read, but it has the virtue of being more
concrete: each case corresponds to a specific row of the truth table.
This means that if we are confused about a particular row of the truth
table, then we only need to examine that specific case. For example,
take the example sentence "if the Moon is made of cheese, then $1+1=3$"
that we have been using throughout this essay. Why is it true? It
corresponds to the fourth case of the proof. The reasoning here, from
"within the logic", goes like this: if the Moon is made of cheese, then,
well, it's _not_ made of cheese, so supposing that it _is_ made of
cheese is absurd. This means we've gotten ourselves into trouble and all
logic breaks down, so in particular $1+1=3$.

<!--
<p>Notice the symmetry: to show that \(P \rightarrow Q\) is true, we used
conditional proof. To show that it is false, we used <em>modus ponens</em>. Is
there anything deep going on here? I'm going to bet that there is, but I
don't even understand this myself yet.</p>
-->

## Vacuous truth

A conditional where the antecedent is false is called a [vacuous
truth](https://en.wikipedia.org/wiki/Vacuous_truth). So the sentence "if
the Moon is made of cheese, then $1+1=3$" is vacuously true.

Let's return to the example from the start of this essay, "if the Moon is made
of cheese, then $1+1=3$". Can we now make sense of this statement given
the result we showed above? One approach is to run through part of the
proof again, but using the concrete statements that we have instead of
(or in addition to) the letters $P$ and $Q$. We know that the Moon is
not made of cheese ($\lnot P$), so "the Moon is not made of cheese or
$1+1=3$" ($\lnot P \lor Q$) is true. But now suppose in addition that
the Moon _were_ made of cheese ($P$). Could we now say that $1+1\ne 3$
($\lnot Q$)? If we did, this would contradict what we said above, that
either the Moon is not made of cheese or $1+1=3$ ($\lnot P \lor Q$). So
we have no choice but to conclude that $1+1=3$ ($Q$). But now notice
that we started with the assumption that the Moon is made of cheese
($P$), and derived $1+1=3$ ($Q$), so we have shown "if the Moon is made
of cheese, then $1+1=3$" (if $P$, then $Q$)![^alt_proof]

<!-- FIXME: flesh this out -->
talk about how, since the premise of a vacuous implication will never
show up, it's not like we can conclude anything absurd anyway.

<!-- FIXME -->
false implies anything is basically the statement-level version of the
principle of explosion.

That was a lot of material we just covered, so it is a good time to
answer some review questions to solidify your understanding:

```{=html}
<orbit-reviewarea debug color="cyan">
  <orbit-prompt
    question="What makes the material conditional more confusing than other logical connectives like “not”, “and”, and “or”? (phrase answer in terms of truth tables)"
    answer="It's not clear that the meaning of the conditional can be captured by a truth table."
  ></orbit-prompt>
  <orbit-prompt
    question="What makes the material conditional more confusing than other logical connectives like “not”, “and”, and “or”? (phrase answer in terms of intuitive rule of inference)"
    answer="It's not clear that the material conditional corresponds to what we intuitively mean by “If $P$, then $Q$”, which is a sentence governed by certain rules of inference."
  ></orbit-prompt>
  <orbit-prompt
    question="What are the two ways of looking at what makes the material conditional more confusing than other logical connectives like “not”, “and”, and “or”?"
    answer="1. truth table representability
2. equivalence of the rule-of-inference and truth table interpretations of the conditional"
  ></orbit-prompt>
  <orbit-prompt
    question="What does the fact that a logical connective only depends on the truth values of its inputs mean in terms of a truth table?"
    answer="the connective can be represented as a truth table"
  ></orbit-prompt>
  <orbit-prompt
    question="What does the fact that a logical connective can be represented as a truth table mean in terms of how it uses its inputs?"
    answer="it only depends on the _truth values_ of the inputs rather than the _contents_ of those inputs"
  ></orbit-prompt>
  <orbit-prompt
    question="To prevent us from conflating $P \rightarrow Q$ with our intuitive notion of “if $P$, then $Q$”, what did we do?"
    answer="We replaced $P\rightarrow Q$ with $\lnot P \lor Q$, which has the same truth table entries as $P \rightarrow Q$"
  ></orbit-prompt>
  <orbit-prompt
    question="What's the following rule of inference called?

If $P$, then $Q$. \
$P$. \
Therefore, $Q$."
    answer="*modus ponens*"
  ></orbit-prompt>
  <orbit-prompt
    question="What's the following rule of inference called?

Suppose $P$ is true. \
[…insert more work here…] \
$Q$. \
Therefore, if $P$ then $Q$."
    answer="conditional proof"
  ></orbit-prompt>
  <orbit-prompt
    question="What's it called when a conditional has a false antecedent?"
    answer="vacuous truth"
  ></orbit-prompt>
  <orbit-prompt
    question="“If the moon is made of cheese, then $1+1=3$” is an example of what?"
    answer="vacuous truth"
  ></orbit-prompt>
  <orbit-prompt
    question="What's the term for when something only depends on the truth values of its inputs?"
    answer="truth-functional"
  ></orbit-prompt>
</orbit-reviewarea>
```

## Why propositional logic?

Now that we've hopefully demystified the material conditional, let's
zoom out a bit and look at propositional logic more generally. What have
we accomplished? Why should we care?

Propositional logic is a striking example of recursion. Mathematicians
have been reasoning about math and writing proofs for thousands of
years, leading to many fascinating results about numbers, geometry, and
equations. But one way to view propositional logic is that it is
pointing this machinery at itself: we are analyzing mathematical
reasoning _using mathematical reasoning_. This is like using a
microscope not to study cells, but to study microscopes themselves!

Why might we want to do this? Well, mathematicians are a weird and
curious people, and delight in getting all self-referential and "meta"
to see what happens. It's also a fairly natural thought: as
mathematicians, we have been reasoning in a particular way and have
gotten used to it. It has become our "hammer" and we see "nails"
everywhere. From this perspective, our own mathematical reasoning is
itself just another mathematical object we could be analyzing using our
existing "hammer". We can ask questions about mathematical reasoning
itself, like "Can all true mathematical statements be proved?" Taken to
the extreme, we end up with the field of mathematical logic. But there
is another, more mundane, reason why studying mathematical reasoning
using mathematical reasoning is useful. In math, we often want to find
the negation of a complicated statement, or find the contrapositive of a
conditional statement, or perform some other operation on complicated
sentences. If we have the tools of propositional logic at hand, we no
longer need to rely on our verbal dexterity to perform these
manipulations. Instead, we can be on "autopilot", simply following the
formal rules of propositional logic. Once we invest in mathematically
analyzing something, in a sense we get to mindlessly use that thing
without having to pay too much attention to it every time.

So how does this all connect to the material conditional? By showing
that the conditional statement is amenable to being summarized by a
truth table, we have brought it from the realm of fuzzy human thought
down to the realm of _mindless computational stuff_. By doing so, we can
quickly negate or otherwise manipulate complicated expressions involving
"if ..., then ..." statements. This is a powerful ability to have when
writing and reasoning about proofs!

<!-- FIXME: make this flow better -->
Continuing with the microscope analogy, it is as if by studying
microscopes using a microscope, we can improve our own microscopes to be
more efficient.

\[That's a quite interesting point... I do admit that
some people will be similar to you. And I do agree that learning about
propositional logic will help people write more correct mathematical
proofs (this is kind of what I was getting at in the "Why propositional
logic?" section).\]

```{=html}
<orbit-reviewarea debug color="cyan">
  <orbit-prompt
    question="Why can propositional logic be seen as an example of recursion/self-reference/meta?"
    answer="because we are using mathematical reasoning to analyze mathematical reasoning"
  ></orbit-prompt>
  <orbit-prompt
    question="Microscope analogy for propositional logic"
    answer="using a microscope to study microscopes"
  ></orbit-prompt>
  <orbit-prompt
    question="Why is propositional logic useful? (phrase answer in terms of computation)"
    answer="We can mindlessly perform manipulations like negation and contraposition on complicated expressions"
  ></orbit-prompt>
</orbit-reviewarea>
```

## Conclusion

In this essay we showed that if one accepts some background rules for
logic (as discussed in the [Three rules of logic](#three-rules-of-logic) section)
and also accepts that the "if ..., then ..." statement in math obeys
_modus ponens_ and conditional proof, then one is forced to having a
truth-functional conditional with the ordinary truth table. This does
not say anything about how conditional statements are used in ordinary
English, but one can at least be confident that when doing mathematics,
the "if ..., then ..." one has been using in proofs is the same as the
truth table version.

Earlier we brought up the point that the conditional seems to be both
intuitive and unintuitive, and that this seems contradictory. But a
little reflection shows that this sort of thing happens all the time in
math. In fact, one way of thinking of math is to take things that seem
awfully unintuitive or confusing, and then stare at them in just the
right way so as to make them totally obvious.

It's a fascinating fact that the conditional statement (and mathematical
reasoning more generally) has such a concise formal description. We can
easily imagine alternative worlds in which this was not the case, where
mathematical reasoning itself is very complicated and messy even though
the objects we study are simple formal systems.

I don't want to give the impression that I've covered everything there
is to know about conditionals---far from it. I do think that I said
about as much as what an "intro to proofs" book would say on the topic,
in a hopefully more convincing manner. Those interested in reading more
about conditionals can find a vast literature---on the philosophical
aspects, alternative conditionals, and alternative logics. And if you
are interested in learning more about how to treat math as a mechanical
thing, as an object of study in itself (rather than studying other
mathematical objects like spheres or numbers), then this line of thought
is taken much farther in mathematical logic. But for those who are
excited to jump into proof-based mathematics but were unconvinced by the
usual explanations---and I was like this too---I hope this essay is
enough for you to be convinced that the material conditional makes
sense. I sure wish I had stumbled onto this explanation much sooner. As
Paul Halmos has said about set theory, now that you have read this, you
can safely forget about it,[^halmos] in some sense, to go back to manipulating
conditionals purely syntactically (though I do hope you will
continue to review the flashcards).[^gowers_syntax]

Here are some final review questions, covering material throughout the
whole essay:

```{=html}
<orbit-reviewarea debug color="cyan">
  <orbit-prompt
    question="What does it mean for something to be truth-functional?"
    answer="it only depends on the truth values of inputs"
  ></orbit-prompt>
  <orbit-prompt
    question="What's a vacuous truth?"
    answer="a conditional where the antecedent is false"
  ></orbit-prompt>
  <orbit-prompt
    question="What is *modus ponens*?"
    answer="A rule of inference that allows us to conclude $Q$ given “If $P$ then $Q$” and $P$."
  ></orbit-prompt>
  <orbit-prompt
    question="What's a conditional proof?"
    answer="A proof where you start out by assuming $P$, and then (through a chain of deductions) show $Q$, which allows you to conclude “if $P$ then $Q$”."
  ></orbit-prompt>
</orbit-reviewarea>
```

Do you have feedback for this essay? Feel free to [post in the
discussion](https://github.com/riceissa/material-conditional/discussions)!
You can also [email me](mailto:riceissa@gmail.com) to give private
feedback.

## Acknowledgments {.unnumbered .unlisted}

Thanks to Satira and Vipul Naik for comments on a
draft version of this essay, and to Stephen for comments on an earlier
published version.

I originally wrote this essay in 2021 without really
consulting any resources. In 2023, I was reading Peter Smith's _An
Introduction to Formal Logic_ (second edition) and saw that he had a
similar explanation in one part of the book ([section
22.3](https://www.logicmatters.net/resources/pdfs/IFL2_LM.pdf#page=216)).
I actually liked his framing better for what I was trying to do, so I
reworked the essay to incorporate this new framing. I still think this
essay serves as a better standalone introduction to the material
conditional, since Smith's explanation takes over 200 pages (it's true
that not all the pages are about the material conditional, but since the
explanation is scattered throughout the book, one would have to read or
skim most of it to get enough context and to make sure one isn't missing
anything).

After some more looking around, I did however later find
Smith's [" 'If' and
'$\supset$' "](https://www.logicmatters.net/resources/pdfs/Conditionals.pdf#page=3)
which has a fairly self-contained explanation inside the box on page 3.
(Apparently this PDF handout was [already
around](https://web.archive.org/web/20100713043253/http://www.logicmatters.net/ifl/other-materials/)
by 2010, back when only the first edition of the book was written. For
some reason, this explanation of the material conditional which I
consider the most intuitive was relegated to a handout and not even
included as part of the book!) I still hope my own essay is a more
accessible and relaxed exposition.

Smith's book also references Nicholas
J. J. Smith's _Logic: The Laws of Truth_, which has a similar (but less
rigorous) explanation in section 6.3.2 (and that same line of argument
is in the first edition of Peter Smith's book, at the beginning of
section 15.2, and also appears in section 19.2 of the second edition).


[^connectives_notation]: There's a variety of notations here, e.g.,
    $\sim$ for "not" and $\&$ for "and". Some other variants for
    $\rightarrow$ include $\!\implies\!$ and $\supset$.

[^implication]: This footnote is for readers who are curious about this
    distinction. If you don't care about the distinction, you are free
    to skip this footnote; it won't affect your comprehension of the
    rest of the essay. The basic idea of the distinction is that an
    implication is supposedly a meta-linguistic statement involving
    quoted versions of propositions. For example, we might say that "The
    Moon is made of cheese" implies "$1 + 1 = 3$" (notice the quote
    marks). It would feel ungrammatical to use unquoted versions of the
    two involved propositions, i.e., to say that the Moon is made of
    cheese implies $1 + 1 = 3$.

    On the other hand, a conditional statement is made inside the
    object-language and uses unquoted versions of the two involved
    propositions; it's simply a what is called a _connective_, like
    "and" and "or". So we would say that if the Moon is made of cheese,
    then $1 + 1 = 3$, rather than saying that if "the Moon is made of
    cheese" then "$1 + 1 = 3$" (the latter statement feels
    ungrammatical).

    However, other authors elide this distinction and use "material
    conditional" and "material implication" interchangeably. In
    mathematical logic, there _is_ an actually important distinction
    between the material conditional and semantic consequence, where the
    latter is meta-linguistic and is denoted by the symbol $\models$.
    For these reasons, to avoid confusion it is best to use only the
    terms "material conditional" and "semantic consequence", as these
    have unambiguous meanings (whereas "material implication" could
    possibly mean the material conditional in some contexts and semantic
    consequence in other contexts). For more information, see [this
    post](https://gowers.wordpress.com/2011/09/28/basic-logic-connectives-implies/)
    by Tim Gowers and section 18.8(b) in Peter Smith's book
    [here](https://www.logicmatters.net/resources/pdfs/IFL2_LM.pdf#page=167).

[^dependence]: Somewhat technically: if $f$ is a function taking two
    inputs such that there exists another two-input function $g$ as well
    as a one-input function $h$ such that $f(x,y) = g(h(x), h(y))$ for
    all inputs $x$ and $y$, then we can say that $f$ depends only on the
    $h$-values of the inputs---there's some other function $g$ that does
    exactly that $f$ accomplishes, but only using the $h$-values!
    <!-- TODO: give the example of a function that only depends on the last digit of the inputs -->

[^intuitive]: <!-- FIXME: this needs to be stated better. --> Some
    books use $P \rightarrow Q$ to initially mean the intuitive
    notion of “if $P$, then $Q$”.

    So there's two ways to approach what '$\rightarrow$' means. One way
    is to define it according to the truth table, then show that "$P
    \rightarrow Q$" matches that "intuitive" meaning of "if P, then Q"
    (i.e. a statement following MP and CP). That's what I was trying to
    get at there, by defining "$P \rightarrow Q$" as the same as
    "$\lnot P\lor Q$" (but then not using the former notation because
    it seemed confusing). The other way is to let "$P \rightarrow Q$"
    be a connective that obeys MP and CP (i.e. we define
    '$\rightarrow$' to mean the intuitive "if ... then ..."), then show
    that this has a truth table equivalent to "$\lnot P\lor Q$".

    \- there's a bit of a tricky thing going on here where some books use
    $\rightarrow$ to mean the intuitive conditional, and then show that
    $\rightarrow$ works the same as not-p-or-q. whereas other books
    just define $\rightarrow$ to be the material conditional, and then
    they try to show that $\rightarrow$ is the same as the intuitive
    "if...then...". maybe mention this in like a footnote.

[^rigid]: This whole result comes about because classical logic is
    "rigid" in some sense.

[^alt_proof]: You might say that in the above proof, at the step where
    we ask whether we could say that $1+1\ne 3$ ($\lnot Q$), that of
    course we could. That is also a valid approach. If you want to
    continue the proof that way, we have that the Moon is made of cheese
    ($P$); $1+1\ne 3$ ($\lnot Q$); and "the Moon is not made of cheese
    or $1+1=3$" ($\lnot P \lor Q$). But the first two of these directly
    contradict the third. So we have a contradiction. And [from a
    contradiction we can derive
    anything](https://en.wikipedia.org/wiki/Principle_of_explosion),
    including that $1+1=3$.

[^halmos]: From the Preface of Paul Halmos's book _Naive Set Theory_:
    "The student's task in learning set theory is to steep himself in
    unfamiliar but essentially shallow generalities till they become so
    familiar that they can be used with almost no conscious effort. In
    other words, general set theory is pretty trivial stuff really, but,
    if you want to be a mathematician, you need some, and here it is;
    read it, absorb it, and forget it."

[^gowers_syntax]: In one of the most striking posts on mathematical
    pedagogy that I have ever read, Tim Gowers argues that
    mathematicians think syntactically a lot of the time, rather than by
    thinking about the "meanings" of the various manipulations they do,
    and that this is also a good way to _teach_, for example,
    logarithms.
