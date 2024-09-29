import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PostsCreated.css';
import logo from './image/logomfu.jpg'; 

const PostsCreated = () => {
    const navigate = useNavigate();
    const [language, setLanguage] = useState('TH'); 

    const handleBackClick = () => {
        navigate('/login');
    };

    const handleLanguageChange = () => {
        setLanguage(language === 'TH' ? 'EN' : 'TH'); 
    };

    const handleOrderClick = () => {
        navigate('/order-history'); 
    };

    const posts = [
        {
            id: '001',
            date: '2024-12-24',
            total: '5000 บาท',
            category: language === 'TH' ? 'หมวดเครื่องเล่นเกมส์' : 'Game Console',
            product: language === 'TH' ? 'Play Station 5 ซื้อมาได้ 5 เดือน ใช้งานไป 3 ครั้ง ไม่มีลอย มีกล่องให้ แถมเกมส์' : 'Play Station 5 bought 5 months ago, used 3 times, no scratches, comes with box and games',
            status: language === 'TH' ? 'ขายแล้ว' : 'Sold',
        },
        {
            id: '002',
            date: '2024-12-24',
            total: '99 บาท',
            category: language === 'TH' ? 'หมวดเสื้อยืด' : 'T-Shirt',
            product: language === 'TH' ? 'ซื้อมาผิดไซส์ ตัวใหญ่เกิน ไซส์ XL ปล่อยต่อ' : 'Bought wrong size, too big (XL), selling cheaply',
            status: language === 'TH' ? 'ขายแล้ว' : 'Sold',
        },
    ];

    return (
        <div className="posts-created-page">
            <div className="navbar-section">
                <div className="navbar-left-section">
                    <img src={logo} alt="logomfu" className="navbar-logo" />
                    <span>MFU ECOMMERCE</span>
                </div>
                <div className="navbar-right-section">
                    <button className="language-toggle-button" onClick={handleLanguageChange}>
                        {language === 'TH' ? 'EN' : 'TH'}
                    </button>
                    <button className="back-navigation-button" onClick={handleBackClick}>
                        {language === 'TH' ? 'กลับ' : 'Back'}
                    </button>
                </div>
            </div>

            <div className="posts-container">
                <h1>{language === 'TH' ? 'โพสต์ที่สร้าง' : 'Posts Created'}</h1>

                {/* Posts Created and Order History Section */}
                <div className="order-history-section">
                    <div className="posts-header">
                        <h2 className="dimmed-text1" onClick={() => {}}>
                            {language === 'TH' ? 'โพสต์ที่สร้าง' : 'Posts Created'}
                        </h2>
                        <h2 className="dimmed-text" onClick={handleOrderClick}>
                            {language === 'TH' ? 'ประวัติการสั่งซื้อ' : 'Order History'}
                        </h2>
                    </div>
                </div>

                {/* Posts List */}
                <div className="posts-list">
                    {posts.map(post => (
                        <div key={post.id} className="post-item">
                            <div className="post-header">
                                <span>ID: {post.id}</span>
                                <span>{language === 'TH' ? 'วันที่' : 'Date'}: {post.date}</span>
                                <span>{language === 'TH' ? 'รวม' : 'Total'}: {post.total}</span>
                                <button className="post-detail-button">{language === 'TH' ? 'รายละเอียด' : 'Detail'}</button>
                            </div>
                            <div className="post-body">
                                <div className="post-category">{post.category}</div>
                                <div className="post-product">{post.product}</div>
                                <div className="post-status">{post.status}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <footer className="footer-section">
                <p>Mae Fah Luang University</p>
            </footer>
        </div>
    );
};

export default PostsCreated;
