type SiteHeaderProps = {
  activePage?: "about";
  showSearch?: boolean;
};

export function SiteHeader({ activePage, showSearch = false }: SiteHeaderProps) {
  return (
    <nav className="topbar about-nav" aria-label="Primary navigation">
      <div className="brand" aria-label="Gwendolyn Chu home links">
        <Link className="brand-mark" href="/" aria-label="GC: return to homepage">GC</Link>
        <Link className="brand-name" href="/">Gwendolyn Chu</Link>
      </div>
      <div className="nav-links">
        <Link href="/#index">Index</Link>
        <Link className={activePage === "about" ? "active-nav" : undefined} href="/about">About</Link>
        {showSearch && <button className="search-button" type="button" aria-label="Search notes"><span aria-hidden="true">⌕</span> Search <kbd>⌘ K</kbd></button>}
      </div>
    </nav>
  );
}
import Link from "next/link";
