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
        { name:'Code review',                             start:'2026-09-01', end:'2026-09-11', progress:0 },
        { name:'Code cleanup (commented sections)',       start:'2026-09-07', end:'2026-09-18', progress:0 },
        { name:'Fixing static code analysis results',     start:'2026-09-14', end:'2026-09-25', progress:0 },
        { name:'HW abstraction layer',                    start:'2026-09-21', end:'2026-09-30', progress:0 },
        { name:'HAL: Windows simulation for testing',     start:'2026-09-21', end:'2026-09-30', progress:0 },
        { name:'Convert all .hpp headers to .h',          start:'2026-09-21', end:'2026-09-30', progress:0 }
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
        { name:'Consolidate Yocto recipes into automated build',            start:'2026-09-01', end:'2026-09-18', progress:0 },
        { name:'Real-time clock management between Display and Controller', start:'2026-09-14', end:'2026-09-30', progress:0 },
        { name:'Generate SBOM using Yocto',                                 start:'2026-10-01', end:'2026-10-16', progress:0, note:'Placeholder dates, awaiting confirmation.' }
      ]
    },
    {
      id:'lic', name:'Licensing and GUI Automation', owners:['Andy'], colour:'#f59e0b',
      tasks:[
        { name:'License implementation for tip bypass', start:'2026-09-21', end:'2026-09-30', progress:0 },
        { name:'Generate tree for modality and application scope', start:'2026-09-21', end:'2026-09-30', progress:0 },
        { name:'Select application for initial test suite',        start:'2026-09-21', end:'2026-09-30', progress:0 }
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
        { name:'AVV-570 ADC Test Block',                                            start:'2026-07-06', end:'2026-08-16', progress:100 },
        { name:'AVV-572 Error Handling Test Block - IOEXP2',                        start:'2026-07-22', end:'2026-09-01', progress:100 },
        { name:'AVV-581 Error Handling Test Block - DAC1',                          start:'2026-08-08', end:'2026-09-18', progress:100 },
        { name:'AVV-675 DAC1 Test Block',                                           start:'2026-08-24', end:'2026-10-04', progress:100 },
        { name:'AVV-677 Safety CPU Boot Pin Test',                                  start:'2026-09-09', end:'2026-10-20', progress:100 },
        { name:'AVV-686 Miscellaneous Firmware related Tasks',                      start:'2026-09-25', end:'2026-11-05', progress:100 },
        { name:'AVV-698 SafetyBL testing via IO pins',                              start:'2026-10-12', end:'2026-11-22', progress:100 },
        { name:'AVV-571 IOEXP1 Test Block',                                         start:'2026-10-28', end:'2026-12-08', progress:50 },
        { name:'AVV-736 Integrate existing test firmware into TelNet Application',  start:'2026-11-13', end:'2026-12-24', progress:50 },
        { name:'AVV-589 Error Handling Test Block - IOEXP1',                        start:'2026-11-30', end:'2027-01-10', progress:0 },
        { name:'AVV-590 Error Handling Test Block - ADC1',                          start:'2026-12-16', end:'2027-01-26', progress:0 },
        { name:'AVV-714 Validate BBLINK SPI',                                       start:'2027-01-01', end:'2027-02-11', progress:0 },
        { name:'AVV-747 I2C Test Block',                                            start:'2027-01-18', end:'2027-02-28', progress:0 },
        { name:'AVV-748 BBL Interface Block',                                       start:'2027-02-03', end:'2027-03-16', progress:0 },
        { name:'AVV-749 Merge primary branch back into main',                       start:'2027-02-19', end:'2027-04-01', progress:0 },
        { name:'AVV-750 Markup schematic with inconsitencies/errors',               start:'2027-03-07', end:'2027-04-17', progress:0 },
        { name:'AVV-751 Add version information to allow release tracking',         start:'2027-03-24', end:'2027-05-04', progress:0 },
        { name:'AVV-752 Basic support for command line interface',                  start:'2027-04-09', end:'2027-05-20', progress:0 }
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
