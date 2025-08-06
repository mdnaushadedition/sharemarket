// DOM Elements
        const loginBtn = document.getElementById('loginBtn');
        const modalOverlay = document.getElementById('modalOverlay');
        const closeModal = document.getElementById('closeModal');
        const tabs = document.querySelectorAll('.tab');
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');
        const userInfo = document.getElementById('userInfo');
        const userName = document.getElementById('userName');
        
        // Show modal when login button is clicked
        loginBtn.addEventListener('click', () => {
            modalOverlay.classList.add('active');
        });
        
        // Close modal
        closeModal.addEventListener('click', () => {
            modalOverlay.classList.remove('active');
        });
        
        // Close modal when clicking outside
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.classList.remove('active');
            }
        });
        
        // Tab switching
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs
                tabs.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked tab
                tab.classList.add('active');
                
                // Show corresponding form
                const tabName = tab.getAttribute('data-tab');
                loginForm.classList.remove('active');
                registerForm.classList.remove('active');
                
                if (tabName === 'login') {
                    loginForm.classList.add('active');
                } else {
                    registerForm.classList.add('active');
                }
            });
        });
        
        // Login form submission
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const username = document.getElementById('username').value;
            
            // Simulate successful login
            simulateLogin(username);
        });
        
        // Register form submission
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const fullName = document.getElementById('fullName').value;
            const email = document.getElementById('email').value;
            const state = document.getElementById('state').value;
            
            // Simulate successful registration
            simulateRegistration(fullName);
        });
        
        // Simulate login process
        function simulateLogin(username) {
            // Show loading state
            const submitBtn = loginForm.querySelector('.submit-btn');
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Authenticating...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                // Update UI
                loginBtn.style.display = 'none';
                userInfo.classList.add('active');
                userName.textContent = username;
                
                // Close modal
                modalOverlay.classList.remove('active');
                
                // Reset form
                loginForm.reset();
                submitBtn.innerHTML = 'Sign In';
                submitBtn.disabled = false;
                
                // Show welcome message
                alert(`Welcome back, ${username}!`);
            }, 1500);
        }
        
        // Simulate registration process
        function simulateRegistration(fullName) {
            // Show loading state
            const submitBtn = registerForm.querySelector('.submit-btn');
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating account...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                // Update UI
                loginBtn.style.display = 'none';
                userInfo.classList.add('active');
                userName.textContent = fullName;
                
                // Close modal
                modalOverlay.classList.remove('active');
                
                // Reset form and switch to login
                registerForm.reset();
                tabs[0].click();
                submitBtn.innerHTML = 'Create Account';
                submitBtn.disabled = false;
                
                // Show success message
                alert(`Welcome, ${fullName}! Your account has been created.`);
            }, 2000);
        }

        // here is the top invester details 
                // Generate random user data
        function generateUsers(count) {
            const users = [];
            const names = [
                'Aarav', 'Vihaan', 'Advait', 'Arjun', 'Dhruv', 'Kabir', 'Reyansh', 'Ayaan', 'Atharv', 'Ishaan',
                'Ananya', 'Aadhya', 'Diya', 'Ira', 'Avni', 'Kiara', 'Myra', 'Pari', 'Riya', 'Sara',
                'Mohit', 'Rahul', 'Amit', 'Vikram', 'Neha', 'Priya', 'Sneha', 'Kriti', 'Anjali', 'Meera',
                'Rohan', 'Sohan', 'Mohan', 'Lokesh', 'Nitesh', 'Prakash', 'Deepak', 'Sunil', 'Vinod', 'Rajesh',
                'Kavita', 'Sunita', 'Rekha', 'Mamta', 'Jyoti', 'Pooja', 'Divya', 'Shweta', 'Nidhi', 'Swati',
                'Akshay', 'Varun', 'Harsh', 'Yash', 'Karan', 'Rajat', 'Nikhil', 'Abhishek', 'Prashant', 'Vivek',
                'Shreya', 'Tanvi', 'Anushka', 'Ishita', 'Aditi', 'Shivani', 'Jhanvi', 'Muskan', 'Palak', 'Simran',
                'Akash', 'Bharat', 'Chirag', 'Dinesh', 'Eshan', 'Farhan', 'Gaurav', 'Himanshu', 'Jatin', 'Kunal',
                'Lakshya', 'Manish', 'Naveen', 'Omkar', 'Pankaj', 'Qasim', 'Roshan', 'Sachin', 'Tarun', 'Ujjwal',
                'Vikas', 'Wasim', 'Xavier', 'Yogesh', 'Zubair', 'Ankit', 'Bhavya', 'Chetan', 'Disha', 'Esha'
            ];
            
            for (let i = 1; i <= count; i++) {
                const invested = Math.floor(Math.random() * 50000) + 500;
                const current = invested + (Math.random() * 20000 - 10000);
                const profit = ((current - invested) / invested * 100).toFixed(2);
                
                users.push({
                    rank: i,
                    name: names[Math.floor(Math.random() * names.length)] + Math.floor(Math.random() * 100),
                    invested: invested.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }),
                    current: current.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }),
                    profit: profit,
                    isProfit: current >= invested
                });
            }
            
            return users;
        }
        
        // Populate users table
        function populateUsersTable() {
            const users = generateUsers(100);
            const tableBody = document.getElementById('users-list');
            
            users.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${user.rank}</td>
                    <td>${user.name}</td>
                    <td>${user.invested}</td>
                    <td>${user.current}</td>
                    <td class="${user.isProfit ? 'profit' : 'loss'}">${user.profit}% ${user.isProfit ? '↑' : '↓'}</td>
                `;
                tableBody.appendChild(row);
            });
        }
        
        // Auth modal functionality
        document.addEventListener('DOMContentLoaded', function() {
            populateUsersTable();
            
            const authModal = document.getElementById('auth-modal');
            const loginBtn = document.getElementById('login-btn');
            const closeModal = document.getElementById('close-modal');
            const switchForm = document.getElementById('switch-form');
            const authForm = document.getElementById('auth-form');
            const formTitle = document.getElementById('form-title');
            const submitBtn = document.getElementById('submit-btn');
            const nameGroup = document.getElementById('name-group');
            const stateGroup = document.getElementById('state-group');
            const emailGroup = document.getElementById('email-group');
            const authSection = document.getElementById('auth-section');
            const heroCta = document.getElementById('hero-cta');
            
            let isLogin = true;
            
            // Toggle modal
            function toggleModal() {
                authModal.style.display = authModal.style.display === 'flex' ? 'none' : 'flex';
                document.body.classList.toggle('blur');
            }
            
            // Switch between login and signup
            function switchAuthForm() {
                isLogin = !isLogin;
                
                if (isLogin) {
                    formTitle.textContent = 'Login';
                    submitBtn.textContent = 'Login';
                    switchForm.textContent = "Don't have an account? Sign up";
                    nameGroup.style.display = 'none';
                    stateGroup.style.display = 'none';
                } else {
                    formTitle.textContent = 'Sign Up';
                    submitBtn.textContent = 'Sign Up';
                    switchForm.textContent = "Already have an account? Login";
                    nameGroup.style.display = 'block';
                    stateGroup.style.display = 'block';
                }
            }
            
            // Handle form submission
            function handleAuth(e) {
                e.preventDefault();
                
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;
                const state = document.getElementById('state').value;
                
                if (isLogin) {
                    // Simple login validation
                    if (email && password) {
                        // In a real app, you would authenticate with a server here
                        const userDisplay = document.createElement('div');
                        userDisplay.className = 'user-display';
                        userDisplay.innerHTML = `
                            <div class="user-avatar">${email.charAt(0).toUpperCase()}</div>
                            <span>${email.split('@')[0]}</span>
                        `;
                        
                        authSection.innerHTML = '';
                        authSection.appendChild(userDisplay);
                        
                        toggleModal();
                    } else {
                        alert('Please enter both email and password');
                    }
                } else {
                    // Signup validation
                    if (name && email && password && state) {
                        // In a real app, you would register with a server here
                        const userDisplay = document.createElement('div');
                        userDisplay.className = 'user-display';
                        userDisplay.innerHTML = `
                            <div class="user-avatar">${name.charAt(0).toUpperCase()}</div>
                            <span>${name}</span>
                        `;
                        
                        authSection.innerHTML = '';
                        authSection.appendChild(userDisplay);
                        
                        toggleModal();
                    } else {
                        alert('Please fill all fields');
                    }
                }
            }
            
            // Event listeners
            loginBtn.addEventListener('click', toggleModal);
            closeModal.addEventListener('click', toggleModal);
            switchForm.addEventListener('click', switchAuthForm);
            authForm.addEventListener('submit', handleAuth);
            heroCta.addEventListener('click', function() {
                if (authSection.querySelector('.user-display')) {
                    // User is logged in, redirect to dashboard
                    alert('Redirecting to dashboard...');
                } else {
                    // User is not logged in, show login modal
                    toggleModal();
                }
            });
            
            // Close modal when clicking outside
            window.addEventListener('click', function(e) {
                if (e.target === authModal) {
                    toggleModal();
                }
            });
        });