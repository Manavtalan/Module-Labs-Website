import {motion,useReducedMotion} from 'framer-motion';
import {ArrowUpRight,Bot,Check,Palette,ShoppingBag,PanelsTopLeft,type LucideIcon} from 'lucide-react';

type PricingCard={title:string;meta:string;description:string;features:string[];notes:string[];icon:LucideIcon};

const cards:PricingCard[]=[
  {title:'Website Design & Development',meta:'$2,500–$10,000 · 10–21 Days',description:'For brands and businesses that need a distinctive, conversion-focused website built quickly and properly.',features:['Strategy & Discovery','UI/UX Design','2 Design Concepts','Custom 3D Models or 2D Illustrations','Professional Copywriting','High-Converting Sales Funnel','Framer Development','Animations','Motion Design','1 Month of Free Support'],notes:['Typical turnaround: 10–21 days'],icon:PanelsTopLeft},
  {title:'AI Web App Development',meta:'$8,000–$10,000+ · 2–3 Months',description:'For founders and businesses ready to turn an AI product idea into a working MVP.',features:['Product Planning','UI/UX Design','Core App Development','AI Integration','Payment Integration, if required','Deployment','Go-to-Market Strategy Plan','Predefined Scope of Work (SOW)','Dedicated Design Lead','5/7 Communication via Slack & Loom'],notes:['Payment structure: 50% / 25% / 25%','Typical timeline: 2–3 months'],icon:Bot},
  {title:'Logo & Branding Kit',meta:'$5,000–$8,000 · 3–4 Weeks',description:'For businesses that need a complete, launch-ready visual identity rather than just a logo.',features:['Logo Suite','Color Palette','Typography System','Brand Voice Document','Full Brand Guidelines','Packaging Mockups','Website Visual Direction','AI Hero Imagery','AI Mini Campaign','30-Day Launch Content Calendar','15 Brand Templates'],notes:['Typical timeline: 3–4 weeks'],icon:Palette},
  {title:'Shopify Ecommerce Build & Setup',meta:'$3,000–$5,000 · 2–3 Weeks',description:'For ecommerce brands that need a polished Shopify store designed to convert and scale.',features:['Store Strategy','Shopify Setup','Premium Custom Theme','Product Setup','Conversion Features','Shopify App Integrations','Custom App Development','Marketing Integrations','Analytics & Performance Dashboard','Launch'],notes:['Optional add-on: AI Automation & Agents, if required','Typical timeline: 2–3 weeks'],icon:ShoppingBag},
];

export default function Pricing({onContact}:{onContact:(scope?:string)=>void}){
  const reduced=useReducedMotion();
  return <section id="pricing" className="section pricing-section" aria-labelledby="pricing-title">
    <div className="center-heading pricing-intro reveal">
      <span className="pricing-pill mono"><i aria-hidden="true"/>PRICING<i aria-hidden="true"/></span>
      <h2 id="pricing-title">Clear scopes.<br/><em>No mystery invoices.</em></h2>
      <p>Choose the service that best fits your business, timeline, and stage.<br/> Each offer is structured clearly so clients understand what’s included before we begin.</p>
    </div>
    <motion.div className="pricing-grid" initial={reduced?false:'hidden'} whileInView="visible" viewport={{once:true,amount:.08}} variants={{hidden:{},visible:{transition:{staggerChildren:.08}}}}>
      {cards.map((card,index)=>{const Icon=card.icon;return <motion.article className={`pricing-card ${index===1?'featured':''}`} key={card.title} variants={{hidden:{opacity:0,y:reduced?0:18},visible:{opacity:1,y:0}}} transition={{duration:.48,ease:[.22,1,.36,1]}}>
        <div className="plan-top"><span className="plan-icon" aria-hidden="true"><Icon size={20} strokeWidth={1.6}/></span><span className="plan-index mono">0{index+1}</span></div>
        <h3>{card.title}</h3>
        <p className="plan-meta mono">{card.meta}</p>
        <p className="plan-desc">{card.description}</p>
        <div className="plan-divider"/>
        <span className="included mono">WHAT’S INCLUDED</span>
        <ul>{card.features.map(feature=><li key={feature}><Check size={14}/><span>{feature}</span></li>)}</ul>
        <div className="plan-notes">{card.notes.map(note=><p key={note}>{note}</p>)}</div>
        <button className="plan-cta" onClick={()=>onContact(card.title)}>Start a project <ArrowUpRight size={17}/></button>
      </motion.article>})}
    </motion.div>
  </section>;
}
