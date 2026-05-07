import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const GREEN = "#0cfa64";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <FadeUp>
      <div className="mb-12">
        <h2
          className="text-lg font-extrabold uppercase tracking-wider mb-4 pb-3 border-b border-white/[0.07]"
          style={{ color: GREEN }}
        >
          {title}
        </h2>
        <div className="text-white/60 text-sm leading-relaxed space-y-4">{children}</div>
      </div>
    </FadeUp>
  );
}

export default function PrivacyPage() {
  return (
    <div className="bg-black min-h-screen text-white" style={{ fontFamily: "'Figtree', sans-serif" }}>
      <Navbar />

      <PageHero
        label="Legal"
        title={<>Política de <span style={{ color: GREEN }}>Privacidade</span></>}
        subtitle="Transparência sobre como coletamos, usamos e protegemos suas informações."
        crumbs={[{ label: "Política de Privacidade" }]}
      />

      <section className="py-20 max-w-3xl mx-auto px-6">
        <FadeUp>
          <p className="text-white/40 text-sm mb-12 pb-8 border-b border-white/[0.07]">
            Bem-vindo à Política de Privacidade da Skalena!
          </p>
        </FadeUp>

        <Section title="Quais informações coletamos?">
          <p>
            Em nosso site, coletamos apenas as informações fornecidas por você através da opção "contato" e por meio de formulários enviados pelo site. Ou seja, coletamos informações cadastrais como nome, e-mail, telefone para contato e empresa preenchidos por você.
          </p>
          <p>
            As informações são recolhidas para responder às suas dúvidas, informações, sugestões e necessidades, como envio de newsletter.
          </p>
          <div
            className="p-5 rounded-xl border text-sm font-medium"
            style={{ borderColor: `${GREEN}33`, background: `${GREEN}08`, color: "rgba(255,255,255,0.8)" }}
          >
            AO FORNECER INFORMAÇÕES CADASTRAIS E/OU PESSOAIS NESTE SITE, VOCÊ ESTÁ AUTORIZANDO A SKALENA A UTILIZAR SUAS INFORMAÇÕES EM CONFORMIDADE COM ESTA POLÍTICA DE PRIVACIDADE.
          </div>
          <p>
            A veracidade dos dados fornecidos é de suma importância e depende de você. Verifique seus dados antes de nos enviar, pois será por meio destes que a SKALENA o contatará. Assim sendo, você é o responsável pelas declarações prestadas.
          </p>
        </Section>

        <Section title="Quem é responsável pelo tratamento dos dados pessoais?">
          <p>
            As informações que forem comunicadas por meio deste site serão tratadas como confidenciais e poderão ser utilizadas pela SKALENA e compartilhadas livremente com outras empresas do mesmo grupo, respeitando as disposições legais aplicáveis, com o objetivo principal de melhor adequar os nossos produtos e serviços ao perfil de seus usuários.
          </p>
          <p>
            Desta forma, declaramos que seus dados pessoais serão tratados somente pela SKALENA e, em casos específicos, pelas outras empresas do grupo.
          </p>
        </Section>

        <Section title="Atualização da Política de Privacidade">
          <p>
            A presente política de privacidade está sujeita a alterações regulares para garantir que esteja atualizada com o uso de suas informações pessoais e em conformidade com as leis de proteção de dados aplicáveis.
          </p>
          <p>
            Reservamo-nos no direito de revisar esta política de privacidade, a qualquer tempo, seja pela utilização de novas tecnologias ou sempre que a SKALENA entender necessário. A política de privacidade atualizada será publicada em nosso site, motivo pelo qual recomendamos verificá-lo periodicamente.
          </p>
        </Section>

        <Section title="Os seus direitos">
          <p>A SKALENA permite, por parte de clientes e usuários, todos os direitos relativos ao tratamento de seus dados pessoais previstos na legislação, principalmente os seguintes:</p>
          <ul className="space-y-3">
            {[
              "Solicitar a confirmação da existência de tratamento e o acesso aos dados que a SKALENA possui sobre você;",
              "Solicitar a retificação ou atualização dos dados pessoais inexatos ou desatualizados;",
              "Solicitar a exclusão de suas informações pessoais existentes em nosso banco de dados e de outras empresas do grupo, exceto nas hipóteses em que esse direito possa ser limitado conforme determina a lei;",
              "Retirar, a qualquer momento, o seu consentimento, para os fins para os quais este foi obtido.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: GREEN }} />
                {item}
              </li>
            ))}
          </ul>

          <div
            className="flex items-start gap-4 p-5 rounded-xl border mt-4"
            style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }}
          >
            <Mail size={18} className="flex-shrink-0 mt-0.5" style={{ color: GREEN }} />
            <p>
              Se você deseja exercer algum dos seus direitos em relação às suas informações pessoais ou se tiver alguma dúvida sobre como usamos suas informações pessoais, entre em contato conosco por e-mail:{" "}
              <a href="mailto:dpo@skalena.com.br" className="font-semibold hover:opacity-80 transition-opacity" style={{ color: GREEN }}>
                dpo@skalena.com.br
              </a>
            </p>
          </div>
        </Section>

        <FadeUp>
          <p className="text-white/30 text-xs border-t border-white/[0.07] pt-8 mt-4">
            Data da última atualização: 19 de Novembro de 2021.
          </p>
        </FadeUp>
      </section>

      <Footer />
    </div>
  );
}
