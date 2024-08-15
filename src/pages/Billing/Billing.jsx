import React, { useState, useEffect } from 'react';
import './Billing.css';

// Import the images from the assets directory
import DanaLogo from '../../assets/images/Dana.png';
import GopayLogo from '../../assets/images/gopay.png';
import ShopeeLogo from '../../assets/images/Shopee.png';
import TrueMoneyLogo from '../../assets/images/truemoney.png';
import AstraPayLogo from '../../assets/images/AstraPay.png';

// Sample images for suggested items
import ShirtImage from '../../assets/images/Shirt.png';
import PantImage from '../../assets/images/pant.png';
import AirpodsImage from '../../assets/images/airpods.png';
import FoodImage from '../../assets/images/food.png';

import iPhoneImage from '../../assets/images/iPhone15Pro.png';
import SamsungImage from '../../assets/images/SamsungS23.png';
import MacBookImage from '../../assets/images/Macbook.png';
import DellXPSImage from '../../assets/images/Dell.png';
import LGOLEDTVImage from '../../assets/images/LG.png';
import SonyHeadphonesImage from '../../assets/images/Sony.png';
import BoseSpeakerImage from '../../assets/images/Bose.png';
import AppleWatchImage from '../../assets/images/AppleWatch.png';
import CanonCameraImage from '../../assets/images/Canon.png';
import DysonVacuumImage from '../../assets/images/Dyson.png';
import GroceryPackImage from '../../assets/images/Grocery.png';
import NikeAirMaxImage from '../../assets/images/Nike.png';

const Billing = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [checkoutActive, setCheckoutActive] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [totalPrice, setTotalPrice] = useState(29999000 - 1000000); // Initial total price
  const [orderSummary, setOrderSummary] = useState([]);

  const paymentMethods = [
    { id: 'dana', name: 'DANA', image: DanaLogo },
    { id: 'gopay', name: 'Gopay', image: GopayLogo },
    { id: 'shopeepay', name: 'ShopeePay', image: ShopeeLogo },
    { id: 'truemoney', name: 'TrueMoney', image: TrueMoneyLogo },
    { id: 'astrapay', name: 'AstraPay', image: AstraPayLogo },
  ];

  const products = [
    { id: 1, name: 'iPhone 15 Pro', category: 'Mobile Phone', price: 29999000, discount: 1000000, image: iPhoneImage },
    { id: 2, name: 'Samsung Galaxy S23', category: 'Mobile Phone', price: 24999000, discount: 500000, image: SamsungImage },
    { id: 3, name: 'MacBook Pro 16"', category: 'Laptop', price: 35999000, discount: 2000000, image: MacBookImage },
    { id: 4, name: 'Dell XPS 13', category: 'Laptop', price: 23999000, discount: 1500000, image: DellXPSImage },
    { id: 5, name: 'LG OLED TV 55"', category: 'Electronics', price: 18999000, discount: 1000000, image: LGOLEDTVImage },
    { id: 6, name: 'Sony WH-1000XM5', category: 'Headphones', price: 4999000, discount: 500000, image: SonyHeadphonesImage },
    { id: 7, name: 'Bose SoundLink Revolve', category: 'Speaker', price: 1999000, discount: 300000, image: BoseSpeakerImage },
    { id: 8, name: 'Apple Watch Series 8', category: 'Wearable', price: 7999000, discount: 700000, image: AppleWatchImage },
    { id: 9, name: 'Canon EOS R5', category: 'Camera', price: 79999000, discount: 5000000, image: CanonCameraImage },
    { id: 10, name: 'Dyson V11 Vacuum Cleaner', category: 'Home Appliance', price: 14999000, discount: 2000000, image: DysonVacuumImage },
    { id: 11, name: 'Grocery Pack', category: 'Groceries', price: 499000, discount: 50000, image: GroceryPackImage },
    { id: 12, name: 'Nike Air Max 2023', category: 'Shoes', price: 2999000, discount: 500000, image: NikeAirMaxImage },
  ];

  const suggestedItems = [
    { id: 'shirt', name: 'Shirt', image: ShirtImage, price: 50000 },
    { id: 'pant', name: 'Pant', image: PantImage, price: 75000 },
    { id: 'airpods', name: 'Airpods', image: AirpodsImage, price: 15000000 },
    { id: 'food', name: 'Food Item', image: FoodImage, price: 3000000 },
  ];

  const randomProducts = products.sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 3) + 1);
  const randomSuggestedItems = suggestedItems.sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 2) + 1);

  // Initialize order summary with the random products on first render
  useEffect(() => {
    setOrderSummary(randomProducts);
  }, []); // Only run on mount

  const handleSelectMethod = (id) => {
    setSelectedMethod(id);
  };

  const handleCheckout = () => {
    setIsModalVisible(true);
  };

  const handleAcceptOffer = (item) => {
    setTotalPrice(totalPrice + item.price); // Add the suggested item price to the total price
    setOrderSummary([...orderSummary, item]); // Add item to order summary
    setIsModalVisible(false);
    setCheckoutActive(true); // Set the checkout active to reflect the changes
  };

  const handleRejectOffer = () => {
    setIsModalVisible(false);
    setCheckoutActive(true);
  };

  const handlePayNow = () => {
    // Implement payment logic here
    alert("Payment Successful!");
  };

  return (
    <div className="billing-container">
      <div className="billing-left">
        <div className="billing-form">
          <div className="customer-info">
            <h2 className="section-title">Payment Method</h2>
            <h3 className="subtitle">Customer Info</h3>
            <div className="customer-details">
              <div className="info-group">
                <div className="icon-holder">
                  <span role="img" aria-label="user">👤</span>
                </div>
                <div className="info-content">
                  <label>Holder</label>
                  <p>Synthia Lubis</p>
                </div>
              </div>
              <div className="info-group">
                <div className="icon-holder">
                  <span role="img" aria-label="email">📧</span>
                </div>
                <div className="info-content">
                  <label>Email</label>
                  <p>synthia@synthwork.com</p>
                </div>
              </div>
              <div className="info-group">
                <div className="icon-holder">
                  <span role="img" aria-label="phone">📞</span>
                </div>
                <div className="info-content">
                  <label>Phone number</label>
                  <p>+62 098 987 87</p>
                </div>
              </div>
            </div>
          </div>

          <div className="payment-info">
            <h2 className="section-title">Payment</h2>
            <div className="total-payment">
              <p>Your total payment</p>
              <h1 className="amount">INR {(totalPrice / 1000).toFixed(3)}</h1>
              <p className="payment-date">Pay before March 13, at 10:25 PM</p>
            </div>

            <div className="payment-methods-container">
              <h2 className="section-title">Select Method of Payment</h2>
              <div className="payment-methods">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className={`payment-method ${selectedMethod === method.id ? 'selected' : ''}`}
                    onClick={() => handleSelectMethod(method.id)}
                  >
                    <img src={method.image} alt={method.name} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <button className="checkout-btn" onClick={handleCheckout}>
          Checkout
        </button>
      </div>

      <div className={`billing-right ${checkoutActive ? 'active' : ''}`}>
        <div className="order-summary">
          <h2>Order Summary</h2>
          {orderSummary.map((product) => (
            <div className="product-details" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div>
                <h3>{product.name}</h3>
                <p>Category: {product.category}</p>
                <p>INR {(product.price / 1000).toFixed(3)}</p>
              </div>
            </div>
          ))}
          <div className="payment-summary">
            <h3>Payment Summary</h3>
            <p>Total Price: INR {(totalPrice / 1000).toFixed(3)}</p>
            <p>Total Discount: INR {(orderSummary.reduce((acc, product) => acc + product.discount, 0) / 1000).toFixed(3)}</p>
            <p>Total: INR {(totalPrice / 1000).toFixed(3)}</p>
          </div>
          <button className="pay-now-btn" onClick={handlePayNow}>
            Pay Now
          </button>
        </div>
      </div>

      {isModalVisible && (
        <div className="modal-overlay">
          <div className="modal">
            <h2 className="modal-title">You can't miss this!!</h2>
            <p>Add the below item to your cart for additional benefits</p>
            <p>Or shop for Rp 2,000 more to receive a special offer!</p>
            <div className="suggested-items">
              {randomSuggestedItems.map((item) => (
                <div className="suggested-item" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div className="item-info">
                    <h4>{item.name}</h4>
                    <p>Rp {(item.price / 1000).toFixed(3)}</p>
                    <button className="modal-btn accept-btn" onClick={() => handleAcceptOffer(item)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="modal-actions">
              <button className="modal-btn reject-btn" onClick={handleRejectOffer}>
                Continue without Offer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Billing;
