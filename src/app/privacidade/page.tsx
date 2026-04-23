export default function PrivacidadePage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold text-zinc-900">Política de Privacidade</h1>

      <p className="mt-6 text-zinc-700 leading-relaxed">
        Esta Política de Privacidade descreve como as informações são coletadas, usadas e
        compartilhadas ao acessar o site “Simulador de Empréstimo”.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-zinc-900">Coleta de informações</h2>
      <p className="mt-3 text-zinc-700 leading-relaxed">
        Este site não exige cadastro e não coleta informações pessoais diretamente por
        formulários. Os cálculos são realizados localmente no seu navegador.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-zinc-900">Cookies e anúncios</h2>
      <p className="mt-3 text-zinc-700 leading-relaxed">
        Quando a monetização por anúncios estiver habilitada, parceiros como o Google
        poderão utilizar cookies para exibir anúncios com base em visitas anteriores do
        usuário a este e a outros sites.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-zinc-900">Contato</h2>
      <p className="mt-3 text-zinc-700 leading-relaxed">
        Em caso de dúvidas, entre em contato pela página de Contato.
      </p>

      <p className="mt-8 text-sm text-zinc-600">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>
    </main>
  );
}
