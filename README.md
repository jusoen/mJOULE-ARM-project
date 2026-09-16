# mJOULE ARM Programme Plan

> NOTE: All data is placeholder currently.

A self-contained Gantt chart for the mJOULE ARM Platform programme.

Target product: **mJOULE** covering *BBL HERO*, *BBL HEROic*, *MOXI* & *Super MOXI* (**no 1064**).

There is no build step and no server. Open `mjoule-arm-gantt.html` directly in a
browser from disk and the chart renders.

## Files

| File | Role |
|------|------|
| `mjoule-arm-plan.js`   | The data. Defines a single global `PROJECT` object. This is the file that changes as the programme moves on. |
| `mjoule-arm-gantt.html`| The view. Rendering, filters, tooltips and theming, plus Tailwind via CDN. |

The page pulls the data in with a plain `<script src="mjoule-arm-plan.js">` tag,
so the two files must stay side by side.

## Workstreams

| id      | Workstream                       | Owners        | Allocation |
|---------|----------------------------------|---------------|------------|
| `arm`   | ARM Controller                   | Xi, Sujan     | 100%       |
| `disp`  | Display Controller               | Xunduo, Seshu | 100%       |
| `yocto` | Yocto and Software Updates       | Falguni       | 100%       |
| `lic`   | Licensing and GUI Automation     | Andy          | 100%       |
| `iq`    | IQ and Subscription              | Viraat        | 100%       |
| `pcba`  | Controller PCBA Test Suite       | Sahil         | 100%       |
| `docs`  | Documentation and Stress Testing | YeuShyr       | 100%       |
| `vv`    | Support V&V                      | Neeku         | 50%        |

Allocation is the share of each owner's time committed to this programme.

## Updating the plan

Edit `mjoule-arm-plan.js` only. Everything else (task status, overdue flags,
workstream roll-up progress and the days-to-release count) is derived at load
time from the `PROJECT` object and must not be hand-written.
