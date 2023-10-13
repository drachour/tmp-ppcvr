const translations = {
    eng: {
        header: "Gael Achour's Portfolio",
        about: {
            title: "About",
            me: "Me",
            description: [
                "I'm a professional back-end developer.",
                "My motive is to build the best web or app developer with my years of experience."
            ],
            graphicsSkill: "Graphics",
            developingSkill: "Developing",
            writingSkill: "Writing",
            uiuxSkill: "UI/UX",
            yearsExperience: "Years Experience",
            projectCompleted: "Project Completed",
            happyClients: "Happy Clients",
            cupsOfTea: "Cups Of Tea"
        },
        contact: {
            getInTouch: "Get In Touch With",
            me: "Me",
            yourFullName: "Your full name",
            emailAddress: "Your email address",
            subject: "Subject",
            message: "Write your message",
            sendMsg: "Send Message",
            phone: "+1 555 555-5555",
            emailMain: "contact@exemple.ca",
            emailSupport: "support@exemple.ca",
            address: "1 Rang, Montréal, Québec",
            postalCode: "E0E E0E, Canada"
        },
        faq: {
            title: "Frequently Asked",
            gradientText: "Questions",
            faqs: [
                {
                    question: 'How long does it take to build a website?',
                    answer: 'The time it takes to build a website can vary depending on the complexity and requirements. Generally, a simple website can take 2-4 weeks.',
                },
                {
                    question: 'Do you redesign existing websites?',
                    answer: 'Yes, we do offer redesign services for existing websites.',
                },
                {
                    question: 'Do you work internationally?',
                    answer: 'Yes, we work with clients from all over the world.',
                },
                {
                    question: 'Will my website work on smartphones and tablets?',
                    answer: 'Absolutely, we ensure all our designs are fully responsive and compatible with different devices.',
                },
                {
                    question: 'Can you help me rank high in Google?',
                    answer: 'Yes, we offer SEO services to help your website rank higher in search engines.',
                },
                {
                    question: 'How much does a website cost?',
                    answer: 'The cost of a website depends on various factors such as features, complexity, and design elements. Contact us for a detailed quote.',
                },
                {
                    question: 'Do you offer maintenance services?',
                    answer: 'Yes, we offer various maintenance packages to keep your website up to date.',
                },
                {
                    question: 'Can I update the website myself?',
                    answer: 'If your website is built on a CMS, you can update content yourself. We also provide a guide on how to do so.',
                },
            ]
        },
        gallery:{
            gradientTitle: "My",
            title: "Gallery"
        },
        home: {
            subtitle: "Hello!",
            gradientTitle: "I'M",
            title: "Gael Achour",
            subtitleRole: "Back End Developer",
            description: [
                "I am Gael Achour.",
                "I am simple, creative, enthusiastic, and autonomous.",
                "I always like to create new and interesting programs and templates that will be helpful for others"
            ]
        },
        portfolio: {
            sectionTitle: "Take A Look On My Past",
            filterButtons: {
                showAll: "Show All",
                webDesign: "Web Design"
            },
            cards: [
                {
                    type: "Application Windows",
                    title: "AEC UWP Client",
                    startDate: "Start: 01/01/2022",
                    endDate: "End: 12/23/2023"
                },
                {
                    type: "Discord Bot",
                    title: "Cthulhu Bot",
                    startDate: "Start: 09/10/2023",
                    endDate: "End: -"
                },
                {
                    type: "Java Application",
                    title: "Fortis Bank",
                    startDate: "Start: 01/01/2023",
                    endDate: "End: 06/01/2023"
                }
            ],
            visitButton: "Visit Site"
        },
        services: {
            sectionTitle: {
                my: "My",
                expertise: "Experties"
            },
            cards: [
                {
                    icon: '🖥',
                    title: 'Application Windows',
                    description: 'Developing desktop applications for Windows.'
                },
                {
                    icon: '💻',
                    title: 'Web Development',
                    description: 'Creating stunning websites and web apps.'
                },
                {
                    icon: '🤖',
                    title: 'Discord Bot',
                    description: 'Creating smart and interactive Discord bots.'
                },
                {
                    icon: '🎮',
                    title: 'Game Development',
                    description: 'Creating interactive and fun games with Unity.'
                },
                {
                    icon: '📱',
                    title: 'Mobile App Development',
                    description: 'Creating mobile applications for Android.'
                },
                {
                    icon: '🛠',
                    title: 'DevOps',
                    description: 'Automating workflows and optimizing performance.'
                }
            ],
            projectInMind: "Have Any Project In Mind?",
            submitProposal: "Submit A Proposal"
        },
        cardPrice: {
            sectionTitle: {
                pricing: "Pricing",
                plan: "Plan"
            },
            cards: [
                {
                    title: 'Application Windows',
                    icon: '🖥',
                    items: [
                        { label: 'Basic App', price: '$250.00', unit: '(p/pjct)' },
                        { label: 'Database Integration', price: '$350.00', unit: '(p/pjct)' },
                        { label: 'Advanced Features', price: '$500.00', unit: '(p/pjct)' },
                        { label: 'User Interface Design', price: '$150.00', unit: '(p/pjct)' },
                        { label: 'Security Features', price: '$300.00', unit: '(p/pjct)' }
                    ],
                },
                {
                    title: 'Web Development',
                    icon: '💻',
                    items: [
                        { label: 'Front-end Development', price: '$300.00', unit: '(p/pjct)' },
                        { label: 'Back-end Development', price: '$400.00', unit: '(p/pjct)' },
                        { label: 'Full Stack', price: '$600.00', unit: '(p/pjct)' },
                        { label: 'SEO Optimization', price: '$200.00', unit: '(p/pjct)' },
                        { label: 'E-commerce Integration', price: '$500.00', unit: '(p/pjct)' }
                    ],
                },
                {
                    title: 'Discord Bot',
                    icon: '🤖',
                    items: [
                        { label: 'Basic Bot', price: '$150.00', unit: '(p/pjct)' },
                        { label: 'Moderation Bot', price: '$250.00', unit: '(p/pjct)' },
                        { label: 'Advanced Bot', price: '$400.00', unit: '(p/pjct)' },
                        { label: 'Music Bot', price: '$300.00', unit: '(p/pjct)' },
                        { label: 'Chat Bot', price: '$350.00', unit: '(p/pjct)' }
                    ],
                },
                {
                    title: 'Game Development',
                    icon: '🎮',
                    items: [
                        { label: '2D Game', price: '$500.00', unit: '(p/pjct)' },
                        { label: '3D Game', price: '$1000.00', unit: '(p/pjct)' },
                        { label: 'VR Game', price: '$1500.00', unit: '(p/pjct)' },
                        { label: 'Game Design', price: '$250.00', unit: '(p/pjct)' },
                        { label: 'Level Design', price: '$300.00', unit: '(p/pjct)' }
                    ],
                },
                {
                    title: 'Mobile App Development',
                    icon: '📱',
                    items: [
                        { label: 'Android App', price: '$400.00', unit: '(p/pjct)' },
                        { label: 'Cross-Platform', price: '$700.00', unit: '(p/pjct)' },
                        { label: 'UI/UX Design', price: '$300.00', unit: '(p/pjct)' },
                        { label: 'In-App Purchases', price: '$250.00', unit: '(p/pjct)' }
                    ],
                }
            ],
            startButton: "Start A Project"
        },
        experience: {
            educationTitle: "Education",
            experienceTitle: "Experience",
            eductionCards: [
                {
                    duration: "01/2022 – 12/2023",
                    title: "Programmeur Analyste",
                    location: "Collège Lasalle, Montréal, Québec"
                },
                {
                    duration: "10/2022",
                    title: "C# Certificate Of Completion",
                    location: "W3Schools"
                },
                {
                    duration: "05/2022",
                    title: "IT Essentials",
                    location: "Cisco - Networking Academy"
                }
            ],
            experienceCards: [
                {
                    duration: "2017 - Now",
                    title: "Programmeur Analyste",
                    location: "Personnel | Lacolle, Québec | Freelance"
                },
                {
                    duration: "2020 - 2022",
                    title: "Web Dev",
                    location: "Les Entreprises J.F. Faucher Inc. | La Prairie, Québec"
                },
                {
                    duration: "2017 - 2022",
                    title: "IT",
                    location: "Les Entreprises J.F. Faucher Inc. | La Prairie, Québec"
                },
                {
                    duration: "2015 - 2017",
                    title: "Information department team leader",
                    location: "Les Entreprises J.F. Faucher Inc. | La Prairie, Québec"
                }
            ]
        },
        menu: {
            about: "ABOUT",
            service: "SERVICE",
            faq: "FAQ",
            portfolio: "PORTFOLIO",
            gallery: "GALLERY",
            contact: "CONTACT"
        }
    },
    fr: {
        header: "Portfolio de Gael Achour",
        about: {
            title: "À propos",
            me: "de moi",
            description:[ 
                "Je suis un développeur back-end professionnel.",
                "Mon objectif est de devenir le meilleur développeur web ou d'applications grâce à mes années d'expérience."
            ],
            graphicsSkill: "Graphique",
            developingSkill: "Développement",
            writingSkill: "Écriture",
            uiuxSkill: "UI/UX",
            yearsExperience: "Années d'expérience",
            projectCompleted: "Projets terminés",
            happyClients: "Clients satisfaits",
            cupsOfTea: "Tasses de thé"
        },
        contact: {
            getInTouch: "Prenez contact avec",
            me: "Moi",
            yourFullName: "Votre nom complet",
            emailAddress: "Votre adresse e-mail",
            subject: "Sujet",
            message: "Écrivez votre message",
            sendMsg: "Envoyer le message",
            phone: "+1 555 555-5555",
            emailMain: "contact@exemple.ca",
            emailSupport: "support@exemple.ca",
            address: "1 Rang, Montréal, Québec",
            postalCode: "E0E E0E, Canada"
        },
        faq: {
            title: "Foire Aux",
            gradientText: "Questions",
            faqs: [
                {
                    question: 'Combien de temps faut-il pour construire un site Web?',
                    answer: 'Le temps nécessaire pour construire un site Web peut varier selon sa complexité et ses exigences. Généralement, un site Web simple peut prendre de 2 à 4 semaines.'
                },
                {
                    question: 'Refaites-vous la conception des sites Web existants?',
                    answer: 'Oui, nous offrons des services de refonte pour les sites Web existants.',
                },
                {
                    question: 'Travaillez-vous à l\'international?',
                    answer: 'Oui, nous travaillons avec des clients du monde entier.',
                },
                {
                    question: 'Mon site Web fonctionnera-t-il sur les smartphones et les tablettes?',
                    answer: 'Absolument, nous nous assurons que tous nos designs sont entièrement responsive et compatibles avec différents appareils.',
                },
                {
                    question: 'Pouvez-vous m\'aider à obtenir un classement élevé dans Google?',
                    answer: 'Oui, nous proposons des services de SEO pour aider votre site Web à être mieux classé dans les moteurs de recherche.',
                },
                {
                    question: 'Combien coûte un site Web?',
                    answer: 'Le coût d\'un site Web dépend de divers facteurs tels que les fonctionnalités, la complexité et les éléments de design. Contactez-nous pour un devis détaillé.',
                },
                {
                    question: 'Proposez-vous des services de maintenance?',
                    answer: 'Oui, nous proposons différents forfaits de maintenance pour garder votre site Web à jour.',
                },
                {
                    question: 'Puis-je mettre à jour le site Web moi-même?',
                    answer: 'Si votre site Web est construit sur un CMS, vous pouvez mettre à jour le contenu vous-même. Nous fournissons également un guide sur la manière de le faire.',
                },
            ]
        },
        gallery:{
            gradientTitle: "Ma",
            title: "Galerie"
        },
        home: {
            subtitle: "Bonjour!",
            gradientTitle: "JE SUIS",
            title: "Gael Achour",
            subtitleRole: "Développeur Back End",
            description: [
                "Je suis Gael Achour.",
                "Je suis simple, créatif, enthousiaste et autonome.",
                "J'aime toujours créer de nouveaux programmes et modèles intéressants qui seront utiles pour les autres"
            ]
        },
        portfolio: {
            sectionTitle: "Jetez un coup d'œil sur mon passé",
            filterButtons: {
                showAll: "Montrer tout",
                webDesign: "Web Design"
            },
            cards: [
                {
                    type: "Application Windows",
                    title: "Client AEC UWP",
                    startDate: "Début: 01/01/2022",
                    endDate: "Fin: 12/23/2023"
                },
                {
                    type: "Bot Discord",
                    title: "Bot Cthulhu",
                    startDate: "Début: 09/10/2023",
                    endDate: "Fin: -"
                },
                {
                    type: "Application Java",
                    title: "Banque Fortis",
                    startDate: "Début: 01/01/2023",
                    endDate: "Fin: 06/01/2023"
                }
            ],
            visitButton: "Visiter le site"
        },
        services: {
            sectionTitle: {
                my: "Mes",
                expertise: "Expertises"
            },
            cards: [
                {
                    icon: '🖥',
                    title: 'Application Windows',
                    description: 'Développement d’applications de bureau pour Windows.'
                },
                {
                    icon: '💻',
                    title: 'Développement Web',
                    description: 'Création de sites web et d’applications web.'
                },
                {
                    icon: '🤖',
                    title: 'Bot Discord',
                    description: 'Création de bots Discord intelligents et interactifs.'
                },
                {
                    icon: '🎮',
                    title: 'Développement de jeux',
                    description: 'Création de jeux interactifs et amusants avec Unity.'
                },
                {
                    icon: '📱',
                    title: 'Développement d’applications mobiles',
                    description: 'Création d’applications mobiles pour Android.'
                },
                {
                    icon: '🛠',
                    title: 'DevOps',
                    description: 'Automatisation des flux de travail et optimisation des performances.'
                }
            ],
            projectInMind: "Avez-vous un projet en tête?",
            submitProposal: "Soumettre une proposition"
        },
        cardPrice: {
            sectionTitle: {
                pricing: "Tarification",
                plan: "Plan"
            },
            cards: [
                {
                    title: 'Application Windows',
                    icon: '🖥',
                    items: [
                        { label: 'Application basique', price: '250,00 $', unit: '(p/pjct)' },
                        { label: 'Intégration de base de données', price: '350,00 $', unit: '(p/pjct)' },
                        { label: 'Fonctionnalités avancées', price: '500,00 $', unit: '(p/pjct)' },
                        { label: 'Conception de l\'interface utilisateur', price: '150,00 $', unit: '(p/pjct)' },
                        { label: 'Fonctionnalités de sécurité', price: '300,00 $', unit: '(p/pjct)' }
                    ],
                },
                {
                    title: 'Développement Web',
                    icon: '💻',
                    items: [
                        { label: 'Développement Front-end', price: '300,00 $', unit: '(p/pjct)' },
                        { label: 'Développement Back-end', price: '400,00 $', unit: '(p/pjct)' },
                        { label: 'Développement Full Stack', price: '600,00 $', unit: '(p/pjct)' },
                        { label: 'Optimisation SEO', price: '200,00 $', unit: '(p/pjct)' },
                        { label: 'Intégration E-commerce', price: '500,00 $', unit: '(p/pjct)' }
                    ],
                },
                {
                    title: 'Bot Discord',
                    icon: '🤖',
                    items: [
                        { label: 'Bot basique', price: '150,00 $', unit: '(p/pjct)' },
                        { label: 'Bot de modération', price: '250,00 $', unit: '(p/pjct)' },
                        { label: 'Bot avancé', price: '400,00 $', unit: '(p/pjct)' },
                        { label: 'Bot musical', price: '300,00 $', unit: '(p/pjct)' },
                        { label: 'Chat Bot', price: '350,00 $', unit: '(p/pjct)' }
                    ],
                },
                {
                    title: 'Développement de Jeux',
                    icon: '🎮',
                    items: [
                        { label: 'Jeu 2D', price: '500,00 $', unit: '(p/pjct)' },
                        { label: 'Jeu 3D', price: '1 000,00 $', unit: '(p/pjct)' },
                        { label: 'Jeu VR', price: '1 500,00 $', unit: '(p/pjct)' },
                        { label: 'Conception de jeux', price: '250,00 $', unit: '(p/pjct)' },
                        { label: 'Conception de niveaux', price: '300,00 $', unit: '(p/pjct)' }
                    ],
                },
                {
                    title: 'Développement d\'applications mobiles',
                    icon: '📱',
                    items: [
                        { label: 'Application Android', price: '400,00 $', unit: '(p/pjct)' },
                        { label: 'Application multiplateforme', price: '700,00 $', unit: '(p/pjct)' },
                        { label: 'Conception UI/UX', price: '300,00 $', unit: '(p/pjct)' },
                        { label: 'Achats intégrés', price: '250,00 $', unit: '(p/pjct)' }
                    ],
                }
            ],
            startButton: "Démarrer un projet"
        },
        experience: {
            educationTitle: "Éducation",
            experienceTitle: "Expérience Professionnelle",
            eductionCards: [
                {
                    duration: "01/2022 – 12/2023",
                    title: "Programmeur Analyste",
                    location: "Collège Lasalle, Montréal, Québec"
                },
                {
                    duration: "10/2022",
                    title: "Certificat de complétion en C#",
                    location: "W3Schools"
                },
                {
                    duration: "05/2022",
                    title: "Essentiels de l'IT",
                    location: "Cisco - Académie de Réseautage"
                },
            ],
            experienceCards: [
                {
                    duration: "2017 - Actuellement",
                    title: "Programmeur Analyste",
                    location: "Personnel | Lacolle, Québec | Freelance"
                },
                {
                    duration: "2020 - 2022",
                    title: "Développeur Web",
                    location: "Les Entreprises J.F. Faucher Inc. | La Prairie, Québec"
                },
                {
                    duration: "2017 - 2022",
                    title: "Technologie de l'Information",
                    location: "Les Entreprises J.F. Faucher Inc. | La Prairie, Québec"
                },
                {
                    duration: "2015 - 2017",
                    title: "Chef d'équipe du département d'information",
                    location: "Les Entreprises J.F. Faucher Inc. | La Prairie, Québec"
                }
            ]
        },
        menu: {
            about: "À PROPOS",
            service: "SERVICE",
            faq: "FAQ",
            portfolio: "PORTFOLIO",
            gallery: "GALERIE",
            contact: "CONTACT"
        }
    }
};

export default translations;
