import React from 'react';
import { motion } from 'motion/react';

const Reveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 1, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Slide 1: Cover (1 Image) */}
      <header className="h-screen relative flex items-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/Main.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 z-10" />
        <Reveal className="relative z-20 max-w-[1200px] mx-auto w-full px-[8%] text-left">
          <p className="font-serif text-lg md:text-xl tracking-[4px] mb-3 drop-shadow-[0_4px_20px_rgba(0,0,0,0.3)] text-white/90">Otaru Coastal Retreat</p>
          <h1 className="font-serif text-[#f0f0f0] text-4xl md:text-6xl tracking-[8px] drop-shadow-[0_4px_20px_rgba(0,0,0,0.3)] mb-6 font-semibold">海滨谧境 · 潜力臻品</h1>
          <p className="text-white/90 text-sm md:text-base tracking-[2px] drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">推门见海，遇见理想的度假生活与改造空间</p>
        </Reveal>
      </header>

      {/* Slide 2: Floor Plan (2 Images) */}
      <section className="py-[100px] px-[8%] min-h-[80vh] flex items-center box-border">
        <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <Reveal>
            <span className="font-serif text-sm uppercase tracking-[3px] text-accent mb-2.5 block">Prime Location</span>
            <h2 className="font-serif text-3xl mb-5 font-normal">无可复制的绝佳地段</h2>
            <div className="w-[60px] h-[1px] bg-accent my-[30px]"></div>
            <p className="text-[15px] text-text-light text-justify mb-5">地段决定价值。这座宅邸拥有令人惊叹的地理优势，是打造私人度假别墅、第二居所或作为长期投资持有的绝佳胚子。</p>
            <p className="text-[15px] text-text-light text-justify mb-2">• 咫尺见海： 锁上家门，步行仅需数十米即可抵达海岸线，随时能听涛踏浪，感受清凉的海风与迷人的沿海风光。</p>
            <p className="text-[15px] text-text-light text-justify mb-5">• 驾车2分钟： 极速直达知名地标「小樽水族馆」。绝佳的文旅核心地段，赋予了该物件极强的长期保值潜力。</p>
          </Reveal>
          <Reveal delay={0.2} className="grid grid-cols-1 gap-6">
            <div className="relative overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.06)] bg-[#eaeaea] group aspect-[4/3]">
              <img src="/Location.jpg" alt="Location" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="relative overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.06)] bg-[#eaeaea] group aspect-[4/3]">
              <img src="/小樽水族館.jpg.jpg" alt="Otaru Aquarium" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Slide 3: Exterior & Garage (3 Images) */}
      <section className="py-[100px] px-[8%] min-h-[80vh] flex items-center box-border bg-white">
        <div className="max-w-[1200px] mx-auto w-full">
          <Reveal className="text-center max-w-[600px] mx-auto mb-[60px]">
            <span className="font-serif text-sm uppercase tracking-[3px] text-accent mb-2.5 block">Architectural Elegance</span>
            <h2 className="font-serif text-3xl mb-5 font-normal">庄重沉稳的隐秘私邸</h2>
            <div className="w-[60px] h-[1px] bg-accent my-[20px] mx-auto"></div>
            <p className="text-[15px] text-text-light text-justify mb-5">建筑外观采用厚重与轻盈交织的设计语言，赋予整座宅邸如同艺术品般的庄重感。它静静地伫立于此，与周边的自然环境和谐共生，不张扬却难掩内敛的奢华，完美诠释了“大隐隐于市”的从容与优雅。</p>
          </Reveal>
          
          <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="relative overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.06)] bg-[#eaeaea] group aspect-[4/3]">
              <img src="/HouseFront.png.jpg" alt="House Front" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="relative overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.06)] bg-[#eaeaea] group aspect-[4/3]">
              <img src="/HouseBack.png" alt="House Back" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Slide 4: Living & Dining (3 Images) */}
      <section className="py-[100px] px-[8%] min-h-[80vh] flex items-center box-border">
        <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <Reveal delay={0.2} className="grid grid-cols-1 gap-6 order-2 md:order-1">
            <div className="relative overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.06)] bg-[#eaeaea] group aspect-[4/3]">
              <img src="/LivingRoom.png" alt="Living Room" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="relative overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.06)] bg-[#eaeaea] group aspect-[4/3]">
              <img src="/Kitchen&Dining.png" alt="Kitchen and Dining" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </Reveal>
          <Reveal className="order-1 md:order-2">
            <span className="font-serif text-sm uppercase tracking-[3px] text-accent mb-2.5 block">Renovation Potential</span>
            <h2 className="font-serif text-3xl mb-5 font-normal">焕新潜能：打造理想的海滨空间</h2>
            <div className="w-[60px] h-[1px] bg-accent my-[30px]"></div>
            <p className="text-[15px] text-text-light text-justify mb-5">现有的室内格局方正、采光极佳，为后续的软装升级或深度改造提供了完美的“画布”，让您的投资和设计巧思得以尽情施展。</p>
          </Reveal>
        </div>
      </section>

      {/* Slide 5: Private Quarters (4 Images) */}
      <section className="py-[100px] px-[8%] min-h-[80vh] flex items-center box-border bg-white">
        <div className="max-w-[1200px] mx-auto w-full">
          <Reveal className="text-center max-w-[800px] mx-auto mb-[60px]">
            <span className="font-serif text-sm uppercase tracking-[3px] text-accent mb-2.5 block">Versatile Spaces</span>
            <h2 className="font-serif text-3xl mb-5 font-normal">丰沛空间：多元生活方式的基底</h2>
            <div className="w-[60px] h-[1px] bg-accent my-[20px] mx-auto"></div>
            <p className="text-[15px] text-text-light text-justify mb-5">作为具备长线投资潜力的物件，丰富的居室配置为其赋予了极高的灵活性，完美适配不同的改造愿景。</p>
            <p className="text-[15px] text-text-light text-justify mb-2">• 双境和室： 一楼与二楼各配有一间极具日式风情的和室。既可保留作为极简的茶室、瑜伽冥想空间，也可作为待客居室，延展出无限的生活可能。</p>
            <p className="text-[15px] text-text-light text-justify mb-5">• 独立多卧： 除和室外，二楼更配有宽敞的独立卧室。无论是规划为个人的私密休息区，还是打造为安静的海景书房与画室，都能轻松驾驭。</p>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal>
              <div className="relative overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.06)] bg-[#eaeaea] group aspect-[4/3]">
                <img src="/Washitsu1.png" alt="Washitsu 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="relative overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.06)] bg-[#eaeaea] group aspect-[4/3]">
                <img src="/Bedroom2.png" alt="Bedroom 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="relative overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.06)] bg-[#eaeaea] group aspect-[4/3]">
                <img src="/Bedroom3.png" alt="Bedroom 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Slide 6: Details (1 Image) */}
      <section className="py-[100px] px-[8%] min-h-[80vh] flex items-center box-border">
        <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <Reveal>
            <span className="font-serif text-sm uppercase tracking-[3px] text-accent mb-2.5 block">Incredible Asset</span>
            <h2 className="font-serif text-3xl mb-5 font-normal">超低门槛，硬核附属资产</h2>
            <div className="w-[60px] h-[1px] bg-accent my-[30px]"></div>
            <p className="text-[15px] text-text-light text-justify mb-5">令人难以置信的投资性价比：仅需 30万日元 即可全款拿下宽敞的独立车库。</p>
            <p className="text-[15px] text-text-light text-justify mb-5">在这个极其亲民的价格背后，是巨大的空间附加值。它不仅能完美解决冬季风雪天气的泊车难题，其宽广的内部空间更可直接作为大型备用仓库使用。无论是存放户外露营设备、滑雪板，都极具实用价值。</p>
          </Reveal>
          <Reveal delay={0.2} className="grid grid-cols-1 gap-6">
            <div className="relative overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.06)] bg-[#eaeaea] group aspect-[4/3]">
              <img src="/Garage.png" alt="Garage" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="relative overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.06)] bg-[#eaeaea] group aspect-[4/3]">
                <img src="/StorageRoom.png" alt="Storage Room" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="relative overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.06)] bg-[#eaeaea] group aspect-[4/3]">
                <img src="/PowderRoom.png" alt="Powder Room" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="bg-[#1a1a1a] text-white text-center py-[80px] px-5">
        <Reveal className="max-w-[1200px] mx-auto">
          <span className="font-serif text-sm uppercase tracking-[3px] text-white mb-2.5 block">Schedule a Viewing</span>
          <h2 className="font-serif text-2xl tracking-[2px] mb-10 font-normal">诚邀品鉴</h2>
          <p className="text-[#888] text-[15px] mb-5">本宣传资料中的图片及平面图仅供参考，实际情况以房屋现状及最终合同为准。</p>
          <div className="w-[60px] h-[1px] bg-[#444] my-[40px] mx-auto"></div>
          <p className="text-white text-lg mb-1">专属看房预约</p>
          <p className="text-white text-lg mb-1">更多信息了解</p>
          <p className="text-white text-lg mb-4">请联系我们</p>
          <p className="text-accent text-xl font-sans tracking-wider">xinlu-xu@ambitious-jp.com</p>
        </Reveal>
      </footer>

      {/* Floating Action Button for PDF Export */}
      <a 
        href={typeof window !== 'undefined' ? window.location.href : '/'}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          // If we are already in a top-level window (not in iframe), just print directly
          if (typeof window !== 'undefined' && window.self === window.top) {
            e.preventDefault();
            window.print();
          }
          // Otherwise, let the anchor tag naturally open a new tab (bypasses popup blockers)
        }} 
        className="no-print fixed bottom-8 right-8 bg-accent text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#9a8c7a] transition-colors z-50 flex items-center gap-2 font-serif tracking-widest cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" x2="12" y1="15" y2="3"/>
        </svg>
        导出 PDF
      </a>
    </div>
  );
}
