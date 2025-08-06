
        // Auth Modal Functionality
        const authModal = document.getElementById('authModal');
        const openSignin = document.getElementById('openSignin');
        const openSignup = document.getElementById('openSignup');
        const signinTab = document.getElementById('signinTab');
        const signupTab = document.getElementById('signupTab');
        const signinForm = document.getElementById('signinForm');
        const signupForm = document.getElementById('signupForm');

        function openModal(form) {
            authModal.style.display = 'flex';
            if (form === 'signin') {
                signinTab.classList.add('active');
                signupTab.classList.remove('active');
                signinForm.classList.add('active');
                signupForm.classList.remove('active');
            } else {
                signupTab.classList.add('active');
                signinTab.classList.remove('active');
                signupForm.classList.add('active');
                signinForm.classList.remove('active');
            }
        }

        function closeModal() {
            authModal.style.display = 'none';
        }

        openSignin.addEventListener('click', () => openModal('signin'));
        openSignup.addEventListener('click', () => openModal('signup'));

        signinTab.addEventListener('click', () => openModal('signin'));
        signupTab.addEventListener('click', () => openModal('signup'));

        authModal.addEventListener('click', (e) => {
            if (e.target === authModal) {
                closeModal();
            }
        });

        
        // Scroll Animation - triggers on every scroll
        function checkVisibility() {
            const features = document.querySelectorAll('.feature');
            const steps = document.querySelector('.steps');

            // Reset all animations first
            features.forEach(feature => {
                feature.classList.remove('visible');
            });
            steps.classList.remove('visible');

            // Then check visibility and apply animations
            features.forEach((feature, index) => {
                const featurePosition = feature.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;

                if (featurePosition < screenPosition) {
                    setTimeout(() => {
                        feature.classList.add('visible');
                    }, index * 200);
                }
            });

            const stepsPosition = steps.getBoundingClientRect().top;
            const stepsScreenPosition = window.innerHeight / 1.3;

            if (stepsPosition < stepsScreenPosition) {
                steps.classList.add('visible');
            }
        }

        // Throttle scroll events for better performance
        let isScrolling;
        window.addEventListener('scroll', () => {
            // Clear our timeout throughout the scroll
            window.clearTimeout(isScrolling);
            
            // Set a timeout to run after scrolling ends
            isScrolling = setTimeout(checkVisibility, 50);
        }, false);

        // Initial check on page load
        window.addEventListener('load', checkVisibility);