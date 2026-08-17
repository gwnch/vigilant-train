type SiteHeaderProps = {
  activePage?: "about";
  showSearch?: boolean;
};

export function SiteHeader({ activePage, showSearch = false }: SiteHeaderProps) {
  return (
    <nav className="topbar about-nav" aria-label="Primary navigation">
      <div className="brand" aria-label="Gwendolyn Chu home links">
        <a className="brand-mark" href="/" aria-label="GC: return to homepage">GC</a>
        <a className="brand-name" href="/">Gwendolyn Chu</a>
      </div>
      <div className="nav-links">
        <a href="/#index">Index</a>
        <a className={activePage === "about" ? "active-nav" : undefined} href="/about">About</a>
        {showSearch && <button className="search-button" type="button" aria-label="Search notes"><span aria-hidden="true">⌕</span> Search <kbd>⌘ K</kbd></button>}
      </div>
    </nav>
  );
}
