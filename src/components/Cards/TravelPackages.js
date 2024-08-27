import React from 'react';
import './TravelPackages.css';

const TravelPackages = () => {
    const packages = [
        {
            title: "Paris",
            price: "$999",
            nights: "7 nights",
            hotel: "4-star hotel, B&B",
            para:"Lakeside Haven Inn Overlooking a serene lake, Lakeside Haven Inn offers a peaceful retreat with a touch of elegance. Guests can enjoy fishing, boating, or simply relaxing by the water. The inn's charming rooms and warm hospitality make it an ideal getaway for those seeking a quiet escape.",
            imageUrl: "https://images.pexels.com/photos/2387931/pexels-photo-2387931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            title: "Switzerland",
            price: "$1799",
            nights: "10 nights",
            hotel: "5-star hotel, all inclusive",
            para:"Historic Charm Hotel Step back in time at Historic Charm Hotel, where history meets comfort. Located in a beautifully restored building, this hotel preserves its original architecture while offering modern amenities. Guests can explore nearby historical sites and museums, making it perfect for history enthusiasts.",
            imageUrl: "https://images.pexels.com/photos/16104977/pexels-photo-16104977/free-photo-of-facade-of-hotel-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            title: "Thailand",
            price: "$1699",
            nights: "7 nights",
            hotel: "4-star hotel, B&B",
            para:"Desert Oasis Resort Experience luxury in the heart of the desert at Desert Oasis Resort. With its unique blend of modern architecture and natural beauty, this resort offers an oasis of relaxation. Enjoy our infinity pool, spa services, and stunning desert sunsets that will leave you in awe.",
            imageUrl: "https://images.pexels.com/photos/1813467/pexels-photo-1813467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            title: "New York",
            price: "$999",
            nights: "3 nights",
            hotel: "4-star hotel, all inclusive",
            para:"Forest View Lodge Surrounded by lush forests, Forest View Lodge is a sanctuary for nature lovers. The lodge offers comfortable accommodations with breathtaking views of the forest. Guests can take part in guided nature walks, birdwatching, or simply unwind in the serene surroundings.",
            imageUrl: "https://images.pexels.com/photos/2957461/pexels-photo-2957461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            title: "New York",
            price: "$999",
            nights: "3 nights",
            hotel: "4-star hotel, all inclusive",
            para:"City Lights Hotel Situated in the bustling downtown area, City Lights Hotel is perfect for urban explorers. With its contemporary design and proximity to major attractions, shopping, and nightlife, this hotel caters to those looking to immerse themselves in the city's vibrant energy. Enjoy chic accommodations and exceptional service at City Lights Hotel.",
            imageUrl: "https://images.pexels.com/photos/1771832/pexels-photo-1771832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            title: "New York",
            price: "$999",
            nights: "3 nights",
            hotel: "4-star hotel, all inclusive",
            para:"Mountain Retreat Lodge Escape to the peaceful embrace of nature at Mountain Retreat Lodge. Surrounded by towering pine trees and scenic mountain trails, this lodge provides a cozy, rustic experience. Guests can enjoy outdoor activities like hiking and skiing, or simply relax by the fireplace with a hot cup of cocoa.",
            imageUrl: "https://images.pexels.com/photos/1441058/pexels-photo-1441058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            title: "New York",
            price: "$999",
            nights: "3 nights",
            hotel: "4-star hotel, all inclusive",
            para:"Seaside Serenity Resort Nestled along the pristine beaches, Seaside Serenity Resort is your gateway to a tranquil and rejuvenating vacation. With beachfront villas, a world-class spa, and water sports activities, this resort offers the perfect blend of relaxation and adventure. Wake up to the sound of waves and unwind in paradise.",
            imageUrl: "https://images.pexels.com/photos/2090651/pexels-photo-2090651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            title: "New York",
            price: "$999",
            nights: "3 nights",
            hotel: "4-star hotel, all inclusive",
            para:" Hotel Grandview Located in the heart of the city, Hotel Grandview offers luxury and convenience with its modern design and top-tier amenities. Guests can enjoy panoramic views of the skyline from their rooms, relax in our rooftop pool, or indulge in gourmet dining at our on-site restaurant. Whether you're here for business or leisure, Hotel Grandview promises an unforgettable stay.",
            imageUrl: "https://images.pexels.com/photos/1694351/pexels-photo-1694351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
    ];

    return (
        <div id="travel-packages-container">
            {packages.map((pkg, index) => (
                <div className="package-card" key={index}>
                    <img src={pkg.imageUrl} alt={pkg.title} className="package-image" />
                    <div className="package-details">
                        <h2 className="package-price">{pkg.price}</h2>
                        <h3 className="package-title">{pkg.title}</h3>
                        <p className="package-info">{pkg.nights}, {pkg.hotel}</p>
                        <p className="package-description">{pkg.para}</p>
                        <button className="package-button">More Details</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TravelPackages;
