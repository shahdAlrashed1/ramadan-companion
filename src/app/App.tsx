import { Playground } from './Playground';

function App() {
  const isPlayground = window.location.pathname === '/playground';

  if (isPlayground) {
    return <Playground />;
  }

  return (
    <main dir="rtl" className="bg-background text-foreground min-h-screen p-8">
      <div className="mx-auto max-w-5xl space-y-10">
        {/* اتركي محتوى صفحة Design System الحالي كما هو */}
      </div>
    </main>
  );
}

export default App;
