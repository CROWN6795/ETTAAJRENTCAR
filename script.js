
        const carData = { 
            "Volkswagen-Touareg": {
                    id:"Volkswagen Touareg",
                    name: "Volkswagen Touareg",
                    seats: 5,
                    transmission: "Automatic",
                    fuel: "Diesel",
                    luggage: "4 large bags",
                    prices: {
                    day: 1200,
                    week: 7500,
                    month: 30000
                    },
                    img: "img/VolkswagenTouareg.jpg"
            },
            "Volkswagen-T-Roc": {
                    name: "Volkswagen T-Roc",
                    seats: 5,
                    transmission: "Automatic",
                    fuel: "Diesel",
                    luggage: "3 large bags",
                    prices: {
                    day: 800,
                    week: 4900,
                    month: 18600
                    },
                    img: "img/Volkswagen T-Roc.jpg"
            },
            "Volkswagen-Golf-8": {
                    name: "Volkswagen Golf 8",
                    seats: 5,
                    transmission: "Automatic",
                    fuel: "Petrol",
                    luggage: "2 large bags",
                    prices: {
                    day: 800,
                    week: 5500,
                    month: 21000
                    },
                    img: "img/Volkswagen Golf 8.jpg"
            },
            "Volkswagen-Golf-7-R": {
                    name: "Volkswagen Golf 7 R",
                    seats: 5,
                    transmission: "Automatic",
                    fuel: "Petrol",
                    luggage: "2 large bags",
                    prices: {
                    day: 800,
                    week: 5500,
                    month: 21000
                    },
                    img: "img/Volkswagen Golf 7 R.jpg"
            },
            "Toyota-Land-Cruiser": {
                    name: "Toyota Land Cruiser",
                    seats: 7,
                    transmission: "Automatic",
                    fuel: "Diesel",
                    luggage: "4 large bags",
                    prices: {
                    day: 2500,
                    week: 16800,
                    month: 68200
                    },
                    img: "img/Toyota Land Cruiser.jpg"
            },
            "Cupra-Leon": {
                    name: "Cupra Leon",
                    seats: 5,
                    transmission: "Automatic",
                    fuel: "Diesel",
                    luggage: "3 large bags",
                    prices: {
                    day: 900,
                    week: 6300,
                    month: 24000
                    },
                    img: "img/Cupra Leon.jpg"
            },
            "Renault-Mégane 4": {
                    name: "Renault Mégane 4",
                    seats: 5,
                    transmission: "Automatic",
                    fuel: "Diesel",
                    luggage: "2 large bags",
                    prices: {
                    day: 600,
                    week: 3500,
                    month: 13500
                    },
                    img: "img/Renault Mégane 4.jpg"
            },
            "Renault-Clio-5-Alpine": {
                    name: "Renault Clio 5 Alpine",
                    seats: 5,
                    transmission: "Automatic",
                    fuel: "Diesel",
                    luggage: "2 large bags",
                    prices: {
                    day: 550,
                    week: 3500,
                    month: 12400
                    },
                    img: "img/Renault Clio 5 Alpine.jpg"
            },
            "Renault-Clio-5": {
                    name: "Renault Clio 5",
                    seats: 5,
                    transmission: "Manual",
                    fuel: "Diesel",
                    luggage: "2 large bags",
                    prices: {
                    day: 400,
                    week: 2450,
                    month: 9300
                    },
                    img: "img/Renault Clio 5.jpg"
            },
            "Renault-Arkana": {
                    name: "Renault Arkana",
                    seats: 5,
                    transmission: "Automatic",
                    fuel: "Petrol",
                    luggage: "3 large bags",
                    prices: {
                    day: 600,
                    week: 3850,
                    month: 14500
                    },
                    img: "img/Renault Arkana.jpg"
            },
            "Range-Rover-Vogue": {
                    name: "Range Rover Vogue",
                    seats: 5,
                    transmission: "Automatic",
                    fuel: "Hybrid",
                    luggage: "5 large bags",
                    prices: {
                    day: 5000,
                    week: 28000,
                    month: 120000
                    },
                    img: "img/Range Rover Vogue.jpg"
            },
            "Range-Rover-Sport": {
                    name: "Range Rover Sport",
                    seats: 5,
                    transmission: "Automatic",
                    fuel: "Hybrid",
                    luggage: "4 large bags",
                    prices: {
                    day: 4000,
                    week: 27000,
                    month: 105000
                    },
                    img: "img/Range Rover Sport.jpg"
            }
        };


  document.addEventListener('DOMContentLoaded', function () {
    // دالة فتح/غلق القائمة
    function toggleMenu() {
      const menu = document.getElementById('sidebar');
      menu.classList.toggle('open');
    }

    // خلي الدالة متاحة للزر
    window.toggleMenu = toggleMenu;

    // إغلاق الـ sidebar عند الضغط على أي رابط داخلي
    const links = document.querySelectorAll('.section_pages a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        const menu = document.getElementById('sidebar');
        menu.classList.remove('open');
      });
    });
  });





        // Global state
        let currentCurrency = 'mad';
        let currentLanguage = 'en';
        let activePriceType = 'day';
        let currentFilters = {
            transmission: 'all',
            fuel: 'all'
        };
        let currentSort = 'name';

        // Currency exchange rates (example rates)
        const exchangeRates = {
            mad: 1,
            usd: 0.1,  // 1 MAD = 0.1 USD
            eur: 0.09  // 1 MAD = 0.09 EUR
        };

        // Translations
        const translations = {
            en: {
                home: "Home",
                cars: "Cars",
                aboutUs: "About Us",
                contact: "Contact",
                heroTitle: "Premium Car Rental Service",
                heroSubtitle: "Experience luxury and comfort with our premium fleet. Find the perfect car for your journey.",
                viewFleet: "View Our Fleet",
                premiumFleet: "Our Premium Fleet",
                sortBy: "Sort by:",
                name: "Name",
                priceLow: "Price: Low to High",
                priceHigh: "Price: High to Low",
                transmission: "Transmission:",
                all: "All",
                automatic: "Automatic",
                manual: "Manual",
                fuelType: "Fuel Type:",
                petrol: "Petrol",
                diesel: "Diesel",
                hybrid: "Hybrid",
                currency: "Currency:",
                language: "Language:",
                day: "Day",
                week: "Week",
                month: "Month",
                reserve: "Reserve Now",
                seats: "Seats",
                luggage: "Luggage",
                fuel: "Fuel",
                footerText: "Your premium car rental service, offering luxury and comfort for all your journeys.",
                quickLinks: "Quick Links",
                contactUs: "Contact Us",
                newsletter: "Newsletter",
                subscribeText: "Subscribe to our newsletter for the latest updates and offers.",
                yourEmail: "Your Email",
                subscribe: "Subscribe",
                copyright: "© 2025 Premium Rentals. All Rights Reserved."
            },
            fr: {
                home: "Accueil",
                cars: "Voitures",
                aboutUs: "À Propos",
                contact: "Contact",
                heroTitle: "Service de Location de Voitures Premium",
                heroSubtitle: "Découvrez le luxe et le confort avec notre flotte premium. Trouvez la voiture parfaite pour votre voyage.",
                viewFleet: "Voir Notre Flotte",
                premiumFleet: "Notre Flotte Premium",
                sortBy: "Trier par:",
                name: "Nom",
                priceLow: "Prix: Croissant",
                priceHigh: "Prix: Décroissant",
                transmission: "Transmission:",
                all: "Tous",
                automatic: "Automatique",
                manual: "Manuelle",
                fuelType: "Type de Carburant:",
                petrol: "Essence",
                diesel: "Diesel",
                hybrid: "Hybride",
                currency: "Devise:",
                language: "Langue:",
                day: "Jour",
                week: "Semaine",
                month: "Mois",
                reserve: "Réserver Maintenant",
                seats: "Sièges",
                luggage: "Bagages",
                fuel: "Carburant",
                footerText: "Votre service de location de voitures premium, offrant luxe et confort pour tous vos voyages.",
                quickLinks: "Liens Rapides",
                contactUs: "Contactez-nous",
                newsletter: "Newsletter",
                subscribeText: "Abonnez-vous à notre newsletter pour les dernières mises à jour et offres.",
                yourEmail: "Votre Email",
                subscribe: "S'abonner",
                copyright: "© 2025 Premium Rentals. Tous Droits Réservés."
            },
            ar: {
                home: "الرئيسية",
                cars: "السيارات",
                aboutUs: "من نحن",
                contact: "اتصل بنا",
                heroTitle: "خدمة تأجير السيارات الفاخرة",
                heroSubtitle: "استمتع بالرفاهية والراحة مع أسطولنا الفاخر. اعثر على السيارة المثالية لرحلتك.",
                viewFleet: "عرض أسطولنا",
                premiumFleet: "أسطولنا الفاخر",
                sortBy: "ترتيب حسب:",
                name: "الاسم",
                priceLow: "السعر: من الأدنى إلى الأعلى",
                priceHigh: "السعر: من الأعلى إلى الأدنى",
                transmission: "ناقل الحركة:",
                all: "الكل",
                automatic: "أوتوماتيكي",
                manual: "يدوي",
                fuelType: "نوع الوقود:",
                petrol: "بنزين",
                diesel: "ديزل",
                hybrid: "هجين",
                currency: "العملة:",
                language: "اللغة:",
                day: "يوم",
                week: "أسبوع",
                month: "شهر",
                reserve: "احجز الآن",
                seats: "مقاعد",
                luggage: "أمتعة",
                fuel: "وقود",
                footerText: "خدمة تأجير السيارات الفاخرة الخاصة بك، توفر الفخامة والراحة لجميع رحلاتك.",
                quickLinks: "روابط سريعة",
                contactUs: "اتصل بنا",
                newsletter: "النشرة الإخبارية",
                subscribeText: "اشترك في نشرتنا الإخبارية للحصول على آخر التحديثات والعروض.",
                yourEmail: "بريدك الإلكتروني",
                subscribe: "اشترك",
                copyright: "© 2025 Premium Rentals. جميع الحقوق محفوظة."
            }
        };

        // Format currency based on selected currency
        function formatCurrency(amount, currency) {
            const convertedAmount = amount * exchangeRates[currency];
            
            switch(currency) {
                case 'usd':
                    return `$${convertedAmount.toFixed(0)}`;
                case 'eur':
                    return `€${convertedAmount.toFixed(0)}`;
                default:
                    return `${convertedAmount.toFixed(0)} MAD`;
            }
        }

        // Create car card
        function createCarCard(carKey, car) {
            const card = document.createElement('div');
            card.className = 'car-card';
            
            const priceValue = car.prices[activePriceType];
            const formattedPrice = formatCurrency(priceValue, currentCurrency);
            
card.innerHTML = `
    <div class="car-image">
        <img src="${car.img}" alt="${car.name}">
    </div>
    <div class="car-details">
        <h3 class="car-title">${car.name}</h3>
        <div class="car-features">
            <div class="feature">
                <i class="fas fa-user"></i>
                <span>${car.seats} ${translations[currentLanguage].seats}</span>
            </div>
            <div class="feature">
                <i class="fas fa-suitcase"></i>
                <span>${car.luggage}</span>
            </div>
            <div class="feature">
                <i class="fas fa-cog"></i>
                <span>${car.transmission}</span>
            </div>
            <div class="feature">
                <i class="fas fa-gas-pump"></i>
                <span>${car.fuel}</span>
            </div>
        </div>
        <div class="price-section">
            <div class="price-options">
                <div class="price-option ${activePriceType === 'day' ? 'active' : ''}" data-type="day">
                    ${translations[currentLanguage].day}
                </div>
                <div class="price-option ${activePriceType === 'week' ? 'active' : ''}" data-type="week">
                    ${translations[currentLanguage].week}
                </div>
                <div class="price-option ${activePriceType === 'month' ? 'active' : ''}" data-type="month">
                    ${translations[currentLanguage].month}
                </div>
            </div>
            <div class="price">${formattedPrice}</div>
            <a href="booking.html?carId=${carKey}" class="btn reserve-btn">${translations[currentLanguage].reserve}</a>
        </div>
    </div>
`;

            // Add event listeners for price options
            const priceOptions = card.querySelectorAll('.price-option');
            const priceDisplay = card.querySelector('.price');
            
            priceOptions.forEach(option => {
                option.addEventListener('click', () => {
                    // Update active state
                    priceOptions.forEach(opt => opt.classList.remove('active'));
                    option.classList.add('active');
                    
                    // Update price
                    const priceType = option.getAttribute('data-type');
                    const newPrice = formatCurrency(car.prices[priceType], currentCurrency);
                    priceDisplay.textContent = newPrice;
                });
            });
            
            return card;
        }

        // Display cars based on filters and sorting
        function displayCars() {
            const carsContainer = document.getElementById('carsContainer');
            carsContainer.innerHTML = '';
            
            // Filter and sort cars
            const filteredCars = Object.entries(carData)
                .filter(([key, car]) => {
                    // Apply transmission filter
                    if (currentFilters.transmission !== 'all' && car.transmission !== currentFilters.transmission) {
                        return false;
                    }
                    
                    // Apply fuel filter
                    if (currentFilters.fuel !== 'all' && car.fuel !== currentFilters.fuel) {
                        return false;
                    }
                    
                    return true;
                })
                .sort(([keyA, carA], [keyB, carB]) => {
                    switch(currentSort) {
                        case 'name':
                            return carA.name.localeCompare(carB.name);
                        case 'price-low':
                            return carA.prices[activePriceType] - carB.prices[activePriceType];
                        case 'price-high':
                            return carB.prices[activePriceType] - carA.prices[activePriceType];
                        default:
                            return 0;
                    }
                });
            
            // Create and append car cards
            filteredCars.forEach(([key, car]) => {
                const card = createCarCard(key, car);
                carsContainer.appendChild(card);
            });
        }

        // Update UI language
        function updateLanguage(lang) {
            currentLanguage = lang;
            
            // Update UI elements with new language
            document.querySelectorAll('[data-lang]').forEach(btn => {
                btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
            });
            
            // Update navigation
            document.querySelector('nav ul li:nth-child(1) a').textContent = translations[lang].home;
            document.querySelector('nav ul li:nth-child(2) a').textContent = translations[lang].cars;
            document.querySelector('nav ul li:nth-child(3) a').textContent = translations[lang].aboutUs;
            document.querySelector('nav ul li:nth-child(4) a').textContent = translations[lang].contact;
            
            // Update hero section
            document.querySelector('.hero h1').textContent = translations[lang].heroTitle;
            document.querySelector('.hero p').textContent = translations[lang].heroSubtitle;
            document.querySelector('.hero .btn').textContent = translations[lang].viewFleet;
            
            // Update section title
            document.querySelector('.section-title').textContent = translations[lang].premiumFleet;
            
            // Update filters
            document.querySelector('label[for="sort"]').textContent = translations[lang].sortBy;
            document.querySelector('#sort option[value="name"]').textContent = translations[lang].name;
            document.querySelector('#sort option[value="price-low"]').textContent = translations[lang].priceLow;
            document.querySelector('#sort option[value="price-high"]').textContent = translations[lang].priceHigh;
            
            document.querySelector('label[for="transmission"]').textContent = translations[lang].transmission;
            document.querySelector('#transmission option[value="all"]').textContent = translations[lang].all;
            document.querySelector('#transmission option[value="Automatic"]').textContent = translations[lang].automatic;
            document.querySelector('#transmission option[value="Manual"]').textContent = translations[lang].manual;
            
            document.querySelector('label[for="fuel"]').textContent = translations[lang].fuelType;
            document.querySelector('#fuel option[value="all"]').textContent = translations[lang].all;
            document.querySelector('#fuel option[value="Petrol"]').textContent = translations[lang].petrol;
            document.querySelector('#fuel option[value="Diesel"]').textContent = translations[lang].diesel;
            document.querySelector('#fuel option[value="Hybrid"]').textContent = translations[lang].hybrid;
            
            document.querySelectorAll('.filter-group label')[3].textContent = translations[lang].currency + ':';
            document.querySelectorAll('.filter-group label')[4].textContent = translations[lang].language + ':';
            
            // Update footer
            document.querySelector('.footer-col:nth-child(1) p').textContent = translations[lang].footerText;
            document.querySelector('.footer-col:nth-child(2) h3').textContent = translations[lang].quickLinks;
            document.querySelector('.footer-col:nth-child(2) ul li:nth-child(1) a').textContent = translations[lang].home;
            document.querySelector('.footer-col:nth-child(2) ul li:nth-child(2) a').textContent = translations[lang].cars;
            document.querySelector('.footer-col:nth-child(2) ul li:nth-child(3) a').textContent = translations[lang].aboutUs;
            document.querySelector('.footer-col:nth-child(2) ul li:nth-child(4) a').textContent = translations[lang].contact;
            
            document.querySelector('.footer-col:nth-child(3) h3').textContent = translations[lang].contactUs;
            
            document.querySelector('.footer-col:nth-child(4) h3').textContent = translations[lang].newsletter;
            document.querySelector('.footer-col:nth-child(4) p').textContent = translations[lang].subscribeText;
            document.querySelector('.footer-col:nth-child(4) input').placeholder = translations[lang].yourEmail;
            document.querySelector('.footer-col:nth-child(4) button').textContent = translations[lang].subscribe;
            
            document.querySelector('.copyright p').textContent = translations[lang].copyright;
            
            // Re-render all cars with new language
            displayCars();
        }

        // Initialize the page
        document.addEventListener('DOMContentLoaded', () => {
            // Initial display of cars
            displayCars();
            
            // Sort change event
            document.getElementById('sort').addEventListener('change', (e) => {
                currentSort = e.target.value;
                displayCars();
            });
            
            // Transmission filter event
            document.getElementById('transmission').addEventListener('change', (e) => {
                currentFilters.transmission = e.target.value;
                displayCars();
            });
            
            // Fuel filter event
            document.getElementById('fuel').addEventListener('change', (e) => {
                currentFilters.fuel = e.target.value;
                displayCars();
            });
            
            // Currency selection events
            document.querySelectorAll('.currency-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const currency = btn.getAttribute('data-currency');
                    
                    // Update active state
                    document.querySelectorAll('.currency-btn').forEach(b => {
                        b.classList.toggle('active', b === btn);
                    });
                    
                    // Update currency and redisplay cars
                    currentCurrency = currency;
                    displayCars();
                });
            });
            
            // Language selection events
            document.querySelectorAll('.language-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const lang = btn.getAttribute('data-lang');
                    updateLanguage(lang);
                });
            });
            
            // Back to top button
            const backToTopBtn = document.getElementById('backToTop');
            
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 300) {
                    backToTopBtn.classList.add('visible');
                } else {
                    backToTopBtn.classList.remove('visible');
                }
            });
            
            backToTopBtn.addEventListener('click', (e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            
            // Global event delegation for price option changes
            document.addEventListener('click', (e) => {
                if (e.target.classList.contains('price-option')) {
                    const priceType = e.target.getAttribute('data-type');
                    
                    // Update global active price type
                    activePriceType = priceType;
                    
                    // Re-render all cars with new price type
                    displayCars();
                }
            });
        });
