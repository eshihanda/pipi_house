import React from "react";
import '../Styles/ProductExplorer.css';
import { Link } from "react-router-dom";
import tropicalFruits from '../assets/tropical-fruits.png';
import legumes from '../assets/legumes.png';
import vegetables from '../assets/cashewnuts.jpeg';


const ProductExplorer = () => {
	return (
		<div className="product-explorer">
			<h2 className="fade-in-up">Explore Our Products</h2>
			<p className="fade-in-up delay-1">Explore our diverse range of products tailored for your needs.</p>
			<div className="product-categories">
				<Link to="products/fruits" className="category-card slide-in-up delay-2">
					<div className="category-image" style={{backgroundImage: `url(${tropicalFruits})`}}>
						<div className="category-overlay">
							<div className="category-content">
								<h3>Fresh Tropical Fruits</h3>
								<p>Naturally sweet, farm-fresh, export-ready.</p>
							</div>
						</div>
					</div>
				</Link>
				<Link to="products/legumes" className="category-card slide-in-up delay-3">
					<div className="category-image" style={{backgroundImage: `url(${legumes})`}}>
						<div className="category-overlay">
							<div className="category-content">
								<h3>Organic Legumes</h3>
								<p>High in protein, perfect for healthy meals.</p>
							</div>
						</div>
					</div>
				</Link>
				<Link to="products/Cereals" className="category-card slide-in-up delay-4">
					<div className="category-image" style={{backgroundImage: `url(${vegetables})`}}>
						<div className="category-overlay">
							<div className="category-content">
								<h3>Premium Cereals</h3>
								<p>Locally sourced, organic, and nutrient-rich.</p>
							</div>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default ProductExplorer;
