'use client';

import { useState } from "react";

const voicePairs = [
  {
    active: "The chef cooks the meal.",
    passive: "The meal is cooked by the chef.",
    note: "Object (the meal) becomes the subject in passive voice.",
  },
  {
    active: "She will announce the winner tomorrow.",
    passive: "The winner will be announced by her tomorrow.",
    note: "Keep the time expression (tomorrow) at the end in both voices.",
  },
  {
    active: "People speak English around the world.",
    passive: "English is spoken around the world.",
    note: "If the doer is general (people), we often omit it in passive voice.",
  },
];

const spotCheck = [
  {
    sentence: "The teacher praises the student.",
    voice: "Active voice",
    why: "The subject (teacher) performs the action.",
  },
  {
    sentence: "The project was finished by the team.",
    voice: "Passive voice",
    why: "The subject (project) receives the action.",
  },
  {
    sentence: "My phone was stolen.",
    voice: "Passive voice",
    why: "Doer is unknown; focus is on the receiver (phone).",
  },
  {
    sentence: "They released a new album.",
    voice: "Active voice",
    why: "Subject (they) is doing the action (released).",
  },
];

const quizQuestions = [
  {
    question: "Which sentence is in passive voice?",
    options: [
      "The rain ruined our picnic.",
      "Our picnic was ruined by the rain.",
      "We enjoyed our picnic in the rain.",
    ],
    answerIndex: 1,
    tip: "Look for a form of 'be' + past participle.",
  },
  {
    question: "How do you form the passive voice?",
    options: [
      "Subject + base verb + object",
      "Object + verb-ing + subject",
      "Subject + be (in correct tense) + past participle + by + doer",
    ],
    answerIndex: 2,
    tip: "The tense of 'be' matches the original active verb tense.",
  },
  {
    question: "When is passive voice especially useful?",
    options: [
      "When the doer is unknown or unimportant",
      "When you want to sound casual",
      "When you need to use the present continuous tense",
    ],
    answerIndex: 0,
    tip: "Passive voice shifts attention to the receiver of the action.",
  },
];

export default function Home() {
  const [revealedCards, setRevealedCards] = useState<boolean[]>(
    spotCheck.map(() => false),
  );
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(
    quizQuestions.map(() => -1),
  );

  const toggleCard = (index: number) => {
    setRevealedCards((prev) =>
      prev.map((item, i) => (i === index ? !item : item)),
    );
  };

  const handleSelect = (questionIndex: number, optionIndex: number) => {
    setSelectedAnswers((prev) =>
      prev.map((value, i) => (i === questionIndex ? optionIndex : value)),
    );
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-sky-50 via-white to-emerald-50 text-slate-900">
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-20 px-6 py-16 sm:px-10 lg:px-12">
        <header className="rounded-3xl bg-white p-10 shadow-xl shadow-emerald-100/60 ring-1 ring-emerald-100">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold text-emerald-700">
            Beginner Grammar Course
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Learn Voice in English Grammar with Confidence
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
            Voice shows whether the subject of a sentence does an action or
            receives it. This guide walks you through active and passive voice
            using simple explanations, step-by-step transformations, and quick
            practice so you can start using both forms correctly today.
          </p>
        </header>

        <section className="grid gap-8 lg:grid-cols-3">
          <article className="rounded-2xl border border-emerald-100 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-emerald-700">
              1. Understand the Idea
            </h2>
            <p className="mt-4 text-slate-600">
              Voice tells us who is highlighted: the doer of the action (active
              voice) or the receiver of the action (passive voice). The meaning
              stays the same, but the focus changes.
            </p>
          </article>
          <article className="rounded-2xl border border-emerald-100 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-emerald-700">
              2. Know the Parts
            </h2>
            <p className="mt-4 text-slate-600">
              Every sentence with voice has a subject, a verb, and an object. In
              passive voice, we add a form of <strong>be</strong> + the{" "}
              <strong>past participle</strong> (third form of the verb).
            </p>
          </article>
          <article className="rounded-2xl border border-emerald-100 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-emerald-700">
              3. Practice Both Forms
            </h2>
            <p className="mt-4 text-slate-600">
              You will use active voice most of the time. Passive voice is handy
              when the doer is unknown, unimportant, or obvious from context.
            </p>
          </article>
        </section>

        <section className="rounded-3xl bg-white p-10 shadow-lg shadow-sky-100/40 ring-1 ring-emerald-100">
          <h2 className="text-3xl font-semibold text-slate-900">
            Active vs Passive Voice at a Glance
          </h2>
          <p className="mt-4 text-slate-600">
            Compare how the focus moves from the doer to the receiver. Notice
            the verb changes in the passive form.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {voicePairs.map((item) => (
              <div
                key={item.active}
                className="rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-lg font-semibold uppercase tracking-wide text-emerald-600">
                  Example
                </h3>
                <p className="mt-4 rounded-xl bg-sky-50 p-4 text-sky-900">
                  <strong className="block text-sm font-bold uppercase text-sky-700">
                    Active
                  </strong>
                  {item.active}
                </p>
                <p className="mt-3 rounded-xl bg-emerald-50 p-4 text-emerald-900">
                  <strong className="block text-sm font-bold uppercase text-emerald-700">
                    Passive
                  </strong>
                  {item.passive}
                </p>
                <p className="mt-3 text-sm text-slate-600">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-3xl bg-white p-10 shadow-lg shadow-emerald-100/40 ring-1 ring-emerald-100">
            <h2 className="text-3xl font-semibold text-slate-900">
              Steps to Change Active Voice to Passive Voice
            </h2>
            <ol className="mt-6 space-y-5 text-slate-600">
              <li className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <strong className="text-slate-900">1. Find the object.</strong>{" "}
                This will become the new subject in passive voice.
              </li>
              <li className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <strong className="text-slate-900">
                  2. Choose the correct form of &quot;be&quot;.
                </strong>{" "}
                Match the tense of the original verb (am, is, are, was, were,
                will be, has been, etc.).
              </li>
              <li className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <strong className="text-slate-900">
                  3. Add the past participle.
                </strong>{" "}
                Use the third form of the verb (write becomes written, eat
                becomes eaten).
              </li>
              <li className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <strong className="text-slate-900">
                  4. Mention the doer with &quot;by&quot; (optional).
                </strong>{" "}
                Add &quot;by + doer&quot; only when it adds useful information.
              </li>
            </ol>

            <div className="mt-8 rounded-2xl border border-dashed border-emerald-200 bg-emerald-50 p-6">
              <h3 className="text-xl font-semibold text-emerald-700">
                Sample Conversion
              </h3>
              <p className="mt-3 text-slate-600">
                <strong>Active:</strong> The manager checks the reports.
              </p>
              <p className="mt-2 text-slate-600">
                <strong>Step 1:</strong> Object: the reports.
              </p>
              <p className="text-slate-600">
                <strong>Step 2:</strong> Verb tense: simple present, so use
                &quot;are&quot;.
              </p>
              <p className="text-slate-600">
                <strong>Step 3:</strong> Past participle of &quot;check&quot;:
                checked.
              </p>
              <p className="text-slate-600">
                <strong>Step 4:</strong> Add doer if needed: by the manager.
              </p>
              <p className="mt-3 rounded-xl bg-white p-4 text-emerald-900">
                <strong>Passive:</strong> The reports are checked by the
                manager.
              </p>
            </div>
          </article>

          <aside className="flex h-fit flex-col gap-6">
            <div className="rounded-3xl bg-white p-8 shadow-lg shadow-sky-100/40 ring-1 ring-slate-100">
              <h3 className="text-xl font-semibold text-slate-900">
                Quick Cheat Sheet
              </h3>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <strong className="text-slate-900">Active pattern:</strong>{" "}
                  Subject + Verb + Object
                </div>
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <strong className="text-slate-900">Passive pattern:</strong>{" "}
                  Object + be + past participle (+ by + subject)
                </div>
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <strong className="text-slate-900">Tense clue:</strong> Keep
                  the tense of &quot;be&quot; the same as the active verb.
                </div>
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <strong className="text-slate-900">When to use passive:</strong>{" "}
                  focus on results, unknown doer, or formal tone.
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-xl shadow-slate-900/20">
              <h3 className="text-xl font-semibold">Tip</h3>
              <p className="mt-3 text-slate-200">
                Practice saying both versions out loud. Hearing the difference
                helps you feel when the doer or the receiver is in focus.
              </p>
            </div>
          </aside>
        </section>

        <section className="rounded-3xl bg-white p-10 shadow-lg shadow-emerald-100/40 ring-1 ring-emerald-100">
          <h2 className="text-3xl font-semibold text-slate-900">
            Spot the Voice
          </h2>
          <p className="mt-4 text-slate-600">
            Can you identify whether each sentence is active or passive? Tap to
            reveal the answer and explanation.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {spotCheck.map((item, index) => (
              <button
                key={item.sentence}
                onClick={() => toggleCard(index)}
                className="group flex flex-col rounded-3xl border border-slate-100 bg-gradient-to-br from-white to-slate-50 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-300"
              >
                <p className="text-lg font-semibold text-slate-900">
                  {item.sentence}
                </p>
                <p className="mt-3 text-sm text-slate-500">
                  {revealedCards[index]
                    ? `${item.voice} - ${item.why}`
                    : "Tap to reveal"}
                </p>
              </button>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-white p-10 shadow-lg shadow-sky-100/40 ring-1 ring-emerald-100">
          <h2 className="text-3xl font-semibold text-slate-900">
            Quick Quiz
          </h2>
          <p className="mt-4 text-slate-600">
            Choose the best answer. Your selection will turn green when correct
            and soft red if you need to try again.
          </p>
          <div className="mt-8 space-y-8">
            {quizQuestions.map((item, questionIndex) => (
              <div
                key={item.question}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-6"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {questionIndex + 1}. {item.question}
                </h3>
                <p className="mt-2 text-sm text-slate-500">{item.tip}</p>
                <div className="mt-4 grid gap-3">
                  {item.options.map((option, optionIndex) => {
                    const selected = selectedAnswers[questionIndex];
                    const isCorrect = optionIndex === item.answerIndex;
                    const isSelected = optionIndex === selected;
                    const baseClasses =
                      "rounded-2xl border p-4 text-left text-sm transition focus:outline-none focus:ring-2 focus:ring-emerald-300";
                    let variantClasses =
                      "border-slate-200 bg-white hover:border-emerald-200 hover:bg-emerald-50";

                    if (isSelected && isCorrect) {
                      variantClasses =
                        "border-emerald-500 bg-emerald-50 text-emerald-700";
                    } else if (isSelected && !isCorrect) {
                      variantClasses =
                        "border-rose-300 bg-rose-50 text-rose-700";
                    }

                    return (
                      <button
                        key={option}
                        onClick={() => handleSelect(questionIndex, optionIndex)}
                        className={`${baseClasses} ${variantClasses}`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="rounded-3xl bg-slate-900 p-10 text-slate-200 shadow-lg shadow-slate-900/30">
          <h2 className="text-2xl font-semibold text-white">
            Keep Building Your Skills
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            Try rewriting short news headlines or recipe instructions from
            active to passive and back. A few minutes of daily practice builds
            strong grammar habits and helps you control the focus of your
            sentences.
          </p>
          <p className="mt-6 text-sm text-slate-400">
            Ready for more? Explore tenses next so you can match the correct
            passive form in every context.
          </p>
        </footer>
      </main>
    </div>
  );
}
