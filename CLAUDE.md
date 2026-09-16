# mJOULE ARM programme plan

This directory holds the programme Gantt chart. Vanilla JS with no build step,
opened directly in a browser:

- `mjoule-arm-plan.js`: the data. Defines one global `PROJECT` object and nothing
  else. This is the file that changes as the programme moves on.
- `mjoule-arm-gantt.html`: the view. Rendering, filters, tooltips and theming,
  plus Tailwind via CDN. It pulls the data in with a plain
  `<script src="mjoule-arm-plan.js">` tag, so the two files must stay side by side.
- `README.md`: what the repo is, for someone opening it on GitHub. Not loaded by
  the page.

The data is plain JS rather than JSON deliberately: a `file://` page cannot
`fetch` a local JSON file, so the chart would stop opening straight from disk.

## When I say "update the plan"

Edit **only** `mjoule-arm-plan.js`. Everything else is driven from the `PROJECT`
object and should not need changing. A data change never touches
`mjoule-arm-gantt.html`, and neither file gets restructured to accommodate one.

Apply the edit, then stop and report what changed. Do not commit.

## Data shape

The whole of `mjoule-arm-plan.js`, below its header comment:

```js
const PROJECT = {
  name:    'mJOULE ARM Platform',
  start:   '2026-06-01',   // left edge of the timeline
  finish:  '2027-06-30',   // right edge, and the "days to release" target
  milestones: [ { date:'2026-10-16', label:'Design freeze' } ],
  workstreams: [
    {
      id:'arm',                          // stable, lowercase, used by the filter chips
      name:'ARM Controller',
      owners:['Xi','Sujan'],             // drives the owner chips and the avatars
      colour:'#6366f1',
      tasks:[
        { name:'Laser control loop',
          start:'2026-08-03',            // inclusive, ISO yyyy-mm-dd
          end:'2026-10-16',              // inclusive
          progress:55,                   // whole percent, 0 to 100
          risk:true,                     // optional, draws a dashed outline
          note:'Gated on hazard analysis sign-off.' }   // optional, shown on hover
      ]
    }
  ]
};
```

Everything else is derived at load time and must not be hand-written:

- `status` comes from `progress` (0 = not started, 1–99 = in progress, 100 = complete).
- `overdue` is set when `end` is in the past and `progress < 100`.
- Workstream roll-up progress is duration-weighted across that stream's tasks.
- The "days to release" tile counts from today to `PROJECT.finish`.

## Rules for edits

- Keep tasks inside a workstream in **plan order** (roughly by start date). The
  page offers other sort options at runtime, so the source order is the default view.
- If a task's dates move outside `PROJECT.start` / `PROJECT.finish`, widen the
  project window in the same edit. Bars outside the window get clipped silently.
- New workstream: pick a colour that is clearly distinct from the seven in use
  (indigo `#6366f1`, sky `#0ea5e9`, emerald `#10b981`, amber `#f59e0b`,
  rose `#f43f5e`, purple `#a855f7`, slate `#64748b`). Also avoid the two the
  chrome reserves: navy `#1e3a8a` marks today and red `#e11d48` means trouble.
- Changing a workstream `id` resets nothing visually but breaks nothing either.
  Keep ids short and stable anyway.
- `risk: true` without a `note` shows "flagged for review". Prefer to give a reason.
- Remove the `risk` flag when the blocker clears. Do not leave stale flags.
- Progress only ever moves with real evidence. If I give a status in prose, use
  the number I state. Do not infer progress from elapsed time.

## If the view does need changing

A data change never touches `mjoule-arm-gantt.html`. When a change to the view
itself is asked for, these are the parts that bite:

- **The timeline header is four rows** (year, quarter, month, week) plus a day
  row at the week zoom. Every row is generated from `periods`, one function per
  unit returning `{s, e, label}` clipped to the plan window. Add a row by adding
  a generator and a `HEAD_ROWS` entry. Do not hand-position a row: the rows share
  one set of boundaries so they cannot drift apart, which is the whole point.
- **The header is a fixed height at every zoom.** The day row's slot is reserved
  even when it is not drawn, and the finest visible row stretches into it.
  Sizing the header from the visible rows makes the whole chart jump when the
  zoom changes.
- **`xOf` gives the left edge of a day**, i.e. midnight at its start. Use
  `xToday()` for anything marking today, which centres on the day instead. A bare
  `xOf(todayMs)` draws the rule on the boundary between yesterday and today and
  reads as being a day behind.
- **`dayW` is fractional**, because every zoom fits a span to the window. `wOf`
  derives a width from the next cell's rounded position rather than rounding the
  span independently, otherwise cells are left with 1px gaps between them.
- **Colour has two tokens with different jobs.** `--today` (navy) marks the
  current date: the rule, the pill, the header washes. `--alert` (red) means
  something is wrong: at risk, overdue, behind the expected burn. Never use the
  red for position or the navy for status.
- **Week and day labels name the cell's start date**, so never recolour them to
  mark today. The tinted band says today is in this column, and colouring the
  text makes the column's first date read as today's date.

## Current workstreams and owners

| id      | Workstream                         | Owners        |
|---------|------------------------------------|---------------|
| `arm`   | ARM Controller                     | Xi, Sujan     |
| `disp`  | Display Controller                 | Xunduo, Seshu |
| `yocto` | Yocto and Software Updates         | Falguni       |
| `lic`   | Licensing and GUI Automation       | Andy          |
| `iq`    | IQ and Subscription                | Viraat        |
| `pcba`  | Controller PCBA Test Suite         | Sahil         |
| `docs`  | Documentation and Stress Testing   | YeuShyr       |

## Status of the data

The sub-tasks, dates and progress values seeded on 2026-09-15 are **placeholders**
awaiting confirmation from each owner. Treat any value I have not explicitly
confirmed as provisional, and say so if a change depends on one.

## Verifying a change

There is no test suite. After an edit:

1. Confirm `mjoule-arm-plan.js` still parses (matched braces, trailing commas are
   fine in this object but keep the style consistent).
2. Check that every new `start` is not after its `end`.
3. Check the dates fall inside the project window.
4. Keep `PROJECT` a top level `const` in that file. The page reads it as a
   global, so do not add `export`, wrap it in a function, or turn the tag into a
   module. If `PROJECT` is missing the page replaces itself with a "Plan data not
   loaded" panel instead of throwing.

Do not open a browser or take a screenshot unless I ask.
