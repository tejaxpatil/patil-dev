import { MainLayout } from '@/layouts';

function App() {
  return (
    <MainLayout>
      <section className="flex min-h-screen items-center justify-center px-6 pt-[var(--navbar-height)]">
        <div className="text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
            Portfolio
          </p>

          <h1 className="font-heading text-5xl font-bold tracking-tight text-[var(--text-primary)] sm:text-6xl">
            PATIL
          </h1>

          <p className="mt-5 text-lg text-[var(--text-secondary)]">
            Something great is being built here.
          </p>
        </div>
      </section>
    </MainLayout>
  );
}

export default App;