import {Bot,Palette,PanelsTopLeft,ShoppingBag,type LucideIcon} from 'lucide-react';

type ServiceCard={title:string;description:string;tags:string[];image:string;alt:string;icon:LucideIcon;kind:string};

const serviceCards:ServiceCard[]=[
  {title:'Website Design & Development',description:'End-to-end 3D, motion, and animation-led website design and development for landing pages, AI SaaS products, and immersive ecommerce experiences.',tags:['$2,500–$10,000','10–21 Days','3D, Motion & Animation','100% Secure','Ongoing Support','Update & Scale','SEO / AEO'],image:'/assets/service-website.jpeg',alt:'Module Labs website design concept shown on a pink laptop with website benefits',icon:PanelsTopLeft,kind:'website'},
  {title:'AI Web App Development',description:'End-to-end design and development of focused AI-powered web applications and MVPs, from product planning and UI/UX to production deployment.',tags:['$8,000–$10,000+','1–2 Month MVP','UI/UX Design','Production Deployed'],image:'/assets/service-ai-app.jpeg',alt:'AI web app development tools and integrations arranged above a project folder',icon:Bot,kind:'ai'},
  {title:'Logo & Branding Kit',description:'A complete visual identity and launch-ready brand system designed to keep your brand consistent across digital, product, and physical touchpoints.',tags:['$5,000–$8,000','3–4 Weeks','Logo & Packaging','Product Mockups','Product Design'],image:'/assets/service-branding.jpeg',alt:'Brand identity board showing a logotype, brandmark, submark, colors, and typography',icon:Palette,kind:'branding'},
  {title:'Shopify Ecommerce Build & Setup',description:'Complete Shopify store design, setup, customization, integrations, and launch for ecommerce brands built to convert and scale.',tags:['$3,000–$5,000','2–3 Weeks','Custom + Shopify App Integrations','Premium Themes','Built to Convert'],image:'/assets/service-shopify.jpeg',alt:'Green ecommerce storefront graphic with shopping basket, products, payment card, and discount tag',icon:ShoppingBag,kind:'shopify'},
];

export default function Services(){return <section id="services" className="section services-section" aria-labelledby="services-title">
  <div className="center-heading services-intro reveal">
    <span className="pricing-pill services-pill mono"><i aria-hidden="true"/>SERVICES<i aria-hidden="true"/></span>
    <h2 id="services-title">What we Can Do<br/><em>For Your Brand</em></h2>
    <p>Thoughtful design, development, branding, and ecommerce systems built to help brands launch, grow, and stay consistent.</p>
  </div>
  <div className="service-showcase-grid">
    {serviceCards.map((service,index)=>{const Icon=service.icon;return <article className={`service-showcase-card service-showcase-${service.kind} reveal`} key={service.title}>
      <div className="service-showcase-copy">
        <div className="service-showcase-top"><span className="service-showcase-icon" aria-hidden="true"><Icon size={20} strokeWidth={1.6}/></span><span className="mono">0{index+1}</span></div>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <div className="service-showcase-tags" aria-label={`${service.title} details`}>{service.tags.map(tag=><span key={tag}>{tag}</span>)}</div>
      </div>
      <figure className="service-showcase-media"><img src={service.image} alt={service.alt} loading="lazy"/></figure>
    </article>})}
  </div>
</section>}
