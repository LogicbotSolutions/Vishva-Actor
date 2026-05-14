import React, { useEffect, useRef, useState } from 'react';
import useInView from '../hooks/useInView';

const imagePath = (name) => `/image/${name}`;
const remoteImage = (name) => `https://raw.githubusercontent.com/LogicbotSolutions/Vishva-Actor/main/image/${encodeURIComponent(name)}`;
const imageFallback = (event, name) => {
  const fallback = remoteImage(name);
  if (event.currentTarget.src !== fallback) {
    event.currentTarget.src = fallback;
  }
};

const theaterPhotosLink = 'https://photos.app.goo.gl/gB4iqivnTUSbvnYW8';

const portfolioSlides = [
  { src: imagePath('Vp2.jpeg'), alt: 'Vishva featured look one' },
  { src: imagePath('DSC_Vp2.jpeg'), alt: 'Vishva featured look two' },
  { src: imagePath('vishvaport.jpg'), alt: 'Vishva featured look three' },
];

const galleryImages = [
  { src: imagePath('DSC_V3.jpeg'), alt: 'Vishva portrait in cinematic profile' },
  { src: imagePath('DSC_V1.jpeg'), alt: 'Vishva editorial portrait' },
  { src: imagePath('v4.jpg'), alt: 'Vishva film still portrait' },
  { src: imagePath('DSC_V2.jpeg'), alt: 'Vishva studio portrait' },
];

const navarasaFaces = [
  '651016266_18005275775890866_8067287277665629917_n (1).webp',
  '651960899_17962290944908180_1052468977800294993_n (4).jpg',
  '652745180_18096527726489074_3737213495648878175_n (2).webp',
  '654488347_18096239795478250_6254137208967302174_n (1).webp',
  '658198836_18389318506082091_6611794634553849085_n (2).webp',
  '655036811_18097056536089826_6070074469943722664_n (3).webp',
  '655108676_18127461181565239_1574693221697492636_n (1).webp',
  '670426790_18106504048860206_892604789479247815_n (1).webp',
  '670429314_18345375688212352_4386542831680656637_n (2).webp',
];

function Home() {
  const [portfolioIndex, setPortfolioIndex] = useState(0);
  const [emotionIndex, setEmotionIndex] = useState(0);
  const [heroIntroDone, setHeroIntroDone] = useState(false);
  const [isEmotionFlipping, setIsEmotionFlipping] = useState(false);
  const touchStart = useRef(0);
  const emotionTouchStart = useRef(0);
  const emotionFlipTimer = useRef(null);
  const heroRef = useRef(null);
  const galleryHeadingRef = useRef(null);
  const galleryRef1 = useRef(null);
  const galleryRef2 = useRef(null);
  const galleryRef3 = useRef(null);
  const galleryRef4 = useRef(null);
  const galleryRefs = [galleryRef1, galleryRef2, galleryRef3, galleryRef4];
  const storyImageRef = useRef(null);
  const storyContentRef = useRef(null);
  const featuredHeadingRef = useRef(null);
  const sliderRef = useRef(null);

  const heroInView = useInView(heroRef, 0.35);
  const galleryHeadingInView = useInView(galleryHeadingRef);
  const galleryInView1 = useInView(galleryRef1);
  const galleryInView2 = useInView(galleryRef2);
  const galleryInView3 = useInView(galleryRef3);
  const galleryInView4 = useInView(galleryRef4);
  const galleryInView = [galleryInView1, galleryInView2, galleryInView3, galleryInView4];
  const storyImageInView = useInView(storyImageRef);
  const storyContentInView = useInView(storyContentRef);
  const featuredHeadingInView = useInView(featuredHeadingRef);
  const sliderInView = useInView(sliderRef);
  const totalSlides = portfolioSlides.length + 1;
  const isTheaterSlide = portfolioIndex === portfolioSlides.length;

  useEffect(() => {
    const introTimer = window.setTimeout(() => {
      setEmotionIndex(0);
      setHeroIntroDone(true);
    }, 2600);

    return () => window.clearTimeout(introTimer);
  }, []);

  useEffect(() => {
    if (!heroIntroDone) return undefined;

    if (isEmotionFlipping) return undefined;

    const showcaseTimer = window.setInterval(() => {
      setEmotionIndex((prev) => (prev + 1) % navarasaFaces.length);
    }, 2200);

    return () => window.clearInterval(showcaseTimer);
  }, [heroIntroDone, isEmotionFlipping]);

  useEffect(() => (
    () => {
      if (emotionFlipTimer.current) {
        window.clearInterval(emotionFlipTimer.current);
      }
    }
  ), []);

  const moveSlide = (step) => {
    setPortfolioIndex((prev) => (prev + step + totalSlides) % totalSlides);
  };

  const flipEmotionStory = (direction) => {
    if (emotionFlipTimer.current) {
      window.clearInterval(emotionFlipTimer.current);
    }

    setIsEmotionFlipping(true);
    let frames = 0;
    emotionFlipTimer.current = window.setInterval(() => {
      frames += 1;
      setEmotionIndex((prev) => (prev + direction + navarasaFaces.length) % navarasaFaces.length);

      if (frames >= navarasaFaces.length) {
        window.clearInterval(emotionFlipTimer.current);
        emotionFlipTimer.current = null;
        setIsEmotionFlipping(false);
      }
    }, 85);
  };

  const handleTouchStart = (event) => {
    touchStart.current = event.changedTouches[0].screenX;
  };

  const handleTouchEnd = (event) => {
    const end = event.changedTouches[0].screenX;
    if (touchStart.current - end > 50) moveSlide(1);
    if (end - touchStart.current > 50) moveSlide(-1);
  };

  const handleEmotionTouchStart = (event) => {
    emotionTouchStart.current = event.changedTouches[0].screenX;
  };

  const handleEmotionTouchEnd = (event) => {
    const end = event.changedTouches[0].screenX;
    if (emotionTouchStart.current - end > 40) flipEmotionStory(1);
    if (end - emotionTouchStart.current > 40) flipEmotionStory(-1);
  };

  return (
    <main>
      <section ref={heroRef} className={`hero ${heroInView ? 'in-view' : ''} ${heroIntroDone ? 'hero-intro-done' : ''} ${isEmotionFlipping ? 'emotion-flipping' : ''}`} id="home" aria-label="Vishva actor portfolio hero">
        <div className="navarasa-faces" aria-hidden="true">
          {navarasaFaces.map((name, index) => (
            <img
              key={name}
              src={`/${name}`}
              alt=""
              loading={index < 3 ? 'eager' : 'lazy'}
              decoding="async"
            />
          ))}
        </div>

        <div
          className="mobile-emotion-stage"
          onTouchStart={handleEmotionTouchStart}
          onTouchEnd={handleEmotionTouchEnd}
          aria-label="Navarasa emotion showcase"
        >
          <div className="mobile-film-roll" aria-hidden="true">
            <div className="mobile-film-track">
              {navarasaFaces.map((name) => (
                <img key={`roll-${name}`} src={`/${name}`} alt="" decoding="async" />
              ))}
            </div>
          </div>

          <div className="mobile-emotion-view">
            <img
              key={navarasaFaces[emotionIndex]}
              src={`/${navarasaFaces[emotionIndex]}`}
              alt={`Vishva emotion ${emotionIndex + 1}`}
              decoding="async"
            />
            <div className="emotion-controls" aria-label="Emotion slides">
              {navarasaFaces.map((name, index) => (
                <button
                  key={`emotion-dot-${name}`}
                  type="button"
                  className={`emotion-dot ${index === emotionIndex ? 'active' : ''}`}
                  onClick={() => setEmotionIndex(index)}
                  aria-label={`Show emotion ${index + 1}`}
                  aria-current={index === emotionIndex}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="hero-content">
          <h1 className="hero-name" aria-label="Vishva">
            {'VISHVA'.split('').map((letter) => (
              <span key={letter}>{letter}</span>
            ))}
          </h1>
          <p className="hero-subtitle">Actor</p>
          <div className="hero-divider"></div>
        </div>

        <div className="scroll-indicator" aria-hidden="true">
          <div className="scroll-line"></div>
          <div className="scroll-dot"></div>
        </div>
      </section>

      <section className="gallery scene-section" id="gallery">
        <div ref={galleryHeadingRef} className={`gallery-heading fade-up ${galleryHeadingInView ? 'in-view' : ''}`}>
          <span className="section-kicker">Selected Stills</span>
          <h2>Portfolio</h2>
          <p>Four frames that introduce the face, mood, and screen presence before the story begins.</p>
        </div>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <figure
              key={image.src}
              ref={galleryRefs[index]}
              className={`gallery-item scale-in ${galleryInView[index] ? 'in-view' : ''}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                onError={(event) => imageFallback(event, image.src.replace('/image/', ''))}
              />
            </figure>
          ))}
        </div>
      </section>

      <section className="story scene-section" id="story">
        <div className="story-container">
          <figure ref={storyImageRef} className={`story-image fade-left ${storyImageInView ? 'in-view' : ''}`}>
            <img
              src={imagePath('DSC_Vp2.jpeg')}
              alt="Vishva in a refined portrait"
              loading="lazy"
              decoding="async"
              onError={(event) => imageFallback(event, 'DSC_Vp2.jpeg')}
            />
          </figure>
          <div ref={storyContentRef} className={`story-content fade-right ${storyContentInView ? 'in-view' : ''}`}>
            <h2>My Story</h2>
            <div className="story-copy">
              <p>
                I began my journey as a junior artist and, after two years of dedication,
                earned my breakthrough with the film <em>Rangoli</em>, playing Abdul.
              </p>
              <p>
                Every role is a chance to study silence, movement, and emotion, then bring
                those details into a performance that feels lived in.
              </p>
              <p>
                Through theatre and screen, I keep returning to one purpose: telling stories
                with honesty, discipline, and a deep respect for the audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-looks scene-section">
        <div ref={featuredHeadingRef} className={`featured-heading fade-up ${featuredHeadingInView ? 'in-view' : ''}`}>
          <h2>Featured Looks</h2>
        </div>
        <div
          ref={sliderRef}
          className={`slider-container scale-in ${sliderInView ? 'in-view' : ''}`}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button className="slider-arrow slider-arrow-prev" type="button" onClick={() => moveSlide(-1)} aria-label="Previous look">
            ‹
          </button>
          <div className="slider-frame">
            {isTheaterSlide ? (
              <a href={theaterPhotosLink} target="_blank" rel="noreferrer" className="theater-slide google-photos-slide">
                <div className="google-photos-mark" aria-hidden="true">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="theater-slide-copy">
                  <p>See these photos</p>
                </div>
              </a>
            ) : (
              <img
                key={portfolioIndex}
                className="slider-image"
                src={portfolioSlides[portfolioIndex].src}
                alt={portfolioSlides[portfolioIndex].alt}
                loading="lazy"
                decoding="async"
                onError={(event) => imageFallback(event, portfolioSlides[portfolioIndex].src.replace('/image/', ''))}
              />
            )}
          </div>
          <button className="slider-arrow slider-arrow-next" type="button" onClick={() => moveSlide(1)} aria-label="Next look">
            ›
          </button>
          <div className="slider-dots" aria-label="Featured look slides">
            <div className="slider-progress" style={{ '--progress': `${((portfolioIndex + 1) / totalSlides) * 100}%` }} aria-hidden="true"></div>
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${index === portfolioIndex ? 'active' : ''} ${index === portfolioSlides.length ? 'theater-dot' : ''}`}
                type="button"
                onClick={() => setPortfolioIndex(index)}
                aria-label={index === portfolioSlides.length ? 'Show Google Photos' : `Show slide ${index + 1}`}
                aria-current={index === portfolioIndex}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
