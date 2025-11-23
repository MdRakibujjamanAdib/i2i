// Header Component
function Header() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'What is Innovation' },
        { href: '#why-matters', label: 'Why It Matters' },
        { href: '#contact', label: 'Contact Us' },
    ];

    return React.createElement('header', {
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            isScrolled 
                ? 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-200/50' 
                : 'bg-transparent'
        }`
    },
        React.createElement('nav', { className: 'max-w-[980px] mx-auto px-6 py-3' },
            React.createElement('div', { className: 'flex items-center justify-between' },
                React.createElement('a', { 
                    href: '#home', 
                    className: 'flex items-center space-x-2 text-xl font-semibold' 
                },
                    React.createElement('svg', {
                        className: `w-5 h-5 transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'}`,
                        fill: 'currentColor',
                        viewBox: '0 0 24 24'
                    },
                        React.createElement('path', { d: 'M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z' })
                    ),
                    React.createElement('span', {
                        className: `transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'}`
                    }, 'Innovate')
                ),
                React.createElement('div', { className: 'hidden md:flex items-center space-x-10' },
                    navLinks.map(link =>
                        React.createElement('a', {
                            key: link.href,
                            href: link.href,
                            className: `text-sm font-normal transition-all duration-300 hover:opacity-70 ${
                                isScrolled ? 'text-black' : 'text-white'
                            }`
                        }, link.label)
                    )
                ),
                React.createElement('div', { className: 'md:hidden' },
                    React.createElement('button', {
                        onClick: () => setIsMenuOpen(!isMenuOpen),
                        'aria-label': 'Toggle menu',
                        className: `focus:outline-none transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'}`
                    },
                        React.createElement('svg', {
                            className: 'w-6 h-6',
                            fill: 'none',
                            stroke: 'currentColor',
                            viewBox: '0 0 24 24'
                        },
                            isMenuOpen 
                                ? React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M6 18L18 6M6 6l12 12' })
                                : React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M4 6h16M4 12h16M4 18h16' })
                        )
                    )
                )
            )
        ),
        React.createElement('div', {
            className: `md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
            }`
        },
            React.createElement('div', {
                className: 'bg-white/95 backdrop-blur-xl border-t border-gray-200/50 flex flex-col items-center py-6 space-y-4'
            },
                navLinks.map(link =>
                    React.createElement('a', {
                        key: link.href,
                        href: link.href,
                        onClick: () => setIsMenuOpen(false),
                        className: 'text-black text-base font-normal hover:opacity-70 transition-opacity duration-300'
                    }, link.label)
                )
            )
        )
    );
}

// Hero Section Component
function HeroSection() {
    return React.createElement('section', {
        id: 'home',
        className: 'relative min-h-screen flex items-center justify-center text-center px-6 pt-20 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-gray-800'
    },
        React.createElement('div', {
            className: 'absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.15),transparent_50%),radial-gradient(circle_at_70%_50%,rgba(74,144,226,0.15),transparent_50%)] opacity-60'
        }),
        React.createElement('div', { className: 'relative z-10 max-w-4xl mx-auto' },
            React.createElement('h1', { className: 'text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-6 leading-none' },
                React.createElement('span', { className: 'text-white block mb-2' }, 'Sparking the Future'),
                React.createElement('span', { className: 'text-white/90 block text-4xl md:text-6xl lg:text-7xl font-normal' }, 'One Idea at a Time.')
            ),
            React.createElement('p', { className: 'text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-10 font-light leading-relaxed' },
                'Innovation is the engine of progress, transforming simple ideas into groundbreaking realities.'
            ),
            React.createElement('div', { className: 'flex flex-col sm:flex-row items-center justify-center gap-4' },
                React.createElement('a', {
                    href: '#about',
                    className: 'group inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-medium py-3.5 px-8 rounded-full hover:bg-blue-500 transition-all duration-300 text-base'
                },
                    React.createElement('span', null, 'Learn More'),
                    React.createElement('svg', {
                        className: 'w-4 h-4 transition-transform duration-300 group-hover:translate-x-1',
                        fill: 'currentColor',
                        viewBox: '0 0 20 20'
                    },
                        React.createElement('path', { fillRule: 'evenodd', d: 'M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z', clipRule: 'evenodd' })
                    )
                ),
                React.createElement('a', {
                    href: '#contact',
                    className: 'inline-flex items-center justify-center gap-2 bg-transparent text-white font-medium py-3.5 px-8 rounded-full border border-white/30 hover:border-white/50 hover:bg-white/5 transition-all duration-300 text-base'
                }, 'Contact Us')
            )
        ),
        React.createElement('div', { className: 'absolute bottom-20 left-1/2 -translate-x-1/2 w-32 h-32 opacity-30' },
            React.createElement('svg', { viewBox: '0 0 200 200', className: 'w-full h-full animate-float' },
                React.createElement('defs', null,
                    React.createElement('linearGradient', { id: 'bulb-gradient', x1: '0%', y1: '0%', x2: '100%', y2: '100%' },
                        React.createElement('stop', { offset: '0%', style: { stopColor: '#60A5FA', stopOpacity: 1 } }),
                        React.createElement('stop', { offset: '100%', style: { stopColor: '#A78BFA', stopOpacity: 1 } })
                    )
                ),
                React.createElement('circle', { cx: '100', cy: '60', r: '35', fill: 'url(#bulb-gradient)', opacity: '0.6' }),
                React.createElement('path', { d: 'M 80 90 Q 80 110, 90 120 L 110 120 Q 120 110, 120 90', fill: 'url(#bulb-gradient)', opacity: '0.4' }),
                React.createElement('rect', { x: '88', y: '120', width: '24', height: '8', rx: '2', fill: 'url(#bulb-gradient)', opacity: '0.3' }),
                React.createElement('line', { x1: '100', y1: '25', x2: '100', y2: '15', stroke: 'white', strokeWidth: '3', strokeLinecap: 'round', opacity: '0.5' }),
                React.createElement('line', { x1: '135', y1: '38', x2: '143', y2: '30', stroke: 'white', strokeWidth: '3', strokeLinecap: 'round', opacity: '0.5' }),
                React.createElement('line', { x1: '150', y1: '60', x2: '160', y2: '60', stroke: 'white', strokeWidth: '3', strokeLinecap: 'round', opacity: '0.5' }),
                React.createElement('line', { x1: '65', y1: '38', x2: '57', y2: '30', stroke: 'white', strokeWidth: '3', strokeLinecap: 'round', opacity: '0.5' }),
                React.createElement('line', { x1: '50', y1: '60', x2: '40', y2: '60', stroke: 'white', strokeWidth: '3', strokeLinecap: 'round', opacity: '0.5' })
            )
        )
    );
}

// Feature Card Component
function FeatureCard({ icon, title, description }) {
    return React.createElement('div', {
        className: 'group p-8 rounded-3xl bg-gray-50 hover:bg-white transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1'
    },
        React.createElement('div', {
            className: 'flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-500'
        }, icon),
        React.createElement('h3', { className: 'text-xl font-semibold mb-3 text-black' }, title),
        React.createElement('p', { className: 'text-gray-600 leading-relaxed font-light' }, description)
    );
}

// About Section Component
function AboutSection() {
    const features = [
        {
            icon: React.createElement('svg', { className: 'w-7 h-7 text-white', fill: 'currentColor', viewBox: '0 0 20 20' },
                React.createElement('path', { d: 'M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z' })
            ),
            title: 'Creativity Unleashed',
            description: "At its core, innovation starts with a creative spark. It's about seeing problems from new angles and imagining novel solutions."
        },
        {
            icon: React.createElement('svg', { className: 'w-7 h-7 text-white', fill: 'currentColor', viewBox: '0 0 20 20' },
                React.createElement('path', { fillRule: 'evenodd', d: 'M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z', clipRule: 'evenodd' })
            ),
            title: 'Driving Progress',
            description: 'Innovation fuels growth in every sector, from technology and science to arts and social structures, pushing humanity forward.'
        },
        {
            icon: React.createElement('svg', { className: 'w-7 h-7 text-white', fill: 'currentColor', viewBox: '0 0 20 20' },
                React.createElement('path', { d: 'M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z' })
            ),
            title: 'Collaborative Spirit',
            description: 'The most powerful innovations often arise from collaboration, where diverse minds come together to solve complex challenges.'
        }
    ];

    return React.createElement('section', {
        id: 'about',
        className: 'py-24 md:py-32 px-6 relative bg-white'
    },
        React.createElement('div', { className: 'max-w-[980px] mx-auto text-center relative z-10' },
            React.createElement('h2', { className: 'text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-black tracking-tight' },
                'What is Innovation?'
            ),
            React.createElement('p', { className: 'max-w-3xl mx-auto text-gray-600 text-lg md:text-xl mb-16 md:mb-20 font-light leading-relaxed' },
                "Innovation is more than just a buzzword. It's the process of creating and implementing new ideas, methods, or products that result in significant positive change. It's the bridge between imagination and impact."
            ),
            React.createElement('div', { className: 'grid md:grid-cols-3 gap-6 lg:gap-8' },
                features.map((feature, index) =>
                    React.createElement('div', {
                        key: index,
                        className: 'opacity-0 animate-fade-in-up',
                        style: { animationDelay: `${(index + 1) * 100}ms` }
                    },
                        React.createElement(FeatureCard, feature)
                    )
                )
            )
        )
    );
}

// Why It Matters Section Component
function WhyItMattersSection() {
    return React.createElement('section', {
        id: 'why-matters',
        className: 'py-24 md:py-32 px-6 relative bg-gray-50'
    },
        React.createElement('div', { className: 'max-w-[980px] mx-auto' },
            React.createElement('div', { className: 'text-center mb-16' },
                React.createElement('h2', { className: 'text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-black tracking-tight' },
                    'Why It Matters'
                ),
                React.createElement('p', { className: 'max-w-3xl mx-auto text-gray-600 text-lg md:text-xl font-light leading-relaxed' },
                    "In a rapidly changing world, innovation isn't just important—it's essential. It shapes our future, solves pressing challenges, and creates opportunities we never imagined possible."
                )
            ),
            React.createElement('div', { className: 'grid md:grid-cols-2 gap-12 items-center' },
                React.createElement('div', { className: 'space-y-6' },
                    React.createElement('div', { className: 'flex gap-4' },
                        React.createElement('div', { className: 'flex-shrink-0' },
                            React.createElement('div', { className: 'w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center' },
                                React.createElement('svg', { className: 'w-6 h-6 text-white', fill: 'currentColor', viewBox: '0 0 20 20' },
                                    React.createElement('path', { d: 'M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z' })
                                )
                            )
                        ),
                        React.createElement('div', null,
                            React.createElement('h3', { className: 'text-xl font-semibold mb-2 text-black' }, 'Drives Economic Growth'),
                            React.createElement('p', { className: 'text-gray-600 font-light leading-relaxed' },
                                'Innovation creates new industries, jobs, and opportunities that fuel economic prosperity and improve quality of life.'
                            )
                        )
                    ),
                    React.createElement('div', { className: 'flex gap-4' },
                        React.createElement('div', { className: 'flex-shrink-0' },
                            React.createElement('div', { className: 'w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center' },
                                React.createElement('svg', { className: 'w-6 h-6 text-white', fill: 'currentColor', viewBox: '0 0 20 20' },
                                    React.createElement('path', { fillRule: 'evenodd', d: 'M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z', clipRule: 'evenodd' })
                                )
                            )
                        ),
                        React.createElement('div', null,
                            React.createElement('h3', { className: 'text-xl font-semibold mb-2 text-black' }, 'Solves Global Challenges'),
                            React.createElement('p', { className: 'text-gray-600 font-light leading-relaxed' },
                                'From climate change to healthcare, innovation provides the tools and solutions needed to tackle humanity\'s biggest problems.'
                            )
                        )
                    ),
                    React.createElement('div', { className: 'flex gap-4' },
                        React.createElement('div', { className: 'flex-shrink-0' },
                            React.createElement('div', { className: 'w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center' },
                                React.createElement('svg', { className: 'w-6 h-6 text-white', fill: 'currentColor', viewBox: '0 0 20 20' },
                                    React.createElement('path', { fillRule: 'evenodd', d: 'M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z', clipRule: 'evenodd' })
                                )
                            )
                        ),
                        React.createElement('div', null,
                            React.createElement('h3', { className: 'text-xl font-semibold mb-2 text-black' }, 'Empowers Progress'),
                            React.createElement('p', { className: 'text-gray-600 font-light leading-relaxed' },
                                'Every innovation builds on the last, creating a continuous cycle of improvement that moves society forward.'
                            )
                        )
                    )
                ),
                React.createElement('div', { className: 'relative' },
                    React.createElement('div', { className: 'relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl' },
                        React.createElement('img', {
                            src: 'img1.jpg',
                            alt: 'Innovation and creativity visualization',
                            className: 'w-full h-full object-cover'
                        })
                    )
                )
            )
        )
    );
}

// Newsletter Section Component
function NewsletterSection() {
    return React.createElement('section', {
        id: 'newsletter',
        className: 'py-24 md:py-32 px-6 relative overflow-hidden bg-gradient-to-b from-white to-gray-50'
    },
        React.createElement('div', {
            className: 'max-w-[640px] mx-auto text-center relative z-10 opacity-0 animate-fade-in-up',
            style: { animationDelay: '400ms' }
        },
            React.createElement('h2', { className: 'text-4xl md:text-5xl lg:text-6xl font-semibold mb-5 text-black tracking-tight' },
                'Join the Innovation Movement'
            ),
            React.createElement('p', { className: 'text-gray-600 text-lg md:text-xl mb-10 font-light leading-relaxed' },
                'Stay ahead of the curve. Subscribe to our newsletter for the latest insights, stories, and opportunities in the world of innovation.'
            ),
            React.createElement('form', {
                className: 'flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto',
                onSubmit: (e) => e.preventDefault()
            },
                React.createElement('input', {
                    type: 'email',
                    placeholder: 'Enter your email',
                    className: 'w-full sm:flex-1 px-5 py-3.5 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-base placeholder:text-gray-400',
                    'aria-label': 'Email for subscription'
                }),
                React.createElement('button', {
                    type: 'submit',
                    className: 'w-full sm:w-auto bg-blue-600 text-white font-medium py-3.5 px-8 rounded-full hover:bg-blue-500 transition-all duration-300 text-base whitespace-nowrap'
                }, 'Subscribe')
            ),
            React.createElement('p', { className: 'text-gray-400 text-sm mt-4 font-light' },
                'We respect your privacy. Unsubscribe at any time.'
            )
        )
    );
}

// Footer Component with Contact Form
function Footer() {
    return React.createElement('footer', { id: 'contact', className: 'bg-gray-900 text-white py-16 px-6' },
        React.createElement('div', { className: 'max-w-[980px] mx-auto' },
            React.createElement('div', { className: 'grid md:grid-cols-3 gap-12 mb-12' },
                // Left Column - Branding & Links
                React.createElement('div', null,
                    React.createElement('div', { className: 'flex items-center gap-2 mb-6' },
                        React.createElement('svg', { className: 'w-8 h-8 text-blue-500', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
                            React.createElement('rect', { x: 5, y: 2, width: 10, height: 16, rx: 2, strokeWidth: 2 }),
                            React.createElement('line', { x1: 10, y1: 6, x2: 10, y2: 6, strokeWidth: 2, strokeLinecap: 'round' }),
                            React.createElement('line', { x1: 16, y1: 4, x2: 18, y2: 2, strokeWidth: 2, strokeLinecap: 'round' }),
                            React.createElement('line', { x1: 16, y1: 8, x2: 19, y2: 8, strokeWidth: 2, strokeLinecap: 'round' }),
                            React.createElement('line', { x1: 16, y1: 12, x2: 18, y2: 14, strokeWidth: 2, strokeLinecap: 'round' })
                        ),
                        React.createElement('span', { className: 'text-xl font-semibold' }, 'Innovate')
                    ),
                    React.createElement('nav', { className: 'space-y-3 mb-6' },
                        React.createElement('a', { href: '#about', className: 'block text-gray-400 hover:text-white transition-colors duration-300' }, 'About Us'),
                        React.createElement('a', { href: '#why', className: 'block text-gray-400 hover:text-white transition-colors duration-300' }, 'Services'),
                        React.createElement('a', { href: '#newsletter', className: 'block text-gray-400 hover:text-white transition-colors duration-300' }, 'Selected Work'),
                        React.createElement('a', { href: '#contact', className: 'block text-gray-400 hover:text-white transition-colors duration-300' }, 'Get In Touch')
                    )
                ),
                // Middle Column - Recent News (optional content)
                React.createElement('div', null,
                    React.createElement('h3', { className: 'text-lg font-semibold mb-4' }, 'Recent News'),
                    React.createElement('p', { className: 'text-gray-400 text-sm mb-4 leading-relaxed' },
                        'Footer with solid color background and a contact form. Easily add subscribe and contact forms without any server-side integration.'
                    ),
                    React.createElement('p', { className: 'text-gray-400 text-sm leading-relaxed' },
                        'Innovate helps you cut down development time by providing you with a flexible website editor with a drag and drop interface.'
                    )
                ),
                // Right Column - Contact Form
                React.createElement('div', null,
                    React.createElement('h3', { className: 'text-lg font-semibold mb-4' }, 'Contact Us'),
                    React.createElement('form', {
                        className: 'space-y-3',
                        onSubmit: (e) => e.preventDefault()
                    },
                        React.createElement('input', {
                            type: 'email',
                            placeholder: 'Email',
                            className: 'w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm text-white placeholder:text-gray-500',
                            required: true
                        }),
                        React.createElement('textarea', {
                            placeholder: 'Message',
                            rows: 4,
                            className: 'w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm text-white placeholder:text-gray-500 resize-none',
                            required: true
                        }),
                        React.createElement('button', {
                            type: 'submit',
                            className: 'w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-500 transition-all duration-300 text-sm uppercase tracking-wider'
                        }, 'Send Message')
                    )
                )
            ),
            // Bottom Footer - Copyright & Social
            React.createElement('div', { className: 'pt-8 border-t border-gray-800' },
                React.createElement('div', { className: 'flex flex-col md:flex-row justify-between items-center gap-4' },
                    React.createElement('p', { className: 'text-gray-400 text-sm' },
                        `© Copyright ${new Date().getFullYear()} Innovate - All Rights Reserved`
                    ),
                    React.createElement('div', { className: 'flex space-x-4' },
                        React.createElement('a', {
                            href: '#',
                            'aria-label': 'Twitter',
                            className: 'text-gray-400 hover:text-white transition-colors duration-300'
                        },
                            React.createElement('svg', { className: 'w-5 h-5', fill: 'currentColor', viewBox: '0 0 24 24' },
                                React.createElement('path', { d: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' })
                            )
                        ),
                        React.createElement('a', {
                            href: '#',
                            'aria-label': 'Facebook',
                            className: 'text-gray-400 hover:text-white transition-colors duration-300'
                        },
                            React.createElement('svg', { className: 'w-5 h-5', fill: 'currentColor', viewBox: '0 0 24 24' },
                                React.createElement('path', { d: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' })
                            )
                        ),
                        React.createElement('a', {
                            href: '#',
                            'aria-label': 'Instagram',
                            className: 'text-gray-400 hover:text-white transition-colors duration-300'
                        },
                            React.createElement('svg', { className: 'w-5 h-5', fill: 'currentColor', viewBox: '0 0 24 24' },
                                React.createElement('path', { d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' })
                            )
                        )
                    )
                )
            )
        )
    );
}

// Main App Component
function App() {
    return React.createElement('div', { className: 'min-h-screen bg-white font-sans antialiased' },
        React.createElement(Header),
        React.createElement('main', null,
            React.createElement(HeroSection),
            React.createElement(AboutSection),
            React.createElement(WhyItMattersSection),
            React.createElement(NewsletterSection)
        ),
        React.createElement(Footer)
    );
}

// Load React from CDN and render
const script1 = document.createElement('script');
script1.crossOrigin = 'anonymous';
script1.src = 'https://unpkg.com/react@18/umd/react.production.min.js';

const script2 = document.createElement('script');
script2.crossOrigin = 'anonymous';
script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js';

script1.onload = () => {
    document.head.appendChild(script2);
};

script2.onload = () => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(React.createElement(App));
};

document.head.appendChild(script1);
