export default function TermosPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold text-zinc-900">Termos de Uso</h1>

      <p className="mt-6 text-zinc-700 leading-relaxed">
        Ao acessar este site, você concorda com estes Termos de Uso. Se você não concorda
        com os termos, por favor, não utilize o site.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-zinc-900">Finalidade</h2>
      <p className="mt-3 text-zinc-700 leading-relaxed">
        Este simulador tem finalidade informativa e educacional. Os resultados são
        estimativas e podem não refletir CET, tarifas, impostos, juros reais de mercado ou
        condições específicas de contratos.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-zinc-900">Responsabilidade</h2>
      <p className="mt-3 text-zinc-700 leading-relaxed">
        Você é o único responsável pelas decisões tomadas com base nas informações deste
        site. Recomendamos consultar profissionais qualificados antes de contratar um
        empréstimo.
      </p>

      <p className="mt-8 text-sm text-zinc-600">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>
    </main>
  );
}
