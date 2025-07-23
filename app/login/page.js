// ที่บรรทัดแรกสุดของไฟล์
"use client";

import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function Home() {
    const [isLoginFormActive, setIsLoginFormActive] = useState(true);

    useEffect(() => {
        const loginToggle = document.getElementById('loginToggle');
        const signupToggle = document.getElementById('signupToggle');

        const handleLoginClick = () => setIsLoginFormActive(true);
        const handleSignupClick = () => setIsLoginFormActive(false);

        if (loginToggle && signupToggle) {
            loginToggle.addEventListener('click', handleLoginClick);
            signupToggle.addEventListener('click', handleSignupClick);
        }

        return () => {
            if (loginToggle && signupToggle) {
                loginToggle.removeEventListener('click', handleLoginClick);
                signupToggle.removeEventListener('click', handleSignupClick);
            }
        };
    }, []);

    useEffect(() => {
        const toggleButtonGroup = document.querySelector('.toggle-button-group');
        if (toggleButtonGroup) {
            toggleButtonGroup.style.setProperty('--toggle-transform-x', isLoginFormActive ? '0%' : '100%');
        }
    }, [isLoginFormActive]);

    const togglePasswordVisibility = (id) => {
        const passwordInput = document.getElementById(id);
        if (passwordInput) {
            const icon = passwordInput.nextElementSibling.querySelector('i');
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                passwordInput.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        }
    };

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Login - Your Brand</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                {/* 👇 เปลี่ยนลิงก์ Google Fonts เป็น Inter และ IBM Plex Sans Thai */}
                <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@400;600;700&family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
            </Head>

            <div className="login-page">
                <div className="background-circles">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="login-container">
                    <div className="login-box">
                        <div className="toggle-button-group">
                            <button className={`toggle-btn ${isLoginFormActive ? 'active' : ''}`} id="loginToggle">เข้าสู่ระบบ</button>
                            <button className={`toggle-btn ${!isLoginFormActive ? 'active' : ''}`} id="signupToggle">สมัครสมาชิก</button>
                        </div>

                        <form className={`login-form ${isLoginFormActive ? 'active' : ''}`} id="loginForm">
                            <h2 className="form-title">ยินดีต้อนรับจ้า!</h2>
                            <p className="form-subtitle">เข้าสู่ระบบเพื่อดำเนินการต่อ</p>

                            <div className="input-group">
                                <i className="fas fa-user icon"></i>
                                <input type="text" id="loginUsername" placeholder="ชื่อผู้ใช้" required />
                            </div>
                            <div className="input-group">
                                <i className="fas fa-lock icon"></i>
                                <input type="password" id="loginPassword" placeholder="รหัสผ่าน" required />
                                <span className="password-toggle" onClick={() => togglePasswordVisibility('loginPassword')}><i className="fas fa-eye"></i></span>
                            </div>
                            <div className="remember-me-forgot">
                                <label>
                                    <input type="checkbox" id="rememberMe" /> จดจำฉัน
                                </label>
                                <a href="#" className="forgot-link">ลืมรหัสผ่าน?</a>
                            </div>
                            <button type="submit" className="submit-button">เข้าสู่ระบบ</button>
                        </form>

                        <form className={`signup-form ${!isLoginFormActive ? 'active' : ''}`} id="signupForm">
                            <h2 className="form-title">สร้างบัญชีใหม่</h2>
                            <p className="form-subtitle">เข้ามาร่วมกันเต๊อะ!</p>

                            <div className="input-group">
                                <i className="fas fa-user icon"></i>
                                <input type="text" id="signupUsername" placeholder="ชื่อผู้ใช้" required />
                            </div>
                            <div className="input-group">
                                <i className="fas fa-lock icon"></i>
                                <input type="password" id="signupPassword" placeholder="รหัสผ่าน" required />
                                <span className="password-toggle" onClick={() => togglePasswordVisibility('signupPassword')}><i className="fas fa-eye"></i></span>
                            </div>
                            <div className="input-group">
                                <i className="fas fa-lock icon"></i>
                                <input type="password" id="confirmPassword" placeholder="ยืนยันรหัสผ่าน" required />
                                <span className="password-toggle" onClick={() => togglePasswordVisibility('confirmPassword')}><i className="fas fa-eye"></i></span>
                            </div>

                            <div className="input-group">
                                <i className="fas fa-venus icon"></i> {/* เปลี่ยนไอคอนให้เหมาะสม */}
                                <select id="title" required>
                                    <option value="">คำนำหน้าชื่อ</option>
                                    <option value="นาย">นาย</option>
                                    <option value="นาง">นาง</option>
                                    <option value="นางสาว">นางสาว</option>
                                    <option value="อื่นๆ">อื่นๆ</option>
                                </select>
                            </div>
                            <div className="input-group">
                                <i className="fas fa-file-signature icon"></i> {/* เปลี่ยนไอคอนให้เหมาะสม */}
                                <input type="text" id="firstName" placeholder="ชื่อ" required />
                            </div>
                            <div className="input-group">
                                <i className="fas fa-file-signature icon"></i> {/* เปลี่ยนไอคอนให้เหมาะสม */}
                                <input type="text" id="lastName" placeholder="นามสกุล" required />
                            </div>
                            <div className="input-group">
                                <i className="fas fa-map-marker-alt icon"></i>
                                <textarea id="address" placeholder="ที่อยู่" rows="3" required></textarea>
                            </div>
                            <div className="input-group">
                                <i className="fas fa-venus-mars icon"></i>
                                <select id="gender" required>
                                    <option value="">เพศ</option>
                                    <option value="ชาย">ชาย</option>
                                    <option value="หญิง">หญิง</option>
                                    <option value="อื่นๆ">อื่นๆ</option>
                                </select>
                            </div>
                            <div className="input-group">
                                <i className="fas fa-calendar-alt icon"></i>
                                <input type="date" id="birthDate" placeholder="วันเกิด" required />
                            </div>

                            <div className="input-group">
                                <i className="fas fa-envelope icon"></i>
                                <input type="email" id="signupEmail" placeholder="อีเมล" required />
                            </div>
                            
                            <button type="submit" className="submit-button">สมัครสมาชิก</button>
                        </form>
                    </div>
                </div>
            </div>

            <style jsx>{`
                :root {
                    --primary-color: #FF69B4; /* สีชมพู */
                    --secondary-color: #8A2BE2; /* สีม่วง */
                    --dark-bg: #121212;
                    --darker-bg: #0a0a0a;
                    --card-bg: #1a1a1a;
                    --input-bg: #2b2b2b;
                    --border-color: #3a3a3a;
                    --text-color-light: #fff;
                    --text-color-dark: #1a1a1a;
                    --text-color-faded: #aaa;
                    --transition-speed: 0.3s;
                    --glass-blur: 10px;
                }

                body {
                    margin: 0;
                    font-family: 'IBM Plex Sans Thai', 'Inter', sans-serif;
                    background-color: var(--dark-bg);
                    color: var(--text-color-light);
                    overflow: hidden; /* ป้องกัน scrollbar จาก background circles */
                }

                .login-page {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                    padding: 20px;
                    background: linear-gradient(135deg, var(--darker-bg), var(--dark-bg));
                    box-sizing: border-box;
                    position: relative;
                    overflow: hidden; /* เพื่อให้ background circles อยู่ในขอบเขต */
                }

                /* Background Circles Animation */
                .background-circles {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    z-index: 0;
                }

                .background-circles div {
                    position: absolute;
                    display: block;
                    list-style: none;
                    width: 20px;
                    height: 20px;
                    background: rgba(255, 105, 180, 0.2); /* Primary color with transparency */
                    animation: animate 25s linear infinite;
                    bottom: -150px;
                    border-radius: 50%;
                }

                .background-circles div:nth-child(1) {
                    left: 25%;
                    width: 80px;
                    height: 80px;
                    animation-delay: 0s;
                }

                .background-circles div:nth-child(2) {
                    left: 10%;
                    width: 20px;
                    height: 20px;
                    animation-delay: 2s;
                    animation-duration: 12s;
                }

                .background-circles div:nth-child(3) {
                    left: 70%;
                    width: 20px;
                    height: 20px;
                    animation-delay: 4s;
                }

                .background-circles div:nth-child(4) {
                    left: 40%;
                    width: 60px;
                    height: 60px;
                    animation-delay: 0s;
                    animation-duration: 18s;
                }

                .background-circles div:nth-child(5) {
                    left: 65%;
                    width: 20px;
                    height: 20px;
                    animation-delay: 0s;
                }

                .background-circles div:nth-child(6) {
                    left: 75%;
                    width: 110px;
                    height: 110px;
                    animation-delay: 3s;
                }

                .background-circles div:nth-child(7) {
                    left: 35%;
                    width: 150px;
                    height: 150px;
                    animation-delay: 7s;
                }

                .background-circles div:nth-child(8) {
                    left: 50%;
                    width: 25px;
                    height: 25px;
                    animation-delay: 15s;
                    animation-duration: 45s;
                }

                .background-circles div:nth-child(9) {
                    left: 20%;
                    width: 15px;
                    height: 15px;
                    animation-delay: 2s;
                    animation-duration: 35s;
                }

                .background-circles div:nth-child(10) {
                    left: 85%;
                    width: 150px;
                    height: 150px;
                    animation-delay: 0s;
                    animation-duration: 11s;
                }

                @keyframes animate {
                    0% {
                        transform: translateY(0) rotate(0deg);
                        opacity: 1;
                        border-radius: 0;
                    }
                    100% {
                        transform: translateY(-1000px) rotate(720deg);
                        opacity: 0;
                        border-radius: 50%;
                    }
                }

                .login-container {
                    width: 100%;
                    max-width: 600px;
                    position: relative; /* เพื่อให้ login-box อยู่เหนือ circles */
                    z-index: 1;
                }

                .login-box {
                    background: rgba(26, 26, 26, 0.7); /* Background โปร่งใสเล็กน้อย */
                    backdrop-filter: blur(var(--glass-blur)); /* Glassmorphism effect */
                    -webkit-backdrop-filter: blur(var(--glass-blur)); /* สำหรับ Safari */
                    padding: 50px 60px;
                    border-radius: 15px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.1); /* เพิ่ม border แบบ subtle */
                    border: 1px solid rgba(51, 51, 51, 0.5); /* Border โปร่งใส */
                    position: relative;
                    overflow: hidden;
                    min-height: 580px;
                    transition: all var(--transition-speed) ease-in-out;
                }

                .toggle-button-group {
                    display: flex;
                    margin-bottom: 30px;
                    background-color: var(--input-bg);
                    border-radius: 10px;
                    position: relative;
                    overflow: hidden;
                    --toggle-transform-x: 0%;
                    box-shadow: inset 0 0 5px rgba(0,0,0,0.5); /* เพิ่มเงาด้านใน */
                }

                .toggle-btn {
                    flex: 1;
                    padding: 12px 0;
                    background: transparent;
                    color: var(--text-color-faded);
                    font-weight: 600;
                    cursor: pointer;
                    z-index: 1;
                    position: relative;
                    border: none;
                    transition: color var(--transition-speed) ease;
                }

                .toggle-btn.active {
                    color: var(--text-color-dark); /* สีตัวอักษรเมื่อ active */
                }

                .toggle-button-group::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 50%;
                    height: 100%;
                    background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); /* Gradient background */
                    border-radius: 10px;
                    transform: translateX(var(--toggle-transform-x));
                    transition: transform var(--transition-speed) ease-in-out;
                    z-index: 0;
                }

                .form-title {
                    color: var(--primary-color);
                    font-size: 2.2rem; /* เพิ่มขนาด */
                    font-weight: 700;
                    margin-bottom: 10px;
                    text-align: center;
                    letter-spacing: 0.5px;
                }

                .form-subtitle {
                    color: var(--text-color-faded);
                    margin-bottom: 35px; /* เพิ่มระยะห่าง */
                    text-align: center;
                    font-size: 1rem;
                }

                .input-group {
                    position: relative;
                    margin-bottom: 25px;
                }

                .input-group .icon {
                    position: absolute;
                    left: 15px;
                    top: 50%;
                    transform: translateY(-50%);
                    color: var(--text-color-faded);
                    transition: color var(--transition-speed) ease;
                }

                .input-group input,
                .input-group select,
                .input-group textarea {
                    width: 100%;
                    padding: 12px 15px 12px 45px;
                    border-radius: 8px;
                    background-color: var(--input-bg);
                    border: 2px solid #FF69B4; /* 🔴 เปลี่ยนเป็นกรอบชมพูทั้งหมด */
                    color: var(--text-color-light);
                    transition: border-color var(--transition-speed) ease, box-shadow var(--transition-speed) ease;
                }


                .input-group input:focus,
                .input-group select:focus,
                .input-group textarea:focus {
                    border-color: var(--primary-color);
                    box-shadow: 0 0 0 3px rgba(255, 105, 180, 0.3); /* Glowing effect */
                    outline: none;
                }
                
                .input-group input::placeholder, /* สำหรับ placeholder */
                .input-group textarea::placeholder {
                    color: rgba(255, 255, 255, 0.4);
                }

                .input-group select {
                    appearance: none;
                    background-color: #1f1f1f; /* สีพื้นหลัง dropdown ให้ contrast */
                    color: #ffffff; /* สีตัวอักษร */
                    border: 2px solid #FF69B4; /* สีขอบชมพูชัดเจน */
                    padding: 12px 15px 12px 45px;
                    padding-right: 35px; /* เผื่อพื้นที่ให้ไอคอนลูกศร */
                    border-radius: 8px;
                    font-weight: 500;
                    transition: border-color var(--transition-speed) ease, box-shadow var(--transition-speed) ease;
    
                    background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http://www.w3.org/2000/svg%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20fill%3D%22%23ffffff%22%20d%3D%22M9.293%2012.95l.707.707L15.657%208l-1.414-1.414L10%2010.828l-4.243-4.242L4.343%208z%22/%3E%3C/svg%3E');
                    background-repeat: no-repeat;
                    background-position: right 15px center;
                    background-size: 1em;
                }

                .input-group select:focus {
                    border-color: var(--secondary-color); /* ใช้สีม่วง */
                    box-shadow: 0 0 0 3px rgba(138, 43, 226, 0.4); /* เอฟเฟกต์เรืองแสง */
                    outline: none;
                }


                .input-group textarea {
                    padding-top: 12px;
                    resize: vertical;
                }

                .password-toggle {
                    position: absolute;
                    right: 15px;
                    top: 50%;
                    transform: translateY(-50%);
                    cursor: pointer;
                    color: var(--text-color-faded);
                    transition: color var(--transition-speed) ease;
                }

                .password-toggle:hover {
                    color: var(--primary-color);
                }

                .remember-me-forgot {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 25px; /* เพิ่มระยะห่าง */
                    font-size: 0.9rem;
                    color: var(--text-color-faded);
                    align-items: center; /* จัดให้อยู่กึ่งกลางในแนวตั้ง */
                }

                .remember-me-forgot label {
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                }

                .remember-me-forgot input[type="checkbox"] {
                    margin-right: 8px;
                    accent-color: var(--primary-color); /* เปลี่ยนสี checkbox */
                    width: 16px;
                    height: 16px;
                }

                .forgot-link {
                    color: var(--primary-color);
                    text-decoration: none;
                    font-weight: 600;
                    transition: color var(--transition-speed) ease;
                }

                .forgot-link:hover {
                    color: var(--secondary-color);
                    text-decoration: underline;
                }

                .submit-button {
                    width: 100%;
                    background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); /* Gradient background */
                    color: var(--text-color-dark);
                    border: none;
                    padding: 14px;
                    font-weight: bold;
                    border-radius: 8px;
                    cursor: pointer;
                    margin-top: 15px; /* เพิ่มระยะห่าง */
                    font-size: 1.1rem; /* เพิ่มขนาดตัวอักษร */
                    letter-spacing: 0.5px;
                    box-shadow: 0 5px 15px rgba(255, 105, 180, 0.4); /* เงาปุ่ม */
                    transition: all var(--transition-speed) ease;
                }

                .submit-button:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 20px rgba(255, 105, 180, 0.6);
                    filter: brightness(1.1); /* ทำให้สว่างขึ้นเล็กน้อย */
                }

                .login-form,
                .signup-form {
                    display: none;
                    opacity: 0;
                    transform: translateY(20px);
                    transition: opacity 0.4s ease, transform 0.4s ease;
                }

                .login-form.active,
                .signup-form.active {
                    display: block;
                    opacity: 1;
                    transform: translateY(0);
                }

                /* Responsive */
                @media (max-width: 768px) {
                    .login-box {
                        padding: 40px 30px;
                        min-height: auto; /* ปรับความสูงอัตโนมัติ */
                    }
                    .form-title {
                        font-size: 2rem;
                    }
                }

                @media (max-width: 480px) {
                    .login-box {
                        padding: 30px 20px;
                    }

                    .form-title {
                        font-size: 1.8rem;
                    }

                    .toggle-btn {
                        font-size: 0.9rem;
                    }
                }
            `}</style>
        </>
    );
}