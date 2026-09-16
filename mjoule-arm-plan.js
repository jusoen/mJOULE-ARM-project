/* ============================================================
   mJOULE ARM programme data.

   This file is the plan. Edit it as the programme moves on and
   leave mjoule-arm-gantt.html alone: the page derives status,
   overdue flags, roll-up progress and the whole timeline from
   the object below.

   Dates are inclusive and use ISO yyyy-mm-dd.
   progress is a whole percentage, 0 to 100.
   Sub-tasks are placeholders until each owner confirms them.
   ============================================================ */
const PROJECT = {
  name: 'mJOULE ARM Platform',
  start: '2026-06-01',
  finish: '2027-06-30',
  milestones: [
    { date:'2026-10-16', label:'Design freeze' },
    { date:'2026-12-18', label:'Alpha build' },
    { date:'2027-02-26', label:'Verification start' },
    { date:'2027-05-28', label:'V&V complete' },
    { date:'2027-06-30', label:'Release' }
  ],
  workstreams: [
    {
      id:'arm', name:'ARM Controller', owners:['Xi','Sujan'], colour:'#6366f1',
      tasks:[
        { name:'Board bring-up and BSP',                 start:'2026-06-01', end:'2026-07-10', progress:100 },
        { name:'Peripheral drivers (SPI, I2C, ADC)',     start:'2026-06-22', end:'2026-08-28', progress:100 },
        { name:'Laser control loop',                     start:'2026-08-03', end:'2026-10-16', progress:55 },
        { name:'Safety interlocks and fault handling',   start:'2026-09-07', end:'2026-11-27', progress:25, risk:true, note:'Placeholder. Gated on hazard analysis sign-off.' },
        { name:'ARM to Display comms protocol',          start:'2026-09-21', end:'2026-11-13', progress:10 },
        { name:'Firmware release candidate',             start:'2027-01-11', end:'2027-03-26', progress:0 },
        { name:'Field firmware hardening',               start:'2027-03-29', end:'2027-05-28', progress:0 }
      ]
    },
    {
      id:'disp', name:'Display Controller', owners:['Xunduo','Seshu'], colour:'#0ea5e9',
      tasks:[
        { name:'UI framework and architecture',          start:'2026-06-15', end:'2026-07-31', progress:100 },
        { name:'Screen flow wireframes',                 start:'2026-07-13', end:'2026-09-04', progress:100 },
        { name:'Treatment screens',                      start:'2026-08-24', end:'2026-11-20', progress:35 },
        { name:'Service and settings screens',           start:'2026-10-05', end:'2026-12-18', progress:5 },
        { name:'Display and ARM integration',            start:'2026-11-02', end:'2027-01-29', progress:0 },
        { name:'UI performance and latency tuning',      start:'2027-01-04', end:'2027-03-12', progress:0 },
        { name:'Localisation pass',                      start:'2027-03-01', end:'2027-04-16', progress:0 }
      ]
    },
    {
      id:'yocto', name:'Yocto and Software Updates', owners:['Falguni'], colour:'#10b981',
      tasks:[
        { name:'Yocto layer and BSP baseline',           start:'2026-06-01', end:'2026-08-14', progress:100 },
        { name:'Kernel and device tree tuning',          start:'2026-07-20', end:'2026-10-02', progress:70 },
        { name:'Image hardening and read-only rootfs',   start:'2026-09-14', end:'2026-11-27', progress:15, risk:true, note:'Placeholder. Needs the partition layout decision.' },
        { name:'OTA update agent',                       start:'2026-10-12', end:'2027-01-15', progress:0 },
        { name:'A/B partitions and rollback',            start:'2026-12-07', end:'2027-02-26', progress:0 },
        { name:'Signed update pipeline',                 start:'2027-02-01', end:'2027-04-09', progress:0 },
        { name:'Update soak on fleet units',             start:'2027-04-12', end:'2027-05-28', progress:0 }
      ]
    },
    {
      id:'lic', name:'Licensing and GUI Automation', owners:['Andy'], colour:'#f59e0b',
      tasks:[
        { name:'Licence key scheme design',              start:'2026-06-15', end:'2026-07-24', progress:100 },
        { name:'Activation and offline fallback',        start:'2026-07-27', end:'2026-10-09', progress:60 },
        { name:'GUI automation harness',                 start:'2026-08-17', end:'2026-11-06', progress:45 },
        { name:'Entitlement enforcement in GUI',         start:'2026-09-28', end:'2026-12-11', progress:10 },
        { name:'Regression suite build-out',             start:'2026-11-09', end:'2027-02-12', progress:0 },
        { name:'CI integration and nightly runs',        start:'2027-01-18', end:'2027-03-19', progress:0 },
        { name:'Automation coverage report',             start:'2027-03-22', end:'2027-05-07', progress:0 }
      ]
    },
    {
      id:'iq', name:'IQ and Subscription', owners:['Viraat'], colour:'#f43f5e',
      tasks:[
        { name:'IQ data model and schema',               start:'2026-06-29', end:'2026-08-21', progress:100 },
        { name:'Device to cloud sync service',           start:'2026-08-10', end:'2026-11-06', progress:40, risk:true, note:'Placeholder. Waiting on the cloud endpoint contract.' },
        { name:'Subscription tiers and rules',           start:'2026-09-21', end:'2026-12-04', progress:20 },
        { name:'Billing provider integration',           start:'2026-11-16', end:'2027-02-05', progress:0 },
        { name:'Usage telemetry and dashboards',         start:'2027-01-04', end:'2027-03-12', progress:0 },
        { name:'Customer portal hand-off',               start:'2027-03-15', end:'2027-04-30', progress:0 }
      ]
    },
    {
      id:'pcba', name:'Controller PCBA Test Suite', owners:['Sahil'], colour:'#a855f7',
      tasks:[
        { name:'Test requirements and coverage matrix',  start:'2026-07-06', end:'2026-08-28', progress:100 },
        { name:'Fixture design and build',               start:'2026-08-17', end:'2026-11-13', progress:50, risk:true, note:'Placeholder. Long lead items on the fixture BOM.' },
        { name:'Functional test scripts',                start:'2026-10-05', end:'2027-01-08', progress:5 },
        { name:'Calibration and trim routines',          start:'2026-12-07', end:'2027-02-26', progress:0 },
        { name:'Production data logging',                start:'2027-02-01', end:'2027-03-26', progress:0 },
        { name:'Line trial and handover to MFG',         start:'2027-04-05', end:'2027-05-21', progress:0 }
      ]
    },
    {
      id:'docs', name:'Documentation and Stress Testing', owners:['YeuShyr'], colour:'#64748b',
      tasks:[
        { name:'Doc plan and templates',                 start:'2026-06-08', end:'2026-07-17', progress:100 },
        { name:'SRS and SDS updates',                    start:'2026-07-20', end:'2026-10-30', progress:65 },
        { name:'Stress and soak test plan',              start:'2026-09-07', end:'2026-11-20', progress:20 },
        { name:'Thermal and endurance runs',             start:'2026-11-23', end:'2027-02-19', progress:0 },
        { name:'Defect triage and reporting',            start:'2027-01-04', end:'2027-04-30', progress:0 },
        { name:'Release documentation package',          start:'2027-04-05', end:'2027-06-18', progress:0 }
      ]
    }
  ]
};
