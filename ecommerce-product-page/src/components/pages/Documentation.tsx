/**
 * @file Documentation.tsx
 * @description Component for displaying the JSDoc documentation within the app
 */

const Documentation = () => {
  return (
    <div className="container mx-auto p-4">
      <iframe
        src="/src/docs/index.html"
        className="h-screen w-full border-0"
        title="Documentation"
      />
    </div>
  );
};

export default Documentation;
