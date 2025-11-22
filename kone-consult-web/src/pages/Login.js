import React from 'react';
import { Link } from 'react-router-dom';
import { FaSignInAlt, FaGoogle, FaPhone } from 'react-icons/fa';

const Login = () => {
    return (
        <div className="page-container container d-flex align-items-center justify-content-center" style={{ paddingTop: '100px', minHeight: '80vh' }}>
            <div className="glass-panel p-5" style={{ width: '100%', maxWidth: '450px' }}>
                <div className="text-center mb-4">
                    <div className="text-primary mb-3" style={{ fontSize: '3rem' }}>
                        <FaSignInAlt />
                    </div>
                    <h2 className="text-gradient fw-bold">Login</h2>
                </div>

                <form>
                    <div className="mb-3">
                        <label className="text-secondary d-block mb-2">Email address</label>
                        <input type="email" className="form-control w-100 p-2 glass-panel text-primary" style={{ background: 'rgba(0,0,0,0.2)' }} required />
                    </div>
                    <div className="mb-4">
                        <label className="text-secondary d-block mb-2">Password</label>
                        <input type="password" className="form-control w-100 p-2 glass-panel text-primary" style={{ background: 'rgba(0,0,0,0.2)' }} required />
                    </div>
                    <button className="btn-primary w-100 py-2 mb-4">Login</button>

                    <div className="text-center mb-4">
                        <p className="text-secondary mb-3">Or login with</p>
                        <div className="d-flex justify-content-center gap-3">
                            <button type="button" className="btn btn-outline-secondary d-flex align-items-center gap-2 px-3 py-2">
                                <FaGoogle /> Google
                            </button>
                            <button type="button" className="btn btn-outline-secondary d-flex align-items-center gap-2 px-3 py-2">
                                <FaPhone /> Phone
                            </button>
                        </div>
                    </div>

                    <div className="text-center">
                        <a href="#" className="text-accent text-decoration-none d-block mb-2">Forgot Password?</a>
                        <p className="text-secondary">Don't have an account? <Link to="/register" className="text-accent text-decoration-none">Register here</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
