import { useState, type ReactNode } from 'react';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import FeaturedVehicles from './FeaturedVehicles';
import Technology from './Technology';
import Services from './Services';
import Franchise from './Franchise';
import ContactForm from './ContactForm';
import Configurator from './Configurator';
import { Vehicle, vehicles } from '../data/vehicles';

interface RoutePageProps {
  path: string;
  onNavigate: (path: string) => void;
}

function PageIntro({ eyebrow, title, description, highlights, action }: { eyebrow: string; title: ReactNode; description: string; highlights: string[]; action?: { label: string; onClick: () => void } }) {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 pt-36 pb-20 md:pt-48 md:pb-28">
      <div className="absolute top-20 right-[-8rem] w-80 h-80 rounded-full bg-brand-cyan/[0.12] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-6rem] w-72 h-72 rounded-full bg-green-400/[0.08] blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-10 lg:gap-20 items-end">
          <div>
            <span className="text-brand-cyan tracking-[0.5em] uppercase text-[10px] font-bold mb-6 block">{eyebrow}</span>
            <h1 className="max-w-5xl text-5xl sm:text-7xl md:text-8xl font-sans font-extralight tracking-[-0.05em] leading-[0.85] mb-8">{title}</h1>
            <p className="max-w-2xl text-black/50 text-sm sm:text-base md:text-lg leading-relaxed">{description}</p>
            {action && <button onClick={action.onClick} className="mt-8 inline-flex items-center gap-3 px-6 py-3 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-[0.25em] hover:bg-brand-cyan">{action.label}<ArrowUpRight size={15} /></button>}
          </div>
          <div className="glass rounded-[28px] p-6 sm:p-8 border-white/60">
            <span className="text-[9px] font-mono uppercase tracking-[0.35em] text-black/40">Axigear standard</span>
            <div className="mt-6 space-y-4">
              {highlights.map((highlight, index) => <div key={highlight} className="flex items-center gap-4 border-t border-black/5 pt-4"><span className="text-brand-cyan text-xs font-mono">0{index + 1}</span><span className="text-sm font-medium text-black/70">{highlight}</span></div>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function RoutePage({ path, onNavigate }: RoutePageProps) {
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [configuratorOpen, setConfiguratorOpen] = useState(false);

  const openConfigurator = (vehicleId: string) => {
    const vehicle = vehicles.find((item) => item.id === vehicleId);
    if (vehicle) {
      setSelectedVehicle(vehicle);
      setConfiguratorOpen(true);
    }
  };

  const isFranchise = path === '/franchise';

  return (
    <div className="relative min-h-screen">
      <Navbar onNavigate={onNavigate} />
      <main>
        {path === '/products' && (
          <>
            <PageIntro eyebrow="Axigear Product Range" title={<>Electric <span className="italic font-normal">two-wheelers.</span></>} description="Explore practical, stylish electric scooters designed for everyday city rides, longer commutes, and a cleaner future." highlights={["Purpose-built for city rides", "Range for every commute", "Explore your ideal configuration"]} action={{ label: "View the range", onClick: () => document.querySelector('#models')?.scrollIntoView({ behavior: 'smooth' }) }} />
            <FeaturedVehicles onConfigure={openConfigurator} />
          </>
        )}
        {path === '/why-ev' && (
          <>
            <PageIntro eyebrow="Why Electric Mobility" title={<>The future <span className="italic font-normal">benefits.</span></>} description="Discover why switching to electric mobility means lower running costs, cleaner cities, and a quieter ride." highlights={["Zero tailpipe emissions", "Lower everyday running costs", "Quieter, cleaner urban travel"]} action={{ label: "See the benefits", onClick: () => document.querySelector('#technology')?.scrollIntoView({ behavior: 'smooth' }) }} />
            <Technology />
          </>
        )}
        {path === '/services' && (
          <>
            <PageIntro eyebrow="Beyond The Sale" title={<>Services & <span className="italic font-normal">support.</span></>} description="Our relationship with customers extends far beyond the point of sale with dedicated support for every Axigear journey." highlights={["Expert EV servicing", "Genuine parts supply", "Support for the long ride"]} action={{ label: "Explore support", onClick: () => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }) }} />
            <Services />
          </>
        )}
        {isFranchise && <Franchise onContact={() => setContactOpen(true)} />}
        {path === '/contact' && (
          <>
            <PageIntro eyebrow="Connect With Axigear" title={<>Let’s move <span className="italic font-normal">forward.</span></>} description="Talk to our team about products, test rides, service support, or franchise opportunities." />
            <section className="px-4 sm:px-6 pb-32">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8">
                <div className="glass rounded-[32px] p-8 sm:p-12 space-y-8">
                  <div className="flex items-start gap-4"><MapPin className="text-brand-cyan mt-1" size={22} /><div><h2 className="font-display text-xl mb-2">Axigear Electric Lounge</h2><p className="text-black/50 text-sm leading-relaxed">St No 2, Plot No. 148, beside Srikara Hospitals, Mythri Nagar, Madeenaguda, Hyderabad, Telangana 500049</p></div></div>
                  <div className="flex items-start gap-4"><Phone className="text-brand-cyan mt-1" size={22} /><div><h2 className="font-display text-xl mb-2">Direct Line</h2><p className="text-black/50 text-sm">+91 90526 53636<br />+91 90526 33636</p></div></div>
                  <div className="flex items-start gap-4"><Mail className="text-brand-cyan mt-1" size={22} /><div><h2 className="font-display text-xl mb-2">Inquiries</h2><p className="text-black/50 text-sm">hello@axigear.com</p></div></div>
                </div>
                <div className="glass rounded-[32px] p-8 sm:p-12 flex flex-col justify-between min-h-[360px]">
                  <div><span className="text-brand-cyan tracking-[0.4em] uppercase text-[10px] font-bold mb-5 block">Start a conversation</span><h2 className="text-4xl sm:text-6xl font-sans font-light tracking-[-0.04em]">Have a question?</h2><p className="text-black/50 mt-5 max-w-md leading-relaxed">Our team is ready to help you choose the right electric vehicle or support your next step with Axigear.</p></div>
                  <button onClick={() => setContactOpen(true)} className="self-start mt-10 px-8 py-4 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-[0.25em] hover:bg-brand-cyan">Open Contact Form</button>
                </div>
              </div>
            </section>
          </>
        )}
      </main>
      <Footer />
      <ContactForm isOpen={contactOpen} onClose={() => setContactOpen(false)} />
      <Configurator vehicle={selectedVehicle} isOpen={configuratorOpen} onClose={() => setConfiguratorOpen(false)} />
    </div>
  );
}
