"use client";
import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';

// Define types for books and case studies
type Book = {
  id: number;
  title: string;
  genre: string;
  locked: boolean;
  color: string;
};

type CaseStudy = {
  id: number;
  title: string;
  genre: string;
  before: string;
  after: string;
  wordCount: number;
  clientIndustry: string;
  testimonial: string;
};

export default function WritingSamples() {
  const [filter, setFilter] = useState<string>('all');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const bookshelfRef = useRef<HTMLDivElement | null>(null);
  const [ref, inView] = useInView({ threshold: 0.1 });

  // Sample data
  const books: Book[] = [
    { id: 1, title: "Silicon Valley Memoir", genre: "memoir", locked: false, color: "bg-amber-600" },
    { id: 2, title: "Political Thriller", genre: "fiction", locked: true, color: "bg-red-900" },
    { id: 3, title: "FinTech Revolution", genre: "business", locked: false, color: "bg-blue-800" },
    { id: 4, title: "Celebrity Autobiography", genre: "memoir", locked: true, color: "bg-purple-800" },
    { id: 5, title: "Startup Playbook", genre: "business", locked: false, color: "bg-emerald-800" },
  ];

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: "Tech CEO Autobiography",
      genre: "memoir",
      before: "█ was ██ challenging ██████ ██ early ██████ ██ but ██████████ ██",
      after: "The early 2000s presented unprecedented challenges for tech founders navigating the dot-com bubble burst...",
      wordCount: 85000,
      clientIndustry: "Technology",
      testimonial: "Captured my voice perfectly while elevating the prose."
    },
    // Add more case studies...
  ];

  const filteredStudies = filter === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.genre === filter);

  // Bookshelf animation on hover
  useEffect(() => {
    const books = bookshelfRef.current?.querySelectorAll('.book');
    if (!books) return;

    books.forEach((book) => {
      book.addEventListener('mouseenter', () => {
        gsap.to(book, { 
          y: -10, 
          duration: 0.3,
          boxShadow: '0 25px 50px -12px rgba(212, 175, 55, 0.25)'
        });
      });

      book.addEventListener('mouseleave', () => {
        gsap.to(book, { 
          y: 0, 
          duration: 0.3,
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        });
      });
    });
  }, []);

  return (
    <section 
      ref={ref}
      id="library"
      className="relative py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto px-4">
        {/* Animated title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif text-white mb-4">
            <span className="text-yellow-400">The</span> Archive
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Select works available for review—others remain confidential by design.
          </p>
        </motion.div>

        {/* 2D Bookshelf */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          ref={bookshelfRef}
          className="flex justify-center gap-4 flex-wrap mb-20 px-4"
        >
          {books.map((book) => (
            <div
              key={book.id}
              className={`book relative w-24 h-32 ${book.color} rounded-sm cursor-pointer transition-all shadow-lg ${
                book.locked ? 'border-2 border-red-900' : 'border border-yellow-900'
              }`}
              onClick={() => !book.locked && setSelectedBook(book)}
            >
              <div className="absolute inset-0 p-2 overflow-hidden">
                <p className="text-xs font-serif text-white line-clamp-3">
                  {book.title}
                </p>
              </div>
              {book.locked && (
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
                  <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Genre filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-2 mb-12 flex-wrap"
        >
          {['all', 'memoir', 'fiction', 'business'].map((genre) => (
            <button
              key={genre}
              onClick={() => setFilter(genre)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider transition-colors ${
                filter === genre
                  ? 'bg-yellow-600 text-black'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {genre}
            </button>
          ))}
        </motion.div>

        {/* Case studies grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredStudies.map((study) => (
            <CaseStudyCard2D key={study.id} study={study} />
          ))}
        </motion.div>

        {/* Confidential disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="mt-16 text-center text-gray-500 text-sm border-t border-gray-800 pt-8"
        >
          <p>Client identities and unpublished works remain strictly confidential.</p>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-20"></div>
      </div>
    </section>
  );
}

// 2D Case Study Card Component
type CaseStudyCardProps = {
  study: CaseStudy;
};

const CaseStudyCard2D = ({ study }: CaseStudyCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  // Tilt effect on hover
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateY = (x - centerX) / 20;
      const rotateX = (centerY - y) / 20;
      
      gsap.to(card, {
        rotateX,
        rotateY,
        transformPerspective: 1000,
        ease: "power1.out",
        duration: 0.5
      });
    };

    const handleLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.5
      });
    };

    card.addEventListener('mousemove', handleMove);
    card.addEventListener('mouseleave', handleLeave);

    return () => {
      card.removeEventListener('mousemove', handleMove);
      card.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:border-yellow-500/30 hover:shadow-lg hover:shadow-yellow-500/10"
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-serif text-white">{study.title}</h3>
          <span className="px-2 py-1 bg-gray-800 text-yellow-300 text-xs rounded">
            {study.genre}
          </span>
        </div>

        <div className="relative h-48 mb-4 bg-black/50 border border-gray-800 rounded overflow-hidden">
          <AnimatePresence mode="wait">
            {isHovered ? (
              <motion.div
                key="revealed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 p-4 overflow-auto"
              >
                <p className="text-gray-300 font-sans">{study.after}</p>
                {study.testimonial && (
                  <div className="mt-4 pt-4 border-t border-gray-800">
                    <p className="text-yellow-400 italic">"{study.testimonial}"</p>
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="redacted"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 p-4 bg-[url('/paper-texture.jpg')] bg-cover bg-opacity-10"
              >
                <div className="font-mono text-sm">
                  {study.before.split('').map((char, i) => (
                    <span 
                      key={i} 
                      className={char === '█' ? 'text-red-400' : 'text-transparent'}
                    >
                      {char}
                    </span>
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs text-yellow-500 bg-black/80 px-3 py-1.5 rounded-full border border-yellow-500/30">
                    Hover to reveal edited sample
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex justify-between text-xs text-gray-500">
          <span>Word count: {study.wordCount.toLocaleString()}</span>
          <span>{study.clientIndustry} sector</span>
        </div>
      </div>
    </div>
  );
};