import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'About'} text2={'Us'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-10'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Forever is a modern and stylish eCommerce platform that offers a seamless shopping experience. With a wide range of high-quality products, secure payment options, and fast delivery, Forever is dedicated to providing customers with a hassle-free online shopping experience. 
        </p>
        <p>Whether you're looking for fashion, electronics, or home essentials, Forever has something for everyone. Shop with confidence and make every purchase a lasting experience—only at Forever! </p>
        <b className='text-gray-800'>Our Mission</b>
        <p>"At Forever, our mission is to create an exceptional online shopping experience by offering high-quality products, seamless service, and customer-centric solutions. We strive to build a platform that combines convenience, affordability, and trust, ensuring that every purchase adds value to our customers' lives. Our commitment is to innovation, sustainability, and excellence, making Forever the go-to destination for all shopping needs."</p>
        </div>
        
      </div>
      <div className='text-2xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'}/>
        </div>
        <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className='text-gray-600'>At Forever, we are committed to delivering the highest quality products and services to our customers. Our Quality Assurance process ensures that every item meets strict standards of durability, functionality, and customer satisfaction.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className='text-gray-600'>At Forever, we prioritize a seamless and hassle-free shopping experience for our customers. Our platform is designed to offer maximum convenience, ensuring that you can shop anytime, anywhere with ease.

<br />✅ User-Friendly Interface 
 
<br />✅ Easy Returns & Refunds  
<br />✅ 24/7 Customer Support  
<br />✅ Express Delivery  </p>

          </div>
          <div className='border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className='text-gray-600'>At Forever, customer satisfaction is at the heart of everything we do. We are committed to providing exceptional customer service to ensure a smooth and enjoyable shopping experience. Our dedicated support team is always ready to assist with inquiries, concerns, and after-sales support.

<br />🌟 24/7 Customer Support 
<br />🌟 Quick Response Time  
  
<br />🌟 Easy Returns & Refunds  
<br />🌟 Customer Feedback Integration </p>
          </div>
        </div>
        <NewsLetterBox/>
    </div>
  )
}

export default About