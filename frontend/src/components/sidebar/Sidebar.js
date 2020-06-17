import React from 'react';
import { Link } from "react-router-dom";
import "./styled.css";

const Sidebar = props => {
    return (
        <div className="wrapper">
        	<div className="top_navbar">
        		<div className="logo">
        			<Link to="#">Melcin</Link>
        		</div>
        		<div className="top_menu">
        			<div className="home_link">
        				<Link to="#">
        					<span className="icon"><i className="fas fa-home"></i></span>
        					<span>Home</span>
        				</Link>
        			</div>
        			<div className="right_info">
        				<div className="icon_wrap">
        					<div className="icon">
        						<i className="fas fa-bell"></i>
        					</div>
        				</div>
        				<div className="icon_wrap">
        					<div className="icon">
        						<i className="fas fa-cog"></i>
        					</div>
        				</div>
        			</div>
        		</div>
        	</div>

        	<div className="main_body">

        		<div className="sidebar_menu">
        	        <div className="inner__sidebar_menu">

        	        	<ul>
        		          <li>
        		            <Link to="#">
        		              <span className="icon">
        		              	<i className="fas fa-border-all"></i></span>
        		              <span className="list">Dashboard</span>
        		            </Link>
        		          </li>
        		          <li>
        		            <Link to="/create-tax">
        		              <span className="icon"><i className="fas fa-chart-pie"></i></span>
        		              <span className="list">Create-Tax</span>
        		            </Link>
        		          </li>
        		          <li>
        		            <Link to="/taxes">
        		              <span className="icon"><i className="fas fa-map-marked-alt"></i></span>
        		              <span className="list">Taxes</span>
        		            </Link>
        		          </li>
        		        </ul>

        		        <div className="hamburger">
        			        <div className="inner_hamburger">
        			            <span className="arrow">
        			                <i className="fas fa-long-arrow-alt-left"></i>
        			                <i className="fas fa-long-arrow-alt-right"></i>
        			            </span>
        			        </div>
        			    </div>

        	        </div>
        	    </div>

        	    <div className="container">
        	    	<div className="item_wrap">
        	    		<div className="item">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum omnis nihil aut aperiam adipisci suscipit ullam sunt saepe cupiditate quam distinctio officiis tempore laudantium, animi amet corrupti ratione est commodi! Sunt tempora quod magnam optio, reiciendis veritatis, necessitatibus eos molestias facilis reprehenderit maiores ipsum quaerat placeat laborum, a aspernatur corporis.</div>
        	    		<div className="item">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum omnis nihil aut aperiam adipisci suscipit ullam sunt saepe cupiditate quam distinctio officiis tempore laudantium, animi amet corrupti ratione est commodi! Sunt tempora quod magnam optio, reiciendis veritatis, necessitatibus eos molestias facilis reprehenderit maiores ipsum quaerat placeat laborum, a aspernatur corporis.</div>
        	    	</div>
        	    	<div className="item_wrap">
        	    		<div className="item">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum omnis nihil aut aperiam adipisci suscipit ullam sunt saepe cupiditate quam distinctio officiis tempore laudantium, animi amet corrupti ratione est commodi! Sunt tempora quod magnam optio, reiciendis veritatis, necessitatibus eos molestias facilis reprehenderit maiores ipsum quaerat placeat laborum, a aspernatur corporis.</div>
        	    		<div className="item">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum omnis nihil aut aperiam adipisci suscipit ullam sunt saepe cupiditate quam distinctio officiis tempore laudantium, animi amet corrupti ratione est commodi! Sunt tempora quod magnam optio, reiciendis veritatis, necessitatibus eos molestias facilis reprehenderit maiores ipsum quaerat placeat laborum, a aspernatur corporis.</div>
        	    	</div>
        	    	<div className="item_wrap">
        	    		<div className="item">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum omnis nihil aut aperiam adipisci suscipit ullam sunt saepe cupiditate quam distinctio officiis tempore laudantium, animi amet corrupti ratione est commodi! Sunt tempora quod magnam optio, reiciendis veritatis, necessitatibus eos molestias facilis reprehenderit maiores ipsum quaerat placeat laborum, a aspernatur corporis.</div>
        	    		<div className="item">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum omnis nihil aut aperiam adipisci suscipit ullam sunt saepe cupiditate quam distinctio officiis tempore laudantium, animi amet corrupti ratione est commodi! Sunt tempora quod magnam optio, reiciendis veritatis, necessitatibus eos molestias facilis reprehenderit maiores ipsum quaerat placeat laborum, a aspernatur corporis.</div>
        	    	</div>
        	    	<div className="item_wrap">
        	    		<div className="item">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum omnis nihil aut aperiam adipisci suscipit ullam sunt saepe cupiditate quam distinctio officiis tempore laudantium, animi amet corrupti ratione est commodi! Sunt tempora quod magnam optio, reiciendis veritatis, necessitatibus eos molestias facilis reprehenderit maiores ipsum quaerat placeat laborum, a aspernatur corporis.</div>
        	    		<div className="item">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum omnis nihil aut aperiam adipisci suscipit ullam sunt saepe cupiditate quam distinctio officiis tempore laudantium, animi amet corrupti ratione est commodi! Sunt tempora quod magnam optio, reiciendis veritatis, necessitatibus eos molestias facilis reprehenderit maiores ipsum quaerat placeat laborum, a aspernatur corporis.</div>
        	    	</div>
        	    </div>
        	</div>
        </div>
    );
}
export default Sidebar;
