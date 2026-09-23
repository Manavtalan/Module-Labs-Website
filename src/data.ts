const email='manavtalan@gmail.com';
const whatsappNumber='917983252422';

export const studio={
  email,
  emailUrl:`mailto:${email}`,
  whatsapp:'+91 7983252422',
  whatsappUrl:`https://wa.me/${whatsappNumber}`,
  instagram:'https://www.instagram.com/modulelabs?stkn=dmc5NzZjOTQ1cDR3&utm_source=qr',
  linkedin:'',
  x:'https://x.com/Modulelabsdotio'
};
export type Project={id:string;name:string;video:string;url:string;tags:string[];ariaLabel:string};
export const projects:Project[]=[
{id:'charter',name:'Charter AI',video:'/work/charter.mp4',url:'https://www.trycharter.io/',tags:['AI SaaS','Web App','Landing Page'],ariaLabel:'Charter AI portfolio project by Module Labs'},
{id:'ora',name:'ORA Indie',video:'/work/ora.mp4',url:'https://oraindie.com/',tags:['Ecommerce','Fashion','D2C'],ariaLabel:'ORA Indie ecommerce project by Module Labs'},
{id:'lumen',name:'Lumen',video:'/work/lumen.mp4',url:'https://lumenlabs-1.vercel.app/',tags:['SaaS','Motion','Landing Page'],ariaLabel:'Lumen SaaS landing page project by Module Labs'},
{id:'nomad',name:'Nomad',video:'/work/nomad.mp4',url:'https://nomadp.netlify.app/',tags:['Consumer App','Travel','Web App'],ariaLabel:'Nomad travel web app project by Module Labs'}
];
export const services=[
{number:'01',title:'Digital Experiences',lead:'Led by Manav',description:'Design and development for brands that need more than a static website.',kind:'digital',items:['3D Animated Websites','Landing Pages','Full Website Development','AI SaaS Web Apps','Motion Design for Web','Interactive Product Experiences','Frontend Development','Web Animation','Responsive Development','Performance Optimization']},
{number:'02',title:'Brand Systems',lead:'Led by Nikita',description:'From identity to physical applications, we build brands that stay coherent wherever they appear.',kind:'brand',items:['Brand Identity','Visual Identity','Logo Systems','Packaging Design','Graphic Design','Product Mockups','Product Design','Campaign Visuals','Brand Guidelines','Social / Marketing Assets']},
{number:'03',title:'Commerce Experiences',lead:'Design + development',description:'Shopify stores designed and engineered to make products easier to discover, understand and buy.',kind:'commerce',items:['Shopify Store Design','Theme Customization','Theme Layout Changes','Custom Sections','Product Page Optimization','Collection Page Design','Shopify App Integrations','Conversion-Focused UI','Cart / Checkout Improvements','Subscription Integrations','Reviews / Loyalty Integrations','Email Capture','Upsell / Cross-sell Components','Shopify Speed Optimization','Mobile Commerce Optimization','Product Launch Pages','Analytics / Tracking Setup','Maintenance & Improvements']}
];
export type Plan={name:string;price:string;description:string;features:string[]};
export const pricing:Record<string,Plan[]>={
Web:[{name:'Launch',price:'$2,500',description:'A focused beginning. For your next launch or campaign.',features:['1–2 pages','Custom UI','Responsive development','Basic motion','Core interactions','Performance pass','Deployment']},{name:'Growth',price:'$5,500',description:'A complete marketing website, with room to grow.',features:['Up to 6–7 pages','Custom UX/UI','Motion system','Responsive development','CMS integration where needed','Basic analytics','Performance optimization','Deployment']},{name:'Signature',price:'$10,000+',description:'For ideas that call for something extraordinary.',features:['10+ pages / custom scope','Full design system','Advanced motion','3D / WebGL','Custom frontend engineering','Integrations','Performance engineering','Launch support']}],
Branding:[{name:'Essential Identity',price:'$2,000+',description:'A clear, confident foundation for your brand.',features:['Logo direction','Typography','Color system','Core visual language','Basic brand guidelines']},{name:'Brand System',price:'$4,500+',description:'One coherent identity. Every point of contact.',features:['Brand strategy foundation','Full identity','Logo suite','Typography','Color system','Visual language','Social templates','Brand guidelines','Basic mockups']},{name:'Full Brand Experience',price:'$7,500+',description:'A brand that lives beautifully, on and off screen.',features:['Everything in Brand System','Packaging direction','Product mockups','Campaign visuals','Extended applications','Detailed brand guidelines','Launch asset system']}],
Shopify:[{name:'Store Refresh',price:'$2,500+',description:'A thoughtful next chapter for your existing store.',features:['Theme layout improvements','Homepage refinement','PDP optimization','Mobile improvements','Basic custom sections','App styling']},{name:'Growth Store',price:'$5,000+',description:'A distinctive shopping experience, built to grow.',features:['Custom storefront design','Homepage','PDP','Collection pages','Navigation','Cart improvements','App integrations','Responsive build','Performance pass']},{name:'Custom Commerce',price:'$9,000+',description:'Commerce built around the way your brand works.',features:['Full custom Shopify experience','Custom theme development','Advanced sections','Motion','Custom UX','Complex integrations','Subscription / loyalty / reviews','Conversion optimization','Performance engineering']}]
};
export const faqs=[
{q:'What does Module Labs do?',a:'Module Labs is a design and development studio focused on 3D and animated websites, AI web apps, branding systems, and Shopify ecommerce experiences.'},
{q:'How much does a website with Module Labs cost?',a:'Website projects typically range from $2,500 to $10,000+, depending on the number of pages, level of motion, 3D work, custom development, and overall complexity.'},
{q:'How long does it take to design and build a website?',a:'Most website projects take around 10–21 days. More complex builds involving advanced motion, 3D, custom integrations, or larger page counts may take longer.'},
{q:'Do you handle both design and development?',a:'Yes. Module Labs can handle strategy, UI/UX design, motion design, 3D assets, copy direction, development, deployment, and post-launch support as one end-to-end engagement.'},
{q:'Do you build AI-powered web apps and MVPs?',a:'Yes. We design and develop focused AI-powered web applications and MVPs, including UI/UX, core product development, AI integrations, payments where required, deployment, and go-to-market planning.'},
{q:'Can you work with an existing brand or website?',a:'Yes. We can work within an existing visual identity, redesign an existing website, or build a new digital experience around your current brand system.'},
{q:'Do you create 3D and motion-heavy websites?',a:'Yes. 3D, motion, and interaction are core parts of our website work, but we use them where they improve storytelling and user experience rather than adding effects for decoration.'},
{q:'Do you build and customize Shopify stores?',a:'Yes. We handle Shopify setup, premium theme customization, product setup, conversion-focused features, app integrations, custom app development, analytics, and launch.'},
{q:'What do you need from us to start a project?',a:'Usually we need a clear overview of your business, goals, required pages or features, any existing brand assets, references you like, and your approximate timeline. We can help define the rest during discovery.'},
{q:'Do you provide support after launch?',a:'Yes. Website projects include 1 month of free support, and ongoing support, updates, scaling, and additional development can be arranged after launch.'}
];
