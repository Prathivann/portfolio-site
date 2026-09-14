export default function Footer() {
  return (
    <footer className="border-t border-border py-8 bg-white/30">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-base text-text-muted font-serif">
        <p>Built with React + Tailwind CSS</p>
        <p>&copy; {new Date().getFullYear()} Prithivan Raja</p>
      </div>
    </footer>
  );
}
