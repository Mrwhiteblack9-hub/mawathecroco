import { getDictionary } from '../../dictionaries'
import HeroSection from '../../components/HeroSection'
import VisionSection from '../../components/VisionSection'
import AIFeaturesSection from '../../components/AIFeaturesSection'
import RoadmapSection from '../../components/RoadmapSection'
import TokenomicsSection from '../../components/TokenomicsSection'
import FAQSection from '../../components/FAQSection'
import HowToBuySection from '../../components/HowToBuySection'

export default async function Home({ params: { lang } }) {
  const dict = await getDictionary(lang)
  return (
    <div>
      <section className="section bg-grid">
        <div className="container">
          <HeroSection buyUrl={dict.buy_url} lang={lang} dict={dict.hero} />
        </div>
      </section>
      <div className="container">
        <VisionSection dict={dict.vision} />
        <AIFeaturesSection dict={dict.ai_features} />
        <TokenomicsSection dict={dict.tokenomics} />
        <RoadmapSection dict={dict.roadmap} />
        <HowToBuySection dict={dict.how_to_buy} buyUrl={dict.buy_url}/>
        <FAQSection dict={dict.faq} />
      </div>
    </div>
  )
}
