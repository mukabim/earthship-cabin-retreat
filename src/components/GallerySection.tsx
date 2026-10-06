import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Images, Play, X } from "lucide-react";
import Reveal from "@/components/Reveal";
import {
  GALLERY_FILTER_EVENT,
  categoryLabels,
  galleryFilms,
  galleryPhotos,
  type GalleryCategory,
  type GalleryFilm,
  type GalleryPhoto,
} from "@/data/gallery";

type Filter = "all" | GalleryCategory;
type Lightbox = { kind: "photo" | "film"; index: number } | null;

const PAGE_SIZE = 16;

const tileSpan = (i: number) => {
  switch (i % 10) {
    case 0:
      return "col-span-2 row-span-2";
    case 3:
    case 8:
      return "row-span-2";
    case 6:
      return "col-span-2";
    default:
      return "";
  }
};

const filters: Filter[] = [
  "all",
  "lodge",
  "interiors",
  "dining",
  "adventure",
  "nature",
  "camping",
];

const FilmCard = ({
  film,
  onOpen,
}: {
  film: GalleryFilm;
  onOpen: () => void;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const preview = () => {
    const v = videoRef.current;
    if (!v || !window.matchMedia("(hover: hover)").matches) return;
    v.play().catch(() => undefined);
  };

  const stop = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };

  return (
    <button
      type="button"
      onClick={onOpen}
      onMouseEnter={preview}
      onMouseLeave={stop}
      className="group relative shrink-0 snap-start w-36 sm:w-44 md:w-48 aspect-[9/16] overflow-hidden rounded-2xl bg-forest-800 ring-1 ring-white/10 hover:ring-earth-300/70 transition cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-earth-300"
      aria-label={`Play film: ${film.title}`}
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
        muted
        loop
        playsInline
        preload="none"
        poster={film.poster}
      >
        <source src={film.src} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20" />
      <span className="absolute top-3 left-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-md ring-1 ring-white/40 transition group-hover:bg-earth-400 group-hover:ring-earth-300">
        <Play className="h-4 w-4 text-white fill-white translate-x-[1px]" />
      </span>
      <p className="absolute bottom-3 left-3 right-3 text-left font-display text-lg leading-tight text-white">
        {film.title}
      </p>
    </button>
  );
};

const GallerySection = () => {
  const [filter, setFilter] = useState<Filter>("all");
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [lightbox, setLightbox] = useState<Lightbox>(null);
  const touchStartX = useRef<number | null>(null);

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: galleryPhotos.length };
    galleryPhotos.forEach((p) => {
      c[p.category] = (c[p.category] ?? 0) + 1;
    });
    return c;
  }, []);

  const photos = useMemo(
    () =>
      filter === "all"
        ? galleryPhotos
        : galleryPhotos.filter((p) => p.category === filter),
    [filter]
  );

  const shown = photos.slice(0, visible);
  const list: (GalleryPhoto | GalleryFilm)[] =
    lightbox?.kind === "film" ? galleryFilms : photos;
  const current = lightbox ? list[lightbox.index] : null;

  const close = useCallback(() => setLightbox(null), []);
  const step = useCallback(
    (delta: number) =>
      setLightbox((lb) =>
        lb ? { ...lb, index: (lb.index + delta + list.length) % list.length } : lb
      ),
    [list.length]
  );

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, close, step]);

  const selectFilter = (f: Filter) => {
    setFilter(f);
    setVisible(PAGE_SIZE);
  };

  useEffect(() => {
    const onFilter = (e: Event) => {
      setFilter((e as CustomEvent<GalleryCategory>).detail);
      setVisible(PAGE_SIZE);
    };
    window.addEventListener(GALLERY_FILTER_EVENT, onFilter);
    return () => window.removeEventListener(GALLERY_FILTER_EVENT, onFilter);
  }, []);

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
    touchStartX.current = null;
  };

  return (
    <section
      id="gallery"
      className="py-24 md:py-28 bg-forest-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_15%_10%,#2d9f5d_0%,transparent_40%),radial-gradient(circle_at_85%_90%,#8B5A3C_0%,transparent_40%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="section-kicker text-earth-300 mb-3">See the place</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.05]">
              Life at EarthShip
            </h2>
            <p className="text-lg text-white/70 max-w-xl font-light mt-4">
              Timber interiors, farm-fresh plates, Mt. Kenya summits and
              highland wildlife, all from our doorstep in Timau.
            </p>
          </div>
          <div className="flex gap-8 text-white">
            <div>
              <p className="font-display text-4xl text-earth-300">
                {galleryPhotos.length}
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                Photos
              </p>
            </div>
            <div>
              <p className="font-display text-4xl text-earth-300">
                {galleryFilms.length}
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                Films
              </p>
            </div>
          </div>
        </Reveal>

        {/* Films reel */}
        <Reveal className="mb-16">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display text-2xl text-white">Films</h3>
            <p className="text-sm text-white/50 hidden sm:block">
              Hover to preview · tap to watch with sound
            </p>
          </div>
          <div className="-mx-4 px-4 sm:mx-0 sm:px-0 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 scrollbar-thin">
            {galleryFilms.map((film, i) => (
              <FilmCard
                key={film.src}
                film={film}
                onOpen={() => setLightbox({ kind: "film", index: i })}
              />
            ))}
          </div>
        </Reveal>

        {/* Filters */}
        <Reveal className="mb-8">
          <div className="-mx-4 px-4 sm:mx-0 sm:px-0 flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
            {filters.map((f) => {
              const active = filter === f;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => selectFilter(f)}
                  className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition cursor-pointer ring-1 ${
                    active
                      ? "bg-earth-300 text-forest-900 ring-earth-300"
                      : "bg-white/5 text-white/80 ring-white/15 hover:bg-white/10 hover:text-white"
                  }`}
                  aria-pressed={active}
                >
                  {f === "all" ? "All" : categoryLabels[f]}
                  <span
                    className={`ml-2 text-xs ${
                      active ? "text-forest-900/70" : "text-white/40"
                    }`}
                  >
                    {counts[f] ?? 0}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Mosaic grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[150px] sm:auto-rows-[190px] lg:auto-rows-[210px] grid-flow-dense gap-3 md:gap-4">
          {shown.map((photo, i) => (
            <button
              key={`${filter}-${photo.src}`}
              type="button"
              onClick={() => setLightbox({ kind: "photo", index: i })}
              className={`group relative overflow-hidden rounded-2xl bg-forest-800 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-earth-300 animate-fade-in ${tileSpan(i)}`}
              aria-label={`Open photo: ${photo.title}`}
            >
              <img
                src={photo.thumb}
                alt={photo.title}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/0 to-black/0 opacity-70 md:opacity-0 md:group-hover:opacity-100 transition duration-500" />
              <div className="absolute inset-x-3 bottom-3 text-left translate-y-0 md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition duration-500">
                <p className="text-[10px] uppercase tracking-[0.2em] text-earth-300">
                  {categoryLabels[photo.category]}
                </p>
                <p className="font-display text-lg md:text-xl leading-tight text-white">
                  {photo.title}
                </p>
              </div>
            </button>
          ))}
        </div>

        {visible < photos.length && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setVisible((v) => v + PAGE_SIZE)}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-7 py-3 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-earth-300 hover:text-forest-900 hover:ring-earth-300 transition cursor-pointer"
            >
              <Images className="h-4 w-4" />
              Show more photos
              <span className="opacity-60">
                ({photos.length - visible} more)
              </span>
            </button>
          </div>
        )}
      </div>

      {current && lightbox && (
        <div
          className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          onClick={close}
          onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
          onTouchEnd={onTouchEnd}
        >
          <div className="flex items-center justify-between px-4 sm:px-8 py-4 text-white/80 text-sm">
            <span className="tabular-nums">
              {lightbox.index + 1} / {list.length}
            </span>
            <button
              type="button"
              onClick={close}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 cursor-pointer"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="relative flex-1 flex items-center justify-center px-4 sm:px-20 min-h-0">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 cursor-pointer"
              aria-label="Previous"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div
              className="max-h-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              {current.type === "image" ? (
                <img
                  key={current.src}
                  src={current.src}
                  alt={current.title}
                  className="max-h-[78vh] w-auto max-w-full rounded-xl object-contain shadow-2xl animate-fade-in"
                />
              ) : (
                <video
                  key={current.src}
                  className="max-h-[78vh] w-auto max-w-full rounded-xl bg-black shadow-2xl"
                  controls
                  autoPlay
                  playsInline
                  poster={current.poster}
                >
                  <source src={current.src} type="video/mp4" />
                </video>
              )}
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 cursor-pointer"
              aria-label="Next"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className="px-4 py-5 text-center">
            {current.type === "image" && (
              <p className="text-[11px] uppercase tracking-[0.25em] text-earth-300">
                {categoryLabels[current.category]}
              </p>
            )}
            <p className="font-display text-2xl text-white mt-1">
              {current.title}
            </p>
            <p className="sm:hidden text-xs text-white/40 mt-2">
              Swipe to browse
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
