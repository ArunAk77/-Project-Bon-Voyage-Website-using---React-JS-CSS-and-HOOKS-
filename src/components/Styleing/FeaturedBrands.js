import React from 'react';
import './FeaturedBrands.css';
import { motion } from 'framer-motion';
import { FaPlaneDeparture, FaCloud } from 'react-icons/fa';

const FeaturedBrands = () => {
    return (
        <div className="featured-brands">
            <span className="text-muted">As featured in</span>
            <span className="divider"></span>
            <motion.div whileHover={{ scale: 1.1 }} className="brand">
                <span>travel</span><span className="sub-text">blog</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="brand">
                <FaPlaneDeparture className="icon" /><span className="brand-name">PLANETOUR</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="brand">
                <span className="brand-name">WORLD TRAVEL</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="brand">
                <FaCloud className="icon" /><span className="brand-name">skycloud</span>
            </motion.div>
        </div>
    );
}

export default FeaturedBrands;
