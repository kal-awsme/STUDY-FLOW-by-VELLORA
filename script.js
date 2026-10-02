(() => {
  'use strict';

  const KEY = 'studyflow_vellora_v1';
  const LANG_KEY = 'studyflow_vellora_lang';
  const DEFAULT_RANGE = 'today';
  const PRIORITIES = ['critical','important','quite','lately','normal'];

  const I18N = {
    en: {
      greetingMorning:'Good morning', greetingAfternoon:'Good afternoon', greetingEvening:'Good evening',
      heroTitle:'What should I focus on?', heroSub:'Keep your momentum gentle and consistent.',
      todayFocus:"Today's focus", viewPlan:'View plan', upcoming:'Upcoming', upcomingTitle:'Keep an eye on these', seeAll:'See all',
      workspaceKicker:'Your space', workspaceTitle:'Workspace', workspaceSub:'Shape it around your life.', search:'Search folders and tasks', workspaceHintTitle:'Make it yours', workspaceHint:'Create folders for school, work, personal goals, projects, or anything else that matters.',
      planKicker:'Your timeline', planTitle:'Plan', planSub:'Everything in one calm view.', today:'Today', thisWeek:'This week', thisMonth:'This month', thisYear:'This year', all:'All',
      focusKicker:'Deep work', focusTitle:'Focus', focusSub:'One task. One session. No rush.', focusTipTitle:'A small session still counts.', focusTip:'Start with what matters most, then let momentum do the rest.',
      calendarKicker:'Your dates', calendarTitle:'Calendar', calendarSub:'See deadlines without the noise.', calendarSubShort:'Deadlines & dates',
      progressKicker:'Keep moving', progressTitle:'Progress', progressSub:'Your momentum, without pressure.', progressSubShort:'Momentum & stats', recentActivity:'Recent activity', smallWins:'Small wins add up.',
      moreKicker:'More space', moreTitle:'More', moreSub:'Tools that support your flow.', settingsTitle:'Settings', settingsSubShort:'Language & reminders', aboutTitle:'About',
      navHome:'Home', navWorkspace:'Workspace', navPlan:'Plan', navFocus:'Focus', navMore:'More',
      taskSheetKicker:'Build your next step', addTaskTitle:'Add task', taskName:'Task name', taskPlaceholder:'e.g. Review chapter 4', folderLabel:'Folder', priorityLabel:'Priority', deadlineLabel:'Deadline', reminderLabel:'Reminder', notesLabel:'Notes', notesPlaceholder:'Optional note', addTask:'Add task', updateTask:'Update task',
      folderSheetKicker:'Make your own space', newFolder:'New folder', folderName:'Folder name', folderPlaceholder:'e.g. School', saveFolder:'Save folder',
      settingsKicker:'Personalize', language:'Language', languageSub:'Choose your interface language.', notifications:'Notifications', notificationsSub:'Deadline reminders while StudyFlow is active.', demoData:'Demo data', demoDataSub:'Reset the workspace to the polished starter set.', reset:'Reset', clearData:'Clear local data', clearDataSub:'Remove all folders and tasks from this browser.', clear:'Clear',
      notificationsKicker:'Stay aware', notificationsTitle:'Notifications', aboutText:'A calm personal productivity workspace built to help you focus on what matters next.',
      critical:'Critical', important:'Important', quite:'Quite important', lately:'Lately', normal:'Normal',
      noTasks:'Nothing here yet.', noTasksSub:'Add a task and give your next step a place to land.', noFolders:'No folders yet.', noFoldersSub:'Create your first space, then add what matters inside.',
      dueToday:'Due today', dueTomorrow:'Due tomorrow', dueIn:'Due in', overdue:'Overdue', noDeadline:'No deadline', completed:'Completed', open:'Open',
      addFirstTask:'Add your first task', addFolder:'Add folder', focusNow:'Focus now', markDone:'Mark as done', edit:'Edit', delete:'Delete', move:'Move',
      focusStart:'Start focus', focusPause:'Pause', focusResume:'Resume', focusFinish:'Finish session', noFocus:'Choose a task to focus on.', selectTask:'Select task',
      momentum:'momentum', activeDays:'active days', tasksDone:'tasks completed', completion:'completion', todayProgress:'today',
      recentCompleted:'Completed', noActivity:'Your completed tasks will appear here.',
      languageChanged:'Language updated', taskCreated:'Task created', taskUpdated:'Task updated', taskCompleted:'Task completed', taskReopened:'Task reopened', folderCreated:'Folder created', folderUpdated:'Folder updated', folderDeleted:'Folder deleted', taskDeleted:'Task deleted', dataCleared:'Local data cleared', demoReset:'Demo workspace restored',
      confirmDeleteFolder:'Delete this folder and all tasks inside it?', confirmDeleteTask:'Delete this task?', confirmClear:'Clear all local StudyFlow data?',
      notificationPermission:'Enable browser reminders', notificationsOn:'Notifications on', notificationsOff:'Notifications off', notificationBlocked:'Browser notifications are blocked.',
      noNotifications:'No active reminders right now.', reminder:'Reminder', dueSoon:'Due soon',
      focusSessionDone:'Focus session completed', focusSessionLogged:'Your session was added to progress.',
      about:'About', todayEmpty:'No tasks due today. A clear space can be a good thing.', upcomingEmpty:'No upcoming deadlines yet.',
      items:'items', folder:'folder', task:'task', tasks:'tasks', start:'Start', finish:'Finish',
      calendarNoTasks:'No tasks for this date.', calendarSelected:'Selected date',
      statsCompleted:'Completed', statsActiveDays:'Active days', statsFocus:'Focus sessions', statsCompletion:'Completion rate'
    },
    id: {
      greetingMorning:'Selamat pagi', greetingAfternoon:'Selamat siang', greetingEvening:'Selamat malam',
      heroTitle:'Apa yang harus aku fokuskan?', heroSub:'Jaga momentum dengan tenang dan konsisten.',
      todayFocus:'Fokus hari ini', viewPlan:'Lihat rencana', upcoming:'Mendatang', upcomingTitle:'Yang perlu diperhatikan', seeAll:'Lihat semua',
      workspaceKicker:'Ruangmu', workspaceTitle:'Workspace', workspaceSub:'Bentuk sesuai hidupmu.', search:'Cari folder dan tugas', workspaceHintTitle:'Buat milikmu sendiri', workspaceHint:'Buat folder untuk sekolah, kerja, tujuan pribadi, project, atau apa pun yang penting.',
      planKicker:'Timeline kamu', planTitle:'Rencana', planSub:'Semuanya dalam satu tampilan yang tenang.', today:'Hari ini', thisWeek:'Minggu ini', thisMonth:'Bulan ini', thisYear:'Tahun ini', all:'Semua',
      focusKicker:'Kerja mendalam', focusTitle:'Fokus', focusSub:'Satu tugas. Satu sesi. Tanpa terburu-buru.', focusTipTitle:'Sesi kecil tetap berarti.', focusTip:'Mulai dari yang paling penting, lalu biarkan momentum melanjutkan.',
      calendarKicker:'Tanggalmu', calendarTitle:'Kalender', calendarSub:'Lihat deadline tanpa keributan.', calendarSubShort:'Deadline & tanggal',
      progressKicker:'Terus bergerak', progressTitle:'Progres', progressSub:'Momentum tanpa tekanan.', progressSubShort:'Momentum & statistik', recentActivity:'Aktivitas terbaru', smallWins:'Langkah kecil akan menumpuk.',
      moreKicker:'Ruang tambahan', moreTitle:'Lainnya', moreSub:'Alat yang mendukung alurmu.', settingsTitle:'Pengaturan', settingsSubShort:'Bahasa & pengingat', aboutTitle:'Tentang',
      navHome:'Home', navWorkspace:'Workspace', navPlan:'Rencana', navFocus:'Fokus', navMore:'Lainnya',
      taskSheetKicker:'Bangun langkah berikutnya', addTaskTitle:'Tambah tugas', taskName:'Nama tugas', taskPlaceholder:'mis. Pelajari bab 4', folderLabel:'Folder', priorityLabel:'Prioritas', deadlineLabel:'Deadline', reminderLabel:'Pengingat', notesLabel:'Catatan', notesPlaceholder:'Catatan opsional', addTask:'Tambah tugas', updateTask:'Perbarui tugas',
      folderSheetKicker:'Buat ruangmu sendiri', newFolder:'Folder baru', folderName:'Nama folder', folderPlaceholder:'mis. Sekolah', saveFolder:'Simpan folder',
      settingsKicker:'Personalisasi', language:'Bahasa', languageSub:'Pilih bahasa antarmuka.', notifications:'Notifikasi', notificationsSub:'Pengingat deadline saat StudyFlow aktif.', demoData:'Data demo', demoDataSub:'Kembalikan workspace ke data awal yang rapi.', reset:'Reset', clearData:'Hapus data lokal', clearDataSub:'Hapus semua folder dan tugas dari browser ini.', clear:'Hapus',
      notificationsKicker:'Tetap sadar', notificationsTitle:'Notifikasi', aboutText:'Workspace produktivitas personal yang tenang untuk membantumu fokus pada hal berikutnya yang penting.',
      critical:'Sangat penting', important:'Penting', quite:'Cukup penting', lately:'Belakangan', normal:'Normal',
      noTasks:'Belum ada apa-apa di sini.', noTasksSub:'Tambahkan tugas dan beri tempat untuk langkah berikutnya.', noFolders:'Belum ada folder.', noFoldersSub:'Buat ruang pertamamu, lalu masukkan hal yang penting.',
      dueToday:'Deadline hari ini', dueTomorrow:'Deadline besok', dueIn:'Deadline dalam', overdue:'Terlewat', noDeadline:'Tanpa deadline', completed:'Selesai', open:'Buka',
      addFirstTask:'Tambah tugas pertama', addFolder:'Tambah folder', focusNow:'Fokus sekarang', markDone:'Tandai selesai', edit:'Edit', delete:'Hapus', move:'Pindah',
      focusStart:'Mulai fokus', focusPause:'Jeda', focusResume:'Lanjut', focusFinish:'Selesaikan sesi', noFocus:'Pilih tugas untuk difokuskan.', selectTask:'Pilih tugas',
      momentum:'momentum', activeDays:'hari aktif', tasksDone:'tugas selesai', completion:'penyelesaian', todayProgress:'hari ini',
      recentCompleted:'Selesai', noActivity:'Tugas yang selesai akan muncul di sini.',
      languageChanged:'Bahasa diperbarui', taskCreated:'Tugas dibuat', taskUpdated:'Tugas diperbarui', taskCompleted:'Tugas selesai', taskReopened:'Tugas dibuka lagi', folderCreated:'Folder dibuat', folderUpdated:'Folder diperbarui', folderDeleted:'Folder dihapus', taskDeleted:'Tugas dihapus', dataCleared:'Data lokal dihapus', demoReset:'Workspace demo dipulihkan',
      confirmDeleteFolder:'Hapus folder ini beserta semua tugas di dalamnya?', confirmDeleteTask:'Hapus tugas ini?', confirmClear:'Hapus semua data lokal StudyFlow?',
      notificationPermission:'Aktifkan pengingat browser', notificationsOn:'Notifikasi aktif', notificationsOff:'Notifikasi nonaktif', notificationBlocked:'Notifikasi browser diblokir.',
      noNotifications:'Tidak ada pengingat aktif saat ini.', reminder:'Pengingat', dueSoon:'Segera jatuh tempo',
      focusSessionDone:'Sesi fokus selesai', focusSessionLogged:'Sesi ditambahkan ke progres.',
      about:'Tentang', todayEmpty:'Tidak ada tugas yang jatuh tempo hari ini. Ruang kosong juga bisa menjadi hal baik.', upcomingEmpty:'Belum ada deadline mendatang.',
      items:'item', folder:'folder', task:'tugas', tasks:'tugas', start:'Mulai', finish:'Selesai',
      calendarNoTasks:'Tidak ada tugas pada tanggal ini.', calendarSelected:'Tanggal terpilih',
      statsCompleted:'Selesai', statsActiveDays:'Hari aktif', statsFocus:'Sesi fokus', statsCompletion:'Tingkat selesai'
    }
  };

  const icons = {
    home:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1Z"/></svg>`,
    folder:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 6.5h6l2 2H20a1 1 0 0 1 1 1v7.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8.5a2 2 0 0 1 .5-2Z"/></svg>`,
    'check-square':`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="m8 12 2.4 2.4L16.5 9"/></svg>`,
    timer:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="7.5"/><path d="M12 9v4l2.5 1.5M9 3h6M12 5.5V3"/></svg>`,
    more:`<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.7"/><circle cx="12" cy="12" r="1.7"/><circle cx="19" cy="12" r="1.7"/></svg>`,
    bell:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></svg>`,
    search:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 5 5"/></svg>`,
    sparkles:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 1.2 4.8L18 9l-4.8 1.2L12 15l-1.2-4.8L6 9l4.8-1.2Z"/><path d="m19 14 .6 2.4L22 17l-2.4.6L19 20l-.6-2.4L16 17l2.4-.6Z"/></svg>`,
    'chevron-right':`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg>`,
    'chevron-left':`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m15 5-7 7 7 7"/></svg>`,
    x:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round"><path d="m6 6 12 12M18 6 6 18"/></svg>`,
    settings:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/><path d="m19.4 15 .1.1-1.8 3.1-.1-.1a2 2 0 0 0-2.1.1l-.2.1a2 2 0 0 0-.9 1.8v.1h-3.6v-.1a2 2 0 0 0-.9-1.8l-.2-.1a2 2 0 0 0-2.1-.1l-.1.1-1.8-3.1.1-.1a2 2 0 0 0 .2-2.1l-.1-.2a2 2 0 0 0-1.6-1.1H4V8h.2a2 2 0 0 0 1.6-1.1l.1-.2a2 2 0 0 0-.2-2.1l-.1-.1 1.8-3.1.1.1a2 2 0 0 0 2.1-.1l.2-.1A2 2 0 0 0 10.7 0h3.6v.1a2 2 0 0 0 .9 1.8l.2.1a2 2 0 0 0 2.1.1l.1-.1 1.8 3.1-.1.1a2 2 0 0 0-.2 2.1l.1.2A2 2 0 0 0 20.8 8H21v3.6h-.2a2 2 0 0 0-1.6 1.1l-.1.2a2 2 0 0 0 .3 2.1Z" transform="scale(.72) translate(4.5 4.5)"/></svg>`,
    calendar:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="16" rx="3"/><path d="M7 3v4M17 3v4M3.5 9.5h17"/></svg>`,
    flame:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M13.2 2.8c.5 3.1-1.3 4.7-2.7 6.1-1.2 1.2-2.1 2.3-1.8 4.1.2 1.3 1.2 2.2 2.5 2.4-1.1-2 .1-3.3 1.1-4.3 1.5 1.3 2.5 2.8 2.2 4.8 1.4-.7 2.3-2 2.3-3.8 0-2.5-1.6-5.4-3.6-9.3Z"/><path d="M7.8 15.2c-.8.9-1.3 2-1.3 3.2A5.5 5.5 0 0 0 12 24a5.5 5.5 0 0 0 5.5-5.5" transform="translate(0 -2.5)"/></svg>`,
    info:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.5"/><path d="M12 10.5v5M12 7.5h.01"/></svg>`,
    plus:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>`,
    check:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 4.2 4L19 7"/></svg>`,
    edit:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m4 16.5-.8 4.3 4.3-.8L19 8.5 15.5 5 4 16.5Z"/><path d="m13.8 6.7 3.5 3.5"/></svg>`,
    trash:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M5 7h14M9 7V4h6v3M8 10v7M12 10v7M16 10v7M6 7l1 14h10l1-14"/></svg>`,
    play:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l10-6.5L8 5.5Z"/></svg>`,
    pause:`<svg viewBox="0 0 24 24" fill="currentColor"><rect x="7" y="5" width="4" height="14" rx="1"/><rect x="13" y="5" width="4" height="14" rx="1"/></svg>`,
    reset:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5v5h5"/><path d="M5.5 14a7 7 0 1 0 1.2-6.2L4 10"/></svg>`,
    clock:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3.2 2"/></svg>`
  };

  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => [...root.querySelectorAll(s)];
  const uid = () => crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const todayKey = (d=new Date()) => { const y=d.getFullYear(),m=String(d.getMonth()+1).padStart(2,'0'),day=String(d.getDate()).padStart(2,'0'); return `${y}-${m}-${day}`; };
  const dateFromKey = key => key ? new Date(`${key}T00:00:00`) : null;
  const escapeHTML = s => String(s ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  const fmtDate = (iso, opts={month:'short',day:'numeric'}) => iso ? new Intl.DateTimeFormat(state.lang==='id'?'id-ID':'en-US',opts).format(new Date(iso)) : t('noDeadline');
  const fmtDateTime = iso => iso ? new Intl.DateTimeFormat(state.lang==='id'?'id-ID':'en-US',{month:'short',day:'numeric',hour:'numeric',minute:'2-digit'}).format(new Date(iso)) : t('noDeadline');
  const clamp = (n,a,b) => Math.max(a,Math.min(b,n));

  function t(key){ return I18N[state.lang]?.[key] ?? I18N.en[key] ?? key; }
  function icon(name){ return icons[name] || ''; }
  function injectIcons(){ $$('[data-icon]').forEach(el=>{ const n=el.dataset.icon; if(icons[n]) el.innerHTML=icons[n]; }); }
  function priorityLabel(p){ return t(p); }
  function priorityClass(p){ return `priority-${p}`; }
  function dotClass(p){ return `p-${p}`; }

  function seedData(){
    const now=new Date();
    const at=(days,h=18)=>{ const d=new Date(now); d.setDate(d.getDate()+days); d.setHours(h,0,0,0); return d.toISOString(); };
    const folders=[
      {id:uid(),name:'School',createdAt:now.toISOString()},
      {id:uid(),name:'Work',createdAt:now.toISOString()},
      {id:uid(),name:'Personal',createdAt:now.toISOString()}
    ];
    const [school,work,personal]=folders;
    const tasks=[
      {id:uid(),title:'Review Biology chapter 4',folderId:school.id,priority:'important',deadline:at(1,19),reminder:60,notes:'Cell structure and transport',completed:false,createdAt:now.toISOString()},
      {id:uid(),title:'Finish Chemistry practice set',folderId:school.id,priority:'quite',deadline:at(3,18),reminder:1440,notes:'Questions 1–20',completed:false,createdAt:now.toISOString()},
      {id:uid(),title:'Prepare coding landing page',folderId:work.id,priority:'critical',deadline:at(2,21),reminder:60,notes:'Polish mobile hero section',completed:false,createdAt:now.toISOString()},
      {id:uid(),title:'Read 20 pages',folderId:personal.id,priority:'lately',deadline:at(5,20),reminder:0,notes:'Continue current book',completed:false,createdAt:now.toISOString()},
      {id:uid(),title:'Organize project notes',folderId:work.id,priority:'normal',deadline:at(8,18),reminder:1440,notes:'Move loose notes into folders',completed:false,createdAt:now.toISOString()},
      {id:uid(),title:'Walk through English speaking practice',folderId:personal.id,priority:'normal',deadline:at(0,20),reminder:60,notes:'10 minutes out loud',completed:false,createdAt:now.toISOString()}
    ];
    return {settings:{language:'en',notifications:false},folders,tasks,activity:[],focusSessions:[],createdAt:now.toISOString()};
  }

  function loadData(){
    try{ const raw=localStorage.getItem(KEY); if(raw){ const parsed=JSON.parse(raw); if(parsed?.folders&&parsed?.tasks) return parsed; } }catch(e){ console.warn('StudyFlow load failed',e); }
    return seedData();
  }
  function save(){ localStorage.setItem(KEY,JSON.stringify(state.data)); }

  const state={
    data:loadData(), lang:localStorage.getItem(LANG_KEY)||'en', view:'home', range:DEFAULT_RANGE, selectedDate:todayKey(), calendarMonth:new Date(new Date().getFullYear(),new Date().getMonth(),1), search:'', editingTaskId:null, editingFolderId:null, focusTaskId:null, timer:null
  };
  state.lang=state.data.settings?.language || state.lang;

  function ensureData(){
    state.data.settings ||= {language:state.lang,notifications:false};
    state.data.folders ||= []; state.data.tasks ||= []; state.data.activity ||= []; state.data.focusSessions ||= [];
    state.data.tasks.forEach(t=>{ if(!t.priority)t.priority='normal'; if(t.completed && !t.completedAt)t.completedAt=t.createdAt; });
  }
  ensureData(); save();

  function applyTranslations(){
    document.documentElement.lang=state.lang;
    $$('[data-i18n]').forEach(el=>{ const key=el.dataset.i18n; el.textContent=t(key); });
    $$('[data-i18n-placeholder]').forEach(el=>{ el.placeholder=t(el.dataset.i18nPlaceholder); });
    $('#language-select').value=state.lang;
    $('#notification-toggle').classList.toggle('on',!!state.data.settings.notifications);
    $('#notification-toggle').setAttribute('aria-pressed',String(!!state.data.settings.notifications));
    const submit=$('#task-submit'); if(submit) submit.textContent=state.editingTaskId?t('updateTask'):t('addTask');
  }

  function greeting(){ const h=new Date().getHours(); return h<12?t('greetingMorning'):h<18?t('greetingAfternoon'):t('greetingEvening'); }
  function daysDiff(iso){ if(!iso)return null; const d=new Date(iso); const now=new Date(); const a=new Date(now.getFullYear(),now.getMonth(),now.getDate()); const b=new Date(d.getFullYear(),d.getMonth(),d.getDate()); return Math.round((b-a)/86400000); }
  function dueLabel(task){
    if(!task.deadline)return t('noDeadline'); if(task.completed)return t('completed');
    const d=daysDiff(task.deadline); if(d<0)return t('overdue'); if(d===0)return t('dueToday'); if(d===1)return t('dueTomorrow');
    if(d<7)return `${t('dueIn')} ${d}d`; return fmtDate(task.deadline,{month:'short',day:'numeric'});
  }
  function dueTone(task){ const d=daysDiff(task.deadline); if(d!==null&&d<0&&!task.completed)return 'overdue'; if(d!==null&&d<=1&&!task.completed)return 'soon'; return ''; }
  function sortTasks(tasks){ return [...tasks].sort((a,b)=>{ if(a.completed!==b.completed)return a.completed?1:-1; const p=PRIORITIES.indexOf(a.priority)-PRIORITIES.indexOf(b.priority); if(p)return p; if(a.deadline&&b.deadline)return new Date(a.deadline)-new Date(b.deadline); if(a.deadline)return -1;if(b.deadline)return 1; return new Date(b.createdAt)-new Date(a.createdAt); }); }
  function activeTasks(){ return state.data.tasks.filter(x=>!x.completed); }
  function folderById(id){ return state.data.folders.find(f=>f.id===id); }

  function priorityCard(){
    const task=sortTasks(activeTasks().filter(x=>x.deadline || x.priority==='critical'))[0] || sortTasks(activeTasks())[0];
    const el=$('#priority-card');
    if(!task){ el.innerHTML=`<div class="empty-state"><span>${icon('sparkles')}</span><strong>${t('todayEmpty')}</strong><p>${t('todayEmpty')}</p><button class="primary-btn" data-action="add-task" style="margin-top:12px">${t('addFirstTask')}</button></div>`; return; }
    const folder=folderById(task.folderId);
    el.innerHTML=`<div class="priority-top"><span class="micro-label">NEXT PRIORITY</span><span class="priority-badge ${priorityClass(task.priority)}">${escapeHTML(priorityLabel(task.priority))}</span></div><div class="priority-main"><h2>${escapeHTML(task.title)}</h2><p class="priority-meta">${escapeHTML(folder?.name||'Workspace')} · ${task.notes?escapeHTML(task.notes):escapeHTML(t('focusNow'))}</p></div><div class="priority-foot"><div class="deadline-copy">${escapeHTML(dueLabel(task))}<strong>${task.deadline?escapeHTML(fmtDateTime(task.deadline)):escapeHTML(t('noDeadline'))}</strong></div><button class="focus-link" data-action="open-task" data-id="${task.id}">${t('focusNow')} →</button></div>`;
  }

  function taskCard(task,{agenda=false}={}){
    const folder=folderById(task.folderId); const tone=dueTone(task);
    return `<article class="task-card ${task.completed?'completed':''} ${agenda?'agenda-card':''}" data-task-card="${task.id}">
      <button class="task-check" data-action="toggle-task" data-id="${task.id}" aria-label="${task.completed?t('open'):t('markDone')}">${icon('check')}</button>
      <button class="task-content" data-action="open-task" data-id="${task.id}" style="background:none;border:0;text-align:left;padding:0"><strong>${escapeHTML(task.title)}</strong><small>${escapeHTML(folder?.name||'Workspace')} · ${escapeHTML(task.notes||priorityLabel(task.priority))}</small></button>
      <div class="task-side"><span class="tiny-priority ${dotClass(task.priority)}"></span><span class="due-text ${tone}">${escapeHTML(dueLabel(task))}</span></div>
    </article>`;
  }

  function renderHome(){
    $('#priority-card').closest('.view').querySelector('.eyebrow').textContent=greeting();
    priorityCard();
    const today=state.data.tasks.filter(x=>!x.completed && (!x.deadline || todayKey(new Date(x.deadline))===todayKey()));
    const focus=sortTasks(today)[0] || sortTasks(activeTasks())[0];
    $('#today-focus').innerHTML=focus?taskCard(focus):`<div class="empty-state">${icon('sparkles')}<strong>${t('todayEmpty')}</strong><p>${t('todayEmpty')}</p><button class="primary-btn" data-action="add-task" style="margin-top:12px">${t('addFirstTask')}</button></div>`;
    const upcoming=sortTasks(activeTasks().filter(x=>x.deadline)).slice(0,3);
    $('#upcoming-list').innerHTML=upcoming.length?upcoming.map(x=>taskCard(x)).join(''):`<div class="empty-state">${icon('calendar')}<strong>${t('upcomingEmpty')}</strong></div>`;
    $('#momentum-mini').innerHTML=momentumMini();
  }

  function momentumStats(){
    const completed=state.data.tasks.filter(t=>t.completed).length;
    const activeDates=new Set(state.data.tasks.filter(t=>t.completedAt).map(t=>todayKey(new Date(t.completedAt))));
    const sessions=state.data.focusSessions.length;
    const total=state.data.tasks.length; const completion=total?Math.round(completed/total*100):0;
    return {completed,activeDays:activeDates.size,sessions,completion};
  }
  function momentumMini(){ const s=momentumStats(); return `<div class="momentum-mini"><div class="momentum-icon">${icon('flame')}</div><div><strong>${s.activeDays} ${t('momentum')}</strong><p>${s.activeDays} ${t('activeDays')} · ${s.completed} ${t('tasksDone')}</p></div><div class="momentum-value"><strong>${s.completion}%</strong><small>${t('completion')}</small></div></div>`; }

  function renderWorkspace(){
    const q=state.search.trim().toLowerCase();
    let folders=state.data.folders;
    if(q){ folders=folders.filter(f=>f.name.toLowerCase().includes(q)||state.data.tasks.some(t=>t.folderId===f.id&&t.title.toLowerCase().includes(q))); }
    $('#folder-grid').innerHTML=folders.length?folders.map(folder=>{
      const count=state.data.tasks.filter(t=>t.folderId===folder.id&&!t.completed).length;
      return `<article class="folder-card" data-folder="${folder.id}"><button class="folder-menu" data-action="folder-menu" data-id="${folder.id}" aria-label="${t('settingsTitle')}">${icon('more')}</button><button data-action="open-folder" data-id="${folder.id}" style="display:flex;flex-direction:column;align-items:flex-start;gap:0;background:none;text-align:left;padding:0;width:100%;height:100%"><span class="folder-icon">${icon('folder')}</span><span style="margin-top:auto"><strong>${escapeHTML(folder.name)}</strong><small>${count} ${count===1?t('task'):t('tasks')}</small></span></button></article>`;
    }).join(''):`<div class="empty-state" style="grid-column:1/-1">${icon('folder')}<strong>${t('noFolders')}</strong><p>${t('noFoldersSub')}</p><button class="primary-btn" data-action="add-folder" style="margin-top:12px">${t('addFolder')}</button></div>`;
  }

  function renderPlan(){
    $$('#time-filters button').forEach(b=>b.classList.toggle('active',b.dataset.range===state.range));
    const tasks=sortTasks(state.data.tasks.filter(task=>inRange(task,state.range)));
    const active=tasks.filter(x=>!x.completed).length; const done=tasks.filter(x=>x.completed).length;
    $('#plan-summary').innerHTML=`<div><strong>${rangeLabel()}</strong><small>${active} ${t('tasks')} · ${done} ${t('completed').toLowerCase()}</small></div><div class="summary-count"><strong>${tasks.length}</strong><small>${t('items')}</small></div>`;
    if(!tasks.length){ $('#plan-list').innerHTML=`<div class="empty-state">${icon('check-square')}<strong>${t('noTasks')}</strong><p>${t('noTasksSub')}</p><button class="primary-btn" data-action="add-task" style="margin-top:12px">${t('addTask')}</button></div>`;return; }
    const groups={}; tasks.forEach(x=>{ const k=x.deadline?todayKey(new Date(x.deadline)):'no-date'; (groups[k] ||= []).push(x); });
    $('#plan-list').innerHTML=Object.entries(groups).map(([key,arr])=>`<div><div class="section-divider">${key==='no-date'?t('noDeadline'):formatGroupDate(key)}</div>${arr.map(taskCard).join('')}</div>`).join('');
  }
  function rangeLabel(){ return {today:t('today'),week:t('thisWeek'),month:t('thisMonth'),year:t('thisYear'),all:t('all')}[state.range]; }
  function formatGroupDate(key){ const d=dateFromKey(key), now=new Date(); if(key===todayKey())return t('today'); const tomorrow=new Date(now);tomorrow.setDate(tomorrow.getDate()+1); if(key===todayKey(tomorrow))return t('dueTomorrow'); return new Intl.DateTimeFormat(state.lang==='id'?'id-ID':'en-US',{weekday:'short',month:'short',day:'numeric'}).format(d); }
  function inRange(task,range){
    if(range==='all')return true; if(!task.deadline)return range==='today'?todayKey()===todayKey():true;
    const d=new Date(task.deadline), now=new Date(); const start=new Date(now.getFullYear(),now.getMonth(),now.getDate());
    if(range==='today')return todayKey(d)===todayKey(start);
    if(range==='week'){ const day=start.getDay(); const monday=new Date(start); monday.setDate(start.getDate()-(day===0?6:day-1)); const end=new Date(monday);end.setDate(monday.getDate()+7);return d>=monday&&d<end; }
    if(range==='month')return d.getFullYear()===start.getFullYear()&&d.getMonth()===start.getMonth();
    if(range==='year')return d.getFullYear()===start.getFullYear();
    return true;
  }

  function renderFocus(){
    let task=state.focusTaskId?state.data.tasks.find(t=>t.id===state.focusTaskId&&!t.completed):null;
    if(!task) task=sortTasks(activeTasks())[0];
    if(!task){$('#focus-panel').innerHTML=`<div class="empty-state">${icon('timer')}<strong>${t('noFocus')}</strong><p>${t('noTasksSub')}</p><button class="primary-btn" data-action="add-task" style="margin-top:12px">${t('addTask')}</button></div>`;return;}
    state.focusTaskId=task.id;
    const running=state.timer?.taskId===task.id&&state.timer.running; const remaining=state.timer?.taskId===task.id?state.timer.remaining:25*60; const pct=(25*60-remaining)/(25*60)*100;
    const mm=String(Math.floor(remaining/60)).padStart(2,'0'), ss=String(remaining%60).padStart(2,'0');
    const folder=folderById(task.folderId);
    $('#focus-panel').innerHTML=`<div class="focus-kicker">${t('focusKicker')}</div><h2 class="focus-task-name">${escapeHTML(task.title)}</h2><p class="focus-folder">${escapeHTML(folder?.name||'Workspace')} · ${escapeHTML(priorityLabel(task.priority))}</p><div class="timer-ring" style="--progress:${pct}%"><div class="timer-inner"><div class="timer-time">${mm}:${ss}</div><span class="timer-label">${running?t('focusTitle'):t('focusStart')}</span></div></div><div class="focus-actions">${running?`<button class="secondary-btn" data-action="pause-timer">${icon('pause')} ${t('focusPause')}</button>`:`<button class="primary-btn" data-action="start-timer">${icon('play')} ${state.timer?.taskId===task.id&&state.timer.remaining<25*60?t('focusResume'):t('focusStart')}</button>`}<button class="secondary-btn" data-action="finish-focus">${t('focusFinish')}</button></div>`;
  }

  function renderCalendar(){
    const y=state.calendarMonth.getFullYear(), m=state.calendarMonth.getMonth();
    $('#calendar-label').innerHTML=`<div class="calendar-title">${new Intl.DateTimeFormat(state.lang==='id'?'id-ID':'en-US',{month:'long',year:'numeric'}).format(state.calendarMonth)}</div>`;
    const weekdays=state.lang==='id'?['Min','Sen','Sel','Rab','Kam','Jum','Sab']:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    $('#weekdays').innerHTML=weekdays.map(x=>`<div>${x}</div>`).join('');
    const first=new Date(y,m,1).getDay(), total=new Date(y,m+1,0).getDate(), prevTotal=new Date(y,m,0).getDate();
    const cells=[]; for(let i=0;i<first;i++){const d=prevTotal-first+i+1;cells.push(`<div class="calendar-day muted">${d}</div>`)}
    for(let day=1;day<=total;day++){const key=todayKey(new Date(y,m,day));const has=state.data.tasks.some(t=>t.deadline&&todayKey(new Date(t.deadline))===key);const cls=[key===todayKey()?'today':'',key===state.selectedDate?'selected':'',has?'has-task':''].filter(Boolean).join(' ');cells.push(`<button class="calendar-day ${cls}" data-action="select-date" data-date="${key}">${day}</button>`)}
    while(cells.length%7)cells.push(`<div class="calendar-day muted">${cells.length-first-total+1}</div>`);
    $('#calendar-grid').innerHTML=cells.join('');
    const selected=sortTasks(state.data.tasks.filter(t=>t.deadline&&todayKey(new Date(t.deadline))===state.selectedDate));
    $('#calendar-agenda').innerHTML=`<div class="calendar-agenda-title">${t('calendarSelected')}</div><p class="agenda-date">${new Intl.DateTimeFormat(state.lang==='id'?'id-ID':'en-US',{weekday:'long',month:'long',day:'numeric',year:'numeric'}).format(dateFromKey(state.selectedDate))}</p>${selected.length?selected.map(x=>taskCard(x,{agenda:true})).join(''):`<div class="empty-state">${icon('calendar')}<strong>${t('calendarNoTasks')}</strong><button class="primary-btn" data-action="add-task" style="margin-top:12px">${t('addTask')}</button></div>`}`;
  }

  function renderProgress(){
    const s=momentumStats(); const pct=s.completion; $('#progress-hero').innerHTML=`<div class="progress-hero"><div class="progress-ring" style="--percent:${pct}%"><div class="progress-ring-content"><strong>${s.activeDays}</strong><small>${t('activeDays')}</small></div></div><div><h2>${s.activeDays} ${t('momentum')}</h2><p>${s.completed} ${t('tasksDone')}. ${pct}% ${t('completion')}.</p></div></div>`;
    $('#progress-stats').innerHTML=[['check',s.completed,t('statsCompleted')],['flame',s.activeDays,t('statsActiveDays')],['timer',s.sessions,t('statsFocus')],['check-square',`${pct}%`,t('statsCompletion')]].map(([i,v,l])=>`<div class="stat-card"><span>${icon(i)}</span><strong>${v}</strong><small>${l}</small></div>`).join('');
    const acts=[...state.data.activity].sort((a,b)=>new Date(b.at)-new Date(a.at)).slice(0,8);
    $('#activity-list').innerHTML=acts.length?acts.map(a=>`<div class="activity-card"><span class="activity-icon">${icon(a.type==='focus'?'timer':'check')}</span><div><strong>${escapeHTML(a.title)}</strong><small>${escapeHTML(a.type==='focus'?t('focusSessionDone'):t('recentCompleted'))}</small></div><span class="activity-time">${fmtDateTime(a.at)}</span></div>`).join(''):`<div class="empty-state">${icon('sparkles')}<strong>${t('noActivity')}</strong></div>`;
  }

  function updateNotificationDot(){ const due=state.data.tasks.some(t=>!t.completed&&t.deadline&&daysDiff(t.deadline)<=1); $('.notification-dot')?.classList.toggle('hidden',!due); }

  function renderAll(){
    applyTranslations(); renderHome(); renderWorkspace(); renderPlan(); renderFocus(); renderCalendar(); renderProgress(); updateNotificationDot(); injectIcons();
  }

  function navigate(view){
    state.view=view; $$('.view').forEach(v=>v.classList.toggle('active',v.dataset.view===view)); $$('.bottom-nav button').forEach(b=>b.classList.toggle('active',b.dataset.nav===view)); renderAll(); window.scrollTo({top:0,behavior:'smooth'}); $('#app-main').focus({preventScroll:true});
  }

  function openSheet(id){ $('#sheet-backdrop').classList.remove('hidden'); $$('.bottom-sheet').forEach(s=>s.classList.add('hidden')); $(id).classList.remove('hidden'); document.body.style.overflow='hidden'; }
  function closeSheets(){ $$('.bottom-sheet').forEach(s=>s.classList.add('hidden')); $('#sheet-backdrop').classList.add('hidden'); document.body.style.overflow=''; }

  function openTaskForm(id=null){
    state.editingTaskId=id; const task=id?state.data.tasks.find(t=>t.id===id):null; $('#task-id').value=id||''; $('#task-title').value=task?.title||''; $('#task-deadline').value=task?.deadline?toLocalInput(task.deadline):''; $('#task-notes').value=task?.notes||''; $('#task-reminder').value=String(task?.reminder??'none');
    $('#task-folder').innerHTML=state.data.folders.map(f=>`<option value="${f.id}">${escapeHTML(f.name)}</option>`).join('') || `<option value="">Workspace</option>`; if(task)$('#task-folder').value=task.folderId;
    $('#task-priority').innerHTML=PRIORITIES.map(p=>`<option value="${p}">${escapeHTML(priorityLabel(p))}</option>`).join(''); $('#task-priority').value=task?.priority||'important'; applyTranslations(); openSheet('#task-sheet'); setTimeout(()=>$('#task-title').focus(),250);
  }
  function toLocalInput(iso){ const d=new Date(iso); const p=n=>String(n).padStart(2,'0'); return `${d.getFullYear()}-${p(d.getMonth()+1)}-${p(d.getDate())}T${p(d.getHours())}:${p(d.getMinutes())}`; }
  function fromLocalInput(v){ return v?new Date(v).toISOString():''; }

  function openFolderForm(id=null){ state.editingFolderId=id; const f=id?folderById(id):null; $('#folder-id').value=id||''; $('#folder-name').value=f?.name||''; $('#folder-sheet-title').textContent=f?t('folderName'):t('newFolder'); openSheet('#folder-sheet');setTimeout(()=>$('#folder-name').focus(),250); }
  function openTaskDetail(id){
    const task=state.data.tasks.find(x=>x.id===id);if(!task)return; const folder=folderById(task.folderId);
    $('#detail-content').innerHTML=`<div class="sheet-head"><div><p class="eyebrow">${escapeHTML(folder?.name||'Workspace')}</p><h2>${escapeHTML(task.title)}</h2></div><button class="icon-btn" data-action="close-sheet"><span data-icon="x"></span></button></div><div class="detail-top"><span class="detail-priority-dot ${dotClass(task.priority)}"></span><div><strong>${escapeHTML(priorityLabel(task.priority))}</strong><p class="detail-meta">${escapeHTML(dueLabel(task))} · ${task.deadline?escapeHTML(fmtDateTime(task.deadline)):t('noDeadline')}</p></div></div>${task.notes?`<div class="detail-body"><p>${escapeHTML(task.notes)}</p></div>`:''}<div class="detail-actions"><button class="primary-btn" data-action="focus-task" data-id="${task.id}">${t('focusNow')}</button><button class="secondary-btn" data-action="edit-task" data-id="${task.id}">${t('edit')}</button></div><div class="detail-actions" style="margin-top:8px"><button class="secondary-btn" data-action="toggle-task" data-id="${task.id}">${task.completed?t('open'):t('markDone')}</button><button class="ghost-btn danger" data-action="delete-task" data-id="${task.id}">${t('delete')}</button></div>`;
    openSheet('#detail-sheet');injectIcons();
  }

  function toggleTask(id){ const task=state.data.tasks.find(x=>x.id===id);if(!task)return; task.completed=!task.completed; task.completedAt=task.completed?new Date().toISOString():null; if(task.completed)state.data.activity.push({id:uid(),type:'task',title:task.title,at:task.completedAt});save();toast(task.completed?t('taskCompleted'):t('taskReopened'));closeSheets();renderAll(); }
  function deleteTask(id){ if(!confirm(t('confirmDeleteTask')))return; state.data.tasks=state.data.tasks.filter(x=>x.id!==id); save();closeSheets();toast(t('taskDeleted'));renderAll(); }
  function deleteFolder(id){ if(!confirm(t('confirmDeleteFolder')))return; state.data.folders=state.data.folders.filter(x=>x.id!==id);state.data.tasks=state.data.tasks.filter(x=>x.folderId!==id);save();closeSheets();toast(t('folderDeleted'));renderAll(); }

  function openFolder(id){
    const f=folderById(id);if(!f)return; const tasks=sortTasks(state.data.tasks.filter(x=>x.folderId===id));
    $('#detail-content').innerHTML=`<div class="sheet-head"><div><p class="eyebrow">${t('folder')}</p><h2>${escapeHTML(f.name)}</h2></div><button class="icon-btn" data-action="close-sheet"><span data-icon="x"></span></button></div><div class="stack">${tasks.length?tasks.map(taskCard).join(''):`<div class="empty-state">${icon('folder')}<strong>${t('noTasks')}</strong><button class="primary-btn" data-action="add-task" style="margin-top:12px">${t('addTask')}</button></div>`}</div><button class="primary-btn" data-action="add-task-for-folder" data-id="${f.id}" style="width:100%;margin-top:13px">+ ${t('addTask')}</button><div class="detail-actions" style="margin-top:8px"><button class="secondary-btn" data-action="edit-folder" data-id="${f.id}">${t('edit')}</button><button class="ghost-btn danger" data-action="delete-folder" data-id="${f.id}">${t('delete')}</button></div>`;
    openSheet('#detail-sheet');injectIcons();
  }

  function saveTask(e){ e.preventDefault(); const title=$('#task-title').value.trim();if(!title)return; const id=$('#task-id').value; const payload={title,folderId:$('#task-folder').value,priority:$('#task-priority').value,deadline:fromLocalInput($('#task-deadline').value),reminder:$('#task-reminder').value==='none'?0:Number($('#task-reminder').value),notes:$('#task-notes').value.trim()};
    if(id){const task=state.data.tasks.find(x=>x.id===id);Object.assign(task,payload);toast(t('taskUpdated'));}else{state.data.tasks.push({id:uid(),...payload,completed:false,completedAt:null,createdAt:new Date().toISOString()});toast(t('taskCreated'));}
    save();closeSheets();renderAll();
  }
  function saveFolder(e){e.preventDefault();const name=$('#folder-name').value.trim();if(!name)return;const id=$('#folder-id').value;if(id){folderById(id).name=name;toast(t('folderUpdated'));}else{state.data.folders.push({id:uid(),name,createdAt:new Date().toISOString()});toast(t('folderCreated'));}save();closeSheets();renderAll();}

  function toggleNotifications(){
    if(state.data.settings.notifications){state.data.settings.notifications=false;save();toast(t('notificationsOff'));renderAll();return;}
    if(!('Notification' in window)){toast(t('notificationBlocked'));return;}
    Notification.requestPermission().then(p=>{ if(p==='granted'){state.data.settings.notifications=true;save();toast(t('notificationsOn'));renderAll();}else toast(t('notificationBlocked')); });
  }
  function checkReminders(){
    if(!state.data.settings.notifications || !('Notification' in window) || Notification.permission!=='granted')return;
    const now=Date.now(); state.data.tasks.filter(x=>!x.completed&&x.deadline&&x.reminder>0).forEach(task=>{ const due=new Date(task.deadline).getTime(); const reminderAt=due-task.reminder*60000; if(now>=reminderAt&&now<reminderAt+65000){ const sentKey=`sf_notified_${task.id}_${task.reminder}`; if(localStorage.getItem(sentKey))return; localStorage.setItem(sentKey,'1'); new Notification('STUDYFLOW by VELLORA',{body:`${task.title} · ${dueLabel(task)}`}); updateNotificationDot(); } });
  }

  function notificationList(){
    const tasks=sortTasks(activeTasks().filter(x=>x.deadline&&daysDiff(x.deadline)<=2)); const el=$('#notification-list'); el.innerHTML=tasks.length?tasks.map(x=>`<div class="notification-card"><span class="notif-icon">${icon('bell')}</span><div><strong>${escapeHTML(x.title)}</strong><p>${escapeHTML(dueLabel(x))} · ${escapeHTML(fmtDateTime(x.deadline))}</p></div><span class="due">${escapeHTML(priorityLabel(x.priority))}</span></div>`).join(''):`<div class="empty-state">${icon('bell')}<strong>${t('noNotifications')}</strong><p>${t('notificationsSub')}</p></div>`;
  }

  function toast(msg){ const el=$('#toast');$('#toast-text').textContent=msg;$('#toast-icon').innerHTML=icon('check');el.classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.classList.remove('show'),2300); }

  function startTimer(){
    let task=state.data.tasks.find(x=>x.id===state.focusTaskId&&!x.completed); if(!task)return;
    if(!state.timer||state.timer.taskId!==task.id)state.timer={taskId:task.id,remaining:25*60,running:false}; state.timer.running=true; state.timer.last=Date.now(); clearInterval(state.timer.interval); state.timer.interval=setInterval(()=>{ if(!state.timer?.running)return; const now=Date.now(); const elapsed=Math.floor((now-state.timer.last)/1000); if(elapsed>0){state.timer.remaining=Math.max(0,state.timer.remaining-elapsed);state.timer.last=now;renderFocus();} if(state.timer.remaining<=0)finishFocus();},1000);renderFocus(); }
  function pauseTimer(){if(!state.timer)return;state.timer.running=false;renderFocus();}
  function finishFocus(){ if(!state.timer)return; const task=state.data.tasks.find(x=>x.id===state.timer.taskId); clearInterval(state.timer.interval); if(task)state.data.focusSessions.push({id:uid(),taskId:task.id,title:task.title,at:new Date().toISOString()}); state.timer=null;save();toast(t('focusSessionDone'));renderAll(); }

  function resetDemo(){if(!confirm(t('confirmClear')))return;state.data=seedData();state.lang='en';localStorage.setItem(LANG_KEY,'en');save();closeSheets();toast(t('demoReset'));renderAll();}
  function clearData(){if(!confirm(t('confirmClear')))return;state.data={settings:{language:state.lang,notifications:false},folders:[],tasks:[],activity:[],focusSessions:[]};save();closeSheets();toast(t('dataCleared'));renderAll();}

  function handleClick(e){
    const button=e.target.closest('[data-nav],[data-action],[data-range],[data-date]'); if(!button)return;
    if(button.dataset.nav){navigate(button.dataset.nav);return;}
    if(button.dataset.range){state.range=button.dataset.range;renderPlan();return;}
    if(button.dataset.date){state.selectedDate=button.dataset.date;renderCalendar();return;}
    const action=button.dataset.action,id=button.dataset.id;
    switch(action){
      case 'go-home':navigate('home');break; case 'open-plan':navigate('plan');break; case 'open-calendar':navigate('calendar');break;case 'open-progress':navigate('progress');break;
      case 'add-task':openTaskForm();break; case 'add-task-for-folder':openTaskForm(null);setTimeout(()=>$('#task-folder').value=id,50);break; case 'edit-task':openTaskForm(id);break;case 'open-task':openTaskDetail(id);break;case 'toggle-task':toggleTask(id);break;case 'delete-task':deleteTask(id);break;case 'focus-task':state.focusTaskId=id;closeSheets();navigate('focus');break;
      case 'add-folder':openFolderForm();break;case 'edit-folder':openFolderForm(id);break;case 'delete-folder':deleteFolder(id);break;case 'open-folder':openFolder(id);break;
      case 'folder-menu':openFolder(id);break;
      case 'open-settings':openSheet('#settings-sheet');break;case 'open-notifications':notificationList();openSheet('#notifications-sheet');break;case 'open-about':openSheet('#about-sheet');break;case 'close-sheet':closeSheets();break;
      case 'toggle-notifications':toggleNotifications();break;case 'reset-demo':resetDemo();break;case 'clear-data':clearData();break;
      case 'start-timer':startTimer();break;case 'pause-timer':pauseTimer();break;case 'finish-focus':finishFocus();break;
      case 'calendar-prev':state.calendarMonth=new Date(state.calendarMonth.getFullYear(),state.calendarMonth.getMonth()-1,1);renderCalendar();break;case 'calendar-next':state.calendarMonth=new Date(state.calendarMonth.getFullYear(),state.calendarMonth.getMonth()+1,1);renderCalendar();break;
    }
  }

  function init(){
    injectIcons(); applyTranslations(); renderAll();
    $('#task-form').addEventListener('submit',saveTask);$('#folder-form').addEventListener('submit',saveFolder);
    $('#language-select').addEventListener('change',e=>{state.lang=e.target.value;state.data.settings.language=state.lang;localStorage.setItem(LANG_KEY,state.lang);save();renderAll();toast(t('languageChanged'));});
    $('#workspace-search').addEventListener('input',e=>{state.search=e.target.value;renderWorkspace();});
    document.addEventListener('click',handleClick);
    $('#sheet-backdrop').addEventListener('click',closeSheets);
    document.addEventListener('keydown',e=>{if(e.key==='Escape')closeSheets();});
    document.addEventListener('pointerdown',e=>{const target=e.target.closest('button');if(!target)return;const r=document.createElement('span');r.className='ripple';r.style.left=`${e.clientX}px`;r.style.top=`${e.clientY}px`;document.body.appendChild(r);setTimeout(()=>r.remove(),600);},{passive:true});
    setInterval(checkReminders,60000); checkReminders();
  }
  init();
})();
