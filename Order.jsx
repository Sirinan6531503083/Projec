import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Order.css'; 
import logo from './image/logomfu.jpg'; 

const Order = () => {
    const navigate = useNavigate();
    const [language, setLanguage] = useState('TH'); 

    const handleBackClick = () => {
        navigate('/login'); 
    };

    const handleLanguageChange = () => {
        setLanguage(language === 'TH' ? 'EN' : 'TH'); 
    };

    const handlePostClick = () => {
        navigate('/posts-created'); // เปลี่ยนเส้นทางไปหน้า PostsCreated
    };

    const orders = [
        {
            id: '001',
            date: '2024-12-24',
            total: '895.00',
            category: language === 'TH' ? 'หมวดเครื่องเล่นเกมส์' : 'Game Console',
            product: language === 'TH' ? 'Play Station 5 ซื้อมาได้5เดือน ใช้งานไป3ครั้ง ไม่มีลอย มีกล่องให้ แถมเกมส์' : 'Play Station 5 bought 5 months ago, used 3 times, no scratches, comes with box and games',
            price: language === 'TH' ? '5000 บาท' : '5000 THB',
        },
        {
            id: '002',
            date: '2024-12-24',
            total: '895.00',
            category: language === 'TH' ? 'หมวดเสื้อยืด' : 'T-Shirt',
            product: language === 'TH' ? 'ซื้อมาผิดไซส์งับ ตัวใหญ่เกิน ไซส์ XL ปล่อยต่อๆๆ' : 'Bought wrong size, too big (XL), selling cheaply',
            price: language === 'TH' ? '99 บาท' : '99 THB',
        },
    ];

    return (
        <div className="order-page">
            <div className="navbar">
                <div className="navbar-left">
                    <img src={logo} alt="logomfu" className="navbar-logo" />
                    <span>MFU ECOMMERCE</span>
                </div>
                <div className="navbar-right">
                    {/* ปุ่มเปลี่ยนภาษา */}
                    <button className="language-button" onClick={handleLanguageChange}>
                        {language === 'TH' ? 'EN' : 'TH'}
                    </button>
                    <button className="back-button" onClick={handleBackClick}>
                        {language === 'TH' ? 'กลับ' : 'Back'}
                    </button>
                </div>
            </div>

            <div className="order-container">
    <h1>{language === 'TH' ? 'รายการสั่งซื้อของคุณ' : 'Your Orders'}</h1>

    {/* Posts Created and Order History Section */}
    <div className="order-history-section">
        <div className="posts-header">
            <h2 className="dimmed-text" onClick={handlePostClick} style={{ cursor: 'pointer' }}>
                {language === 'TH' ? 'โพสต์ที่สร้าง' : 'Posts Created'}
            </h2>
            <h2>{language === 'TH' ? 'ประวัติการสั่งซื้อ' : 'Order History'}</h2>
        </div>
        <ul className="dimmed-list">
            {/* Posts created remain inactive */}
        </ul>
    </div>

    <div className="order-list">
        {orders.map(order => (
            <div key={order.id} className="order-item">
                <div className="order-header">
                    <span>ID: {order.id}</span>
                    <span>{language === 'TH' ? 'วันที่' : 'Date'}: {order.date}</span>
                    <span>{language === 'TH' ? 'รวม' : 'Total'}: {order.total} ฿</span>
                    <button className="detail-button">{language === 'TH' ? 'รายละเอียด' : 'Detail'}</button>
                </div>
                <div className="order-body">
                    <div className="order-category">
                        {order.category}
                    </div>
                    <div className="order-product">
                        {order.product}
                    </div>
                    <div className="order-price">
                        {language === 'TH' ? 'ราคา' : 'Price'} {order.price}
                    </div>
                    <button className="purchase-button">{language === 'TH' ? 'ซื้อแล้ว' : 'Purchased'}</button>
                </div>
            </div>
        ))}
    </div>
</div>

            <footer className="footer">
                <p>Mae Fah Luang University</p>
            </footer>
        </div>
    );
};

export default Order;


