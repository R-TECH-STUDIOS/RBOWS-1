import React, { useState, useEffect } from 'react';
import {
  Monitor,
  Settings,
  Globe,
  Terminal,
  FileText,
  Calculator,
  Music,
  X,
  Minus,
  Search,
  Wifi,
  Battery,
  ChevronRight,
  Code,
  Folder,
  Camera,
  MessageSquare,
  Phone,
  Mail,
  Play,
  SkipBack,
  SkipForward,
  ArrowLeft,
  RotateCcw,
  User,
  Mic,
  Send,
  Plus,
  Hash,
  ShieldCheck,
  CheckCircle2,
  LayoutGrid,
  Languages,
  Fingerprint,
  CreditCard,
  Cloud,
  Bell,
  Eye,
  MapPin,
  Share2,
  Bluetooth,
  Smile,
  Zap,
  Layers,
  Palette,
  RefreshCw,
  SendHorizontal,
  Globe2,
} from 'lucide-react';

const BACKGROUND_URL =
  'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop';

const APPS = [
  { id: 'r-phone', title: 'Phone', icon: Phone, color: 'bg-green-600', size: 'small' },
  { id: 'r-mail', title: 'Mail', icon: Mail, color: 'bg-sky-600', size: 'small' },
  { id: 'r-browse', title: 'Edge', icon: Globe, color: 'bg-blue-700', size: 'medium' },
  { id: 'r-write', title: 'Notepad', icon: FileText, color: 'bg-orange-600', size: 'small' },
  { id: 'r-count', title: 'Calc', icon: Calculator, color: 'bg-rose-600', size: 'small' },
  { id: 'r-tunes', title: 'Music', icon: Music, color: 'bg-pink-600', size: 'medium' },
  { id: 'r-camera', title: 'Camera', icon: Camera, color: 'bg-zinc-800', size: 'small' },
  { id: 'r-chat', title: 'Messages', icon: MessageSquare, color: 'bg-emerald-600', size: 'medium' },
  { id: 'r-files', title: 'Files', icon: Folder, color: 'bg-amber-600', size: 'small' },
  { id: 'r-code', title: 'DevTools', icon: Code, color: 'bg-indigo-700', size: 'small' },
  { id: 'r-cmd', title: 'Terminal', icon: Terminal, color: 'bg-slate-900', size: 'medium' },
  { id: 'r-config', title: 'Settings', icon: Settings, color: 'bg-zinc-700', size: 'small' },
];

export default function App() {
  const [stage, setStage] = useState('boot');
  const [setupStep, setSetupStep] = useState(0);
  const [windows, setWindows] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    let bootTimer;
    if (stage === 'boot') {
      bootTimer = setTimeout(() => setStage('setup'), 4500);
    }
    return () => {
      clearInterval(timer);
      if (bootTimer) clearTimeout(bootTimer);
    };
  }, [stage]);

  const openApp = (app) => {
    const existing = windows.find((w) => w.appId === app.id);
    if (existing) {
      setActiveId(existing.id);
      return;
    }
    const newWin = { id: Date.now(), appId: app.id, title: app.title, icon: app.icon };
    setWindows([...windows, newWin]);
    setActiveId(newWin.id);
  };

  const closeWin = (id) => {
    setWindows(windows.filter((w) => w.id !== id));
    if (activeId === id) setActiveId(null);
  };

  if (stage === 'boot') {
    return (
      <div className="h-screen bg-black flex flex-col items-center justify-center text-white">
        <div className="w-24 h-24 grid grid-cols-2 gap-1 animate-pulse mb-12">
          <div className="bg-sky-500 rounded-lg shadow-[0_0_20px_rgba(14,165,233,0.5)]"></div>
          <div className="bg-sky-500 rounded-lg"></div>
          <div className="bg-sky-500 rounded-lg"></div>
          <div className="bg-sky-500 rounded-lg shadow-[0_0_20px_rgba(14,165,233,0.5)]"></div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="h-1 w-48 bg-zinc-800 rounded-full overflow-hidden">
            <div className="h-full bg-sky-500 w-full animate-[loading_4s_ease-in-out]"></div>
          </div>
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-40">Initializing R-Kernel</span>
        </div>
      </div>
    );
  }

  if (stage === 'setup') {
    const setupContent = [
      { icon: Languages, title: 'Language', desc: 'Choose your primary system language.', opt: ['English (US)', 'English (UK)', 'Español', '日本語'] },
      { icon: Wifi, title: 'Network', desc: 'Connect to the world around you.', opt: ['R-Home 5G', 'Starlink-Mobile', 'Public WiFi'] },
      { icon: Fingerprint, title: 'Biometrics', desc: 'Secure your device with Touch ID.', opt: ['Set up now', 'Maybe later'] },
      { icon: Palette, title: 'Accent Color', desc: 'Personalize your tiles and buttons.', opt: ['Sky Blue', 'Emerald Green', 'Crimson', 'Royal Purple'] },
      { icon: Eye, title: 'Visual Mode', desc: 'Light or dark? You decide.', opt: ['Dark (OLED)', 'Light (Standard)', 'Auto (Solar)'] },
      { icon: Globe, title: 'Region', desc: 'Set your local time and formatting.', opt: ['Americas', 'Europe', 'Asia-Pacific', 'Africa'] },
      { icon: ShieldCheck, title: 'Privacy', desc: 'Control how your data is used.', opt: ['Strict', 'Balanced', 'Minimum'] },
      { icon: Cloud, title: 'R-Cloud', desc: 'Sync your photos and documents.', opt: ['Enable Sync', 'Manual Backup'] },
      { icon: Bell, title: 'Notifications', desc: 'Stay updated on what matters.', opt: ['All', 'Priority Only', 'DND'] },
      { icon: MapPin, title: 'Location', desc: 'Help maps and weather work better.', opt: ['Always On', 'While Using App', 'Off'] },
      { icon: Share2, title: 'Analytics', desc: 'Help us improve RBOWS.', opt: ['Share Data', 'Opt Out'] },
      { icon: Bluetooth, title: 'Bluetooth', desc: 'Connect your wireless peripherals.', opt: ['Scan Devices', 'Skip'] },
      { icon: RefreshCw, title: 'Auto Updates', desc: 'Stay secure automatically.', opt: ['Enable', 'Notify Me'] },
      { icon: Zap, title: 'Performance', desc: 'Choose your power profile.', opt: ['High Power', 'Eco Mode', 'Balanced'] },
      { icon: Smile, title: 'Feedback', desc: 'Rate the setup experience so far.', opt: ['Great', 'Good', 'Neutral'] },
      { icon: Layers, title: 'Interface', desc: 'Choose your UI density.', opt: ['Compact', 'Standard', 'Relaxed'] },
      { icon: CreditCard, title: 'Payments', desc: 'Set up R-Pay for quick checkouts.', opt: ['Add Card', 'Later'] },
      { icon: Mic, title: 'Assistant', desc: 'Set up voice commands.', opt: ['Enable R-Voice', 'Disabled'] },
      { icon: Search, title: 'Search Engine', desc: 'Default provider for Edge.', opt: ['R-Search', 'Google', 'DuckDuckGo'] },
      { icon: CheckCircle2, title: 'Finish', desc: 'Everything is ready to go.', opt: ["Let's Get Started!"] },
    ];
    const current = setupContent[setupStep];
    const nextStep = () => (setupStep < setupContent.length - 1 ? setSetupStep(setSetupStep + 1) : setStage('auth-choice'));

    return <div className="h-screen bg-zinc-950 p-10 flex flex-col justify-between text-white"><current.icon size={48} /><h1>{current.title}</h1>{current.opt.map((o, i)=><button key={i} onClick={nextStep}>{o}</button>)}</div>;
  }

  return <div className="h-screen w-full text-white" style={{ backgroundImage: `url(${BACKGROUND_URL})` }}><div className="p-8"><h1>RBOWS 1</h1>{APPS.map((app)=><button key={app.id} onClick={()=>openApp(app)}>{app.title}</button>)}</div>{windows.map((win)=><div key={win.id}><button onClick={()=>setActiveId(win.id)}>{win.title}</button>{activeId===win.id && <WindowContent win={win} />}<button onClick={()=>closeWin(win.id)}><X size={16}/></button></div>)}</div>;
}

function WindowContent({ win }) {
  switch (win.appId) {
    case 'r-phone':
      return <RPhone />;
    case 'r-mail':
      return <RMail />;
    case 'r-browse':
      return <REdge />;
    case 'r-write':
      return <RNotepad />;
    case 'r-count':
      return <RCount />;
    case 'r-tunes':
      return <RMusicPlayer />;
    case 'r-camera':
      return <RCamera />;
    case 'r-chat':
      return <RMessages />;
    case 'r-files':
      return <RFiles />;
    case 'r-code':
      return <RDevTools />;
    case 'r-cmd':
      return <RTerminal />;
    case 'r-config':
      return <RSettings />;
    default:
      return <div className="p-20 text-center opacity-20"><Monitor size={64} className="mx-auto mb-4" />Application Workspace</div>;
  }
}

const RPhone = () => {
  const [dial, setDial] = useState('');
  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'];
  return <div>{dial || 'Dialing...'}{keys.map((k)=><button key={k} onClick={()=>setDial((p)=>p+k)}>{k}</button>)}<button onClick={()=>setDial('')}><Phone /></button><button><Send /></button></div>;
};

const RMail = () => <div>Mail</div>;
const REdge = () => { const [url,setUrl]=useState('https://lumia.r-kernel.net'); return <div><Globe2 /><input value={url} onChange={(e)=>setUrl(e.target.value)} /></div>; };
const RMessages = () => <div><MessageSquare /><SendHorizontal /></div>;
const RCamera = () => <div><Camera /><img src={BACKGROUND_URL} alt="Wallpaper preview" /></div>;
const RDevTools = () => <div><Code />{APPS.map((a)=><div key={a.id}>{a.title}</div>)}</div>;
const RNotepad = () => <textarea defaultValue={'RBOWS 1\nRQBBOX ready'} />;
const RTerminal = () => { const [lines, setLines] = useState(['> RBOWS-SH initialized.']); const [input,setInput]=useState(''); return <div>{lines.map((l,i)=><div key={i}>{l}</div>)}<input value={input} onChange={(e)=>setInput(e.target.value)} onKeyDown={(e)=>{if(e.key==='Enter'){setLines([...lines,`> ${input}`]);setInput('');}}} /></div>; };
const RFiles = () => <div>{['System', 'Media', 'User', 'Apps', 'Cloud', 'Downloads'].map((f)=><div key={f}><Folder />{f}</div>)}</div>;
const RCount = () => { const [exp,setExp]=useState(''); return <div><div>{exp || '0'}</div>{['C','/','*','-','7','8','9','+','4','5','6','=','1','2','3','0'].map((b)=><button key={b} onClick={()=>setExp((p)=> b==='C' ? '' : b==='=' ? p : p+b)}>{b}</button>)}</div>; };
const RMusicPlayer = () => <div><Music /><SkipBack /><Play /><SkipForward /></div>;
const RSettings = () => <div><LayoutGrid /><Minus /><Hash /><ArrowLeft /><RotateCcw /><Battery /><Wifi /><ChevronRight /><Mail /><Plus /></div>;
