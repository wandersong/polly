import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Playfair_Display } from "next/font/google"

// Configuração da fonte Playfair Display
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export default function SleepConsultantPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8f3eb]">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ryan-klaus-D3PNSeciEHc-unsplash%201.jpg-gGBWwQTku9dkLO9R4uzBAxoqlNFvrp.jpeg"
          alt="Background architectural arches"
          fill
          className="object-cover brightness-[0.6]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
          <h2 className={`${playfair.className} text-3xl md:text-5xl font-light mt-6 mb-4 max-w-xl text-center`}>
            Durma bem e acorde disposto sem remédios
          </h2>
          <p className="text-sm md:text-base max-w-xl mb-8">
            Te ajudo a regular o seu sono descobrindo e solucionando os malefícios que que impedem de dormir.
          </p>
          <Button className="bg-[#e78c2a] hover:bg-[#d47d1e] text-white rounded-md px-8 py-3 font-medium">
            MARCAR CONSULTA
          </Button>
        </div>
      </div>

      {/* Symptoms Section */}
      <div className="py-12 px-4 md:px-8 max-w-4xl mx-auto w-full">
        <h3 className={`${playfair.className} text-xl md:text-2xl text-[#5a4a42] mb-8 max-w-xl mx-auto text-center`}>
          Se você tem algum desses sintomas, o programa "Sono renovado: 4 sessões para eliminar a insônia"
        </h3>

        <div className="space-y-3 max-w-xl mx-auto">
          {[
            "Cansaço e indisposição",
            "Irritação e impaciência",
            "Estresse e ansiedade",
            "Dificuldade de concentração",
            "Metabolismo desregulado",
          ].map((symptom, index) => (
            <button
              key={index}
              className="bg-[#f2d9b8] rounded-md p-4 flex items-center w-full text-left hover:bg-[#eacfaa] transition-colors"
            >
              <div className="w-2 h-2 rounded-full bg-[#5a4a42] mr-3 flex-shrink-0"></div>
              <span className="text-[#5a4a42]">{symptom}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-8 px-4 md:px-8 max-w-4xl mx-auto w-full">
        <h3 className={`${playfair.className} text-xl md:text-2xl text-[#5a4a42] mb-10 text-center`}>
          Com o sono regulado você irá ter
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "Disposição",
              icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%201739-ABFpnSXAHGxO1dCJSiVrKH8U5qrYCo.png",
            },
            {
              title: "Produtividade",
              icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/clipboard-fvUGEXzSAB5PmNLcP1yTFxFLg5Rwqr.png",
            },
            {
              title: "Regulação do humor e sociabilidade",
              icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/emotion-41eVME2itvvg0mm5C85eMYmJ0nWO0a.png",
            },
            {
              title: "Controle do apetite",
              icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/strong-h8Y2CpasWA6RepHuqqgkAwnKE2sFOl.png",
            },
            {
              title: "Melhora no raciocínio e memória",
              icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%201744-AKzCQJWzuUHUOJzsYlzk4sJD67Dy2X.png",
            },
            {
              title: "Aumento da imunidade",
              icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/puzzle-slR8iQDeEkOSxXLKveLOfZ75HlQJU5.png",
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="bg-[#f2d9b8] rounded-md p-6 flex flex-col items-center text-center hover:bg-[#eacfaa] transition-colors cursor-pointer"
            >
              <div className="relative w-14 h-14 mb-3 flex items-center justify-center">
                <Image
                  src={benefit.icon || "/placeholder.svg"}
                  alt={benefit.title}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <span className="text-[#5a4a42] font-medium">{benefit.title}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button className="bg-[#e78c2a] hover:bg-[#d47d1e] text-white rounded-md px-8 py-3 font-medium">
            MARCAR CONSULTA
          </Button>
        </div>
      </div>

      {/* About Me Section */}
      <div className="py-12 px-4 md:px-8 max-w-4xl mx-auto w-full">
        <div className="flex justify-center mb-4">
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/polly%20foto-PJvJlhSIRGYlmurDnjJOo8ekOmjUKp.png"
              alt="Polly Paixão"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <h3 className={`${playfair.className} text-xl md:text-2xl text-[#5a4a42] mb-6 text-center`}>Quem sou eu?</h3>

        <div className="bg-[#f2d9b8] rounded-md p-6 md:p-8 text-[#5a4a42] text-sm md:text-base">
          <p className="mb-4">
            Durante a faculdade, caí na armadilha de achar que dormir menos significava produzir mais. O resultado?
            Queda no rendimento dos estudos, oscilações de humor, cansaço constante, memória fraca, raciocínio lento e,
            por fim, insônia.
          </p>
          <p>
            Passei anos sofrendo as consequências da privação de sono sem perceber que o problema estava exatamente ali:
            no meu descanso. Se identificou? Foi assim que mergulhei nos estudos sobre o sono, me especializei na área e
            hoje ajudo pessoas a dormirem melhor e acordarem dispostas, transformando ciência em prática para uma rotina
            mais leve e produtiva.
          </p>
        </div>

        <div className="mt-8">
          <h4 className={`${playfair.className} text-xl md:text-2xl text-[#5a4a42] mb-4 text-center`}>Formação</h4>
          <div className="text-[#5a4a42] text-sm md:text-base space-y-1 text-center">
            <p>Formada em Medicina pela Faculdade de Medicina</p>
            <p>Pós - Graduação em Neurociências e Comportamento Humano</p>
            <p>Sono: Neurobiologia, Medicina, e Sociedade por University of Michigan</p>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <Button className="bg-[#e78c2a] hover:bg-[#d47d1e] text-white rounded-md px-8 py-3 font-medium">
            MARCAR CONSULTA
          </Button>
        </div>
      </div>
    </div>
  )
}

