export default function ContatoPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold text-zinc-900">Contato</h1>

      <p className="mt-6 text-zinc-700 leading-relaxed">
        Para dúvidas, sugestões ou correções, envie um e-mail para:
      </p>

      <p className="mt-3">
        <a
          className="font-semibold text-sky-700 hover:underline"
          href="mailto:suportcalculo@gmail.com"
        >
          suportcalculo@gmail.com
        </a>
      </p>

      <p className="mt-6 text-zinc-700 leading-relaxed">
        Observação: este site não oferece consultoria financeira.
      </p>
    </main>
  );
}
