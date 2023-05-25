import { logo } from '../assets'

const Hero = () => {
  return (
    <header className="w-full flex items-center flex-col justify-center">
      <nav className="flex justify-between items-center flex-row w-full mb-10 pt-3">
        <img src={logo} alt="logo" className="w-28 object-contain" />
      </nav>
      <h1 className="head_text">Summarize Web Content <br className="max-xs:hidden" />
        <span className="orange_gradient max-md:text-[.75em]">with OpenAI GPT-4</span>
      </h1>
<h2 className="desc">
  Simplify your reading and sharing with Summize, an AI powered article summarizer.
</h2>
    </header>
  )
}

export default Hero